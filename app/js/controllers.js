var appControllers = angular.module('appControllers', []);

appControllers.controller('ResListCtrl', function($scope, $http) {
  $http.get('reservations/reservations.json').success(function(data) {
    $scope.reservations = data;
  });
});
