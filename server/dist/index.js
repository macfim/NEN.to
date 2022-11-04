"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const app_1 = __importDefault(require("./app"));
const http_1 = __importDefault(require("http"));
const PORT = process.env.PORT;
const server = http_1.default.createServer(app_1.default);
server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
