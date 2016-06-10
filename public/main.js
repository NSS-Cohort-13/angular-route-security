angular.module('app', ['ngRoute'])
  .config(($routeProvider) => {
    $routeProvider
      .when('/', {
        template: '<h1>Public Page</h1><a href="#/private">Go To Private</a>',
      })
      .when('/private', {
        template: '<h1>Private Page</h1><a href="#/">Go To Public</a>',
        resolve: [
          (authFactory, $location) => authFactory.isLoggedIn || $location.path('/'),
        ],
      })
  })
  .factory('authFactory', () => ({
    isLoggedIn: false,
  }))
