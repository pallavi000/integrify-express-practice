"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateParams = void 0;
const helpers_1 = require("../utils/helpers");
const ApiError_1 = require("../errors/ApiError");
function validateParams(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const isValid = (0, helpers_1.isNumber)(req.params.id);
        if (!isValid) {
            const error = ApiError_1.ApiError.badRequest("Invalid Params.");
            return res
                .status(error.code)
                .json({ code: error.code, msg: error.message });
        }
        next();
    });
}
exports.validateParams = validateParams;
