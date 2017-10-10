(function() {
	
	angular
		.module('app.menu')
		.controller('UserMenu', UserMenu);
		
	UserMenu.$inject = ['$location', '$rootScope', 'loginservice'];
	
	function UserMenu($location, $rootScope, loginservice) {
		var vm = this;
		vm.loginservice = loginservice;
		vm.id = 0;
		vm.menuClass = menuClass;
		
		$rootScope.$on('loggedEvent', function(event, args) {
			if(args.id != undefined && args.id != 0) {
				vm.id = args.id;
			}
			else {
				vm.id = 0;
			}	
		});
		
		instanciate();
		
		function instanciate() {
			var user = loginservice.getLoggedUser();
			if(user) {
				vm.id = user.id;
			}
		}
		
		function menuClass(page) {
			var current = $location.path();
			return current === page ? 'active' : '';
		}
		
	}
	
})();