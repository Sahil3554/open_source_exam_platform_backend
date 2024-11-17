import App from "./app";
import Configuration from "./configuration";
const app = new App(new Configuration());
app.configure();
app.run()