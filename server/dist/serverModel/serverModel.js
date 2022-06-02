"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const articles_1 = __importDefault(require("../routes/articles"));
const database_service_1 = require("../services/database.service");
const DEV_PORT = 5000;
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = /* process.env.PORT ||  */ DEV_PORT;
        ;
        this.middlewares();
        (0, database_service_1.connectToDatabase)().then(() => this.routes());
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static(path_1.default.join(__dirname, '../../../client/build')));
    }
    routes() {
        this.app.use('/api', articles_1.default);
        this.app.get("*", (req, res) => {
            res.sendFile(path_1.default.join(__dirname, "../../../client/build/index.html"));
        });
        this.app.use((err, req, res, next) => {
            res.status(500).json({ message: err.message });
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Server running on port: ", this.port);
        });
    }
}
exports.default = Server;
