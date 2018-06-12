angular.module('app')
.controller('AppCtrl', ['$scope', function($scope) {
  $scope.message = "Motivational Alarm!";
}])
.component('app', {
  bindings: {},
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});