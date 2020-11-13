"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const pruebaRoutes_1 = __importDefault(require("./routes/pruebaRoutes"));
class Server {
    constructor() {
        this.api_route = '/api/';
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000); // en caso de encontrar un puerto habilitado por el servicio de host la tomara, sino toma el puerto 3000
        this.app.use(morgan_1.default('dev')); // muestra las peticiones que se realizan al servidor
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json()); //comunicación con el frontend mediante json
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use(this.api_route + 'prueba', pruebaRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
