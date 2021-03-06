(function () {
  'use strict';

  angular
    .module('changeMe')
    .config(config);

  function config($urlRouterProvider, $stateProvider, NgAdminConfigurationProvider) {
    var nga = NgAdminConfigurationProvider;

    var admin = nga
        .application('@home')
        .baseApiUrl('http://localhost:3000/');

    var user = nga.entity('users');
    var shelter = nga.entity('shelters');

    var customHeader = "<img src='/images/home75.png'></img>";

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
        nga.field('name').isDetailLink(true),
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
        nga.field('capacity'),
        nga.field('checkins')
     ]);

    shelter.showView()
      .fields([
        nga.field('name'),
        nga.field('address'),
        nga.field('city'),
        nga.field('state'),
        nga.field('zip'),
        nga.field('phone'),
        nga.field('capacity'),
        nga.field('checkins'),
	nga.field('custom_action')
        .label('')
        .template('<check-ins shelter="entry"></check-ins>')
        ]);

    admin.addEntity(shelter);
    
    // General

    admin.header(customHeader);

    admin.menu(nga.menu()
               .addChild(nga.menu(user))
               .addChild(nga.menu(shelter))
               .addChild(nga.menu()
                         .title('Map')
                         .link('/map')
			 .icon('<span class="glyphicon glyphicon-map-marker"></span>')
                        )
              );

    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider
      .state('app', {
        controller: 'AppCtrl',
        controllerAs: 'app'
      });

    nga.configure(admin);
  }
}());
