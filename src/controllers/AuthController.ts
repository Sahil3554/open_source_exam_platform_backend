import Configuration from "@src/configuration";
import { Request, Response } from "express";

class AuthController {
    private config: Configuration
    constructor(config: Configuration) {
        this.config = config;
    }

    async login(req: Request, res: Response) {
        try {
            res.status(200).send("login success")
        } catch (err: any) {
            res.status(500).send(err.message)
        }
    }

}
export default AuthController