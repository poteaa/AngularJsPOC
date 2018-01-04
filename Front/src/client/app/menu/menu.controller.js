(function() {
	
	'use strict';
	
	angular
		.module('app.menu')
		.controller('Menu', Menu);
		
	Menu.$inject = ['$location', '$rootScope', 'loginservice'];
	
	function Menu($location, $rootScope, loginservice) {
		var vm = this;
		vm.menuClass = menuClass;
		
		function menuClass(page) {
			var current = $location.path();
			return current === page ? 'active' : '';
		}
	}
	
})();