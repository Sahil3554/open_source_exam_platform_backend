import express, { Request, Response } from 'express'
import { Router } from 'express'
import { Routes } from './routes'
import dotenv from 'dotenv'
import Configuration from './configuration';
class App {
    private config: Configuration;
    private app: express.Application;
    constructor(config: Configuration) {
        this.config = config
        this.app = express()
    }
    configure() {
        dotenv.config()
        this.app.use(express.json())
        this.app.use("/api", Routes(this.config));
        this.app.get('*', (req: Request, res: Response) => {
            res.status(404).send('Not found')
        })
    }
    run() {
        this.app.listen(this.config.getPort(), () => {
            console.log(`Server running on ${this.config.getPort()} in ${this.config.getEnvironment()} mode`)
        })
    }
}

export default App