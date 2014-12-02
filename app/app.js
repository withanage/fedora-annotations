'use strict';

// Declare app level module which depends on views, and components
angular.module('fedoraAnnotations', [
  'ngRoute',
  'fedoraAnnotations.view1',
  'fedoraAnnotations.view2',
  'fedoraAnnotations.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
