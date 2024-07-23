@extends('layouts.admin')
@section('content')

<div class="card">
    <div class="card-header">
        {{ trans('global.show') }} {{ trans('cruds.banner.title') }}
    </div>

    <div class="card-body">
        <div class="form-group">
            <div class="form-group">
                <a class="btn btn-default" href="{{ route('admin.banners.index') }}">
                    {{ trans('global.back_to_list') }}
                </a>
            </div>
            <table class="table table-bordered table-striped">
                <tbody>
                    <tr>
                        <th>
                            {{ trans('cruds.banner.fields.id') }}
                        </th>
                        <td>
                            {{ $banner->id }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.banner.fields.bannerable_type') }}
                        </th>
                        <td>
                            {{ $banner->bannerable_type }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.banner.fields.bannerable') }}
                        </th>
                        <td>
                            {{ $banner->bannerable }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.banner.fields.is_active') }}
                        </th>
                        <td>
                            <input type="checkbox" disabled="disabled" {{ $banner->is_active ? 'checked' : '' }}>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.banner.fields.start_time') }}
                        </th>
                        <td>
                            {{ $banner->start_time }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.banner.fields.end_time') }}
                        </th>
                        <td>
                            {{ $banner->end_time }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.banner.fields.company') }}
                        </th>
                        <td>
                            {{ $banner->company->name ?? '' }}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="form-group">
                <a class="btn btn-default" href="{{ route('admin.banners.index') }}">
                    {{ trans('global.back_to_list') }}
                </a>
            </div>
        </div>
    </div>
</div>



@endsection