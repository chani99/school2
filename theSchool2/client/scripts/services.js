School.service('LoginService', function($http) {
this.sendlogin = function(user, onSuccess, onError){
            $http({
            url: 'http://localhost:8081/login',
            method: 'GET',
            params: {
                user: user
            }
        }).then(onSuccess, onError);

}


    // this.setNorthwind = function(data, onSuccess, onError) {
    //     $http({
    //         url: 'http://localhost:8081/'+data.tableName,
    //         method: 'POST',
    //         params: {
    //             tableName: data.tableName,
    //             data:data
    //         }
    //     }).then(onSuccess, onError);
    // }
});