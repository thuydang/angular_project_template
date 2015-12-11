define(['app/app.module'], function (app) {
	'use strict';
//angular
//  .module('app.common.sidebar', ['ngMaterial'])
//	.controller('SidenavCtrl', function ($scope, $timeout, $mdSidenav, $log) {
	app.register.controller('SidenavCtrl', function ($scope, $timeout, $mdSidenav, $log) {
  });

  app.register.controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
    };
  });

  app.register.controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };
  });
});
