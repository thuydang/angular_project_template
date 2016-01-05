define(['app/app.module'], function (app) {
	'use strict';
//angular
//  .module('app.common.sidebar', ['ngMaterial'])
//	.controller('SidenavCtrl', function ($scope, $timeout, $mdSidenav, $log) {
	app.register.controller('FeaturesCtrl', function ($scope, $timeout, $log) {
		$scope.items = [
		{ 
			name: "Stake House Restaurant",
			address: "Stargarder Str. 11",
			rating: "****",
			type: "Restaurant"
		},
		{ 
			name: "Stake House Restaurant",
			address: "Stargarder Str. 11",
			rating: "****",
			type: "Restaurant"
		},
		{ 
			name: "Stake House Restaurant",
			address: "Stargarder Str. 11",
			rating: "****",
			type: "Restaurant"
		},
		{ 
			name: "Stake House Restaurant",
			address: "Stargarder Str. 11",
			rating: "****",
			type: "Restaurant"
		}
		];

	});
});


