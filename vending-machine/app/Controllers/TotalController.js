import { ProxyState } from "../AppState.js";

function drawTotal(){
  let total = ProxyState.transactionTotal
  let totalTemplate = /*html*/ `
  <div class="card">
  <div class="card-body text-center">
      <p>Total- ${transactionTotal}</p>
    </div>
  </div>
  `
  document.getElementById('total').innerHTML = totalTemplate
}

export default class TotalController{
constructor(){
  
}
}