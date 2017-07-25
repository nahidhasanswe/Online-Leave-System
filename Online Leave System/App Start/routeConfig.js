myAppModule.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.caseInsensitiveMatch = true;



    $routeProvider
    .when('/', {
        redirectTo: '/dashboard'
    })
    .when('/dashboard', {
        templateUrl: 'Views/dashboard.html',
        controller: 'dashController',
    })
    .when('/myLeaveDetails', {
        templateUrl: 'Views/Emloyee Leave Plan/myLeavePlan.html',
        controller: 'myLeaveController',
    })
    .when('/myYearlyLeavePlan', {
        templateUrl: 'Views/Emloyee Leave Plan/myYearlyLeavePlan.html',
        controller: 'myYearlyLeaveController',
    })
    .otherwise({
        redirectTo: '/'
    })

    $locationProvider.hashPrefix('');
}]);
