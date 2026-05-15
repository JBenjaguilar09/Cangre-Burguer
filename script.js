const intro = document.getElementById("intro");
const video = document.getElementById("videoIntro");

/* SECCIONES PRINCIPALES */
const menuPrincipal = document.getElementById("menuPrincipal");
const seccionAcerca = document.getElementById("seccionAcerca");
const seccionMision = document.getElementById("seccionMision");
const seccionContacto = document.getElementById("seccionContacto");

/* BOTONES FOOTER */
const btnPedidosFooter = document.getElementById("btnPedidosFooter");
const btnAcercaFooter = document.getElementById("btnAcercaFooter");
const btnMisionFooter = document.getElementById("btnMisionFooter");
const btnContactoFooter = document.getElementById("btnContactoFooter");

/* BOTONES MENÚ */
const btnInicio = document.getElementById("btnInicio");
const btnDesayuno = document.getElementById("btnDesayuno");
const btnAlmuerzo = document.getElementById("btnAlmuerzo");
const btnCena = document.getElementById("btnCena");
const btnAcompanamientos = document.getElementById("btnAcompanamientos");
const btnBebidas = document.getElementById("btnBebidas");

/* FORMULARIO */
const formularioPedido = document.getElementById("formularioPedido");
const btnConfirmarPedido = document.getElementById("btnConfirmarPedido");

/* BUSCADOR */
const inputBuscador = document.getElementById("inputBuscador");
const zonaComidas = document.getElementById("zonaComidas");


/* ========================= */
/* OCULTAR TODO AL INICIO */
/* ========================= */

menuPrincipal.style.display = "none";
seccionAcerca.style.display = "none";
seccionMision.style.display = "none";
seccionContacto.style.display = "none";
formularioPedido.style.display = "none";


/* ========================= */
/* VIDEO INTRO */
/* ========================= */

video.addEventListener("ended", function () {
    intro.style.display = "none";
    mostrarPedidos();
    mostrarInicio();
});


/* ========================= */
/* FUNCIONES DE SECCIONES */
/* ========================= */

function ocultarTodo() {
    menuPrincipal.style.display = "none";
    seccionAcerca.style.display = "none";
    seccionMision.style.display = "none";
    seccionContacto.style.display = "none";
}

function mostrarPedidos() {
    ocultarTodo();
    menuPrincipal.style.display = "block";
}

function mostrarAcerca() {
    ocultarTodo();
    seccionAcerca.style.display = "block";
}

function mostrarMision() {
    ocultarTodo();
    seccionMision.style.display = "block";
}

function mostrarContacto() {
    ocultarTodo();
    seccionContacto.style.display = "block";
}


/* ========================= */
/* BOTONES FOOTER */
/* ========================= */

btnPedidosFooter.addEventListener("click", function () {
    mostrarPedidos();
    mostrarInicio();
});

btnAcercaFooter.addEventListener("click", function () {
    mostrarAcerca();
});

btnMisionFooter.addEventListener("click", function () {
    mostrarMision();
});

btnContactoFooter.addEventListener("click", function () {
    mostrarContacto();
});


/* ========================= */
/* INICIO */
/* ========================= */

function mostrarInicio() {
    zonaComidas.innerHTML = `
        <h2>Menú Principal</h2>

        <div class="tarjetaComida" onclick="abrirFormulario()">
            <img src="Desayuno1.jpg" alt="Desayuno">
            <h3>Cangreburger desayuno</h3>
            <p>Q25.00</p>
        </div>

        <div class="tarjetaComida" onclick="abrirFormulario()">
            <img src="Almuerzo1.jpg" alt="Almuerzo">
            <h3>Cangreburger clásica</h3>
            <p>Q35.00</p>
        </div>

        <div class="tarjetaComida" onclick="abrirFormulario()">
            <img src="Cena1.jpg" alt="Cena">
            <h3>Cangreburger nocturna</h3>
            <p>Q40.00</p>
        </div>

        <div class="tarjetaComida" onclick="abrirFormulario()">
            <img src="Acompañamiento1.jpg" alt="Papas">
            <h3>Papas Cangre</h3>
            <p>Q15.00</p>
        </div>

        <div class="tarjetaComida" onclick="abrirFormulario()">
            <img src="Bebida1.jpg" alt="Bebida">
            <h3>Refresco del fondo</h3>
            <p>Q12.00</p>
        </div>
    `;
}

btnInicio.addEventListener("click", function () {
    mostrarInicio();
});


/* ========================= */
/* FORMULARIO */
/* ========================= */

function abrirFormulario() {
    formularioPedido.style.display = "block";

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}


/* ========================= */
/* CATEGORÍAS */
/* ========================= */

btnDesayuno.addEventListener("click", function () {
    zonaComidas.innerHTML = `
        <h2>Desayunos</h2>

        <div class="tarjetaComida" onclick="abrirFormulario()">
            <img src="Desayuno1.jpg">
            <h3>Cangreburger desayuno</h3>
            <p>Q25.00</p>
        </div>

        <div class="tarjetaComida" onclick="abrirFormulario()">
            <img src="Desayuno2.jpg">
            <h3>Hot cakes marinos</h3>
            <p>Q20.00</p>
        </div>
    `;
});

btnAlmuerzo.addEventListener("click", function () {
    zonaComidas.innerHTML = `
        <h2>Almuerzos</h2>

        <div class="tarjetaComida" onclick="abrirFormulario()">
            <img src="Almuerzo1.jpg">
            <h3>Cangreburger clásica</h3>
            <p>Q35.00</p>
        </div>

        <div class="tarjetaComida" onclick="abrirFormulario()">
            <img src="Almuerzo2.jpg">
            <h3>Combo doble cangre</h3>
            <p>Q45.00</p>
        </div>
    `;
});

btnCena.addEventListener("click", function () {
    zonaComidas.innerHTML = `
        <h2>Cenas</h2>

        <div class="tarjetaComida" onclick="abrirFormulario()">
            <img src="Cena1.jpg">
            <h3>Cangreburger nocturna</h3>
            <p>Q40.00</p>
        </div>

        <div class="tarjetaComida" onclick="abrirFormulario()">
            <img src="Cena2.jpg">
            <h3>Malteada especial</h3>
            <p>Q18.00</p>
        </div>
    `;
});

btnAcompanamientos.addEventListener("click", function () {
    zonaComidas.innerHTML = `
        <h2>Acompañamientos</h2>

        <div class="tarjetaComida" onclick="abrirFormulario()">
            <img src="Acompañamiento1.jpg">
            <h3>Papas Cangre</h3>
            <p>Q15.00</p>
        </div>

        <div class="tarjetaComida" onclick="abrirFormulario()">
            <img src="Acompañamiento2.jpg">
            <h3>Nuggets marinos</h3>
            <p>Q18.00</p>
        </div>
    `;
});

btnBebidas.addEventListener("click", function () {
    zonaComidas.innerHTML = `
        <h2>Bebidas</h2>

        <div class="tarjetaComida" onclick="abrirFormulario()">
            <img src="Bebida1.jpg">
            <h3>Refresco del fondo</h3>
            <p>Q12.00</p>
        </div>

        <div class="tarjetaComida" onclick="abrirFormulario()">
            <img src="Bebida2.jpg">
            <h3>Malteada especial</h3>
            <p>Q18.00</p>
        </div>
    `;
});


/* ========================= */
/* CONFIRMAR PEDIDO */
/* ========================= */

btnConfirmarPedido.addEventListener("click", function () {
    const direccion = document.getElementById("direccion").value;
    const telefono = document.getElementById("telefono").value;
    const pago = document.getElementById("pago").value;

    if (direccion === "" || telefono === "" || pago === "") {
        alert("Por favor complete todos los campos");
        return;
    }

    alert("Pedido realizado con éxito");

    formularioPedido.style.display = "none";

    document.getElementById("direccion").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("pago").value = "";

    mostrarInicio();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


/* ========================= */
/* BUSCADOR */
/* ========================= */

inputBuscador.addEventListener("keyup", function () {
    const texto = inputBuscador.value.toLowerCase();
    const tarjetas = document.querySelectorAll(".tarjetaComida");

    tarjetas.forEach(function (tarjeta) {
        const nombre = tarjeta.innerText.toLowerCase();

        if (nombre.includes(texto)) {
            tarjeta.style.display = "inline-block";
        } else {
            tarjeta.style.display = "none";
        }
    });
});