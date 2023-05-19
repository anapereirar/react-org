import './Equipo.css';
import Colaborador from '../Colaborador';
import hexToRgba from 'hex-to-rgba';


const Equipo = (props) => {

    //Destructuracion
    const { titulo, colorPrimario, colorSecundario, id} = props.datos
    // const colorPrimario = props.datos.colorPrimario
    const {colaboradores, eliminarColaborador, actualizarColor, like } = props

    const obj = {
        backgroundColor : hexToRgba(colorPrimario, .2)
    }

    const estiloTitulo = {borderColor:colorPrimario}

    return <>
    
    { colaboradores.length > 0 &&
                <section className="equipo" style = {obj}>
                    <input
                        type="color"
                        className='input-color'
                        value = {colorPrimario}
                        onChange = {(evento) => {
                            actualizarColor(evento.target.value, id)
                        }}
                    />
                  <h3 style = {estiloTitulo}>{titulo}</h3>
                    <div className="colaboradores">
                        {/* <Colaborador /> */}
                        {
                            colaboradores.map((colaborador, index)=> <Colaborador 
                            datos={colaborador} 
                            key={colaborador.nombre}
                            colorPrimario={colorPrimario}
                            eliminarColaborador = {eliminarColaborador}
                            like = {like}
                            />)
                        }
                     </div>
                </section>
            }</>
}

export default Equipo;