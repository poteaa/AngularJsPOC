(function() {
	
	'use strict';
	
	angular
		.module('app.user')
		.controller('Users', Users);
		
	Users.$inject = ['dataservice'];
		
	function Users(dataservice) {
		var vm = this;
		vm.title = 'All Users';
		vm.controllerName = 'Users';
		vm.users = [];
		vm.bool = true;
		
		instantiate();
		
		function instantiate() {
			return getUsers().then(function() {
				console.log('Users controller instanciated');
			});
		}
		
		function getUsers() {
			return dataservice.getUsers().then(function(data) {
				vm.users = data;
				return vm.users;
			});
		}
		
		
	}
	
})();