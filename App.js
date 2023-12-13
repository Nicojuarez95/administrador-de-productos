import { Product } from "./Product.js";
import { UI } from "./UI.js";

function callAddProduct(){
  let products = JSON.parse(localStorage.getItem("products")) || [];
  const ui = new UI();
  for(let product of products){
    ui.addHtml(product)
  }
}
callAddProduct()

document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value,
      price = document.getElementById("price").value,
      year = document.getElementById("year").value;

    if (name === "" || price === "" || year === "") {
      const ui = new UI();
      ui.showMessage("Por favor ingrese todos los datos", "danger");
      return; 
    }

    const product = new Product(name, price, year);
    const ui = new UI();

    ui.addProduct(product);
    ui.showMessage("Producto agregado correctamente", "success");
    ui.resetForm();
  });

document
  .getElementById("product-list")
  .addEventListener("click", (event) => {
    const ui = new UI();
    ui.deleteProduct(event.target);
  });



