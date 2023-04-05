const express = require('express')
const router = express.Router()
const UsersModel = require('../models/Users')

router.get('/', async (req, res) => {
  try {
    const users = await UsersModel.getUsers()
    res.send(users)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const users = await UsersModel.getUsersById(req.params.id)
    res.send(users)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
})

module.exports = router