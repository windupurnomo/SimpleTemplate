var app = angular.module('app', ['ui.router', 'angular-loading-bar']);

app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'tpl/home.html',
        controller: function($scope, $http) {
            $scope.customers = [];
            $http.get('http://localhost:8080/customer')
                .then(function(res) {
                	$scope.customers = res.data;
                });
        },
    })

    .state('form', {
        url: '/form',
        templateUrl: 'tpl/form.html',
        controller: function($scope) {}
    })

    ;

    $urlRouterProvider.otherwise('/');
});
