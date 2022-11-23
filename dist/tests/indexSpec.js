"use strict";
//here is our tests for the api;
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// first lets test if the server can be initialized without problems
var supertest_1 = __importDefault(require("supertest"));
var index_1 = __importDefault(require("../index"));
describe('Server', function () {
    it('Server initialized correctly', function (done) {
        (0, supertest_1.default)(index_1.default)
            .get('/')
            .expect(200)
            .end(function (error) { return (error) ? done.fail(error) : done(); });
    });
    it('api is working ', function (done) {
        (0, supertest_1.default)(index_1.default)
            .get('/api')
            .expect(200)
            .end(function (error) { return (error) ? done.fail(error) : done(); });
    });
});
//Image resizing tests
describe('image resizing', function () {
    it('image resizing for an existing file  ', function (done) {
        (0, supertest_1.default)(index_1.default)
            .get('/image?filename=b&height=200&width=200')
            .expect(302)
            .end(function (error) { return (error) ? done.fail(error) : done(); });
    });
    it('image resizing for non-existing file ', function (done) {
        (0, supertest_1.default)(index_1.default)
            .get('/image?filename=j&height=200&width=200')
            .expect(200)
            .end(function (error) { return (error) ? done.fail(error) : done(); });
    });
    it('image resizing for with invalid query ', function (done) {
        (0, supertest_1.default)(index_1.default)
            .get('/image?filename=j&height=2ef00&width=200')
            .expect(200)
            .end(function (error) { return (error) ? done.fail(error) : done(); });
    });
});
