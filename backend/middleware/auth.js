function userAuth(req, res, next) {
  if (req.session.userId) {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
}

function adminAuth(req, res, next) {
  if (req.session.adminId) {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
}

module.exports = {
  userAuth,
  adminAuth,
};
