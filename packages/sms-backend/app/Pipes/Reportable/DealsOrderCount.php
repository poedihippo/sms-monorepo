<?php

namespace App\Pipes\Reportable;

use App\Enums\OrderStatus;
use App\Enums\TargetType;
use App\Interfaces\Reportable;
use App\Models\Order;

/**
 *
 * Class DealsOrderCount
 * @package App\Pipes\Discountable
 */
class DealsOrderCount extends BaseReportablePipe
{
    final protected function getTargetType(): TargetType
    {
        return TargetType::DEALS_ORDER_COUNT();
    }

    final protected function getReportableClassName(): string
    {
        return Order::class;
    }

    protected function getReportableValue(Reportable $model = null): int
    {
        return 1;
    }

    protected function getReportableValueProperty(): ?string
    {
        return null;
    }

    protected function whereReportableBaseQuery($query)
    {
        // order that is deal
        return $query->where('deal_at', '>', $this->report->start_date)
            ->where('deal_at', '<', $this->report->end_date)
            ->whereNotIn('status', [OrderStatus::CANCELLED]);
    }

    protected function whereReportableChannel($query, int $id)
    {
        return $query->where('channel_id', $id);
    }

    protected function whereReportableUsers($query, array $ids)
    {
        return $query->whereIn('user_id', $ids);
    }
}