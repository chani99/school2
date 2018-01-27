School.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home/home.html'
        })
        .when('/school', {
            templateUrl: 'products/products.view.html'
        })
        .when('/shippers', {
            templateUrl: 'administration/shippers.view.html'
        })
        .otherwise({ redirectTo: 'home' });
});