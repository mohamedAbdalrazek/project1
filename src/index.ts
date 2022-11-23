import express from 'express';
import routes from './routes';
import mid1 from './middlewares/mid1';

const sharp = require('sharp')

const app = express();


const port = 3030;
//when you go to http://localhost:3030
app.get('/',(req,res)=>{
  res.send('<h3 style = "color:green; text-align:center "> Welcome to our server <br>to resize your image use the following:<br> http://localhost:3030/image?filename=name&height=height&width=width<br></h3>"')

})

//when you go to http://localhost:3030/api
app.use('/api', routes);

//using public folder as public to show images we have created
app.use(express.static('public'));

//http://localhost:3030/image?filename=fjord&height=200&width=200
app.get('/image',mid1,(req,res, next)=>{

  const filename = req.query.filename;
  const w = parseInt(req.query.width as string)
  const h = parseInt(req.query.height as string)
  // console.log(filename,w,h);

  //resizing image
  const image = sharp(`images/${filename}.jpg`).resize(w,h).toFile(`public/resimg/R${filename}.jpg`)

  //displaying the image resized
  var path = `resimg/R${filename}.jpg`;
  return res.redirect(path);
  }

)




// to initialize the local server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

















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
