define(['app/app.module'], function (app) {
  'use strict';

  app.register.controller('AppCtrl', function ($state, $scope, $mdSidenav) {
		$scope.toggleSidenav = function(menuId) {
			$mdSidenav(menuId).toggle();
		};
	}); 
});

