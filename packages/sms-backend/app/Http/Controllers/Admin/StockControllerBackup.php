<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Traits\CsvImportTrait;
use App\Http\Requests\UpdateStockRequest;
use App\Models\Channel;
use App\Models\Stock;
use Exception;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\MessageBag;
use Symfony\Component\HttpFoundation\Response;
use Yajra\DataTables\Facades\DataTables;

class StockControllerBackup extends Controller
{
    use CsvImportTrait;

    public function index(Request $request)
    {
        abort_if(Gate::denies('stock_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $channels = Channel::tenanted()->get();

        return view('admin.stocks.index', compact('channels'));
    }

    public function getData()
    {
        $query = Stock::query()
            ->tenanted()
            ->with(['channel' => function ($query) {
                return $query->select(['id', 'name']);
            }, 'product' => function ($query) {
                return $query->select(['id', 'name']);
            }])
            ->select(sprintf('%s.*', (new Stock)->table));
        $table = Datatables::of($query);
        $table->addColumn('placeholder', '&nbsp;');
        $table->addColumn('actions', '&nbsp;');

        $table->editColumn('actions', function ($row) {
            $viewGate      = 'stock_show';
            $editGate      = 'stock_edit';
            $deleteGate    = 'stock_delete';
            $crudRoutePart = 'stocks';

            return view('partials.datatablesActions', compact(
                'viewGate',
                'editGate',
                'deleteGate',
                'crudRoutePart',
                'row'
            ));
        });
        $table->editColumn('id', function ($row) {
            return $row->id ? $row->id : "";
        });
        $table->addColumn('channel_name', function ($row) {
            return $row->channel ? $row->channel->name : '';
        });
        $table->addColumn('product_unit_name', function ($row) {
            return $row->product ? $row->product->name : '';
        });
        $table->editColumn('stock', function ($row) {
            return $row->stock;
        });
        $table->addColumn('outstanding_order', function ($row) {
            return \App\Services\StockService::outstandingOrder($row->company_id, $row->channel_id, $row->product_unit_id);
        });
        $table->addColumn('outstanding_shipment', function ($row) {
            return \App\Services\StockService::outstandingShipment($row->company_id, $row->channel_id, $row->product_unit_id);
        });
        $table->rawColumns(['actions', 'placeholder']);

        return $table->make(true);
    }

    public function edit(Stock $stock)
    {
        abort_if(Gate::denies('stock_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $stock->load('channel', 'product');

        return view('admin.stocks.edit', compact('stock'));
    }

    public function update(UpdateStockRequest $request, Stock $stock)
    {
        $increment = $request->get('increment');
        // $increment_indent = $request->get('increment_indent');
        $cut_indent = $request->cut_indent ?? false;
        try {
            // $stock->addIndent($increment_indent);
            $stock->addStockNew($increment, $cut_indent);
        } catch (Exception) {
            $errors = new MessageBag(
                [
                    'increment' => ['Insufficient stock!']
                ]
            );
            return redirect()->back()->withErrors($errors);
        }

        return redirect()->route('admin.stocks.index');
    }

    public function show(Stock $stock)
    {
        abort_if(Gate::denies('stock_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $stock->load('channel', 'product');
        $outstandingOrder = \App\Services\StockService::outstandingOrder($stock->company_id, $stock->channel_id, $stock->product_unit_id);
        $outstandingShipment = \App\Services\StockService::outstandingShipment($stock->company_id, $stock->channel_id, $stock->product_unit_id);

        return view('admin.stocks.show', compact('stock', 'outstandingOrder', 'outstandingShipment'));
    }

    public function refreshTotalStock()
    {
        DB::table('stocks')->lazyById()->each(function ($stock) {
            $totalStock = $stock->stock + $stock->indent;
            DB::table('stocks')->where('id', $stock->id)->update(['total_stock' => $totalStock]);
        });
        return redirect()->route('admin.stocks.index')->with('message', 'Total stock updated successfully');
    }
}
