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
    res.send('<h1 style = "color:green; text-align:center "> Welcome to our server </h1> ');
});
//when you go to http://localhost:3030/api
app.use('/api', routes_1.default);
app.use(express_1.default.static('img'));
app.get('/img', function (req, res) {
    var imaGe = sharp('monaliza.jpg').resize(400, 200).toFile('resimg/monalizaResized.jpg');
    res.send("<h1 style = 'color:orange; text-align:center '>proccessing your image please wait..");
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
