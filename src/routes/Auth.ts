import Configuration from "@src/configuration";
import AuthController from "../controllers/AuthController";
import { Router } from "express";

class AuthRoute {
    router: Router;
    authController: AuthController;
    config: Configuration;
    constructor(config: Configuration) {
        this.router = Router();
        this.authController = new AuthController(config);
    }
    setRoutes() {
        this.router.get("/login", this.authController.login)
    }
    getRouter(): Router {
        this.setRoutes();
        return this.router;
    }
}

export default AuthRoute;