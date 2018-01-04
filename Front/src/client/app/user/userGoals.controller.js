(function() {

	'use strict';
	
	angular
		.module('app.user')
		.controller('UserGoals', UserGoals);
		
	UserGoals.$inject = ['$window', '$state', '$stateParams', 'dataservice', 'loginservice'];
		
	function UserGoals($window, $state, $stateParams, dataservice, loginservice) {
		var vm = this;
		vm.title = " Goals";
		vm.goals = [];
		vm.gotoGoal = gotoGoal;
		vm.editGoal = editGoal;
		vm.deleteGoal = deleteGoal;
		vm.canEdit = false;
		vm.goBack = goBack;
		
		instantiate();
		
		function instantiate() {
		    var id = $stateParams.id;
			console.log('UserGoals id:' + id);
			getUser(id).then(function(user){
				var loggedUser = loginservice.getLoggedUser();
				vm.canEdit = loggedUser != null && user.UserId === loggedUser.id;
				vm.title = user.FirstName + ' ' + user.LastName + vm.title;
				getGoalsByUser(id).then(function(data) {
				});
			});
		}
		
		function getUser(id) {
			return dataservice.getUser(id).then(function(data) {
				return data;
			})
		}
		
		function getGoalsByUser(userId) {
			return dataservice.getGoalsByUser(userId).then(function(data) {
				vm.goals = data;
				return vm.goals;
			})
		}

		function deleteGoal(id) {
			var goalId = id;
		    dataservice.deleteGoal(id).then(function(status) {
				console.log(self);
				if(status === 200) {
					$('#userGoalsTR' + goalId).fadeOut('slow');
				}
			});
		}
		
		function gotoGoal(goalId) {
			$state.go('goal.detail', {id: goalId});
		}
		
		function editGoal(goalId) {
			if(goalId) {
				$state.go('goal.edit', {'id': goalId});
			}
			else {
				$state.go('goal.edit');
			}
		}
		
		function goBack() {
            $window.history.back();
        }
	}
	
})();