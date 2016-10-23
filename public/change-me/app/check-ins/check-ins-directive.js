(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name checkIns.directive:checkIns
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="checkIns">
       <file name="index.html">
        <check-ins></check-ins>
       </file>
     </example>
   *
   */
  angular
    .module('checkIns')
    .directive('checkIns', checkIns);

  function checkIns() {
    return {
      restrict: 'E',
      scope: { shelter: '&' },
      bindToController: true,
      templateUrl: 'check-ins/check-ins-directive.tpl.html',
      replace: false,
      controllerAs: 'checkIns',
      controller: function ($location) {
        var vm = this;
        vm.name = 'checkIns';
	console.log(vm);
	vm.send = function () {
	  $location.path('/check-ins/' + vm.shelter().values.id);
	};
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
