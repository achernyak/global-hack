(function () {
  'use strict';

  angular
    .module('map')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('map', {
	parent: 'main',
        url: '/map',
        templateUrl: 'map/map.tpl.html',
        controller: 'MapCtrl',
        controllerAs: 'map'
      });
  }
}());
