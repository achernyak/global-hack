(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name checkIns.controller:CheckInsCtrl
   *
   * @description
   *
   */
  angular
    .module('checkIns')
    .controller('CheckInsCtrl', CheckInsCtrl);

  function CheckInsCtrl() {
    var vm = this;
    vm.ctrlName = 'CheckInsCtrl';
  }
}());
