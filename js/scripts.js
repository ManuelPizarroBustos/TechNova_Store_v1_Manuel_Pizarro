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

});