"use strict";
//this is the main project ts file
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var mid1_1 = __importDefault(require("./middlewares/mid1"));
var mid2_1 = __importDefault(require("./middlewares/mid2"));
var app = (0, express_1.default)();
var port = 3030;
//when you go to http://localhost:3030
app.get('/', function (req, res) {
    res.send('<h3 style = "color:green; text-align:center "> Welcome to our server <br>to resize your image use the following:<br> http://localhost:3030/image?filename=name&height=height&width=width<br></h3>"');
});
//when you go to http://localhost:3030/api
app.use('/api', routes_1.default);
//using static public to show images we have created
app.use(express_1.default.static('public'));
//here is the main HTTP REQUEST for resizing image, we used 2 middlewares to 
//perform the sizing (mid1.ts, mid2.ts)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.get('/image', mid1_1.default, mid2_1.default, function (req, res, next) {
    var filename = req.query.filename;
    var path = "resimg/R".concat(filename, ".jpg");
    //displaying the image resized
    return res.redirect(path);
});
//example of valid url to resize (a.jpg) in images folder:
//http://localhost:3030/image?filename=b&height=200&width=200
// to initialize the local server
app.listen(port, function () {
    console.log("server started at http://localhost:".concat(port));
});
exports.default = app;
