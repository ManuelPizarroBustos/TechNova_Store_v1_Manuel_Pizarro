document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // VALIDACIÓN DEL NEWSLETTER
    // ==========================================

    const newsletterForm = document.getElementById("newsletter-form");

    if (newsletterForm) {

        newsletterForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const emailInput = document.getElementById("newsletter-email");
            const emailError = document.getElementById("newsletter-email-error");
            const newsletterStatus = document.getElementById("newsletter-status");

            const email = emailInput.value.trim();

            // Limpiar mensajes anteriores
            emailInput.classList.remove("input-error");
            emailError.style.display = "none";
            newsletterStatus.textContent = "";

            // Validar correo
            if (email === "") {

                emailInput.classList.add("input-error");
                emailError.textContent = "Por favor, ingresa tu correo electrónico.";
                emailError.style.display = "block";
                emailInput.focus();

                return;
            }

            // Expresión regular para comprobar formato de correo
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {

                emailInput.classList.add("input-error");
                emailError.textContent =
                    "El correo no tiene un formato válido. Ejemplo: nombre@correo.cl";
                emailError.style.display = "block";
                emailInput.focus();

                return;
            }

            // Formulario correcto
            newsletterStatus.textContent =
                "¡Gracias! Te has suscrito correctamente a nuestras novedades.";

            newsletterForm.reset();
        });
    }


    // ==========================================
    // VALIDACIÓN DEL FORMULARIO DE CONTACTO
    // ==========================================

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            // Obtener elementos
            const nombre = document.getElementById("nombre");
            const email = document.getElementById("email");
            const telefono = document.getElementById("telefono");
            const mensaje = document.getElementById("mensaje");

            const nombreError = document.getElementById("nombreError");
            const emailError = document.getElementById("emailError");
            const telefonoError = document.getElementById("telefonoError");
            const mensajeError = document.getElementById("mensajeError");
            const formSuccess = document.getElementById("formSuccess");

            // Limpiar mensajes anteriores
            limpiarError(nombre, nombreError);
            limpiarError(email, emailError);
            limpiarError(telefono, telefonoError);
            limpiarError(mensaje, mensajeError);

            formSuccess.textContent = "";

            let formularioValido = true;


            // ==========================================
            // VALIDAR NOMBRE
            // ==========================================

            if (nombre.value.trim() === "") {

                mostrarError(
                    nombre,
                    nombreError,
                    "Por favor, ingresa tu nombre completo."
                );

                formularioValido = false;

            } else if (nombre.value.trim().length < 3) {

                mostrarError(
                    nombre,
                    nombreError,
                    "El nombre debe tener al menos 3 caracteres."
                );

                formularioValido = false;
            }


            // ==========================================
            // VALIDAR EMAIL
            // ==========================================

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (email.value.trim() === "") {

                mostrarError(
                    email,
                    emailError,
                    "Por favor, ingresa tu correo electrónico."
                );

                formularioValido = false;

            } else if (!emailRegex.test(email.value.trim())) {

                mostrarError(
                    email,
                    emailError,
                    "Ingresa un correo válido. Ejemplo: nombre@correo.cl"
                );

                formularioValido = false;
            }


            // ==========================================
            // VALIDAR TELÉFONO
            // ==========================================

            const telefonoRegex = /^\+?56\s?9\s?\d{8}$/;

            if (telefono.value.trim() === "") {

                mostrarError(
                    telefono,
                    telefonoError,
                    "Por favor, ingresa tu número de teléfono."
                );

                formularioValido = false;

            } else if (!telefonoRegex.test(telefono.value.trim())) {

                mostrarError(
                    telefono,
                    telefonoError,
                    "Ingresa un teléfono válido. Ejemplo: +56912345678"
                );

                formularioValido = false;
            }


            // ==========================================
            // VALIDAR MENSAJE
            // ==========================================

            if (mensaje.value.trim() === "") {

                mostrarError(
                    mensaje,
                    mensajeError,
                    "Por favor, escribe tu consulta."
                );

                formularioValido = false;

            } else if (mensaje.value.trim().length < 10) {

                mostrarError(
                    mensaje,
                    mensajeError,
                    "Tu consulta debe tener al menos 10 caracteres."
                );

                formularioValido = false;
            }


            // ==========================================
            // RESULTADO FINAL
            // ==========================================

            if (formularioValido) {

                formSuccess.textContent =
                    "¡Consulta enviada correctamente! Gracias por contactar a TechNova Store.";

                contactForm.reset();
            }

        });
    }


    // ==========================================
    // FUNCIÓN PARA MOSTRAR ERRORES
    // ==========================================

    function mostrarError(input, mensajeElemento, mensaje) {

        input.classList.add("input-error");

        mensajeElemento.textContent = mensaje;

        mensajeElemento.style.display = "block";
    }


    // ==========================================
    // FUNCIÓN PARA LIMPIAR ERRORES
    // ==========================================

    function limpiarError(input, mensajeElemento) {

        input.classList.remove("input-error");

        mensajeElemento.textContent = "";

        mensajeElemento.style.display = "none";
    }
    // ==========================================
    // PRODUCTOS DINÁMICOS
    // ==========================================

    const productos = {

    audifonos: {
        nombre: "Audífonos NovaBeat X1",
        categoria: "Audio",
        precio: "$29.990",
        imagen: "img/audifonos.jpg",
        descripcion:
            "Audífonos inalámbricos diseñados para entregar una experiencia de audio cómoda y de alta calidad.",
        caracteristicas: [
            "Conexión inalámbrica Bluetooth.",
            "Diseño cómodo y liviano.",
            "Batería de larga duración.",
            "Micrófono integrado.",
            "Compatibles con dispositivos móviles."
        ]
    },

    cargador: {
        nombre: "Cargador TurboCharge 65W",
        categoria: "Energía",
        precio: "$24.990",
        imagen: "img/cargador.jpg",
        descripcion:
            "Cargador rápido compatible con distintos dispositivos móviles.",
        caracteristicas: [
            "Potencia de hasta 65W.",
            "Carga rápida.",
            "Diseño compacto.",
            "Compatible con distintos dispositivos.",
            "Protección contra sobrecarga."
        ]
    },

    smartwatch: {
        nombre: "Smartwatch NovaFit Pro",
        categoria: "Wearables",
        precio: "$39.990",
        imagen: "img/smartwatch.jpg",
        descripcion:
            "Reloj inteligente para monitorear actividad diaria y recibir notificaciones.",
        caracteristicas: [
            "Pantalla digital.",
            "Monitoreo de actividad.",
            "Recepción de notificaciones.",
            "Batería de larga duración.",
            "Diseño moderno."
        ]
    },

    teclado: {
        nombre: "Teclado NovaKey TKL",
        categoria: "Periféricos",
        precio: "$34.990",
        imagen: "img/teclado.jpg",
        descripcion:
            "Teclado compacto con iluminación RGB, ideal para trabajo y gaming.",
        caracteristicas: [
            "Formato compacto TKL.",
            "Iluminación RGB.",
            "Diseño cómodo.",
            "Conexión USB.",
            "Ideal para trabajo y gaming."
        ]
    },

    mouse: {
        nombre: "Mouse NovaClick",
        categoria: "Periféricos",
        precio: "$19.990",
        imagen: "img/mouse.jpg",
        descripcion:
            "Mouse inalámbrico ergonómico para uso diario y trabajo de oficina.",
        caracteristicas: [
            "Conexión inalámbrica.",
            "Diseño ergonómico.",
            "Uso cómodo.",
            "Batería de larga duración.",
            "Ideal para oficina y estudio."
        ]
    },

    funda: {
        nombre: "Funda Protectora NovaCase",
        categoria: "Accesorios",
        precio: "$14.990",
        imagen: "img/funda.jpg",
        descripcion:
            "Funda resistente para proteger tu celular contra golpes y rayones.",
        caracteristicas: [
            "Material resistente.",
            "Protección contra golpes.",
            "Protección contra rayones.",
            "Diseño liviano.",
            "Fácil instalación."
        ]
    }
};


    // Obtener producto desde la URL
    const parametros = new URLSearchParams(window.location.search);
    const productoSeleccionado = parametros.get("producto");


    // Comprobar que estamos en la página de producto
    if (productoSeleccionado && document.getElementById("producto-nombre")) {

    const producto = productos[productoSeleccionado];

    if (producto) {

        document.getElementById("producto-nombre").textContent =
            producto.nombre;

        document.getElementById("producto-categoria").textContent =
            producto.categoria;

        document.getElementById("producto-precio").textContent =
            producto.precio;

        document.getElementById("producto-descripcion").textContent =
            producto.descripcion;

        const imagen = document.getElementById("producto-imagen");

        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;

        const listaCaracteristicas =
            document.getElementById("producto-caracteristicas");

        listaCaracteristicas.innerHTML = "";

        producto.caracteristicas.forEach(function (caracteristica) {

            const elemento = document.createElement("li");

            elemento.textContent = caracteristica;

            listaCaracteristicas.appendChild(elemento);

        });

        document.title = producto.nombre + " | TechNova Store";
        }
    }
});