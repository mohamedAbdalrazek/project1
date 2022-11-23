
import express from 'express'

const mid1 = (
    req: express.Request, 
    res: express.Response, 
    next: Function
): void => {

    console.log('hello from mid1!')


};


export default mid1