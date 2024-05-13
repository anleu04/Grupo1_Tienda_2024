


function item(id, image, title, description, price, category) {
    let desc_corta = description.length > 40 ? description.slice(0, 40) + ' ...' : description;
    let title_corto = title.length >20 ? title.slice(0, 15) + '...': title;


    let componente = `
    <div class="contenedor_productos">
        <div class="img"><img src="${image}" alt="" width="50rem"></div>
        <span class="titulo">${title_corto}</span>
        <div class="descripcion">${desc_corta}</div>
        <div class="precio">price ${price}</div>
        <div class="id"></div>
    </div>
    `;
    return componente;
}
    

function cargar_productos(data) {
    let productosHTML = '';
    data.forEach(producto => {
        productosHTML += item(
            producto.id,
            producto.image,
            producto.title,
            producto.description,
            producto.price,
            producto.category
        );
    });

    let tod=document.querySelector(`.productos`)
    tod.innerHTML=productosHTML
  
}
try {       
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json() 
        cargar_productos(data);
    ;
}catch(error){
    console.log("error en ", error);
}

export {cargar_productos}
    
    