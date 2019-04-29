import angular from 'angular';
import { app } from './app';

console.log('Hello angular from pet project');
console.log(angular);

app();


var App = angular.module('App', []);

App.controller('AppController',  ['$scope', appController ]);

function appController ($scope) {
  $scope.greeting = 'Hey from angular scope function';
  // console.log('$scope', $scope);
}

angular.bootstrap(document, ['App']);

