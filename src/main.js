require.config({
  baseUrl : '.',
  paths : {
    'angular' : 'assets/libs/angular/angular',
    'angularAMD' : 'assets/libs/angularAMD/angularAMD',
    'ngload' : 'assets/libs/angularAMD/ngload',
    'ui-bootstrap' : 'assets/libs/angular-bootstrap/ui-bootstrap-tpls.min',
    'domReady' : 'assets/libs/requirejs-domready/domReady',
    'async' : 'assets/vendor/requirejs-async/async',
    'Restangular' : 'assets/libs/restangular/dist/restangular.min',
    'underscore' : 'assets/libs/underscore/underscore',
    'angular-ui-router' : 'assets/libs/angular-ui-router/release/angular-ui-router',
    'angular-css-injector' : 'assets/libs/angular-css-injector/angular-css-injector',
    'angular-cookies' : 'assets/libs/angular-cookies/angular-cookies.min',
    'angular-translate' : 'assets/libs/angular-translate/angular-translate.min',
    'angular-translate-loader-static-files' : 'assets/libs/angular-translate-loader-static-files/angular-translate-loader-static-files.min',
    'jquery' : 'assets/libs/jquery/dist/jquery.min',
    'jquery-ui' : 'assets/libs/jquery-ui/jquery-ui.min',
    'ocLazyLoad' : 'assets/libs/ocLazyLoad/dist/ocLazyLoad',
		/// google map
		'angular-google-maps' : 'assets/libs/angular-google-maps/dist/angular-google-maps.min',
		/// angular-material
    'angular-messages' : 'assets/libs/angular-messages/angular-messages.min',
    'angular-sanitize' : 'assets/libs/angular-sanitize/angular-sanitize.min',
    'angular-animate' : 'assets/libs/angular-animate/angular-animate.min',
    'angular-aria' : 'assets/libs/angular-aria/angular-aria.min',
    'angular-material' : 'assets/libs/angular-material/angular-material.min',
		'angular-material-icons' : 'assets/libs/angular-material-icons/angular-material-icons.min',
  },
  shim : {
    'angularAMD' : ['angular'],
    'ocLazyLoad' : ['angular'],
    'Restangular' : ['angular', 'underscore'],
    'ui-bootstrap' : ['angular'],
    'angular-css-injector' : ['angular'],
    'angular-ui-router' : ['angular'],
    'angular-cookies' : ['angular'],
    'angular-translate': ['angular'],
    'angular-translate-loader-static-files' : ['angular-translate'],
    'angular-google-maps': ['angular'],
    'ngload' : ['angularAMD'],
    'jquery' : {
      exports : '$'
    },
    'jquery-ui' : ['jquery'],
    'angular' : {
        deps: ['jquery','jquery-ui'],
        exports: 'angular'
    },
    'underscore' : {
      exports : '_'
    },
		'angular-messages' : {
      exports: "ngMessages",
      deps: [ "angular" ]
		},
		'angular-sanitize' : {
      exports: "ngSanitize",
      deps: [ "angular" ]
		},
		'angular-animate' : {
      exports: "ngAnimate",
      deps: [ "angular" ]
		},
    'angular-aria': {
      exports: "ngAria",
      deps: [ "angular" ]
		},
    'angular-material' : {
			deps: ['angular', 'angular-animate', 'angular-aria'],
      exports: 'ngMaterial'
		},
		'angular-material-icons': {
      exports: "ngMdIcons",
      deps: [ "angular" ]
		}

	},
	// comment out when use bootstrap.js
	deps : ['app/app.module']
	//deps : ['../bootstrap']

});
