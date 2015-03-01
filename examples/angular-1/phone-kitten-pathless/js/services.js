'use strict';

angular.module('phoneKittenPathless.services', ['ngResource']).
    factory('Phone', ['$resource', Phone]);

function Phone($resource) {
  return $resource('phones/:phoneId.json', {}, {
    query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
  });
}
