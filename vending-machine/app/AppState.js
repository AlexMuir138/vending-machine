
import { Currency } from "./Models/Purchase.js"
import { Snack } from "./Models/Snack.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {

  snack = new Snack("Milky Way", 1.00, 'https://images.heb.com/is/image/HEBGrocery/000121399')
  snack = new Snack("Cheetos", 1.5, 'https://images-na.ssl-images-amazon.com/images/I/91dl7O-wxhL._SL1500_.jpg' )

  transactionTotal = 0
  currencies = {
    dollar: new Currency("dollar", 1.00),
    quarter: new Currency("quarter", .25),
    dime: new Currency("dime", .10),
    nickel: new Currency("nickel", .05)
  }
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
