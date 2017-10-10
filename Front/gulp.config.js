module.exports = function() {
	
	var client = './src/client/';
	var server = './src/server/';
	var temp = './temp/';
	
	var config = {
		client: client,
		lessFile: client + 'styles/styles.less',
		server: server,
		temp: temp,
		
		port: 1337,
		nodeServer: server + 'app.js'
	};
	
	return config;
}