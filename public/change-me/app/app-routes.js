(function () {
  'use strict';

  angular
    .module('changeMe')
    .config(config);

  function config($urlRouterProvider, $stateProvider, NgAdminConfigurationProvider) {
    var nga = NgAdminConfigurationProvider;

    var admin = nga
        .application('Admin')
        .baseApiUrl('http://localhost:3000/');

    var user = nga.entity('users');

    // User

    user.listView()
      .fields([
        nga.field('username'),
        nga.field('email'),
        nga.field('first_name'),
        nga.field('last_name'),
	nga.field('description')
      ]);

    user.creationView()
      .fields([
        nga.field('username'),
        nga.field('email'),
        nga.field('first_name'),
        nga.field('last_name'),
	nga.field('description')
      ]);

    admin.addEntity(user);

    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider
      .state('app', {
        controller: 'AppCtrl',
        controllerAs: 'app'
      });

    nga.configure(admin);
  }
}());
