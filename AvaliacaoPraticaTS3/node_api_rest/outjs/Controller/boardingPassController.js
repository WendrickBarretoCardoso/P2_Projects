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
const { execSQLQuery } = require("../Config/db");
exports.getAllBoardingPasses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield execSQLQuery("SELECT * FROM boarding_pass");
    res.json(results);
});
exports.getgetBoardingPassById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const results = yield execSQLQuery("SELECT * FROM boarding_pass WHERE boarding_pass_id = " + id);
    res.json(results);
});
//# sourceMappingURL=boardingPassController.js.map