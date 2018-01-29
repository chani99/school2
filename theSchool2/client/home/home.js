School.controller("login", function($scope, $window, schoolServise) {
    $scope.user = {
        name: "",
        password: ""
    }


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