import { Router } from "express"
import Auth from "./Auth"
import Configuration from "../configuration"

export const Routes = (config: Configuration) => {
    const router = Router()
    router.use("/auth", new Auth(config).getRouter())
    return router
}