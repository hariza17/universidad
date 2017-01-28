var servicesModule = angular.module('AppServices');
servicesModule.factory('cursoService', ['$http', function ($http) {
    return {
        apiUrl: apiUrl,
        getAll: function () {
            return $http.get(this.apiUrl + 'curso/');
        },
        getById: function (cursoId) {
            return $http.get(this.apiUrl + 'curso/' + cursoId);
        },
        create: function (curso) {
            return $http.post(this.apiUrl + 'curso/', curso);
        },
        update: function (id, curso) {
            return $http.put(this.apiUrl + 'curso/' + id, curso);
        },
        delete: function (cursoId) {
            return $http.delete(this.apiUrl + 'curso/' + cursoId);
        }
    };
}]);
