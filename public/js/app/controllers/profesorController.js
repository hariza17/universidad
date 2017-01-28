var controllerModule = angular.module('AppControllers');

controllerModule
    .controller('profesorController', ['$scope', 'cursoService',
        '$stateParams', 'toastr', '$rootScope', '$confirm', 'profesorService',
        function ($scope, cursoService, $stateParams, toastr, $rootScope, $confirm, profesorService) {

            $rootScope.profesores = [];
            $rootScope.getAll = function () {
                profesorService.getAll().then(function (response) {
                    $rootScope.profesores = response.data;
                });

            };

            $rootScope.getAll();
            $rootScope.barra = function () {
                $rootScope.titulo = "NO";
            };

            $rootScope.remove = function (id) {
                $confirm({text: '¿Seguro que desea eliminar?'}).then(function () {
                    profesorService.delete(id).then(function (respuesta) {
                        _.remove($rootScope.profesores, function (e) {
                            return e.id == id;
                        });
                        toastr.warning('Exito', 'Profesor eliminado');
                        $scope.getAll();
                    });
                });
            };


            $rootScope.getProfesor = function (profesorId) {
                profesorService.getById(profesorId).then(function successCallBack(response) {
                    $scope.profesor = response.data;
                    //console.log(response.data);

                }, function errorCallBack(response) {
                    console.log(response);
                    //$location.path('/app/tipo-riesgo');
                });
            };
         
        }])
    .controller('profesorEditarController', ['$scope', 'profesorService',
        '$stateParams', '$location', 'toastr', '$rootScope',
        function ($scope, profesorService, $stateParams, $location, toastr, $rootScope) {
            $scope.accion = "Actualizar";
            $rootScope.titulo = "Editar";
            //$rootScope.getAllProfesores();
            $rootScope.getProfesor = function (profesorId) {
                profesorService.getById(profesorId).then(function successCallBack(response) {
                    $scope.profesor = response.data;
                    //console.log(response.data);

                }, function errorCallBack(response) {
                    console.log(response);
                    //$location.path('/app/tipo-riesgo');
                });
            };
            $rootScope.getProfesor(parseInt($stateParams.profesorId));
            $scope.guardar = function () {
                profesorService.update($scope.profesor.id, $scope.profesor).then(function (response) {

                    $rootScope.getAll();
                    toastr.success('Exito', 'Curso Actualizado');
                    //$location.path('/app/tipo-riesgo');


                });
            }

        }])
    .controller('profesorCrearController', ['$scope', 'cursoService', '$stateParams', '$location', 'toastr', '$rootScope', 'profesorService',
        function ($scope, cursoService, $stateParams, $location, toastr, $rootScope, profesorService) {
            $scope.accion = "Guardar";
            $rootScope.titulo = "Crear";
            //$rootScope.getAllProfesores();

            $scope.guardar = function () {

                profesorService.create($scope.profesor).then(function (response) {
                    $rootScope.getAll();
                    $scope.profesor = {};
                    toastr.success('Exito', 'Profesor creado');

                });
            };

        }])

    .controller('profesorDetalleController', ['$scope', 'profesorService',
        '$stateParams', '$state', 'toastr', '$rootScope',
        function ($scope, profesorService, $stateParams, $state, toastr, $rootScope) {
            $rootScope.titulo = "Detalle";

            $rootScope.getProfesor(parseInt($stateParams.profesorId));

            $rootScope.barra();
        }])
