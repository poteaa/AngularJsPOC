(function () {
	
	'use strict';
	
	angular
		.module('app.goal')
		.controller('GoalEdit', GoalEdit);
		
	GoalEdit.$inject = ['$window', '$filter', '$state', '$stateParams', 'dataservice', 'loginservice'];
	
	function GoalEdit($window, $filter, $state, $stateParams, dataservice, loginservice) {
		var vm = this;
		
		vm.title = 'Edit Goal';
		vm.reviewers = [];
		vm.userId = undefined;
		vm.goBack = goBack;
		
		vm.goal = {
			GoalId : 0,
			UserId: 0,
			Title : undefined,
			Description : undefined,
			StartDate: $filter('date')(new Date(), 'dd/MM/yyyy'),
			EndDate: $filter('date')(new Date(), 'dd/MM/yyyy'),
			ReviewerId : 0
		}
		
		vm.updateDate = updateDate;
		vm.update = update;
		
		instantiate();
		
		function instantiate() {
			console.log('GoalEdit instantiated');
			getReviewers();
			var user = loginservice.getLoggedUser();
			if(user) {
				vm.goal.UserId = user.id;
			}
			console.log('$stateParams: ' + $stateParams);
			if($stateParams.id != undefined) {
				dataservice.getGoal($stateParams.id).then(function(goal) {
					if(goal) {
						vm.goal = goal;
						vm.goal.StartDate = $filter('date')(vm.goal.StartDate, 'dd/MM/yyyy');
						vm.goal.EndDate = $filter('date')(vm.goal.EndDate, 'dd/MM/yyyy');
					}
				});
			}
		}
		
		function getReviewers() {
			return dataservice.getReviewers().then(function(data) {
				vm.reviewers = data;
				return vm.reviewers;
			});
		}
		
		function getGoal(id) {
			dataservice.getGoal(id).then(function(data) {
				return data;
			});
		}
		
		function update() {
			var goal = {
				"GoalId": vm.goal.GoalId,
				"UserId": vm.goal.UserId,
				"Title": vm.goal.Title,
				"Description": vm.goal.Description,
				"StartDate": formatDateToISO(vm.goal.StartDate),
				"EndDate": formatDateToISO(vm.goal.EndDate),
				"ReviewerId" :  vm.goal.ReviewerId
			};
			if(goal.GoalId === 0) {
				dataservice.createGoal(goal).then(function(status) {
					if(status == "200") {
						$state.go('user.goals', {'id': goal.UserId});
					}
				});
			}
			else {
				dataservice.updateGoal(goal).then(function(status) {
					if(status == "200") {
						$state.go('user.goals', {'id': goal.UserId});
					}
				});
			}
		}
		
		// date: date in format dd/MM/yyyy
		function formatDateToISO(date) {
			var formatedDate = new Date(date.substring(6), date.substring(0,2), date.substring(3,5));
			return formatedDate.toISOString();
		}
		
		function updateDate(datepickerId, date) {
			if(datepickerId == "jqdatepicker1") {
				vm.goal.StartDate = date;
			}
			else if(datepickerId == "jqdatepicker2") {
				vm.goal.EndDate = date;
			}
		}
		
		function goBack() {
            $window.history.back();
        }
	}
	
		
})();