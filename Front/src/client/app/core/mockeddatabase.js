(function() {
	
	angular
		.module('app.core')
		.factory('mockeddatabase', mockeddatabase);
		
	function mockeddatabase() {
		
		var service	= {
			users: 
			[
				{
					"id": 1,
					"userName": "Leon",
					"password": "1",
					"firstName": "Leon",
					"lastName": "Kennedy",
					"project": "MF",
					"city": "Bogotá",
					"country": "Colombia",
					"portrait": "LeonKennedy.jpg",
					"isReviewer": false
				},
				{
					"id": 2,
					"userName": "Claire",
					"password": "1",
					"firstName": "Claire",
					"lastName": "Redfield",
					"project": "MF",
					"city": "Bogotá",
					"country": "Colombia",
					"portrait": "ClaireRedfield.jpg",
					"isReviewer": true
				},
				{
					"id": 3,
					"userName": "Sandra",
					"password": "1",
					"firstName": "Sandra",
					"lastName": "Coronel",
					"project": "MF",
					"city": "Bogotá",
					"country": "Colombia",
					"portrait": "sandra.jpg",
					"isReviewer": false
				},
				{
					"id": 4,
					"userName": "Luis",
					"password": "1",
					"firstName": "Luis",
					"lastName": "Díaz",
					"project": "MF",
					"city": "Bogotá",
					"country": "Colombia",
					"portrait": "luis.jpg",
					"isReviewer": true
				}
			],
			goals: 
			[
				{	
					"id": 1,
					"userId": 1,
					"title": "Angular",
					"description": "Learn angular 1.5 and create a proof of concept",
					"startDate": "01/07/2017",
					"endDate": "01/07/2017",
					"status": "started",
					"reviewerId": 2
				},
				{	
					"id": 2,
					"userId": 1,
					"title": "Xamarin",
					"description": "Learn Xamarin and create an application",
					"startDate": "01/07/2017",
					"endDate": "01/07/2017",
					"status": "started",
					"reviewerId": 4
				},
				{	
					"id": 3,
					"userId": 1,
					"title": "Angular v2",
					"description": "Learn angular 2 and create a proof of concept",
					"startDate": "01/07/2017",
					"endDate": "01/07/2017",
					"status": "started",
					"reviewerId": 2
				},
				{	
					"id": 4,
					"userId": 2,
					"title": "HTML 5",
					"description": "Learn HTML 5 and create a proof of concept",
					"startDate": "01/07/2017",
					"endDate": "01/07/2017",
					"status": "started",
					"reviewerId": 4
				}
			]
		};
		
		return service;
	
	}
	
})();