import express from 'express';
const routes = express.Router();

routes.get('/', (req, res) => {
  res.send(
    '<h1 style = "color:green; text-align:center "> Welcome to api! </h1>  '
  );
});

export default routes;
