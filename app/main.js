import PokeController from "./Controllers/PokeController.js";
import { CapturedPokeController } from "./Controllers/CapturedPokeController.js"
class App {
  pokeController = new PokeController();

  capturePokeController = new CapturedPokeController();
}

window["app"] = new App();
