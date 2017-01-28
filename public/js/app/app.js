/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//Modulo principal
var universidApp = angular.module("universidadApp", [
    'ui.router',
	'AppControllers',
	'AppServices',
    'toastr',
	'ui.bootstrap',
	'ui.bootstrap.modal',
	'angular-confirm'
]);

//

//Configuando Providers de Angular y estableciendo RUTAS
universidApp.config(['$stateProvider', '$urlRouterProvider', 'toastrConfig', '$locationProvider','$httpProvider',
	function ($stateProvider, $urlRouterProvider, toastrConfig, $locationProvider,$httpProvider) {

	angular.extend(toastrConfig, {
		autoDismiss: false,
		containerId: 'toast-container',
		maxOpened: 0,
		newestOnTop: true,
		positionClass: 'toast-top-right animation-fade',
		preventDuplicates: false,
		preventOpenDuplicates: false,
		target: 'body'
	});



		$urlRouterProvider.otherwise('/app');


	$stateProvider
		.state('main', {
			url: '/app',
			templateUrl: '/js/app/views/main.html',
			controller: 'mainController'
		})

		//Profesor
		.state('main.profesor', {
			url: '/profesor',
			templateUrl: '/js/app/views/profesor/base.html',
			controller: 'profesorController'
		})
		.state('main.profesor.editar', {
			url: '/editar/:profesorId',
			templateUrl: '/js/app/views/profesor/crear.html',
			controller: 'profesorEditarController'
		})
		.state('main.profesor.crear', {
			url: '/crear',
			templateUrl: '/js/app/views/profesor/crear.html',
			controller: 'profesorCrearController'
		})

		.state('main.profesor.detalle',{
			url: '/detalle/:profesorId',
			templateUrl: '/js/app/views/profesor/detalle.html',
			controller: 'profesorDetalleController'
		})


		//Profesor
		.state('main.curso', {
			url: '/curso',
			templateUrl: '/js/app/views/curso/base.html',
			controller: 'cursoController'
		})
		.state('main.curso.editar', {
			url: '/editar/:cursoId',
			templateUrl: '/js/app/views/curso/crear.html',
			controller: 'cursoEditarController'
		})
		.state('main.curso.crear', {
			url: '/crear',
			templateUrl: '/js/app/views/curso/crear.html',
			controller: 'cursoCrearController'
		})

}]);
//Congurando Dialogos de confirmacion
universidApp.run(['$confirmModalDefaults',
	function ($confirmModalDefaults) {
	$confirmModalDefaults.templateUrl = 'alertas.html';
	$confirmModalDefaults.defaultLabels.title = 'Mensaje del sistema';
	$confirmModalDefaults.defaultLabels.ok = 'Si';
	$confirmModalDefaults.defaultLabels.cancel = 'No';
}]);