(function() {
	
	'use strict';
	
	angular
		.module('app.login', ['app.menu'])
		.controller('Login', Login);
		
	Login.$inject = ['$window', '$rootScope', 'loginservice'];
	
	function Login($window, $rootScope, loginservice) {
		var vm = this;
		vm.loginservice = loginservice;
		vm.id = 0;
		vm.name = undefined;
		vm.portrait = undefined;
		vm.isSignedIn = false;
		vm.signIn = signIn;
		vm.signOff = signOff;
		vm.wrongSignin = false;
		
		instantiate();
		
		function instantiate(){
			var user = loginservice.getLoggedUser();
			if(user) {
				vm.id = user.id;
				vm.name = user.userName;
				vm.portrait = user.portrait;
				vm.isSignedIn = true;
				vm.wrongSignin = false;
			}
		}
		
		function signIn() {
			loginservice.login(vm.name, vm.password).then(function(user	) {
				if(user) {
					vm.id = user.id;
					vm.name = user.userName;
					vm.portrait = user.portrait;
					vm.isSignedIn = true;
					vm.wrongSignin = false;
					$rootScope.$emit('loggedEvent', {id:vm.id});
					// vm.loginservice.testData = "From login controller";
					// $rootScope.$broadcast('loggedEvent', {id:vm.id});
				}
				else {
					vm.wrongSignin = true;
				}
			});
		}
		
		function signOff() {
			if(loginservice.logout()) {
				// vm.login_form.$setPristine();
				// vm.login_form.$setValidity();
				vm.id = 0;
				vm.name = undefined;
				vm.isSignedIn = false;
				vm.portrait = undefined;
				$rootScope.$emit('loggedEvent', {id:vm.id});
				$window.location.href = "#home";
			}
		}
		
	}
	
})();