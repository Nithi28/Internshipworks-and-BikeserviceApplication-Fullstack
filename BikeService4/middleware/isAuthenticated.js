function isAuthenticated(req, res, next) {
    if (req.session.user) {
        return next();
    } else {
        res.redirect('/'); // Redirect to the main page or login page if not authenticated
    }
}
module.exports=isAuthenticated;