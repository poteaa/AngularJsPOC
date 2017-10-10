(function() {
	
	angular
		.module('app.core')
		.factory('dataservice', dataservice);
		
	//dataservice.$inject = [$q];
	
	dataservice.$inject = ['$http','mockeddatabase'];
	
	function dataservice($http, mockeddatabase) {
		
		var service	= {
			getUsers: getUsers,
			getUser: getUser,
			getGoals: getGoals,
			getGoalsByUser: getGoalsByUser,
			getGoal: getGoal,
			createGoal: createGoal,
			updateGoal: updateGoal,
			getReviewers: getReviewers,
			deleteGoal: deleteGoal
		};
		
		const API_URL = 'http://localhost:53491/api/';
		
		var users = mockeddatabase.users;
		var goals =  mockeddatabase.goals;	
		
		return service;
		
		function getUsers() {
			//TODO: use constant for http://localhost:53491/api
			return $http.get(API_URL + 'users')
				.then(getUsersComplete)
				.catch(function(message) {
					console.log('Error getting users:::Exception: ' + message);
				});
				
			function getUsersComplete(data, status, headers, config) {
				return data.data;
			}
		}
		
		// function getUsers() {
			// var allUsers = [];
			// users.forEach(function (user) {
				// var singleUser = user;
				// singleUser.goalsCounter = getGoalsByUser(singleUser.id).length;
				// allUsers.push(singleUser);
			// })
			// return allUsers;
		// }
		
		function getReviewers() {
			return $http.get(API_URL + 'users/GetReviewers')
				.then(getReviewersComplete)
				.catch(function(message) {
					console.log('Error getting reviewers:::Exception: ' + message);
				});
			
			function getReviewersComplete(data, status, headers, config) {
				return data.data;
			}
		}
		
		// function getReviewers() {
			// var revs = $.grep(users, function (usr) {
				// return usr.isReviewer == true;
			// });
			
			// return revs;
		// }
		
		function getUser(id) {
			return $http.get(API_URL + 'users/' + id)
				.then(getUserComplete)
				.catch(function(message) {
					console.log('Error getting user ' + id + ':::Exception: ' + message);
				});
				
			function getUserComplete(data, status, headers, config) {
				return data.data;
			}
			
		}
	
		// function getUser(id) {
			// var user = $.grep(users, function (usr) {
				// return usr.id == id;
			// });	
			
			// return user[0];
		// }
		
		function getGoals() {
			return $http.get(API_URL + 'goals')
				.then(getGoalsComplete)
				.catch(function(message) {
					console.log('Error getting goals:::Exception: ' + message);
				});
				
			function getGoalsComplete(data, status, headers, config) {
				return data.data;
			}
		}
		
		// function getGoals() {
			// var allGoals = [];
			// goals.forEach(function (goal) {
				// var singleGoal = goal;
				// var user = getUser(singleGoal.userId);
				// var reviewer = getUser(singleGoal.userId);
				// singleGoal.userName = user.firstName + ' ' + user.lastName;
				// singleGoal.reviewerName = reviewer.firstName + ' ' + reviewer.lastName;
				// allGoals.push(goal);
			// })
			// return allGoals;
		// }
		
		function getGoalsByUser(userId) {
			return $http.get(API_URL + 'Users/GetGoalsByUser/' + userId)
				.then(getGoalsByUserComplete)
				.catch(function (message) {
					console.log('Error getting goals for user ' + id + ':::Exception: ' + message);
				});
				
			function getGoalsByUserComplete(data, status, headers, config) {
				return data.data;
			}
		}
		
		// function getGoalsByUser(userId) {
			// var userGoals = $.grep(goals, function (gl) {
				// var goal = gl;
				// var reviewer = getUser(goal.reviewerId);
				// goal.reviewerName =  reviewer.firstName + ' ' + reviewer.lastName;
				// return goal.userId == userId;
			// });	
			
			// return userGoals;
		// }
		
		function getGoal(id) {
			return $http.get(API_URL + 'goals/' + id)
				.then(getGoalComplete)
				.catch(function(message){
					console.log('Error getting goal ' + id + ':::Exception: ' + message);
				});
				
			function getGoalComplete(data, status, headers, config) {
				return data.data;
			}
		}
		
		// function getGoal(id) {
			// var goalDetail = undefined;
			// goals.forEach(function(goal) {
				// if(goal.id == id) {
					// goalDetail = goal;
					// var user = getUser(goal.userId);
					// var reviewer = getUser(goal.reviewerId);
					// goalDetail.userName =  user.firstName + ' ' + user.lastName;
					// goalDetail.reviewerName =  reviewer.firstName + ' ' + reviewer.lastName;
				// }
			// });
			// return goalDetail;
		// }
		
		function createGoal(goal) {
			return $http.post(API_URL + 'goals', JSON.stringify(goal))
				.then(createGoalComplete)
				.catch(function(message) {
					console.log('Error creating goal:::Exception: ' + message);
				})
				
			function createGoalComplete(result) {
				return result.status;
			}
		}
		
		function updateGoal(goal) {
			return $http.put(API_URL + 'goals', JSON.stringify(goal))
				.then(updateGoalComplete)
				.catch(function(message) {
					console.log('Error updading goal:::Exception: ' + message);
				});
			
			function updateGoalComplete(result) {
				return result.status;
			}
		}

		function deleteGoal(id) {
			return $http.delete(API_URL + 'goals/' + id, {'id': id})
				.then(deleteGoalComplete)
				.catch(function(message) {
					console.log('Error updading goal:::Exception: ' + message);
				});
			
			function deleteGoalComplete(result) {
				return result.status;
			}
		}
		
		// function deleteGoal(id) {
			// $.each(goals, function(i){
				// if(goals[i].id == id) {
					// goals.splice(i,1);
					// return true;
				// }
			// });
			// return false;
		// }
	}
	
})();