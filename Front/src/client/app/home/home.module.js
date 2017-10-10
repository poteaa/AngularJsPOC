(function() {
	
	angular
		// next line is to use $stateProvider
		//.module('app.home', ['app.core', 'ngRoute']);    // To use routeProvider
		.module('app.home', ['app.core','ui.router']);    // To use stateProvider
})();