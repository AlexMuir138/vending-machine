import { ProxyState } from "./AppState.js";
import CurrencyController from "./Controllers/CurrencyController.js";
import { SnackController } from "./Controllers/SnackController.js";

class App {
  currencyController = new CurrencyController()
  snackController = new SnackController()
}

console.log(ProxyState)

window["app"] = new App();
