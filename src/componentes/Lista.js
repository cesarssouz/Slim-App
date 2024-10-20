import './Lista.css';

export default function Lista(props){
    return (
        <li className='Listaitem'>
            <span className="icone-do-menu" >{props.icone}</span> 
            <span className="texto-do-menu">{props.texto}</span>
        </li>
    )
}