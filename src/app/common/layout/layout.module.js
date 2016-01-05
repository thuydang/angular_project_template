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
					templateUrl : 'app/core/header/header.tpl.html',
					controller: 'HeaderCtrl'
				},
				'sidenav@main' : {
					templateUrl : 'app/common/sidebar/sidenav.tpl.html',
					controller: 'SidenavCtrl'
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
						//name: 'app',
						files: ['app/app.controller',
							'app/core/header/header.controller',
							'app/common/sidebar/sidenav.controller'
						]
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
				/// inside content@main
				'itemSearchResult@main.home' : {
					templateUrl : 'app/components/home/item_search_result/item_list.tpl.html',
					controller: 'SearchResultCtrl'
				},
				'map@main.home' : {
					templateUrl : 'app/components/home/google_map/map.tpl.html',
					controller: 'GmapCtrl'
				},
				/// Section
				'features@main.home' : {
					templateUrl : 'app/components/home/section_features/item_list.tpl.html',
					controller: 'FeaturesCtrl'
				},
				///--
				'footer@main' : {
					template: 'footer added'
				}

			},
			resolve: {
				loadCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load({
						//files: ['app/app.controller'].concat(TopBarHelperProvider.getControllers()).concat(NavHelperProvider.getControllers())
						files: [
							'app/core/header/header.controller',
							// top section
							'app/components/home/item_search_result/search_result.controller',
							'app/components/home/google_map/gmap.services',
							'app/components/home/google_map/gmap.controller',
							// section feature
							'app/components/home/section_features/features.controller'
						]
					});
				}]
			}
		})
		.state('main.shops', {
			url: '/shops',
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
					templateUrl : 'app/components/shops/shops.tpl.html'
				},
				/// inside content@main
				/// Section
				
				/// Section
				//'features@main.home' : {
				//	templateUrl : 'app/components/home/section_features/item_list.tpl.html',
				//	controller: 'FeaturesCtrl'
				//},
				///--
				'footer@main' : {
					template: 'footer added'
				}

			},
			resolve: {
				loadCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load({
						//files: ['app/app.controller'].concat(TopBarHelperProvider.getControllers()).concat(NavHelperProvider.getControllers())
						files: [
							'app/core/header/header.controller',
							// top section
							// section feature
							//'app/components/shops/section_features/features.controller'
						]
					});
				}]
			}
		});



	});
	return layout;
});
