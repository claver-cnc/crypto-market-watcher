const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user') ;

function configure(passport){

	const StrategyFunc = function(email, password, done){

		User.authentificate(email, password, function(err, user){
			if(err){
				console.log('LocalStrategy - Error trying to authentificate');
				done(err) ;
			}
			else if(user){
				console.log('LocalStrategy - Successful login');
				done(null, user);
			}
		});
	}

	passport.use(new LocalStrategy(StrategyFunc)) ;

	passport.serializeUser(function(user, done){
		done(null, user.id);
	}) ;

	passport.deserializeUser(function(id, done){
		User.findById(id, function(err, user){
			done(err, user) ;
		});
	});
}


module.exports = {
	configure 
};