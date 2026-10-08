// Paso 3: «Hola mundo» sin JSX. Es un archivo .ts (no .tsx), así que aquí
// no se puede escribir JSX: todo se arma llamando a createElement a mano.
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// createElement(tipo, props, ...hijos)
const titulo = createElement('h1', null, 'Hola mundo')

// Una tarjeta con tres elementos dentro: cada hijo es otra llamada a createElement
const tarjeta = createElement(
  'article',
  { className: 'tarjeta' },
  createElement('h2', { className: 'tarjeta__nombre' }, 'Tarjeta sin JSX'),
  createElement('p', { className: 'tarjeta__carrera' }, 'Cada etiqueta es una llamada a createElement.'),
  createElement('span', { className: 'insignia insignia--info' }, 'React 19'),
)

const pagina = createElement(
  'main',
  { className: 'pagina' },
  createElement('header', { className: 'saludo' }, titulo),
  createElement('section', { className: 'equipo' }, tarjeta),
)

createRoot(document.getElementById('root')!).render(pagina)
