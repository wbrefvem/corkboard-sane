var Sails = require('sails');
Sails.load({ port: 8008, debug: 'info' }, function(err, sails) {
	if (err) throw err;
	process.exit();
});
