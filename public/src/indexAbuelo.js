import * as components from './components/indexPadre.js';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' }); //Encapsular el codigo y
		// permitir que el DOM encuentre nuestra nueva clase
	}

	//Cuando el componente se carga en el DOM hace lo que le indiquemos
	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./src/indexAbuelo.css">
    <h1>My Nintendo Store</h1>

<div class="card-container">

    <product-card
      img="https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/t_product_tile_desktop/p0s7jymrmrdofd1gwpta"
      alt="Imagen super mario party"
      title="Productos extra con tu compra"
      description="Get ready to visit an enormous island resort for a party…a Mario Party! The biggest Mario Party yet."
      txtbutton="Ver Producto"
    ></product-card>

    <product-card
      img="https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/t_product_tile_desktop/flvkk9pmhikoti1hrs57"
      alt="Lego the legend of zelda"
      title="¡Nuevo!"
      description="LEGO. The Legend of Zelda Gran ábol DEKU 2 en 1 (77092)"
      txtbutton="Ver Producto"
    ></product-card>

    </div>

<div class="promotions-container">

    <promotions-card
    img="https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/kj6n1mmv5i3yqjvk6f56"
    alt="imagen de muñequitos"
    title="Mega Promoción 12+2"
    description="Potencia tu juego con los amiibo de la colección The Legend of Zelda"
    txtbutton="¡Completa tu coleccion!">
    </promotions-card>

    <promotions-card
    img="https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/afdfdrgq8i4dpnere9h5"
    alt="imagen de promoción"
    title="The legend of zelda amiibo"
    description="2 meses adicionales al comprar cualquier suscripción de 12 meses"
    txtbutton="Ver más detalles">
    </promotions-card>

     <promotions-card
    img="https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/lvk7zz3tlmx5gqhpgf5r"
    alt="imagen de control de nintendo"
    title="Mando de Nintendo 64"
    description="Disfruta de los juegos Nintendo 64 de la forma en que se deben jugar: ¡Con un mando inalámbrico de tamaño completo de Nintendo 64!"
    txtbutton="Comprar">
    </promotions-card>

    </div>
    `;
	}
}

customElements.define('app-container', AppContainer);
