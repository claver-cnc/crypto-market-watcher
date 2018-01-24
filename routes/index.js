import express from 'express';

const router = express.Router();
const User = require('../models/user') ;
const passport = require('passport') ;

/* GET index page.
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Express Claver Nambegue Coulibaly'
  });
});

 */
 /* GET page home */
router.get('/home', (req, res) => {
  res.render('home');
});


router.get('/', (req, res) => {
  res.render('index', {
    title: 'Express Claver Nambegue Coulibaly'
  });
});

/* GET index page. */
router.post('/', passport.authentificate('local', {

	successRedirect: '/home', 
	failureRedirect: '/'
  /*User.authentificate(req.body.email, req.body.password, (err, user) =>{
  	if(err || user==false){
  		console.log('problem logging in', err);
  		res.redirect('/login') ;
  	} else{
  		console.log('successful login');
  		res.redirect('/home') ;
  	}
  	})
  */

}));


/* GET page home */
router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', (req, res) => {
	console.log('body', req.body) ;

const user = new User({ email: req.body.email, 
	password: req.body.pwd });

user.save((err) =>{
	if(err){
		console.log('There was an error saving the User', err);
	}

	res.redirect('/home');
});

});



export default router;
