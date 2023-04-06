const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Access denied. No token provided.');

  console.log(token);

  try {
    const key = config.get('jwtPrivateKey');
    const tokenFormat  = token.replace("Bearer ", "");
    const decoded = jwt.verify(tokenFormat, key);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send('Invalid token.');
  }
};
