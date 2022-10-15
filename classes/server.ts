import express from 'express'

export default class Server{
    public app: express.Application;
    public port:number = 5000;

    constructor(){
        this.app = express();

    }

    //iniciar servidor

    Start(callback:Function){
        this.app.listen(this.port,callback());

    }
}