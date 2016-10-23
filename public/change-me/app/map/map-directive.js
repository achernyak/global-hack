(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name map.directive:map
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="map">
       <file name="index.html">
        <map></map>
       </file>
     </example>
   *
   */
  angular
    .module('map')
    .directive('map', map);

  function map() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'map/map-directive.tpl.html',
      replace: false,
      controllerAs: 'map',
      controller: function ($location) {
        var vm = this;
        vm.name = 'map';

	vm.send = function () {
	  $location.path('/map');
	};
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
