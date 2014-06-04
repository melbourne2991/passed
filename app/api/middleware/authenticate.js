module.exports = function(req, res, next, passport) {
	passport.deserializeUser(function( user, done ) {
	    done( null, user );
	});
		
	if(req.isAuthenticated()) {
		next();
	} else {
		res.send('Not Authenticated');
	}
	// if(!req.suppliedCredentials || !req.suppliedCredentials.username || !req.suppliedCredentials.password) {
	// 	res.send('Missing required credentials');
	// } else {
	// 	if(!req.body.username) req.body.username = req.suppliedCredentials.username;
	// 	if(!req.body.password) req.body.password = req.suppliedCredentials.password;
	// }

	// passport.authenticate('local', { session: false }, function(err, user, info) {
	// 	if(!user) {
	// 		res.send('Not Authenticated.');
	// 	} else {
	// 		next();
	// 	}
	// })(req, res, next);
}