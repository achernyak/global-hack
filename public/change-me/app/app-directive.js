(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name changeMe.directive:app
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
   <example module="changeMe">
   <file name="index.html">
   <app></app>
   </file>
   </example>
   *
   */
  angular
    .module('changeMe')
    .directive('app', app);

  function app() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: '/app-directive.tpl.html',
      replace: false,
      transclude: true,
      controllerAs: 'app',
      controller: function () {
        var vm = this;
        vm.name = 'app';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
