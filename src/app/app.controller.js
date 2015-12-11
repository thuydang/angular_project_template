define(['app/app.module'], function (app) {
	'use strict';

	app.register.controller('AppCtrl', function ($state, $scope, $timeout, $mdSidenav) {

		// *********************************
    // Internal methods
    // *********************************

    /**
     * Hide or Show the sideNav area
     */
    $scope.toggleLeft = buildDelayedToggler('left');
    $scope.toggleRight = buildToggler('sidenav-right');
    $scope.isOpenRight = function(){
      return $mdSidenav('sidenav-right').isOpen();
    };
    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
      var timer;
      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      return debounce(function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }, 200);
    }
    function buildToggler(navID) {
      return function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }
    }
		/*
    $scope.toggleList = function() {
      $mdSidenav('left').toggle();
    }
		*/
		/** Sidenav Control **/
	});

}); //-

