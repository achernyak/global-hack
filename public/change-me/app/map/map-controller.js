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
      lat: 38.6333972,
      lng: -90.195599,
      zoom: 14
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
	  message: "<div><strong>" + shelter.name + "</strong></div>" +
	    "<div>" + shelter.phone + "</div>"
	};

	return R.merge(cords, data);
      }, data);

      $log.info(data[35]);

      vm.markers = markers;
      $log.info(markers);
    }
  }
}());
