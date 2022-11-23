"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var sharp = require('sharp');
var app = (0, express_1.default)();
var port = 3030;
//when you go to http://localhost:3030
app.get('/', function (req, res) {
    res.send('<h3 style = "color:green; text-align:center "> Welcome to our server <br>to resize your image use the following:<br> http://localhost:3030/image?filename=name&h=height&w=width<br> please wait...</h3>"');
});
//when you go to http://localhost:3030/api
app.use('/api', routes_1.default);
//using public folder as public to show images we have created
app.use(express_1.default.static('public'));
//http://localhost:3030/image?filename=fjord&height=200&width=200
app.get('/image', function (req, res, next) {
    var filename = req.query.filename;
    var w = parseInt(req.query.width);
    var h = parseInt(req.query.height);
    // console.log(filename,w,h);
    //resizing image
    var image = sharp("image/".concat(filename, ".jpg")).resize(w, h).toFile("public/resimg/".concat(filename, ".jpg"));
    //displaying the image resized
    var path = "/resimg/".concat(filename, ".jpg");
    return res.redirect(path);
});
// to initialize the local server
app.listen(port, function () {
    console.log("server started at http://localhost:".concat(port));
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
