var controllerModule = angular.module('AppControllers');

controllerModule
    .controller('cursoController', ['$scope', 'cursoService',
        '$stateParams', 'toastr', '$rootScope', '$confirm','profesorService',
        function ($scope, cursoService, $stateParams, toastr, $rootScope, $confirm,profesorService) {
//Controlador de la vista curso cuado la url es #/app/curso
            $rootScope.cursos = [];
            //Obtiene todos los cursos
            $rootScope.getAll = function () {
                cursoService.getAll().then(function (response) {
                    $rootScope.cursos = response.data;
                });

            };

            $rootScope.getAll();//LLamada

            //Funcionalidad adicional limpia el historial de navegabilidad
            $rootScope.barra = function () {
                $rootScope.titulo = "NO";
            };

            //Elimina un curso
            $rootScope.remove = function (id) {
                $confirm({text: '¿Seguro que desea eliminar?'}).then(function () {
                    cursoService.delete(id).then(function (respuesta) {
                        _.remove($rootScope.cursos, function (e) {
                            return e.id == id;
                        });
                        toastr.warning('Exito', 'Curso eliminado');
                        $scope.getAll();
                    });
                });
            };

            $scope.profesores = [];

            //Obtiene Todos los profesores
            $rootScope.getAllProfesores = function () {
                profesorService.getAll().then(function (response) {
                    //console.log(response.data);
                    $scope.profesores = response.data;
                });
            };

        }])
    .controller('cursoEditarController', ['$scope', 'cursoService',
        '$stateParams', '$location', 'toastr', '$rootScope',
        function ($scope, cursoService, $stateParams, $location, toastr, $rootScope) {
            //
            $scope.accion = "Actualizar";
            $rootScope.titulo = "Editar";
            $rootScope.getAllProfesores();

            $scope.getCurso = function (cursoId) {
                cursoService.getById(cursoId).then(function successCallBack(response) {
                    $scope.curso = response.data;
                    //console.log(response.data);

                }, function errorCallBack(response) {
                    console.log(response);
                    //$location.path('/app/tipo-riesgo');
                });
            };
            $scope.getCurso(parseInt($stateParams.cursoId));
            $scope.guardar = function () {
                cursoService.update($scope.curso.id, $scope.curso).then(function (response) {

                    $rootScope.getAll();
                    toastr.success('Exito', 'Curso Actualizado');
                    $location.path('/app/curso');


                });
            }

        }])
    .controller('cursoCrearController', ['$scope', 'cursoService', '$stateParams', '$location', 'toastr', '$rootScope','profesorService',
        function ($scope, cursoService, $stateParams, $location, toastr, $rootScope,profesorService) {
            $scope.accion = "Guardar";
            $rootScope.titulo = "Crear";

            $rootScope.getAllProfesores();


            $scope.guardar = function () {

                cursoService.create($scope.curso).then(function (response) {
                    $rootScope.getAll();
                    $scope.curso = {};
                    toastr.success('Exito', 'Curso creado');

                });
            };

        }]);
