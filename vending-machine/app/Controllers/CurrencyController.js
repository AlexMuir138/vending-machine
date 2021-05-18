import { ProxyState } from "../AppState.js";
import { snackService } from "../Services/SnackService.js";


//Private
function _drawCurrency() {
  let template = ''
  Object.values(ProxyState.currencies)
    .forEach(currency => {
      template += /*html*/ `
    <div class="text-center"> 
      <button onclick="app.currencyController.currency('${currency.name}')">
      ${currency.name} - ${currency.price}
      </button>
    </div>
    `
    })
    document.getElementById('price').innerHTML = template

}


//Public
export default class CurrencyController {
  constructor() {
    ProxyState.on("currencies", _drawCurrency);
    _drawCurrency()
  }
  currency(currencyName){
    snackService.runCurrency(currencyName)
  }

}
