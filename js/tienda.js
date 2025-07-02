document.addEventListener("DOMContentLoaded", () => {
  const endpoint = "./data/data.json";

  const getProducts = async () => {
    try {
      Response = await fetch(endpoint);
      datos = await Response.json();
      console.log(datos);
      mostrarProductos(datos);
    } catch (err) {
      console.log(err);
    }
  };

  getProducts();

  const contenedorProd = document.querySelector('section.productos');

  const mostrarProductos = (datos) => {
    datos.forEach((item) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = ` 
       <div class="top">
           <img src="images/productos/arandanos.jpg" alt="">
           <p class="titProd">PRODUCTO 1</p>
           <p class="descrpcion">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus natus </p>
           <a href="opiniones.html" class="resenias">ver reseñas</a>
       </div>
       <div class="bottom">
           <div class="precio">
               <span>$1560</span> <button class="favorito"><i
                       class="fa-solid fa-heart"></i></button></span>
           </div>
           <div class="agregar">
               <div class="amount">
                   <span class="descrpcion"> Cant </span>
                   <input type="number" name="cant" id="cant" min="0" value="1">
               </div>
               <button class="addcarrito"><i class="fa-solid fa-cart-plus"></i></button>
           </div>
       </div>    
       `;

    });
    contenedorProd.appendchild(card);
  };
});
