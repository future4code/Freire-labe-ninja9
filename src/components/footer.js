import React from 'react'
import './footer.css'
import facebook from '../img/facebook_icon.png'
import twitter from '../img/twitter_icon.png'
import instagram from '../img/instagram_icon.png'
import youtube from '../img/youtube_icon.png'
import applestore from '../img/appstore_icon.png'
import playstore from '../img/playstore_icon.png'


class Footer extends React.Component {
    render () {
        return (
            <div className='container_footer'>
                <div className='informacoes'>
                    <p>Sobre Nós</p>
                    <p>Blog</p>
                    <p>Fale Conosco</p>
                    <p>Contato</p>
                </div>
                <div className='redes_sociais'>
                    <a href='facebook.com'>
                        <img src={facebook} />
                    </a>
                    <a href='twitter.com'>
                        <img src={twitter} />
                    </a>
                    <a href='instagram.com'>
                        <img src={instagram} />
                    </a>
                    <a href='youtube.com'>
                        <img src={youtube} />
                    </a>
                </div>
                <div className='aplicativos'>
                    <img src={applestore}/>
                    <img src={playstore} />
                </div>                
            </div>
        )
    };
}

export default Footer;