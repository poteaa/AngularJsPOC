(function() {
	
	'use strict';
	
	angular
		.module('app.goal')
		.config(['$stateProvider', function($stateProvider) {
			$stateProvider
				.state('goal', {
					abstract: true,
					template: '<ui-view class="shuffle-animation"/>',
					url: '/goal'
				})
				.state('goal.list', {
					url: '/list',
					templateUrl : '/src/client/app/goal/goals.html',
					controller: 'Goals',
					controllerAs: 'vmGoals'
				})
				.state('goal.detail', {
					url: '/{id:[0-9]*}',
					templateUrl : '/src/client/app/goal/goalDetail.html',
					controller: 'GoalDetail',
					controllerAs: 'vmGoalDetail'
				})
				// id is optional
				.state('goal.edit', {
					url: '/edit',
					params: {'id': undefined},
					templateUrl : '/src/client/app/goal/goalEdit.html',
					controller: 'GoalEdit',
					controllerAs: 'vmGoalEdit'
				})
		}]);
		// .config(['$routeProvider', function($routeProvider) {
			// $routeProvider
				// .when('/goals', {
					// templateUrl: '/src/client/app/goal/goals.html',
					// controller: 'Goals',
					// controllerAs: 'vmGoals'
				// })
				// .when('/goals/:id', {
					// templateUrl : '/src/client/app/goal/goalDetail.html',
					// controller: 'GoalDetail',
					// controllerAs: 'vmGoalDetail'
				// })
				// // Id is optional
				// .when('/goals/edit/:id?', {
					// templateUrl : '/src/client/app/goal/goalEdit.html',
					// controller: 'GoalEdit',
					// controllerAs: 'vmGoalEdit'
				// })
		// }]);
		
})();

