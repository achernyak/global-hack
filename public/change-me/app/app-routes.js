(function () {
  'use strict';

  angular
    .module('changeMe')
    .config(config);

  function config($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('app', {
	controller: 'AppCtrl',
	controllerAs: 'app'
      });
  }
}());
