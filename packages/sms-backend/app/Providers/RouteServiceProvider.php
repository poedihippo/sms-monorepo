<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * The path to the "home" route for your application.
     *
     * This is used by Laravel authentication to redirect users after login.
     *
     * @var string
     */
    public const HOME = '/home';

    /**
     * The controller namespace for the application.
     *
     * When present, controller route declarations will automatically be prefixed with this namespace.
     *
     * @var string|null
     */
    protected $namespace = 'App\\Http\\Controllers';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
        $this->configureRateLimiting();

        $this->routes(function () {

            $routeMap = [
                'v1' => base_path('routes/api_v1.php'),
                'v2' => base_path('routes/api_v2.php'),
            ];

//            Route::prefix('api')
//                ->middleware(['api', sprintf('api_version:%s', config('core.api_latest'))])
//                ->group($routeMap[config('core.api_latest')]);

            Route::prefix('api/v1')
                ->middleware(['api', 'api_version:v1'])
                ->group($routeMap['v1']);

//            Route::prefix('api/v2')
//                ->middleware(['api', 'api_version:v2'])
//                ->group($routeMap['v2']);

            Route::middleware('web')
                ->namespace($this->namespace)
                ->group(base_path('routes/web.php'));
        });
    }

    /**
     * Configure the rate limiters for the application.
     *
     * @return void
     */
    protected function configureRateLimiting()
    {
        RateLimiter::for('api', function (Request $request) {
            //$limit = App::environment('production') ? 60 : 120;
            $limit = 200;
            return Limit::perMinute($limit)->by(optional($request->user())->id ?: $request->ip());
        });
    }

    /**
     * Define the "api" routes for the application.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapApiRoutes()
    {

    }
}
