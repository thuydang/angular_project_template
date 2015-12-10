var module = [ 
  'angularAMD',
  //'../app/core/core.module',
  'angular-translate',
  'angular-translate-loader-static-files',
  'angular-ui-router',
  'ocLazyLoad',
  'angular-css-injector',
  'angular-messages',
  'angular-sanitize',
  'angular-material',
	'angular-material-icons',
  //'app/node/nodes.module',
  //'common/login/login.module',
  //'common/navigation/navigation.module',
  //'common/topbar/topbar.module',
  'app/common/layout/layout.module',
  'app/common/config/env.module'
]; //needed module

// The name of all angularjs module
var e = [ 
  'ui.router',
  'oc.lazyLoad',
  'pascalprecht.translate',
  'angular.css.injector',
  'ngMessages',
  'ngSanitize',
  'ngAnimate',
  'ngMaterial',
	'ngMdIcons',
  //'app.nodes',
  //'app.topology',
	//-- common --
  //'app.common.login',
  //'app.common.nav',
  //'app.common.topbar',
  'app.common.layout',
	//-- core --
	//-- components --
];
//--------------------\\

define(module, function(ng) {
  'use strict';

	var app = angular.module('app', e);

	// The overal config he is done here.
	app.config(function ($stateProvider, $urlRouterProvider,  $ocLazyLoadProvider, 
				$translateProvider, cssInjectorProvider, $mdThemingProvider) {

		// Route Settings
		$urlRouterProvider.otherwise("/"); // set the default route

		cssInjectorProvider.setSinglePageMode(true); // remove all added CSS files when the page change

		/// ocLazyLoader config
		// set the ocLazyLoader to output error and use requirejs as loader
		$ocLazyLoadProvider.config({
			debug: true,
			asyncLoader: require
		});

		/// translation config
		$translateProvider.preferredLanguage('en_US');

		/// angular-material config
		var customBlueMap = 		$mdThemingProvider.extendPalette('light-blue', {
			'contrastDefaultColor': 'light',
			'contrastDarkColors': ['50'],
			'50': 'ffffff'
		});
		$mdThemingProvider.definePalette('customBlue', customBlueMap);
		$mdThemingProvider.theme('default')
			.primaryPalette('customBlue', {
				'default': '500',
				'hue-1': '50'
			})
		.accentPalette('pink');
		$mdThemingProvider.theme('input', 'default')
			.primaryPalette('grey')
			//- angular-material
	});

	// comment out when use bootstrap.js
	ng.bootstrap(app);
	console.log('bootstrap done (: ');
			return app;
			});

