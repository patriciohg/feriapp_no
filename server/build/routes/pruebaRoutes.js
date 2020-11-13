"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class PruebaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('bai'));
    }
}
const pruebaRoutes = new PruebaRoutes();
exports.default = pruebaRoutes.router;
