"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
    res.send('<h3 style = "color:red; padding-top:50px;padding-left:10px "> You aRe iN Api now! </h3> ');
});
exports.default = routes;
