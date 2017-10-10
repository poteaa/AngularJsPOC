(function() {

    'use strict';

    angular.module('app', [
		'ngAnimate',
	
        /* Shared modules */
        'app.core',

        /* Custom modules */
		'app.login',
		'app.menu',
        'app.home',
		'app.user',
		'app.goal'
    ]);

})();