"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//this midlleware is used to print in console that the resizing has finished
var mid2 = function (req, res, 
// eslint-disable-next-line @typescript-eslint/ban-types
next) {
    console.log("resizing ".concat(req.query.filename, " has finished!"));
    next();
};
exports.default = mid2;
