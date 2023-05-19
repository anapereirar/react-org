import { useState } from 'react'
import './Formulario.css'
import Campo from '../Campo'
import ListaOpciones from '../ListaOpciones'
import Boton from '../Boton'

const Formulario = (props) =>{

    const [nombre, actualizarNombre] = useState('')
    const [puesto, actualizarPuesto] = useState('')
    const [foto, actualizarFoto] = useState('')
    const [equipo, actualizarEquipo] = useState('')

    const [titulo, actualizarTitulo] = useState('')
    const [color, actualizarColor] = useState('')
 
    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (e) =>{
        e.preventDefault();
        console.log("Manejar el envío")
        let datosAEnviar = {
            nombre, //Si solo tiene un nombre, significa que la clave y el valor se llaman igual
            puesto: puesto,
            foto: foto,
            equipo
        }
        // console.log(datosAEnviar) Crea el objeto con los datos ingresados
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({titulo, colorPrimario: color})
    
    }

    return <section className='formulario'>
        <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador</h2>
        <Campo 
            titulo="Nombre" 
            placeholder="Ingresar nombre" 
            required={true} 
            valor = {nombre} 
            actualizarValor={actualizarNombre}
        />
       
        <Campo 
            titulo="Puesto" 
            placeholder="Ingresar puesto" 
            required
            valor = {puesto} 
            actualizarValor={actualizarPuesto}
        />

        <Campo 
            titulo="Foto" 
            placeholder="Ingresar enlace de foto" 
            required
            valor = {foto} 
            actualizarValor={actualizarFoto}
        />
        <ListaOpciones
            valor={equipo}
            actualizarEquipo={actualizarEquipo}
            equipos={props.equipos}
            />
        <Boton>
            Crear
        </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo</h2>
        <Campo 
            titulo="Título" 
            placeholder="Ingresar título" 
            required={true} 
            valor = {titulo} 
            actualizarValor={actualizarTitulo}
        />
       
        <Campo 
            titulo="Color" 
            placeholder="Ingresar el color en Hex" 
            required
            valor = {color} 
            actualizarValor={actualizarColor}
            type = "color"
        />
        <Boton>Registrar equipo</Boton>
        </form>
    </section>
}

export default Formulario