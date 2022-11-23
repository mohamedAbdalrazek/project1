//This Midlleware is used to resize the image & catching errors in the url if occured

import express from 'express';
import sharp from 'sharp';

const Resize = async (
  req: express.Request,
  res: express.Response,
  // eslint-disable-next-line @typescript-eslint/ban-types
  next: Function
) => {
  console.log(`resizing ${req.query.filename} is being processed`);

  const filename = req.query.filename;
  const w = parseInt(req.query.width as string);
  const h = parseInt(req.query.height as string);
  // console.log(filename,w,h);

  //resizing image
  try {
    await sharp(`images/${filename}.jpg`)
      .resize(w, h)
      .toFile(`public/resimg/R${filename}.jpg`);
    next();
  } catch (error) {
    res.send(
      '<h3 style="background-color: yellow; text-align: center; color:blue">Invalid query, please check your url query! </h3>'
    );
  }
};

export default Resize;
