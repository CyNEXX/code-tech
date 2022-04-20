import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import path from 'path';
import articlesRoutes from '../routes/articles';


const DEV_PORT = 5000;

class Server {
    private port: string | number;
    private app: any;

    constructor() {
        this.app = express();
        this.port = /* process.env.PORT ||  */DEV_PORT;

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static(path.join(__dirname, '../../../client/build')));
    }

    routes() {
        this.app.use('/api', articlesRoutes);

        this.app.get("*", (req: Request, res: Response) => {
            res.sendFile(
                path.join(__dirname, "../../../client/build/index.html")
            );
        });

        this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
            res.status(500).json({ message: err.message });
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Server running on port: ", this.port);
        });
    }
}

export default Server;