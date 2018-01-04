(function() {
	
	'use strict';
	
	angular
		.module('app.core')
		.factory('loginservice', loginservice);
		
	//loginservice.$inject = [$q];
	loginservice.$inject = ['$http', 'mockeddatabase'];
		
	function loginservice($http, mockeddatabase) {
		
		var service = {
			login: login,
			logout: logout,
			getToken: getToken,
			getLoggedUser: getLoggedUser
		};
		
		var users = mockeddatabase.users;
		var goals =  mockeddatabase.goals;
		
		return service;
		
		function User(id, userName, name, portrait){
			this.id = id;
			this.userName = userName;
			this.name = name;
			this.portrait = portrait;
			this.token = userName + 'sadfsfs';
		}
		user.prototype.getToken = function() {
			return this.token;
		}
		
		function login(userName, userPass) {
			
			var user = { "UserName" : userName, "Password" : userPass };
			
			return $http.post('http://localhost:53491/api/login', user)
					.then(loginComplete)
					.catch(function(message) {
						console.log('Error loging user' + userName + ':::Exception: ' + message);
						return null;
					});

			function loginComplete(data, status, headers, config) {
				var dbUser = data.data;
				var user = new User(dbUser.UserId, dbUser.UserName, dbUser.Name, dbUser.Portrait);
				if(getLocalStorage('user') == null){
					localStorage.setItem('user', JSON.stringify(user));
				}
				
				return user;
			}
		}
		
		// function login(userName, userPass) {
			// var dbUser = undefined;
			// for(i in users) {
				// if(users[i].userName == userName) {
					// if(users[i].password == userPass)
					// dbUser = users[i];
					// break;
				// }
			// }
			// if(dbUser == undefined) {
				// return null;
			// }
			// var user = new User(dbUser.id, dbUser.userName, dbUser.name, dbUser.portrait);
			// if(getLocalStorage('user') == null){
				// localStorage.setItem('user', JSON.stringify(user));
			// }
			// return user;
		// }
		
		function logout() {
			localStorage.removeItem('user');
			return true;
		}
		
		function getToken() {
			var user = getLocalStorage('user');
			return user ? user.token : null;
		}
		
		function getLoggedUser() {
			return getLocalStorage('user');
		}
		
		function getLocalStorage(item) {
			var value = localStorage.getItem(item);
			return JSON.parse(value);
		}
	}
	
})();