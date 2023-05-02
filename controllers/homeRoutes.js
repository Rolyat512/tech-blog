const router = require('express').Router();
const withAuth = require('../utils/auth');

//root page welcome screen
router.get('/', async (req, res) => {
    try {
        //res.json({message: 'This will be the welcome page'} )
        res.render('welcome') //this will be for redner the welcome handlebars layout when the site first loads
    } catch (err) {
        res.status(400).json({message: 'No welcome found'});
        console.log(err)
    }
});
 
// route to bring the user to the their homepage after they signup or login 
// route: /home
router.get('/home', withAuth, async (req, res) => {
   
    try {
        //res.json({message: 'This will be the home page after user is logged in'} )
        res.render('homepage',{isLoggedIn:req.session.loggedIn}) //this will be for redner the home handlebars layout 
    } catch (err) {
        res.status(400).json({message: 'No homepage found'});
        console.log(err)
    }
});


module.exports = router;