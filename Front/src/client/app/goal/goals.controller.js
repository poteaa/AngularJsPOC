(function() {
	
	'use strict';
	
	angular
		.module('app.goal')
		.controller('Goals', Goals);

	Goals.$inject = ['$state', 'dataservice'];
	
	function Goals($state, dataservice) {
		var vm = this;
		vm.title = "All Goals";
		vm.goals = [];
		vm.gotoGoal = gotoGoal;
		
		instantiate();
	
		function instantiate() {
			return getGoals().then(function() {
				console.log('Goals controller instanciated');
			});
		}
		
		function getGoals() {
			return dataservice.getGoals().then(function(data){
				vm.goals = data;
				return vm.goals;
			})
		}
		
		function gotoGoal(goalId) {
			$state.go("goal.detail", {id: goalId} );
		}
	}
	
})();