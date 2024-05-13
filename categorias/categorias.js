function cargar_categoria() {
    try{ fetch("https://fakestoreapi.com/products/categories")
    .then(res => res.json())
    .then(categorias => {
        imprimir_categorias(categorias);
    
    })
}
    
    catch(error) {
        console.error('Error al obtener las categorías:', error);
    };
}

function imprimir_categorias(lista_categorias) {
    let div_informacion = document.querySelector(`.categorias`);
    if (div_informacion) {
        lista_categorias.forEach(element => {
            let div = document.createElement("div");
            div.innerHTML = `
                <input type="checkbox" id="${element}" name="categorias[]" value="${element}">
                <label for="${element}">${element}</label>
            `;
            div_informacion.appendChild(div);
        });
    } else {
        console.error('No se encontró el elemento contenedor con la clase "div_descripcion"');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    cargar_categoria();
});

export{cargar_categoria}