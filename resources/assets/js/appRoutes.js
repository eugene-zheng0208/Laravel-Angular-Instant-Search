angular
  .module('appRoutes', []).config(['$routeProvider', '$locationProvider', '$httpProvider',
    function ($routeProvider, $locationProvider, $httpProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '/partials/todos/search',
          controller: 'MainController'
        })
        .when('/:category/:action?/:id?', {
          templateUrl: function (params) {
            var allowedParams = ['category', 'action', 'id'];
            var paramVals = [];
            for (var key in params) {
              if (allowedParams.indexOf(key) !== -1) {
                paramVals.push(params[key]);
              }
            }
            return '/partials/' + paramVals.join('/');
          }
        })
        .otherwise({
          redirectTo: '/'
        });
    }
  ]);
