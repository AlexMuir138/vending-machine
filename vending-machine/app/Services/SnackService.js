import { ProxyState } from "../AppState.js";

class SnackService {
  runCurrency(currencyName){
    let currency = ProxyState.currencies[currencyName]
  
    if(!currency){
      throw new Error('Bad currency' + currencyName)
    }
    ProxyState.transactionTotal += currency.price 
    
  }
}

export const snackService = new SnackService();

