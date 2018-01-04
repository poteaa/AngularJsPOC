(function() {
	
	'use strict';
	
	angular
		.module('app.home')
		.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('home', {
					url: '/home',
					templateUrl: '/src/client/app/home/home.html',
                    controller: 'Home',
					controllerAs: 'vmHome'
				})
			// $urlRouterProvider.otherwise('/');
		}]);
		// .config(['$routeProvider', function($routeProvider) {
			// $routeProvider
				// .when('/', {
					// // url: '/home',
					// templateUrl: '/src/client/app/home/home.html',
                    // controller: 'Home',
					// controllerAs: 'vm'
				// })
				// .when('/home', {
					// templateUrl: '/src/client/app/home/home.html',
                    // controller: 'Home',
					// controllerAs: 'vm'
				// });
				// /* .otherwise({
					// redirectTo: 'index.html'
				// }); */
		// }]);
		
	
	// function getStates() {
        // return [
            // {
                // state: 'home',
                // config: {
                    // url: '/home',
                    // templateUrl: '/src/client/app/home/home.html',
                    // controller: 'Home',
                    // controllerAs: 'vm',
					//// resolve = TODO: try to use resolve for something
                    // title: 'home',
                    // settings: {
                        // nav: 1,
                        // content: '<i class="fa fa-home"></i> Home'
                    // }
                // }
            // }
        // ];
    // }
})();