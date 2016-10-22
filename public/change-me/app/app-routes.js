(function () {
  'use strict';

  angular
    .module('changeMe')
    .config(config);

  function config($urlRouterProvider, $stateProvider, NgAdminConfigurationProvider) {
    var nga = NgAdminConfigurationProvider;

    var admin = nga
        .application('Home')
        .baseApiUrl('http://localhost:3000/');

    var user = nga.entity('users');
    var shelter = nga.entity('shelters');

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

    // Shelter

    shelter.listView()
      .fields([
        nga.field('name'),
        nga.field('address'),
        nga.field('city'),
        nga.field('state'),
        nga.field('zip'),
        nga.field('phone'),
        nga.field('capacity')
      ]);

    shelter.creationView()
      .fields([
        nga.field('name'),
        nga.field('address'),
        nga.field('city'),
        nga.field('state'),
        nga.field('zip'),
        nga.field('phone'),
        nga.field('capacity')
      ]);

    admin.addEntity(shelter);

    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider
      .state('app', {
        controller: 'AppCtrl',
        controllerAs: 'app'
      });

    nga.configure(admin);
  }
}());
