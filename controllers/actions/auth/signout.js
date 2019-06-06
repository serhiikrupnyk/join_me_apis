function signOut(req, res) {
    req.logout();
    res.redirect('/');
}

module.exports = signOut;
