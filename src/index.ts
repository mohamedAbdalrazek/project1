import express from 'express';
import routes from './routes';

const sharp = require('sharp')

const app = express();


const port = 3030;
//when you go to http://localhost:3030
app.get('/',(req,res)=>{
  res.send('<h3 style = "color:green; text-align:center "> Welcome to our server <br>to resize your image use the following:<br> http://localhost:3030/image?filename=name&h=height&w=width<br> please wait...</h3>"')

})

//when you go to http://localhost:3030/api
app.use('/api', routes);

//using public folder as public to show images we have created
app.use(express.static('public'));

//http://localhost:3030/image?filename=fjord&h=200&w=200
app.get('/image',(req,res, next)=>{

  var filename = req.query.filename;
  var width = req.query.w as unknown as number
  var height = req.query.h as unknown as number
  console.log(filename,width,height);

  //resizing image
  const imaGe = sharp('filename').resize(200,200).toFile(`public/resimg/${filename}.jpg`)

  //displaying the image resized
  var path = `/resimg/${filename}.jpg`;
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
