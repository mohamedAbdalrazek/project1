"use strict";
//This Midlleware is used to resize the image & catching errors in the url if occured
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_1 = __importDefault(require("sharp"));
var fs_1 = __importDefault(require("fs"));
var Resize = function (req, res, 
// eslint-disable-next-line @typescript-eslint/ban-types
next) { return __awaiter(void 0, void 0, void 0, function () {
    var filename, w, h, w_1, h_1, path, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                filename = req.query.filename;
                w = req.query.width;
                h = req.query.height;
                if (!(isNaN(w) || isNaN(h))) return [3 /*break*/, 1];
                res.send('<h3 style="background-color: yellow; text-align: center; color:red">check height and width! </h3>');
                return [3 /*break*/, 5];
            case 1:
                w_1 = parseInt(req.query.width);
                h_1 = parseInt(req.query.height);
                path = "resimg/Resized".concat(h_1, "_").concat(w_1).concat(filename, ".jpg");
                if (!fs_1.default.existsSync("public/resimg/Resized".concat(h_1, "_").concat(w_1).concat(filename, ".jpg"))) return [3 /*break*/, 2];
                console.log('the resized image is already exist! ');
                return [2 /*return*/, res.redirect(path)];
            case 2:
                _a.trys.push([2, 4, , 5]);
                return [4 /*yield*/, (0, sharp_1.default)("images/".concat(filename, ".jpg"))
                        .resize(h_1, w_1)
                        .toFile("public/resimg/Resized".concat(h_1, "_").concat(w_1).concat(filename, ".jpg"))];
            case 3:
                _a.sent();
                console.log("resizing ".concat(req.query.filename, " is being processed"));
                next();
                return [3 /*break*/, 5];
            case 4:
                error_1 = _a.sent();
                res.send('<h3 style="background-color: yellow; text-align: center; color:blue">Invalid filename! </h3>');
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.default = Resize;
