var perdocoApp = angular.module('perdocoApp', ['ngRoute']);

perdocoApp.config(['$locationProvider', '$routeProvider',
  function config($locationProvider, $routeProvider) {
    $routeProvider.
    when('/page1', {
      template: '<h1>Page1</h1>'
    }).
    when('/page2', {
      template: '<h1>Page2</h1>'
    }).
    otherwise('/page1');
  }
]);

perdocoApp.controller('MainController', function MainController($scope) {
  $scope.menus = [{
    name: 'Page 1',
    url: '#/page1'
  }, {
    name: 'Page 2',
    url: '#/page2'
  }, {
    name: 'Page 3',
    url: '#/page3'
  }];
});