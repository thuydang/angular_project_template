define(['angularAMD', 'angular-ui-router', 'ocLazyLoad'], function(ng) {
	'use strict';
	var layout = angular.module('app.common.layout', ['ui.router.state']);

	layout.config(function($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $provide) {

		layout.register = {
			controller: $controllerProvider.register,
			directive: $compileProvider.directive,
			factory : $provide.factory,
			service : $provide.service
		};

		$stateProvider.state('main', {
			url: '',
			views : {
				// ui-view="" can be referred as '@': here 
				// ('""@"", 'empty view'@'empty state')
				'mainContent@' : {
					controller: 'AppCtrl',
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
				'sidenav@main' : {
					templateUrl : 'app/common/sidebar/sidenav.tpl.html'
				},
				/*
				'footer@main' : {
					templateUrl : 'app/core/footer/footer.tpl.html'
				}
				*/
			},
			resolve: {
				loadCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load({
						//files: ['app/app.controller'].concat(TopBarHelperProvider.getControllers()).concat(NavHelperProvider.getControllers())
						files: ['app/app.controller']
					});
				}]
			}
		})
		.state('main.home', {
			url: '/home',
			views : {
				// ui-view="" can be referred as '@': here 
				// ('""@"", 'empty view'@'empty state')
				/*
				'mainContent@' : {
					controller: 'AppCtrl',
					templateUrl : 'app/component/home/home.tpl.html'
				},
				*/
				'content@main' : {
					templateUrl : 'app/components/home/home.tpl.html'
				},
				'footer@main' : {
					template: 'footer added'
				}

			},
			resolve: {
				loadCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load({
						//files: ['app/app.controller'].concat(TopBarHelperProvider.getControllers()).concat(NavHelperProvider.getControllers())
						files: ['app/core/header/header.controller']
					});
				}]
			}

		});


	});
	return layout;
});
