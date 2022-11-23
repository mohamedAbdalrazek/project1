"use strict";
//here is our tests for the project;
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// first lets test if invalid url is given:
// i.e. we test mid1:
var mid1_1 = __importDefault(require("../middlewares/mid1"));
var express_1 = __importDefault(require("express"));
var sharp = require('sharp');
it('expect Error message happens when giving width&height not numbers', function () {
    expect((0, mid1_1.default)(req, express_1.default.Request, res, express_1.default.Response, next, Function)).toEqual(25);
});
// sharp(`images/${filename}.jpg`).resize(w,h).toFile(`public/resimg/R${filename}.jpg`)
