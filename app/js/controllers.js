var appControllers = angular.module('appControllers', []);

appControllers.controller('ResListCtrl', function($scope, $http) {
  $http.get('reservations/reservations.json').success(function(data) {
    $scope.reservations = data;
  });
});

appControllers.controller('JSTestCtrl', ['$scope', function($scope) {
	$scope.text='Soundex';
	$scope.submit = function() {
		alert('You clicked the top text'); 
	}
}]);
