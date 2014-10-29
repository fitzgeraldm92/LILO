var app = angular.module("myApp", []); 

app.controller('ResListCtrl', function($scope, $http) {
  $http.get('reservations/reservations.json').success(function(data) {
    $scope.reservations = data;
  });
});
