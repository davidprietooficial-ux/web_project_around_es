# Tripleten web_project_around_es

Una página web pensada como galería de locaciones de cine memorables. El perfil es editable, las tarjetas se generan dinámicamente a partir de un array de datos y cada una responde a la interacción: dar like, eliminarse o abrir su imagen en grande. En esta etapa, toda la lógica se reescribió en TypeScript aplicando programación orientada a objetos: cada responsabilidad vive en su propia clase.

# Sobre el proyecto

La interfaz muestra un bloque de perfil y una grilla de 6 locaciones. Las tarjetas no están escritas a mano en el HTML: la clase `Card` las construye a partir del array `initialCards`, y la clase `Section` se encarga de renderizarlas en su contenedor. Agregar una locación nueva es agregar un objeto más al array que consume `Section`.

Sobre esa base se montan las interacciones: `UserInfo` lee y actualiza los datos del perfil, `PopupWithForm` maneja tanto la edición de perfil como el alta de tarjetas, `PopupWithImage` abre la imagen ampliada, y `FormValidator` valida los formularios en tiempo real antes de permitir el envío. `Popup` es la clase padre que centraliza la lógica común de apertura/cierre (clic fuera, tecla Esc) para sus dos subclases. Ninguna clase instancia a otra internamente — el ensamblaje ocurre en `index.ts`.

# Estructura del proyecto

index.html
index.css
index.ts
src/
Card.ts
Section.ts
Popup.ts
PopupWithForm.ts
PopupWithImage.ts
FormValidator.ts
UserInfo.ts
blocks/ — bloques BEM
images/
README.md

# Stack

TypeScript — clases ES6, una por archivo, importadas a `index.ts`.
HTML5 — marcado semántico en bloques BEM; los popups están en el HTML, no se generan dinámicamente.
CSS3 — normalize.css, layout responsivo con Flexbox y Grid, estados `:hover`.
POO — herencia (`Popup` → `PopupWithForm`, `PopupWithImage`), acoplamiento débil, responsabilidad única por clase.
Metodologías — BEM para nombrar clases, estructura modular por archivo/clase.

# Qué se construyó en esta etapa

Migración completa de JS plano a TypeScript con clases ES6.
`Card` y `Section`: instancia de `Card` por cada tarjeta, instancia de `Section` por cada contenedor renderizado.
`FormValidator`: una instancia por formulario a validar; `enableValidation()` la activa; función separada controla el estado del botón submit (deshabilitado si algún campo falla).
`UserInfo`: instancia única para leer/escribir los datos de perfil.
`Popup` como clase padre de `PopupWithForm` y `PopupWithImage`: cierran con clic fuera del formulario o Esc, nunca con clic dentro; el listener de Esc se agrega al abrir el popup y se remueve al cerrarlo.
Like y eliminar tarjeta siguen funcionales; alta de tarjeta soporta Enter mientras el campo de texto está activo.
Optimización: sin `innerHTML` con datos de usuario, sin código duplicado, sin números mágicos (todo valor numérico en variable), `let` solo donde el valor cambia.

# Convenciones de código

camelCase para funciones y variables; sustantivos para variables, sustantivos plurales para NodeList.
Nombres descriptivos y únicos cuando hay variables con datos similares; funciones nombradas con verbo, sin abreviaturas confusas.
Cada clase en su propio archivo TS dentro de `src/`, con una única responsabilidad.
Sin instanciación cruzada entre clases (acoplamiento débil).
Operaciones sobre el DOM resueltas antes de insertarse en el layout.

# Enlaces

Sitio desplegado en GitHub Pages — https://davidprietooficial-ux.github.io/web_project_around_es/
Repositorio en GitHub — https://github.com/davidprietooficial-ux/web_project_around_es
