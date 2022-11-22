import express from 'express'
const routes = express.Router()

routes.get('/', (req, res) => {
  res.send(
    '<h3 style = "color:green; padding-top:50px;padding-left:10px "> api is accepted </h3> '
  )
})

export default routes
