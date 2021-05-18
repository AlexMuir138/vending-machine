import { ProxyState } from "..//AppState.js"

function _drawSnack(){
  let snack = ProxyState.snack
  let snackTemplate = /*html*/`
  <div class="card">
  <div class="card-body text-center">
      <img src="${snack.img}" height="200">
      <p>${snack.name} - ${snack.price}</p>
    </div>
  </div>
  `
  document.getElementById('app').innerHTML = snackTemplate
}

export class SnackController{
  constructor(){
    ProxyState.on('snack', _drawSnack)
    _drawSnack()
  }
}