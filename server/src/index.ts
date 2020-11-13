import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import pruebaRoutes from './routes/pruebaRoutes';
class Server {
    public app: Application;
    public api_route = '/api/';
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
    config(): void {//configuración del server
        this.app.set('port', process.env.PORT || 3000);// en caso de encontrar un puerto habilitado por el servicio de host la tomara, sino toma el puerto 3000
        this.app.use(morgan('dev'));// muestra las peticiones que se realizan al servidor
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));

    }
    routes(): void{//rutas para acceder a la api rest, todas las rutas deben tener api_route + 'ruta'
  
        this.app.use('/',indexRoutes);
        this.app.use(this.api_route+'prueba',pruebaRoutes);

    }
    start(): void{//Función que hacer "correr" el servidor

        this.app.listen(this.app.get('port'),() =>{
            console.log('Server on port', this.app.get('port'));
            
        });
    }
}

const server =  new Server();
server.start();
