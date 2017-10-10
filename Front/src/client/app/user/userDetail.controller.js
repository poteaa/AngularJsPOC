(function() {

	angular
		.module('app.user')
		.controller('UserDetail', UserDetail);
		
	UserDetail.$inject = ['$stateParams', 'dataservice', 'loginservice'];
		
	function UserDetail($stateParams, dataservice, loginservice) {
		var vm = this;
		vm.title = "Profile";
		vm.detail = undefined;
		vm.goals = [];
		vm.reviewers = [];
		vm.deleteGoal = deleteGoal;
		
		instantiate();
		
		function instantiate() {
			console.log('UserDetail controller instanciated');
			var id = $stateParams.id;
		    getUser(id).then(function() {
				
			});
		    getGoalsByUser(id).then(function() {
				
			});
		    getReviewers().then(function() {
				
			});
		}

		function getUser(id) {
			return dataservice.getUser(id).then(function(data) {
				vm.detail = data;
				return vm.detail;
			});
		}
		
		function getGoalsByUser(id) {
			return dataservice.getGoalsByUser(id).then(function(data) {
				vm.goals = data;
				return vm.goals;
			})
		}
		
		function getReviewers() {
			return dataservice.getReviewers().then(function(data) {
				vm.reviewers = data;
				return vm.reviewers;
			});
		}		

		function deleteGoal(id) {
		    dataservice.deleteGoal(id);
		    vm.goals = dataservice.getGoalsByUser($stateParams.id);
		}
	}
	
})();