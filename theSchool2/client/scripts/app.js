var School = angular.module('nodejsApp', ['ngRoute']);





School.controller("mainScreen", function($scope, LoginService) {
    $scope.user = {
        name: "",
        password: ""
    }
    $scope.mainbar = true;


    $scope.login = function(user) {
        LoginService.sendlogin(user, onSucsses, onError);
    }

    function onError(err) {
        console.log(err);

    }

    function onSucsses(res) {
        console.log(res);
        $scope.mainbar = false;
        $scope.loginform = true;

    }

});