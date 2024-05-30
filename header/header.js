let header=document.querySelector("header")
header.innerHTML=`

    <div class="parte_arriba_H">
        <div class="tienda">
                   <div class="logo"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D9D9D9"><path d="M841-518v318q0 33-23.5 56.5T761-120H201q-33 0-56.5-23.5T121-200v-318q-23-21-35.5-54t-.5-72l42-136q8-26 28.5-43t47.5-17h556q27 0 47 16.5t29 43.5l42 136q12 39-.5 71T841-518Zm-272-42q27 0 41-18.5t11-41.5l-22-140h-78v148q0 21 14 36.5t34 15.5Zm-180 0q23 0 37.5-15.5T441-612v-148h-78l-22 140q-4 24 10.5 42t37.5 18Zm-178 0q18 0 31.5-13t16.5-33l22-154h-78l-40 134q-6 20 6.5 43t41.5 23Zm540 0q29 0 42-23t6-43l-42-134h-76l22 154q3 20 16.5 33t31.5 13ZM201-200h560v-282q-5 2-6.5 2H751q-27 0-47.5-9T663-518q-18 18-41 28t-49 10q-27 0-50.5-10T481-518q-17 18-39.5 28T393-480q-29 0-52.5-10T299-518q-21 21-41.5 29.5T211-480h-4.5q-2.5 0-5.5-2v282Zm560 0H201h560Z"/></svg></div>
                   <h4 class="nombre">Fashion E-Commerce-App</h4>
        </div>
        <div class="opciones">
            <div class="opcion">About Us</div>
            <div class="opcion">Contact US </div>
        </div>
        <div class="iconos">
            <div class="icono" id="icono">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e9e7e7"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
            <div id="modal1" class="modal1">
            <div class="modal-content1">
            <span class="close1"></span>

            <body>
                <div class="container">
                    <div class="login-box">
                        <h2>Iniciar Sesión</h2>
                        <form>
                            <div class="user-box">
                                <input type="text" name="username" required="">
                                <label>Nombre de usuario</label>
                            </div>
                            <div class="user-box">
                                <input type="password" name="password" required="">
                                <label>Contraseña</label>
                            </div>
                            <button type="submit" class="login-button">Entrar</button>
                        </form>
                    </div>
                </div>
            </body>
            <p></p>
            </div>
            </div>
            </div>
            <!-- Modal structure -->
            <div class="icono_2" id="icono_2">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#D9D9D9"><path d="M263.79-96Q234-96 213-117.21t-21-51Q192-198 213.21-219t51-21Q294-240 315-218.79t21 51Q336-138 314.79-117t-51 21Zm432 0Q666-96 645-117.21t-21-51Q624-198 645.21-219t51-21Q726-240 747-218.79t21 51Q768-138 746.79-117t-51 21ZM253-696l83 192h301l82-192H253Zm-31-72h570q14 0 20.5 11t1.5 23L702.63-476.14Q694-456 676.5-444T637-432H317l-42 72h493v72H276q-43 0-63.5-36.15-20.5-36.16.5-71.85l52-90-131-306H48v-72h133l41 96Zm114 264h301-301Z"/></svg>
                <div id="modal" class="modal">
                <div class="modal-content">
                <span class="close"></span>
                <p>Contenido de la ventana modal.</p>
                </div>
</div>

            </div>
        </div>
    </div>
    <div class="descripcionHeader">
        <h2 class="titulo_H">The Best Clothes </h2>
        <div class="desc">
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem harum, magni velit labore aliquid possimus ad accusamus earum et laudantium dolor </div>
        </div>
        <input class="buscador" type="text"  placeholder="🔍Search">
        <div class="img"></div>
    </div>

    

    

`





document.getElementById('icono_2').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
    
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
    
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
});



// Esto es para el sing in 
document.getElementById('icono').addEventListener('click', function() {
    document.getElementById('modal1').style.display = 'block';
    
});

document.querySelector('.close1').addEventListener('click', function() {
    document.getElementById('modal1').style.display = 'none';
    
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('modal1')) {
        document.getElementById('modal1').style.display = 'none';
    }
});