import estilos from './boton-app.css?inline'

export class BotonApp extends HTMLElement{
  // entradas 
  static observedAtributes= [ 'variante', 'deshabilitado' ]

  private boton: HTMLButtonElement;

  // se ejecuta cuando se crea el elemento 
  constructor(){

    super();
    //quiero que este componente tenga sus propios estilos, 
    // se envuelve para que sean privados

    // es independiente, su css no va a salir ni va a entrar
    const sombra= this.attachShadow({mode: 'open'});

    sombra.innerHTML= `
      <style> ${estilos} </style>
      <button> <slot> </slot> </button>
    `;

    this.boton= sombra.querySelector('button')!;
  }

  //connectedCallback - cuando la etiqueta entra en la pagina
  connectedCallback(){
    this.pintar();
  }

  attributeChangedCallback(){
    this.pintar();
  }

  //disconnectedCallback es cuando el elemento sale de la pagina 
  //addoptedCallback es cuando la etiqueta se muda de una pagina a otra

  private pintar(){
    this.boton.className= this.getAttribute('variante') ?? 'primario';
    this.boton.disabled= this.hasAttribute('deshabilitado');
  }


}

// como se va a llamar el elemento 
customElements.define('boton-app', BotonApp);
