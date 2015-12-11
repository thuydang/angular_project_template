define(['app/app.module', 'app/components/home/google_map/gmap.services'], function (app) {
	'use strict';
//angular
//  .module('app.common.sidebar', ['ngMaterial'])
//	.controller('SidenavCtrl', function ($scope, $timeout, $mdSidenav, $log) {
	app.register.controller('GmapCtrl', function ($scope, $timeout, $log, MapService) {

		$scope.title = "Where is Colosseo?";
		$scope.latitude = 52.5102;
		$scope.longitude = 13.3223;
		// 52.512173, 13.323400
		// Set the location to be Colosseum
		MapService.initialize($scope, "map-canvas");
		/*
			 var mapOptions = {
			zoom: 4,
			center: new google.maps.LatLng(40.0000, -98.0000),
			mapTypeId: google.maps.MapTypeId.TERRAIN
		}

		$scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
		*/
	});
});


