define(['angularAMD', 'angular-ui-router', 'ocLazyLoad'], function(ng) {
	'use strict';
	var layout = angular.module('app.common.layout', ['ui.router.state']);

	layout.config(function($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $provide) {

		$stateProvider.state('main', {
			url: '/',
			views : {
				// ui-view="" can be referred as '@': here 
				// ('""@"", 'empty view'@'empty state')
				'mainContent@' : {
					//controller: 'AppCtrl',
					templateUrl : 'app/common/layout/index.tpl.html'
				},
				/*
					 'navigation@main' : {
					 template: NavHelperProvider.getViews(),
					 controller: 'NavCtrl'
					 },
					 'topbar@main' : {
					 template : TopBarHelperProvider.getViews()
					 },
					 'content@main' : {
					 template : ContentHelperProvider.getViews()
					 }
					 */
				'header@main' : {
				//navigation
					templateUrl : 'app/core/header/header.tpl.html'
					//controller: 'NavCtrl'
				},
				'content@main' : {
					template : 'this is content'
				},
				'footer@main' : {
					templateUrl : 'app/core/footer/footer.tpl.html'
				}

			},
			resolve: {
				loadCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load({
						//files: ['app/app.controller'].concat(TopBarHelperProvider.getControllers()).concat(NavHelperProvider.getControllers())
						files: ['app/app.controller']
					});
				}]
			}
		});

		layout.register = {
			controller: $controllerProvider.register,
			directive: $compileProvider.directive,
			factory : $provide.factory,
			service : $provide.service
		};

	});
	return layout;
});
