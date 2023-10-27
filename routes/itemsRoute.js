"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const items = [1, 2, 3, 4, 5, 6];
router.get("/", (_, res) => {
    res.json({ items });
});
router.get("/:itemIndex", (req, res) => {
    const index = Number(req.params.itemIndex);
    res.json({ items: items[index] });
});
exports.default = router;
