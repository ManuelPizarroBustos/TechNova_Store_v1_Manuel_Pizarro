# 🛒 TechNova Store

Sitio web frontend desarrollado para **TechNova Store**, una pyme chilena dedicada a la venta de accesorios tecnológicos.

El proyecto busca transformar el catálogo que anteriormente se gestionaba principalmente mediante Instagram y WhatsApp en una experiencia web organizada, clara y fácil de navegar.

> **Proyecto académico — DSY1104 Desarrollo Fullstack II — Duoc UC**

---

## 📌 Descripción del proyecto

TechNova Store comercializa accesorios tecnológicos para el uso diario, incluyendo:

* 🎧 Audífonos
* 🔌 Cargadores
* 📱 Fundas
* ⌨️ Teclados
* 🖱️ Mouse
* ⌚ Smartwatches

El sitio permite a los usuarios revisar el catálogo, consultar el detalle de los productos, conocer información sobre la empresa y contactar a la tienda.

Esta primera versión corresponde a un proyecto **frontend**, por lo que no incorpora backend, base de datos ni una pasarela de pago real.

---

## 🎯 Objetivo

Desarrollar un sitio web funcional y responsivo que permita:

* Presentar los productos de TechNova Store.
* Organizar el catálogo por categorías.
* Mostrar información detallada de cada producto.
* Facilitar el contacto con los clientes.
* Permitir la suscripción a novedades y ofertas.
* Entregar una navegación clara y consistente.
* Aplicar HTML5 semántico, CSS3 y JavaScript.

---

## 🚀 Funcionalidades

### 🏠 Página de inicio

La página principal incluye:

* Presentación de TechNova Store.
* Accesos directos al catálogo y contacto.
* Categorías destacadas.
* Imágenes de productos.
* Video de presentación.
* Formulario de suscripción a novedades.

### 🛍️ Catálogo

El catálogo presenta seis productos:

* Audífonos inalámbricos.
* Cargador rápido.
* Smartwatch.
* Teclado mecánico.
* Mouse inalámbrico.
* Funda para smartphone.

Cada producto cuenta con imagen, categoría, nombre, precio, descripción y acceso a su detalle.

### 📦 Detalle dinámico de productos

La página `producto.html` utiliza JavaScript para cargar dinámicamente la información del producto seleccionado.

El producto se identifica mediante un parámetro en la URL.

Ejemplo:

```text
producto.html?producto=audifonos
```

La página muestra:

* Imagen.
* Categoría.
* Nombre.
* Precio.
* Descripción.
* Características principales.

### 📩 Formulario de contacto

El formulario solicita:

* Nombre completo.
* Correo electrónico.
* Teléfono.
* Mensaje.

JavaScript valida los datos antes de permitir el envío y muestra mensajes personalizados cuando existe algún error.

### 📧 Newsletter

La página de inicio incluye un formulario para suscribirse a novedades.

Se valida que el correo electrónico tenga un formato válido antes de mostrar el mensaje de confirmación.

### 📱 Diseño responsivo

El sitio utiliza CSS3 y media queries para adaptar su presentación a diferentes tamaños de pantalla.

---

## 🧪 Validaciones JavaScript

### Formulario de contacto

Se validan:

* Nombre obligatorio.
* Nombre con mínimo de caracteres.
* Correo electrónico válido.
* Teléfono con formato chileno.
* Mensaje obligatorio.
* Mensaje con longitud mínima.

### Newsletter

Se valida:

* Correo obligatorio.
* Formato válido de correo electrónico.

Los errores se muestran mediante mensajes personalizados asociados a cada campo.

---

## 🧰 Tecnologías utilizadas

| Tecnología         | Uso                           |
| ------------------ | ----------------------------- |
| HTML5              | Estructura y contenido        |
| CSS3               | Diseño y estilos              |
| JavaScript         | Validaciones e interactividad |
| Git                | Control de versiones          |
| GitHub             | Repositorio remoto            |
| Visual Studio Code | Desarrollo                    |
| Google Chrome      | Pruebas                       |

---

## 📁 Estructura del proyecto

```text
TechNova_Store/
│
├── index.html
├── catalogo.html
├── producto.html
├── contacto.html
├── nosotros.html
│
├── css/
│   └── styles.css
│
├── js/
│   └── scripts.js
│
├── img/
│   ├── audifonos.jpg
│   ├── cargador.jpg
│   ├── funda.jpg
│   ├── mouse.jpg
│   ├── smartwatch.jpg
│   └── teclado.jpg
│
├── video/
│   └── technova.mp4
│
└── ERS_TechNova_Store_v1.docx
```

---

## 🧩 Estructura de páginas

### `index.html`

Página principal con presentación, categorías, video y newsletter.

### `catalogo.html`

Página con el catálogo completo de productos.

### `producto.html`

Página de detalle dinámico de productos.

### `contacto.html`

Página con formulario de contacto e información de la tienda.

### `nosotros.html`

Página con información general e historia de TechNova Store.

---

## 🎨 Diseño y estilos

Los estilos visuales se encuentran centralizados en:

```text
css/styles.css
```

La hoja de estilos contiene:

* Diseño general.
* Navegación.
* Botones.
* Hero.
* Tarjetas de productos.
* Formularios.
* Footer.
* Video.
* Diseño responsivo.
* Adaptación para dispositivos móviles.

Se evita el uso de estilos inline para mantener separada la estructura HTML de la presentación visual.

---

## 📜 JavaScript

La lógica del sitio se encuentra en:

```text
js/scripts.js
```

El archivo contiene:

* Validación del formulario de contacto.
* Validación del formulario de newsletter.
* Mensajes personalizados de error.
* Carga dinámica de productos.
* Actualización del contenido de `producto.html` según el producto seleccionado.

---

## 🔀 Control de versiones

El proyecto utiliza **Git y GitHub** para registrar el desarrollo mediante commits descriptivos.

Los cambios se organizan según las funcionalidades incorporadas al proyecto.

Algunos ejemplos de commits:

```text
feat: agrega paginas de contacto y nosotros
feat: agrega estilos generales al sitio
feat: agrega imagenes reales al catalogo
feat: agrega video de presentacion
feat: implementa validacion de formularios
feat: agrega imagenes a categorias destacadas
feat: agrega detalle dinamico de productos
refactor: centraliza estilos en css externo
docs: agrega ERS version 1
```

---

## 📋 Documentación

El proyecto incluye el documento:

```text
ERS_TechNova_Store_v1.docx
```

Este documento contiene la especificación de requisitos del software, objetivos, requerimientos funcionales y no funcionales, tecnologías, estructura y restricciones de la primera versión.

---

## ▶️ Ejecución del proyecto

Para ejecutar el proyecto:

1. Descargar o clonar el repositorio.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Abrir `index.html` en un navegador.
4. Navegar mediante el menú principal.

También puede utilizarse una extensión como **Live Server** en Visual Studio Code para ejecutar el proyecto durante el desarrollo.

---

## 📚 Contexto académico

**Asignatura:** DSY1104 – Desarrollo Fullstack II
**Institución:** Duoc UC
**Proyecto:** TechNova Store
**Versión:** 1.0
**Tipo:** Proyecto frontend académico

---

## 👨‍💻 Autor

**Manuel Pizarro**

Proyecto desarrollado con fines académicos para la asignatura DSY1104 – Desarrollo Fullstack II.
