import express from 'express';

const router = express.Router();

/* GET index page. */
router.get('/login', (req, res) => {
  res.render('Login');
});


/* GET page home */
router.get('/register', (req, res) => {
  res.render('register');
});


export default router;
