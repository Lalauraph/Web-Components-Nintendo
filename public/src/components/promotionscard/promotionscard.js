class PromotionsCard extends HTMLElement {
	static get observedAttributes() {
		return ['img', 'alt', 'title', 'description', 'txtbutton'];
	}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName, oldValue, newValue) {
		if (oldValue !== newValue) {
			this[propName] = newValue;
			this.render();
		}
	}

	render() {
		this.shadowRoot.innerHTML = `
			<link rel="stylesheet" href="./src/components/promotionscard/promotionscard.css">
		<div class="promotions-card">
			<div>
				<h1>${this.title}</h1>
				<p>${this.description}</p>
				<button>${this.txtbutton}</button>
			</div>
			<img src="${this.img}" alt="${this.alt}">
		</div>
    `;
	}
}

customElements.define('promotions-card', PromotionsCard);
export default PromotionsCard;
