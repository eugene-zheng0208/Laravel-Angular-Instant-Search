'use strict';

var env = {};

if (window) {
  Object.assign(env, window.__env);
}

var app = angular
    .module('todoApp', [
      'ngRoute',
      'ngResource',
      'ngStorage',
      'appRoutes',
      'enterStroke',
      'MainController',
      'TodoController',
      'TodoService',
    ])
    .constant('__env', env);
