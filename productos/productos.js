let cart = [];

function addToCart(product) {
    cart.push(product);
    console.log(`Product added: ${product.title}`);
    updateCartDisplay();
}

function updateCartDisplay() {
    const modalContent = document.querySelector('#modal .modal-content');
    modalContent.innerHTML = ''; // Clear previous content

    cart.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.classList.add('cart-item');
        productElement.innerHTML = `
            <div class="cart-item-image"><img src="${product.image}" alt="${product.title}" width="50"></div>
            <div class="cart-item-details">
                <span class="cart-item-title">${product.title}</span>
                <span class="cart-item-price">Price: ${product.price}</span>
            </div>
            <button class="remove-from-cart" data-index="${index}">Remove</button>
        `;
        modalContent.appendChild(productElement);
    });

    // Add event listeners for the "Remove" buttons
    document.querySelectorAll('.remove-from-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            cart.splice(index, 1);
            updateCartDisplay();
        });
    });
}

function item(id, image, title, description, price, category) {
    let desc_corta = description.length > 40 ? description.slice(0, 40) + ' ...' : description;
    let title_corto = title.length > 20 ? title.slice(0, 15) + '...' : title;

    let componente = `
    <div class="contenedor_productos">
        <div class="img"><img src="${image}" alt="" width="50rem"></div>
        <span class="titulo">${title_corto}</span>
        <div class="descripcion">${desc_corta}</div>
        <div class="precio">price ${price}
        </div>
        <button class="anadir_carrito" data-id="${id}" data-title="${title}" data-price="${price}" data-image="${image}">añadir al carrtio</button>
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

    let tod = document.querySelector(`.productos`);
    tod.innerHTML = productosHTML;

    // Add event listeners for the "Add to Cart" buttons
    document.querySelectorAll('.anadir_carrito').forEach(button => {
        button.addEventListener('click', (event) => {
            const id = event.target.getAttribute('data-id');
            const title = event.target.getAttribute('data-title');
            const price = event.target.getAttribute('data-price');
            const image = event.target.getAttribute('data-image');
            addToCart({ id, title, price, image });
        });
    });
}

async function fetchProductos() {
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        cargar_productos(data);
    } catch (error) {
        console.log("error en ", error);
    }
}

fetchProductos();

export { cargar_productos };