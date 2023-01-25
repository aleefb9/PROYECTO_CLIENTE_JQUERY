export class Vista {
	/**
	 * Constructor de la clase vista
	 * @param {*} div 
	 */
	constructor(div) {
		this.div = div
	}

	/**
	 * Método mostrar
	 * @param {*} ver 
	 */
	mostrar(ver) {
		if (ver)
			// this.div.style.display = 'flex'	//Visualizar DIV
			this.div.show()
		else
			// this.div.style.display = 'none'	//Ocultar DIV
			this.div.hide()
	}

}