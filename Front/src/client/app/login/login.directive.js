(function() {
	
	'use strict';
	
	angular
		.module('app.login')
		.directive('loginDirective', loginDirective);
		
	function loginDirective() {
		var directive = {
			restrict: 'EA',
			templateUrl: '/src/client/app/login/login.html'
		};
		
		return directive;
	}
	
})();