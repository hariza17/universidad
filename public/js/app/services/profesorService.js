var servicesModule = angular.module('AppServices');
servicesModule.factory('profesorService', ['$http', function ($http) {
    return {
        apiUrl: apiUrl,
        getAll: function () {
            return $http.get(this.apiUrl + 'profesor/');
        },
        getById: function (profesorId) {
            return $http.get(this.apiUrl + 'profesor/' + profesorId);

        },
        create: function (profesor) {
            return $http.post(this.apiUrl + 'profesor/', profesor);
        },
        update: function (id, profesor) {
            return $http.put(this.apiUrl + 'profesor/' + id, profesor);
        },
        delete: function (profesorId) {
            return $http.delete(this.apiUrl + 'profesor/' + profesorId);
        }
    };
}]);
