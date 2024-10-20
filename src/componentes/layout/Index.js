import './Index.css'
import { Story } from '../story/Index'
import { Post } from '../post/Postagem'
import { Sugestao } from '../sugestao/Sugestao'

export function Layout() {
    return (
        <div>
            <div className='MainGrid'>
                <div className='first-column' style={{gridArea: "firstColumn"}}>
                    <div className="box">
                        <Story/>
                    </div>
                    <div className="box" style={{margin: "25px 0px"}}>
                        <Post/>
                    </div>

                </div>
                <div style={{gridArea: "secondColumn"}}>
                <div className="sugestao">
                    <Sugestao/>
                </div>
                </div>
            </div>

        </div>
    )
}
