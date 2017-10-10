(function() {
	
	angular
		.module('app.home')
		
		// Ways to inject dependencies (both cases are useful for minification)
		
		// 1.
		// --------------------------------------------------
		// .controller('Home', ["dataservice", Home)]);
		// --------------------------------------------------
		
		// or
		
		// 2.
		// --------------------------------------------------
		.controller('Home', Home);
		
	Home.$inject = ['dataservice'];
	// --------------------------------------------------
	
	function Home(dataservice) {
		
		// Without 'controller as' syntax
		// $scope.vm = this; 
		// $scope.vm.title = 'Home';
		// $scope.vm.users = [];
		
		// Without 'controller as' syntax. It creates all the last lines behind the scenes
		// "this" is the controller. This is a pattern that assigns the controller to a variable
		var vm = this;
		vm.title = 'Home';
		vm.users = [];
		
		instantiate();
		
		function instantiate() {
			console.log('Home controller instanciated');
			vm.users = dataservice.getUsers();
		}
	}
	
})();