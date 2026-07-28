# Tripleten web_project_around_es

Una página web pensada como galería de locaciones de cine memorables. En esta primera etapa se arma la base: la maqueta del perfil y el grid de tarjetas, y el array de datos que más adelante alimentará esas tarjetas.

# Sobre el proyecto

La interfaz muestra un bloque de perfil y una grilla de locaciones. En esta etapa, los datos de cada locación viven en un array dentro del script, y como primer paso hacia el renderizado se recorren para mostrar sus nombres en la consola. La maqueta ya es responsiva y está lista para conectar la lógica en las siguientes etapas.

# Estructura del proyecto

index.html
index.css
blocks/ — bloques BEM
images/
scripts/index.js
README.md

# Stack

HTML5 — marcado semántico organizado en bloques BEM.
CSS3 — layout responsivo con Flexbox y Grid, y estados de interacción (:hover).
JavaScript (ES6) — array de objetos y recorrido con forEach().
Metodologías — BEM para nombrar clases y una estructura modular por bloques.

# Qué se construyó en esta etapa

Maquetado responsivo del perfil y de la grilla de tarjetas.
scripts/index.js conectado al HTML mediante el atributo defer.
Al inicio del script, el array initialCards con seis objetos, cada uno con los campos name y link.
Al final del script, un forEach() que recorre initialCards e imprime en la consola el name de cada locación.

# Convenciones de código

camelCase para funciones y variables.
Nombres descriptivos, en sustantivos, sin abreviaturas confusas; variables con datos parecidos llevan nombres únicos.
La consola queda limpia: index.html se abre sin errores.

# Enlaces

Repositorio en GitHub — https://github.com/davidprietooficial-ux/web_project_expenses_es
