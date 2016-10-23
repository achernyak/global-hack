(function () {
  'use strict';

  angular
    .module('checkIns')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('checkIns', {
	parent: 'main',
        url: '/check-ins',
        templateUrl: 'check-ins/check-ins.tpl.html',
        controller: 'CheckInsCtrl',
        controllerAs: 'checkIns'
      });
  }
}());
