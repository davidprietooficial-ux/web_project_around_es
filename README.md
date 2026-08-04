# Tripleten web_project_around_es

Una página web pensada como galería de locaciones de cine memorables. El perfil es editable, las tarjetas se generan dinámicamente a partir de un array de datos y cada una responde a la interacción: dar like, eliminarse o abrir su imagen en grande.

# Sobre el proyecto

La interfaz muestra un bloque de perfil y una grilla de locaciones. Las tarjetas no están escritas a mano en el HTML: se construyen desde JavaScript recorriendo el array initialCards y clonando una plantilla, de modo que agregar una locación nueva es agregar un objeto más al flujo de datos.

Sobre esa base se montan las interacciones de la etapa final: los popups de edición de perfil y de nueva tarjeta escriben y leen del DOM, el botón de like alterna su estado visual, el botón de eliminar quita la tarjeta de la grilla y el clic sobre una imagen la abre ampliada junto a su nombre. La maqueta es responsiva y mantiene la organización por bloques BEM.

# Estructura del proyecto

index.html
index.css
blocks/ — bloques BEM
images/
scripts/index.js
README.md

# Stack

HTML5 — marcado semántico organizado en bloques BEM, con un template para la estructura de las tarjetas.
CSS3 — layout responsivo con Flexbox y Grid, y estados de interacción (:hover).
JavaScript (ES6) — manipulación del DOM, manejo de eventos con addEventListener(), clonado de plantillas y recorrido de arrays con forEach().
Metodologías — BEM para nombrar clases y una estructura modular por bloques.

# Qué se construyó en esta etapa

Renderizado dinámico de las tarjetas a partir del array initialCards.
Editar perfil: el popup carga los valores actuales de nombre y ocupación, y al guardar los refleja en la página.
Agregar tarjeta: el formulario recibe título y enlace de imagen, y la nueva locación se suma a la grilla.
Like: el corazón de cada tarjeta alterna entre estado activo e inactivo.
Eliminar tarjeta: el ícono de papelera retira la tarjeta de la grilla.
Imagen ampliada: al hacer clic sobre la foto se abre un popup con la imagen a mayor tamaño y su nombre.
Los tres popups (perfil, nueva tarjeta e imagen) comparten la misma lógica de apertura y cierre.

# Convenciones de código

camelCase para funciones y variables.
Nombres descriptivos, en sustantivos, sin abreviaturas confusas; variables con datos parecidos llevan nombres únicos.
El script se carga al final del body, después del marcado que manipula.
La consola queda limpia: index.html se abre sin errores.

# Enlaces

Sitio desplegado en GitHub Pages — https://davidprietooficial-ux.github.io/web_project_around_es/
Repositorio en GitHub — https://github.com/davidprietooficial-ux/web_project_around_es
