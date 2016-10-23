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
	    "<div>" + shelter.phone + "</div>" +
	    "<div>Availability: " + shelter.checkins + "/" + shelter.capacity + "</div>" +
	    "<div>" + stars() + "</div>",
	  icon: { iconUrl: "http://localhost:3000/" + shelter.map_icon + ".png", iconSize: [25, 25] }
	};

	return R.merge(cords, data);
      }, data);

      function stars() {
	return R.join('',
		      R.repeat(
			"<i class='fa fa-star'></i>",
			Math.floor(Math.random() * (5 - 1) + 1)));
      }

      $log.info(data[35]);

      vm.markers = markers;
      $log.info(markers);
    }
  }
}());
