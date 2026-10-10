### Cambiar la variante en el HTML y anotar qué pasa sin tocar el TypeScript
Al cambiar variante="primario", "secundario" o "peligro" en el <boton-app> del HTML, el botón cambia de aspecto (azul relleno, blanco con borde azul o rojo) sin modificar el TypeScript. El componente lee el atributo y lo usa como clase de su <button> interno, y su CSS define el estilo de cada variante.

### Responder: ¿por qué el nombre de una etiqueta propia debe llevar guion?
Para que no choque con las etiquetas del HTML, actuales o futuras. El estándar reserva los nombres sin guion para el navegador, y customElements.define marca error si el nombre no lleva guion.
