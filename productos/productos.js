let cart = [];
let allProducts = [];
let selectedCategories = new Set();

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
        <button class="anadir_carrito" data-id="${id}" data-title="${title}" data-price="${price}" data-image="${image}">añadir al carrito</button>
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
        allProducts = data; // Store all products initially
        cargar_productos(allProducts); // Load all products by default
    } catch (error) {
        console.log("error en ", error);
    }
}

fetchProductos();

// Lógica de categorías

async function fetchCategories() {
    try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const categories = await response.json();
        displayCategories(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
}

function displayCategories(categories) {
    const categoriasContainer = document.querySelector('.categorias');
    categoriasContainer.innerHTML = categories.map(category => `
        <div class="categoria" data-category="${category}">${category}</div>
    `).join('');

    document.querySelectorAll('.categoria').forEach(categoria => {
        categoria.addEventListener('click', async (event) => {
            const category = event.target.getAttribute('data-category');

            if (selectedCategories.has(category)) {
                // Deselect the category
                selectedCategories.delete(category);
            } else {
                // Select the category
                selectedCategories.add(category);
            }

            if (selectedCategories.size === 0) {
                // If no categories are selected, display all products
                cargar_productos(allProducts);
            } else {
                // Fetch and display products for all selected categories
                const allSelectedProducts = [];
                for (const selectedCategory of selectedCategories) {
                    try {
                        const response = await fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`);
                        const products = await response.json();
                        allSelectedProducts.push(...products);
                    } catch (error) {
                        console.error(`Error fetching products for category ${selectedCategory}:`, error);
                    }
                }
                cargar_productos(allSelectedProducts);
            }
        });
    });
}

fetchCategories();

export { cargar_productos };
