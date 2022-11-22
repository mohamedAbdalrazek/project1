import express from 'express';
import routes from './routes';

const app = express();

const port = 3030;

app.use('/api', routes);

// sending a html pages when open certain api
// app.get('/api', (req,res)=>{
//   res.send('server working')
// });

// app.get('/css', (req,res)=>{
//   res.send('<h2 style="background-color: grey; text-align: center">  performing some css properties!    </h2>')
// });

// app.get('/image',(req,res)=>{
//   res.send('<p> Here we go!</p>')

// })

// to initialize the local server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
