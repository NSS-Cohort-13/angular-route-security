angular.module('app', ['ngRoute'])
  .config(($routeProvider) => {
    $routeProvider
      .when('/', {
        controller: 'MainCtrl',
        controllerAs: 'main',
        template: '<h1>{{main.heading}}</h1>',
      })
  })
  .controller('MainCtrl', function () {
    const main = this

    main.heading = 'Hello World'
  })
