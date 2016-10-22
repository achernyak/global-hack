(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name map.controller:MapCtrl
   *
   * @description
   *
   */
  angular
    .module('map')
    .controller('MapCtrl', MapCtrl);

  function MapCtrl($http, $log) {
    var vm = this;

    vm.center = {
      lat: 38.749054,
      lng: -90.212801,
      zoom: 12
    };

    vm.markers = {};

    $http.get('http://localhost:3000/shelters')
      .then(fillMarkers);
    vm.ctrlName = 'MapCtrl';

    function fillMarkers(results) {
      var data = results.data;
      var markers = R.map(function (shelter) {
	var cords = R.pick(['lat', 'lng'], shelter);
	var data = {
	  label: {
	    message: shelter.name
	  },
	  focus: true
	};

	return R.merge(cords, data);
      }, data);

      $log.info(data[0]);

      vm.markers = markers;
      $log.info(markers);
    }
  }
}());
