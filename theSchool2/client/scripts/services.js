School.service('schoolServise', function($http) {
    this.sendlogin = function(user, onSuccess, onError) {
        $http({
            url: 'http://localhost:8081/login',
            method: 'POST',
            params: {
                user: user
            }
        }).then(onSuccess, onError);

    }

    this.getData = function(params, path, onSuccess, onError) {
        $http({
            url: 'http://localhost:8081/' + path,
            method: 'GET',
            params: {
                params: params
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