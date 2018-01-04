module.exports = function() {
	var reader = {
		readFileAsJson: readFileAsJson('');
	};
	
	return reader;
	
	function readFileAsJson(fileName) {
		var fs = require('fs');
		var path = __dirname + fileName;
		var file = fs.readFileSync(path, 'utf8');
	}
	
};