exports.authenticate = (req, res, next)=> {
    if (req.session && req.session.user) {
        return next();
    }
    req.flash('error', 'Please log in to access this page');
    return res.redirect("/survey");
};

exports.isAdminAuthenticated = (req, res, next) => {
    if (req.session && req.session.admin) {
        return next();
    }
    return res.redirect("/admin/login");
}