module.exports = (req, res, next) => {
  if (req.user && req.user.adminStatus) {
    next()
  } else {
    const err = Error('Not allowed! You must be an admin!')
    err.status = 401
    next(err)
  }
}
