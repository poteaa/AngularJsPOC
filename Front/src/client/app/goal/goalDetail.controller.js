(function() {
	
	'use strict';
	
	angular
		.module('app.goal')
		.controller('GoalDetail', GoalDetail);
		
	GoalDetail.$inject = ['$window', '$stateParams', 'dataservice'];
		
	function GoalDetail($window, $stateParams, dataservice) {
		var vm = this;
		vm.title = "Goal Detail"
		vm.goal = undefined;
		vm.goBack = goBack;
	
		instantiate();
		
		function instantiate() {
			var id = $stateParams.id;
			return getGoal(id).then(function() {
				console.log('Goal detail controller instanciated');
			});
		}
		
		function getGoal(id) {
			return dataservice.getGoal(id).then(function(data) {
				vm.goal = data;
				return vm.goal;
			});
		}
		
		function goBack() {
            $window.history.back();
        }
	}
	
})();