angular
  .module('TodoController', [])
    .controller('TodoController', ['$scope', '$location', '$routeParams', 'Todo', '$http', '$timeout',
      function ($scope, $location, $routeParams, Todo, $http, $timeout) {

        $scope.create = function () {
          var todo = new Todo({
            body: this.body
          });
          todo.$save(function (res) {
            $location.path('todos/view/' + res.id);
            $scope.body = '';
          }, function (err) {
            console.log(err);
          });
        };

        $scope.find = function () {
          $scope.todos = Todo.query();
        };

        $scope.remove = function (todo) {
          todo.$remove(function (res) {
            if (res) {
              for (var i in $scope.todos) {
                if ($scope.todos[i] === todo) {
                  $scope.todos.splice(i, 1);
                }
              }
            }
          }, function (err) {
            console.log(err);
          })
        };

        $scope.update = function (todo) {
          todo.$update(function (res) {
          }, function (err) {
            console.log(err);
          });
        };

        $scope.findOne = function () {
          var splitPath = $location.path().split('/');
          var todoId = splitPath[splitPath.length - 1];
          $scope.todo = Todo.get({todoId: todoId});
        };

        var promise;

        $scope.ajaxLoad = function () {
          if(promise)  {
            $timeout.cancel(promise);
          }
          promise = $timeout(function() {
            $http.get(__env.apiUrl + 'todos?searchString=' + $scope.searchString).success(function(data) {
              $scope.todos = data;
            }).error(function(data) {
              console.log("No data found..");
            });
          }, 300);
        };

      }
    ]);
