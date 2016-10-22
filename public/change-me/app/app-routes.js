(function () {
  'use strict';

  angular
    .module('changeMe')
    .config(config);

  function config($urlRouterProvider, $stateProvider, NgAdminConfigurationProvider) {
    $stateProvider
      .state('app', {
        controller: 'AppCtrl',
        controllerAs: 'app'
      });

    var nga = NgAdminConfigurationProvider;

    var admin = nga
      .application('Admin')
      .baseApiUrl('http://localhost:3000/');

    var user = nga.entity('users');
    user.listView()
      .fields([
          nga.field('username')
        ]);

    user.creationView()
      .fields([
          nga.field('username')
        ]);

    admin.addEntity(user);

    nga.configure(admin);
  }
}());
