var School = angular.module('nodejsApp', ['ngRoute']);





School.controller("mainScreen", function($scope, $window, schoolServise) {
    $scope.user = {
        name: "",
        password: ""
    }
    $scope.mainbar = true;


    $scope.login = function(user) {
        schoolServise.sendlogin(user, onSucsses, onError);
    }

    function onError(err) {
        console.log(err);

    }

    function onSucsses(res) {
        console.log(res);
        $scope.mainbar = false;
        $scope.loginform = true;
        $window.location.href = "#!/school";

    }

});