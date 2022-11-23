
import express from 'express'
const sharp = require('sharp')

//this midlleware is used to resize the image
const Resize = async (
    req: express.Request, 
    res: express.Response, 
    next: Function
)=>{

    console.log(`resizing ${req.query.filename} is being processed`)

    const filename = req.query.filename;
    const w = parseInt(req.query.width as string)
    const h = parseInt(req.query.height as string)
    // console.log(filename,w,h);
  
    //resizing image
    const image = await sharp(`images/${filename}.jpg`).resize(w,h).toFile(`public/resimg/R${filename}.jpg`)


    next()

};


export default Resize