
class Configuration {
    port: number
    environment: string
    constructor() {
        this.port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
        this.environment = process.env.NODE_ENV || 'development'
    }

    getPort(): number {
        return this.port;
    }
    getEnvironment(): string {
        return this.environment;
    }
}

export default Configuration;