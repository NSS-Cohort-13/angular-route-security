angular.module('app', ['ngRoute'])
  .config(($routeProvider) => {
    $routeProvider
      .when('/', {
        template: `<h1>Public Page</h1>
          <a href="#/private1">Go To Private 1</a>
          <a href="#/private2">Go To Private 2</a>
          <a href="#/private3">Go To Private 3</a>
        `,
      })
      .when('/private1', {
        template: '<h1>Private Page 1</h1><a href="#/">Go To Public</a>',
        resolve: [
          (authFactory, $location) => authFactory.isLoggedIn || $location.path('/'),
        ],
      })
      .when('/private2', {
        template: '<h1>Private Page 2</h1><a href="#/">Go To Public</a>',
        resolve: [
          (authFactory, $location) => authFactory.isLoggedIn || $location.path('/'),
        ],
      })
      .when('/private3', {
        template: '<h1>Private Page 3</h1><a href="#/">Go To Public</a>',
        resolve: [
          (authFactory, $location) => authFactory.isLoggedIn || $location.path('/'),
        ],
      })
  })
  .factory('authFactory', () => ({
    isLoggedIn: false,
  }))
