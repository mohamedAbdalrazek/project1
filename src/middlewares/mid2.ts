import express from 'express';

//this midlleware is used to print in console that the resizing has finished
const mid2 = (
  req: express.Request,
  res: express.Response,
  // eslint-disable-next-line @typescript-eslint/ban-types
  next: Function
): void => {
  console.log(`resizing ${req.query.filename} has finished!`);
  next();
};

export default mid2;
