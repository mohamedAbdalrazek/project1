//This Midlleware is used to resize the image & catching errors in the url if occured

import express from 'express';
import sharp from 'sharp';
import fs from 'fs';

const Resize = async (
  req: express.Request,
  res: express.Response,
  // eslint-disable-next-line @typescript-eslint/ban-types
  next: Function
) => {
  const filename = req.query.filename;
  const w = parseInt(req.query.width as string);
  const h = parseInt(req.query.height as string);
  const path = `resimg/Resized${h}_${w}${filename}.jpg`;

  //resizing image
  if (fs.existsSync(`public/resimg/Resized${h}_${w}${filename}.jpg`)) {
    console.log('the resized image is already exist! ');
    return res.redirect(path);
  } else {
    try {
      await sharp(`images/${filename}.jpg`)
        .resize(w, h)
        .toFile(`public/resimg/Resized${h}_${w}${filename}.jpg`);
      console.log(`resizing ${req.query.filename} is being processed`);
      next();
    } catch (error) {
      res.send(
        '<h3 style="background-color: yellow; text-align: center; color:blue">Invalid query, please check your url query! </h3>'
      );
    }
  }
};

export default Resize;
