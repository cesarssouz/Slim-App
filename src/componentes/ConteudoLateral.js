import Lista from './Lista';
import './Lista.css';
import logoslim from '../imgs/logoslim.png';
import { FaHouse } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { FiMessageCircle } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";
import { FaGear } from "react-icons/fa6";

export default function ConteudoLateral() {
    return (
        <div className='ConteudoLateral'>
            <div>
                <ul className='menuLateral'>
                    <h1>Slim App</h1>
                    <div style={{ marginTop: '3vw' }}></div>
                    <Lista texto='Inicio' icone={<FaHouse />} />
                    <Lista texto='Pesquisar' icone={<IoMdSearch />} />
                    <Lista texto='Mensagem' icone={<FiMessageCircle />} />
                    <Lista texto='Notificações' icone={<FaRegHeart />} />
                    <Lista texto='Publicar' icone={<CgAddR />} />
                    <div style={{ marginTop: '18vw' }}></div>
                    <Lista texto='Configurações' className='configu' icone={<FaGear />} />
                </ul>
            </div>
        </div>
    )
}