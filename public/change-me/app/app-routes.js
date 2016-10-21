(function () {
  'use strict';

  angular
    .module('changeMe')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}());
