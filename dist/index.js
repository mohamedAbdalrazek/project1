"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 3030;
//sending a html pages when open certain api
app.get('/api', function (req, res) {
    res.send('server working');
});
app.get('/css', function (req, res) {
    res.send('<h2 style="background-color: grey; text-align: center">  performing some css properties!    </h2>');
});
app.get('/image', function (req, res) {
    res.send('<p> Here we go!</p>');
});
// to initialize the local server
app.listen(port, function () {
    console.log("server started at http://localhost:".concat(port));
});
