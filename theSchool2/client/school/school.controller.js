School.controller("school", function($scope, schoolServise) {

    $scope.$on('$routeChangeSuccess', function() {
        schoolServise.getData("student", "student", onSuccess, onError);
    });

    function onSuccess(res) {
        // $scope.keys = Object.keys(res.data[0]);
        $scope.data = res.data;
        console.log(res.data);
    }

    function onError(res) {
        console.log('error');
        console.log(res);
    }


    $scope.showStudent = function(studentid) {
        let data = {
            action: "getCoursesForStudent",
            tableName: "course",
            studentid: studentid
        }
        schoolServise.getData(data, "course", onSuccessCourses, onError);
    }

    function onSuccessCourses(res) {
        $scope.corses = res.data;
        console.log(res.data);

    }


});