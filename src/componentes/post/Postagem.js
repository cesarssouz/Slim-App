import './Style.css'
import { FiMoreHorizontal } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { IoChatboxEllipses } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { CiBookmarkPlus } from "react-icons/ci";
import { IconContext } from 'react-icons/lib';
import { FaComment } from "react-icons/fa";

export function Post() {
    return (
        <div>
            <header>
                <div className='infos-post'>
                    <img src='https://i.scdn.co/image/ab6761610000517465cdcae2cae45e4b774c51af' />
                    <p>Mc Ig</p>
                </div>
                <FiMoreHorizontal />

            </header>
            <div className='img-post'>
                <img src='https://i1.sndcdn.com/artworks-RewsSJw8jkoqIXlT-2ARXfg-t500x500.jpg' />
            </div>
            <div className='footer-post'>
                <IconContext.Provider value={{ size: "28px" }}>
                    <section className='engagement-post'>
                        <div className='icons'>
                            <div className='icon'> <FaRegHeart /> </div>
                            <div className='icon'> <IoChatboxEllipses /></div>
                            <div className='icon'> < IoIosSend /></div>
                        </div>
                        <div className='icon'> < CiBookmarkPlus /></div>
                    </section>
                </IconContext.Provider>
                <section className='Like'>
                    <span>Curtido por <strong>Mc Hariel</strong> e outras 129.876 pessoas</span>
                </section>
                <div className='Legend'>
                    <p>
                        <span><strong>Mc ig</strong></span> MEU NOME NÃO É IGOR%
                    </p>
                </div>
                <div className='time-post'>
                    <time>HÁ 1 HORA</time>
                </div>
                <div className='comment'>
                    <div className='fake-comment'>
                    <IconContext.Provider value={{size: '25px'}}>
                        <div className='icon1'>
                        <FaComment />  
                        </div>
                    </IconContext.Provider>
                    <input placeholder='Adicione um comentário..'/>
                    </div>
                    <button>Publicar</button>
                </div>
            </div>
            <header>
                <div className='infos-post'>
                    <img src='https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da848fdd15736d8fe42dae81406f' />
                    <p>Mc Hariel</p>
                </div>
                <FiMoreHorizontal />

            </header>
            <div className='img-post'>
                <img src='https://s2-g1.glbimg.com/1ODgQq606GDMOY0XXz3GDqW-RGE=/0x0:2000x1556/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/9/R/ASeYEsSXi37FsPTot26A/dvd-hariel-7150.jpg' />
            </div>
            <div className='footer-post'>
                <IconContext.Provider value={{ size: "28px" }}>
                    <section className='engagement-post'>
                        <div className='icons'>
                            <div className='icon'> <FaRegHeart /> </div>
                            <div className='icon'> <IoChatboxEllipses /></div>
                            <div className='icon'> < IoIosSend /></div>
                        </div>
                        <div className='icon'> < CiBookmarkPlus /></div>
                    </section>
                </IconContext.Provider>
                <section className='Like'>
                    <span>Curtido por <strong>Mc Ig</strong> e outras 89.676 pessoas</span>
                </section>
                <div className='Legend'>
                    <p>
                        <span><strong>Mc Hariel</strong></span> Obrigado Deus!
                    </p>
                </div>
                <div className='time-post'>
                    <time>HÁ 4 HORAS</time>
                </div>
                <div className='comment'>
                    <div className='fake-comment'>
                    <IconContext.Provider value={{size: '25px'}}>
                        <div className='icon1'>
                        <FaComment />  
                        </div>
                    </IconContext.Provider>
                    <input placeholder='Adicione um comentário..'/>
                    </div>
                    <button>Publicar</button>
                </div>
            </div>
            <header>
                <div className='infos-post'>
                    <img src='https://i.scdn.co/image/ab6761610000517404cf87665430b465b8c9c1b4' />
                    <p>Paiva Zs</p>
                </div>
                <FiMoreHorizontal />

            </header>
            <div className='img-post'>
                <img src='https://i.ytimg.com/vi/S7D0SkBnjw8/maxresdefault.jpg' />
            </div>
            <div className='footer-post'>
                <IconContext.Provider value={{ size: "28px" }}>
                    <section className='engagement-post'>
                        <div className='icons'>
                            <div className='icon'> <FaRegHeart /> </div>
                            <div className='icon'> <IoChatboxEllipses /></div>
                            <div className='icon'> < IoIosSend /></div>
                        </div>
                        <div className='icon'> < CiBookmarkPlus /></div>
                    </section>
                </IconContext.Provider>
                <section className='Like'>
                    <span>Curtido por <strong>Mc Ig</strong> e outras 70.092 pessoas</span>
                </section>
                <div className='Legend'>
                    <p>
                        <span><strong>Paiva Zs</strong></span> Modo Cafajeste.
                    </p>
                </div>
                <div className='time-post'>
                    <time>HÁ 20 HORAS</time>
                </div>
                <div className='comment'>
                    <div className='fake-comment'>
                    <IconContext.Provider value={{size: '25px'}}>
                        <div className='icon1'>
                        <FaComment />  
                        </div>
                    </IconContext.Provider>
                    <input placeholder='Adicione um comentário..'/>
                    </div>
                    <button>Publicar</button>
                </div>
            </div>
        </div>
    )
}