let header = document.querySelector("header");
header.innerHTML = `
    <div class="parte_arriba_H">
        <div class="tienda">
            <div class="logo">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#D9D9D9">
                    <path d="M841-518v318q0 33-23.5 56.5T761-120H201q-33 0-56.5-23.5T121-200v-318q-23-21-35.5-54t-.5-72l42-136q8-26 28.5-43t47.5-17h556q27 0 47 16.5t29 43.5l42 136q12 39-.5 71T841-518Zm-272-42q27 0 41-18.5t11-41.5l-22-140h-78v148q0 21 14 36.5t34 15.5Zm-180 0q23 0 37.5-15.5T441-612v-148h-78l-22 140q-4 24 10.5 42t37.5 18Zm-178 0q18 0 31.5-13t16.5-33l22-154h-78l-40 134q-6 20 6.5 43t41.5 23Zm540 0q29 0 42-23t6-43l-42-134h-76l22 154q3 20 16.5 33t31.5 13ZM201-200h560v-282q-5 2-6.5 2H751q-27 0-47.5-9T663-518q-18 18-41 28t-49 10q-27 0-50.5-10T481-518q-17 18-39.5 28T393-480q-29 0-52.5-10T299-518q-21 21-41.5 29.5T211-480h-4.5q-2.5 0-5.5-2v282Zm560 0H201h560Z"/>
                </svg>
            </div>
            <h4 class="nombre">Fashion E-Commerce-App</h4>
        </div>
        <div class="opciones">
            <div class="opcion">About Us</div>
            <div class="opcion">Contact US </div>
        </div>
        <div class="iconos">
            <div class="bienvenido">
                <span>Bienvenido</span>
                <span id="cambiar_nombre"></span>
            </div>
            <div class="usuarios" id="usuarios">
                <svg class="iconos" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#FFFFFF">
                    <path d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z"/>
                </svg>
                <div id="modal1" class="modal1">
                    <div class="modal-content1">
                        <span class="close1"></span>
                        <div>
                            <div class="container">
                                <div class="login-box">
                                    <h2>Iniciar Sesión</h2>
                                    <div class="user-box">
                                        <input type="text" id="login-email" name="username" required="">
                                        <label>Correo</label>
                                    </div>
                                    <div class="user-box">
                                        <input type="password" id="login-password" name="password" required="">
                                        <label>Contraseña</label>
                                    </div>
                                    <button type="submit" id="login-button" class="login-button">Entrar</button>
                                </div>
                            </div>
                        </div>
                        <p></p>
                    </div>
                </div>
            </div>
            <div class="carrito" id="carrito">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#FFFFFF">
                    <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/>
                </svg>
                <div id="modal" class="modal">
                    <div class="modal-content">
                        <span class="close"></span>
                        <div id="cart-items"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="descripcionHeader">
        <h2 class="titulo_H">The Best Clothes</h2>
        <div class="desc">
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem harum, magni velit labore aliquid possimus ad accusamus earum et laudantium dolor</div>
        </div>
        <input class="buscador" type="text" placeholder="🔍Search">
        <div class="img"></div>
    </div>
`;

const modals = [
    { icon: 'usuarios', modal: 'modal1', close: 'close1' },
    { icon: 'carrito', modal: 'modal', close: 'close' }
];

modals.forEach(({ icon, modal, close }) => {
    document.getElementById(icon).addEventListener('click', () => {
        document.getElementById(modal).style.display = 'block';
        if (icon === 'carrito' && currentUserId) {
            fetchCart(currentUserId);
        }
    });

    document.querySelector(`.${close}`).addEventListener('click', () => {
        document.getElementById(modal).style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === document.getElementById(modal)) {
            document.getElementById(modal).style.display = 'none';
        }
    });
});

let currentUserId;

fetch('https://fakestoreapi.com/users')
            .then(res=>res.json())
            .then(json=>console.log(json))

document.getElementById('login-button').addEventListener('click', async (event) => {
    event.preventDefault(); // Evita el envío del formulario

    // Obtén los valores del formulario
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
        // Verificar las credenciales con la API
        const response = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: email,
                password: password
            })
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Login response:', data);
            currentUserId = data.userId; // Asegúrate de que esto coincida con la estructura de respuesta real
            document.querySelector('#cambiar_nombre').innerHTML = email;
            alert('Inicio de sesión exitoso');
            document.getElementById('modal1').style.display = 'none'; // Cerrar el modal
        } else {
            // Credenciales inválidas
            alert('Correo o contraseña incorrectos');
        }
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
    }
});

async function fetchCart(userId) {
    if (!userId) {
        console.error('No user ID provided');
        return;
    }

    try {
        const response = await fetch(`https://fakestoreapi.com/carts/user/${userId}`);
        if (!response.ok) {
            throw new Error('Error en la respuesta de la API');
        }

        const data = await response.json();
        console.log('Cart response:', data);

        const cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = ''; // Limpiar el contenido previo

        // Asegúrate de que data sea un array
        if (Array.isArray(data)) {
            data.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.classList.add('cart-item');
                itemElement.innerHTML = `
                    <div class="cart-item-image"><img src="${item.product.image}" alt="${item.product.title}" width="50"></div>
                    <div class="cart-item-details">
                        <span class="cart-item-title">${item.product.title}</span>
                        <span class="cart-item-price">Price: ${item.product.price}</span>
                    </div>
                `;
                cartItemsContainer.appendChild(itemElement);
            });
        } else {
            cartItemsContainer.innerHTML = '<p>No items in the cart.</p>';
        }
    } catch (error) {
        console.error('Error al obtener el carrito:', error);
    }
}
