import {  Router } from 'express';
class PruebaRoutes{

    public router: Router = Router();
    constructor(){

        this.config();

    }
    config():   void{

        this.router.get('/', (req,res) => res.send('bai'));

    }

}
const pruebaRoutes =  new PruebaRoutes();
export default pruebaRoutes.router;