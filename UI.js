export class UI {

  addHtml(product){
    const { name, price, year, id } = product;
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.setAttribute("id", id);
    element.innerHTML = `
      <div class="card text-center mb-4">
        <div class="producto">
          <div class="card-objet">
            <strong>Producto</strong>: ${name} -
            <strong>Precio</strong>: $<span class="product-price">${price}</span> - 
            <strong>Año</strong>: ${year}
          </div>
          <div class="contbtn">
            <button class="btn btn-danger delete-product" id=${id} name="delete">Eliminar producto</button>
            <button class="btn btn-primary edit-product" name="edit">Editar precio</button>
            <button class="btn btn-success save-product" name="save" style="display: none;">Guardar</button>
          </div>
        </div>
        <div class="card-footer">
          <input type="number" class="form-control edit-price" style="display: none;">
        </div>
      </div>
    `;
    productList.appendChild(element);
    //BORRAR//
// Agrega el evento click al botón "Eliminar producto"
const deleteButton = element.querySelector(".delete-product");
deleteButton.addEventListener("click", (event) => {
  const productId = event.target.id;
  const products = JSON.parse(localStorage.getItem("products")) || [];

  const updatedProducts = products.filter((product) => product.id !== productId);
  localStorage.setItem("products", JSON.stringify(updatedProducts));

  element.remove();
  showMessage("Producto eliminado correctamente", "success");
});
  //EVENTO AL BOTON EDITAR PRODUCTO//
    // Agrega el evento click al botón "Editar precio"
    const editButton = element.querySelector(".edit-product");
    editButton.addEventListener("click", () => {
    const priceElement = element.querySelector(".product-price");
    const inputElement = element.querySelector(".edit-price");
    const saveButton = element.querySelector(".save-product");

    // Muestra el input para editar el precio y oculta el precio actual
    inputElement.value = product.price;
    priceElement.style.display = "none";
    inputElement.style.display = "inline-block";
    // Muestra el botón "Guardar" y oculta el botón "Editar precio"
    saveButton.style.display = "inline-block";
    editButton.style.display = "none";
  });
  
  
  function updateLocalStorage(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }
  //GUARDAR DESPUES DE EDITAR PRECIO//
  // Agrega el evento click al botón "Guardar"
  const saveButton = element.querySelector(".save-product");
  saveButton.addEventListener("click", () => {
  const priceElement = element.querySelector(".product-price");
  const inputElement = element.querySelector(".edit-price");
  product.price = inputElement.value;
  product.id = parseInt(element.getAttribute("id")).toString();

  // Actualiza el precio en el elemento HTML correspondiente
  priceElement.innerHTML = product.price;

  // Oculta el input y muestra el precio actual
  inputElement.style.display = "none";
  priceElement.style.display = "inline-block";
  // Oculta el botón "Guardar" y muestra el botón "Editar precio"
  saveButton.style.display = "none";
  const editButton = element.querySelector(".edit-product");
  editButton.style.display = "inline-block";
  // Obtiene los productos del LocalStorage
  let products = JSON.parse(localStorage.getItem("products"));

  // Busca el producto correspondiente y actualiza su precio
  products = products.map((p) => {
    if (p.name === product.name && p.year === product.year) {
      return product;
    }
    return p;
  });
  // Actualiza el LocalStorage con los nuevos precios
  updateLocalStorage(products);
});
}
  addProduct(product) {
    const { name, price, year } = product;
    const productList = document.getElementById("product-list");
    const id = product.id || Date.now().toString();
    const element = document.createElement("div");
    element.setAttribute("id", id);
    element.innerHTML = `
      <div class="card text-center mb-4">
        <div class="producto">
          <div class="card-objet">
            <strong>Producto</strong>: ${name} -
            <strong>Precio</strong>: $<span class="product-price">${price}</span> - 
            <strong>Año</strong>: ${year}
          </div>
          <div class="contbtn">
            <button class="btn btn-danger delete-product" id=${id} name="delete">Eliminar producto</button>
            <button class="btn btn-primary edit-product" name="edit">Editar precio</button>
            <button class="btn btn-success save-product" name="save" style="display: none;">Guardar</button>
          </div>
        </div>
        <div class="card-footer">
          <input type="number" class="form-control edit-price" style="display: none;">
        </div>
      </div>
    `;
    productList.appendChild(element);

    // Crea un objeto para el producto y lo agrega al Local Storage
    const productObj = { id, name, price, year };
    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.push(productObj);
    localStorage.setItem("products", JSON.stringify(products));

    this.showMessage("Producto agregado correctamente", "success");
    this.resetForm();
  
    //EVENTO AL BOTON EDITAR PRODUCTO//

    // Agrega el evento click al botón "Editar precio"
    const editButton = element.querySelector(".edit-product");
    editButton.addEventListener("click", () => {
    const priceElement = element.querySelector(".product-price");
    const inputElement = element.querySelector(".edit-price");
    const saveButton = element.querySelector(".save-product");

    // Muestra el input para editar el precio y oculta el precio actual
    inputElement.value = product.price;
    priceElement.style.display = "none";
    inputElement.style.display = "inline-block";

    // Muestra el botón "Guardar" y oculta el botón "Editar precio"
    saveButton.style.display = "inline-block";
    editButton.style.display = "none";
  });

  function updateLocalStorage(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }


  //GUARDAR DESPUES DE EDITAR PRECIO//
  
  // Agrega el evento click al botón "Guardar"
  const saveButton = element.querySelector(".save-product");
  saveButton.addEventListener("click", () => {
  const priceElement = element.querySelector(".product-price");
  const inputElement = element.querySelector(".edit-price");

  product.price = inputElement.value;
  product.id = parseInt(element.getAttribute("id")).toString();

  // Actualiza el precio en el elemento HTML correspondiente
  priceElement.innerHTML = product.price;

  // Oculta el input y muestra el precio actual
  inputElement.style.display = "none";
  priceElement.style.display = "inline-block";

  // Oculta el botón "Guardar" y muestra el botón "Editar precio"
  saveButton.style.display = "none";
  const editButton = element.querySelector(".edit-product");
  editButton.style.display = "inline-block";

  // Obtiene los productos del LocalStorage
  let products = JSON.parse(localStorage.getItem("products"));
  
  // Busca el producto correspondiente y actualiza su precio
  products = products.map((p) => {
    if (p.name === product.name && p.year === product.year) {
      return product;
    }
    return p;
  });

  // Actualiza el LocalStorage con los nuevos precios
  updateLocalStorage(products);
});


//BORRAR//

// Agrega el evento click al botón "Eliminar producto"
const deleteButton = element.querySelector(".delete-product");
deleteButton.addEventListener("click", (element) => {
  deleteProduct(element)
  // element.remove();
  showMessage("Producto eliminado correctamente", "success");
})
}
deleteProduct(element) {
  if (element.name === "delete") {
    const productCard = element.parentElement.parentElement.parentElement;
    console.log(productCard)
    if (!productCard) {
      return; // salimos de la función si no hay productCard
    }
    // const productId = productCard.getAttribute("id");
    // if (!productId) {
    //   return; // salimos de la función si no hay productId
    // }
    // Eliminar el producto del LocalStorage
    let products = JSON.parse(localStorage.getItem("products"));
    products = products.filter((p) => p.id.toString() !== element.id.toString());
    localStorage.setItem("products", JSON.stringify(products));

    // Eliminar el producto de la lista de productos
    productCard.remove();
  }
}




/**
   * Reset Form Values
   */
  resetForm() {
    document.getElementById("product-form").reset();
  }

  showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-2`;
    div.appendChild(document.createTextNode(message));

    // Show in The DOM
    const container = document.querySelector(".container");
    const app = document.querySelector("#App");

    // Insert Message in the UI
    container.insertBefore(div, app);

    // Remove the Message after 3 seconds
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}

const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();

  const productCards = document.querySelectorAll(".card.text-center.mb-4");
  productCards.forEach((card) => {
    const productName = card.querySelector(`.producto .card-objet`).textContent.toLowerCase();

    if (productName.includes(searchTerm)) {
      card.style.display = ""; // Mostrar el producto si el término de búsqueda está incluido en el nombre
    } else {
      card.style.display = "none"; // Ocultar el producto si no se incluye el término de búsqueda en el nombre
    }
  });
});

const searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita que se recargue la página al hacer click en el botón

  const searchInput = document.getElementById("search-input");
  const searchTerm = searchInput.value.toLowerCase(); // Obtener el valor de búsqueda y convertirlo a minúsculas

  const productCards = document.querySelectorAll(".card.text-center.mb-4");
  productCards.forEach((card) => {
    const productName = card.querySelector(`.producto .card-objet`).textContent.toLowerCase();

    if (productName.includes(searchTerm)) {
      card.style.display = ""; // Mostrar el producto si el término de búsqueda está incluido en el nombre
    } else {
      card.style.display = "none"; // Ocultar el producto si no se incluye el término de búsqueda en el nombre
    }
  });
});
