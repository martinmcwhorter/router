'use strict';

angular.module('phoneKittenPathless', [
  'ngNewRouter',
  'ngAnimate',

  'phoneKittenPathless.phoneDetail',
  'phoneKittenPathless.phoneList',

  'phoneKittenPathless.filters',
  'phoneKittenPathless.services'
]).
controller('AppController', ['$router', AppController]);

function AppController($router) {
  $router.config([
    { path: '/'               , redirectTo: '/phones'    },
    { path: '/phones'          , component: 'phoneList'   }
    //{ path: '/phones/:phoneId' , component: 'phoneDetail' }
  ]);
}
