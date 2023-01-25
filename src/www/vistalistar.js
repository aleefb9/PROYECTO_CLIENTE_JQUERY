import {Vista} from './vista.js'

export class VistaListar extends Vista{
	/**
	 * Constructor de la clase vista listar
	 * @param {*} controler 
	 * @param {*} divListar
	 */
	constructor(controler, divListar){
		super(divListar)
		this.controlador = controler
        this.modelo = this.controlador.getModelo()

		this.modelo = this.controlador.getModelo()
        this.modelo.registrar(this.actualizar.bind(this))

		// this.botonAlta = divListar.getElementsByTagName('button')[0]
		// this.botonAlta.onclick = this.pulsarAlta.bind(this)

		this.botonAlta = $('#botonAnadir')
		this.botonAlta.click(this.pulsarAlta.bind(this))
	}

	/**
     * Método pulsar botón alta
	*/
	pulsarAlta(){
        this.controlador.pulsarBotonAlta()
    }

	/**
	 * Refresca y crea la tabla de ingresos de la consulta
	 */
	actualizar(){

		this.borrarIngresos()

		let datos = this.modelo.getDatos()
		for (let dato of datos){

			// let div = document.createElement('div')
			// divListar.appendChild(div)
			let div = $('<div>')
			$('#divListar').append(div)
			
			// let parrafoTipo = document.createElement('h2')
			// parrafoTipo.textContent = dato.tipo
			// parrafoTipo.style.margin = 0;
			// div.appendChild(parrafoTipo)
			let parrafoTipo = $('<h2>')
			parrafoTipo.text(dato.tipo)
			parrafoTipo.css('margin',0);
			div.append(parrafoTipo)

		
			// if (dato.file){
				
			// 	let img = document.createElement('img')
			// 	img.setAttribute('width', '100%')
			// 	img.setAttribute('height', 'auto')
			// 	img.setAttribute('src', dato.file)
			// 	div.appendChild(img)
			// }
			// else{
			// 	div.textContent=("NO SE INTRODUJO UNA IMAGEN")
			// }

			if (dato.file){
				let img = $('<img>')
				img.width('100%')
				img.attr('src', dato.file)
				div.append(img)
			}
			else{
				div.text("NO SE INTRODUJO UNA IMAGEN")
			}
			
			// let parrafoNombre = document.createElement('p')
			// parrafoNombre.textContent = 'Nombre: ' + dato.nombre
			// div.appendChild(parrafoNombre)

			let parrafoNombre = $('<p>')
			parrafoNombre.text('Nombre: '+dato.nombre)
			div.append(parrafoNombre)

			// let parrafoDiametro = document.createElement('p')
			// parrafoDiametro.textContent = 'Diámetro: ' + dato.diametro
			// div.appendChild(parrafoDiametro)

			let parrafoDiametro = $('<p>')
			parrafoDiametro.text('Diámetro: '+dato.diametro)
			div.append(parrafoDiametro)

			// let imagenEliminar = document.createElement('img')
			// div.appendChild(imagenEliminar)
			// imagenEliminar.src = '../assets/papelera.png'
			// imagenEliminar.style.width = '11%'
			// imagenEliminar.onclick = this.eliminar.bind(this,dato.id)

			let imagenEliminar = $('<img>')
			imagenEliminar.width('11%')
			imagenEliminar.attr('src', "../assets/papelera.png")
			div.append(imagenEliminar)
			imagenEliminar.click(this.eliminar.bind(this,dato.id))

			// let imagenEditar = document.createElement('img')
			// div.appendChild(imagenEditar)
			// imagenEditar.src = '../assets/lapiz.png'
			// imagenEditar.style.width = '11%'
			// imagenEditar.textContent = '✏'

			let imagenEditar = $('<img>')
			imagenEditar.width('11%')
			imagenEditar.attr('src', "../assets/lapiz.png")
			div.append(imagenEditar)

		}
	
	}
	borrarIngresos(){
		if (!this.div.empty()){
			this.div.empty()
		}	
	}

	eliminar(id){	
		this.controlador.eliminarAstro(id)
		this.actualizar();
	}
}
