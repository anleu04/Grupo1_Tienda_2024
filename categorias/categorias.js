function cargar_categoria() {
    try{ fetch("https://fakestoreapi.com/con/categories")
    .then(res => res.json())
    .then(categorias => {
        imprimir_categorias(categorias);
    
    })
}
    
    catch(error) {
        console.error('Error al obtener las categorías:', error);
    };
}