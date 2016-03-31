window.burntIcing.registerHandler('showdown', function(require, inputMarkdown) {
	var Showdown = require('showdown');
	var converter = new Showdown.converter();

	var outputHTML = converter.makeHtml(inputMarkdown);
	//results['showdown'] = outputHTML;
	
	return outputHTML;
});