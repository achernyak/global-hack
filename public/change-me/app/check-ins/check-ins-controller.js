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

  function CheckInsCtrl($stateParams, $log, $http) {
    var vm = this;
    var id = $stateParams.id;
    var shelter = null;

    $http.get('http://localhost:3000/shelters/' + id)
      .then(setShelter);

    vm.inc = function () {
      $http.patch('http://localhost:3000/shelters/' + id + '/checkin')
	.then(setShelter);
    };

    vm.dec = function () {
      $http.patch('http://localhost:3000/shelters/' + id + '/checkout')
	.then(setShelter);
    };

    vm.counts = function () {
      if (shelter === null) {
        return 'Loading';
      }

      return shelter.checkins + ' / ' + shelter.capacity;
    };

    vm.ctrlName = 'CheckInsCtrl';

    function setShelter(response) {
      shelter = response.data;
      $log.info(shelter);
    }
  }
}());
