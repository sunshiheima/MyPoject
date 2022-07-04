module.exports = (req, res, next) => {
  res.msg = (msg, data = null, status = 200) => {
    res.send({
      status,
      data: data,
      message: msg instanceof Error ? msg.message : msg,
    })
  }
  next();
}