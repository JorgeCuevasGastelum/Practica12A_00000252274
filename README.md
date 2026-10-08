# Práctica 12A — Hola React
## Jorge Cuevas Gastelum - 00000252274
## Tópico de Aplicaciones Web 7:30 - 9:00 P.M.

Primer proyecto de React. En prueba-swc/ está la prueba de qué hace el
compilador con el JSX, y en hola-react/ el proyecto de Vite con los
componentes Saludo, Insignia y TarjetaPerfil. Las capturas están en
evidencias/.


## Preguntas

### 1. ¿En qué se convirtió cada etiqueta del JSX?

En una llamada a función. En modo clásico, cada etiqueta se volvió
React.createElement("div", { className: "tarjeta" }, ...hijos). En modo
automático se volvió _jsx o _jsxs, que el compilador importa por su cuenta desde
react/jsx-runtime, y los hijos van dentro de la prop children.

Sin configuración, SWC no compila: marca "Expression expected" en el primer
`<`, porque por defecto lee el archivo como JavaScript normal.

### 2. Si React es «sólo una biblioteca», ¿quién traduce el JSX?

El compilador, en este caso SWC. React sólo ofrece las funciones
(createElement, jsx). Antes de llegar al navegador, alguien tiene que
convertir el JSX en llamadas a esas funciones. En Vite eso lo hace
@vitejs/plugin-react sin que uno se dé cuenta.

### 3. ¿Qué hace createRoot y qué hace render?

createRoot toma el div#root de index.html y crea ahí la raíz que React va a
administrar. Todavía no dibuja nada. render recibe el árbol de elementos, lo
convierte en nodos reales del DOM y los mete en ese contenedor. Si se vuelve
a llamar, sólo cambia lo que sea distinto.

### 4. ¿Por qué el nombre de un componente empieza con mayúscula?

Porque así el compilador distingue un componente de una etiqueta HTML.
`<saludo>` se compila como el texto "saludo", y React lo toma como una
etiqueta que no existe. `<Saludo>` se compila como la variable Saludo, y
React llama a esa función.

Al quitar la prop obligatoria, el editor marca:
`Property 'nombre' is missing in type '{}' but required in type 'SaludoProps'.`

### 5. ¿Cuál es la diferencia entre escribir semestre="8" y semestre={8}?

Con comillas se pasa el texto "8"; con llaves se pasa el número 8. Como
semestre está declarado como number, TypeScript marca la primera:
`Type 'string' is not assignable to type 'number'.`

Sin TypeScript también importaría: "8" >= 7 funciona de casualidad, pero
"8" + 1 da "81" en vez de 9.
