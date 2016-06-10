angular.module('app', ['ngRoute'])
  .config(($routeProvider) => {
    $routeProvider
      .when('/', {
        template: `<h1>Public Page</h1>
          <a href="#/private">Go To Private</a>
        `,
      })
      .when('/private', {
        template: '<h1>Private Page</h1><a href="#/">Go To Public</a>',
        private: true,
      })
      .when('/login', {
        controller: 'LoginCtrl',
        controllerAs: 'auth',
        template: '<h1>Login</h1><button ng-click="auth.login()">Login</button>',
      })
  })
  .run(($rootScope, $location, authFactory) => {
    $rootScope.$on('$routeChangeStart', function (e, nextRoute) {
      if (nextRoute.$$route.private && !authFactory.isLoggedIn()) {
        $location.path('/login')
      }
    })
  })
  .factory('authFactory', () => {
    let loggedInStatus = false
    // firebae.auth().currentUser ?
    // or set onAuthStateChange loggedInStatus to true/false

    return {
      isLoggedIn () {
        return loggedInStatus
      },
      login () {
        loggedInStatus = true
      }
    }
  })
  .controller('LoginCtrl', function ($location, authFactory) {
    this.login = function () {
      authFactory.login()
      $location.path('/')
    }
  })
