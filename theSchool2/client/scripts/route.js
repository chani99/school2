School.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home/home.html'
        })
        .when('/school', {
            templateUrl: 'school/school.html'
        })
        .when('/shippers', {
            templateUrl: 'administration/shippers.view.html'
        })
        .otherwise({ redirectTo: 'home' });
});