require('dotenv').config()

const SecretFront = (req, res, next) => {
  if (req.headers.authorization === process.env.SECRET_FRONT) {
    next()
  } else {
    res.status(403).json({ message: 'Token de autorização inválido. Envie o token de autorização no header da sua requisição.' })
  }
}

module.exports = SecretFront