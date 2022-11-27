//this is the main project ts file

import express, { Application } from 'express';
import routes from './routes';
import Resize from './middlewares/mid1';
import mid2 from './middlewares/mid2';

const app: Application = express();
// eslint-disable-next-line @typescript-eslint/no-inferrable-types
const port:number = 3030;

//when you go to http://localhost:3030
app.get('/', (req : express.Request, res: express.Response):void => {
  res.send(
    '<h3 style = "color:green; text-align:center "> Welcome to our server <br>to resize your image use the following:<br> http://localhost:3030/image?filename=name&height=height&width=width<br></h3>"'
  );
});

//when you go to http://localhost:3030/api
app.use('/api', routes);

//using static public to show images we have created
app.use(express.static('public'));

//here is the main HTTP REQUEST for resizing image, we used 2 middlewares to
//perform the sizing (mid1.ts, mid2.ts)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.get('/image', Resize, mid2, (req: express.Request, res: express.Response, next) :void => {
  const filename = req.query.filename;
  const w = (req.query.width as unknown) as number;
  const h = (req.query.height as unknown) as number;

    const path = `resimg/Resized${h}_${w}${filename}.jpg`;

    //displaying the image resized
    res.redirect(path);
  



});
//example of valid url to resize (a.jpg) in images folder:
//http://localhost:3030/image?filename=b&height=200&width=200

// to initialize the local server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
