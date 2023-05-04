const router = require('express').Router();
const withAuth = require('../utils/auth');

//root page welcome screen
router.get('/', async (req, res) => {
    try {
        res.render('welcome')
    } catch (err) {
        res.status(400).json({message: 'No welcome found'});
        console.log(err)
    }
});
 
router.get('/home', withAuth, async (req, res) => {
   
    try {
        res.render('homepage',{isLoggedIn:req.session.loggedIn})
    } catch (err) {
        res.status(400).json({message: 'No homepage found'});
        console.log(err)
    }
});


module.exports = router;