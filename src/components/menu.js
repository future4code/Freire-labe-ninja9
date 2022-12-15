import React from 'react'
import './menu.css'
import ninjacrop from '../img/ninjacrop.png'
import fotohome from '../img/fotohome.png'

class Menu extends React.Component {
    render() {
        return (
            <div>
                <div className='navbar'>
                    <img src={ninjacrop} />
                    <h1>LabeNINJAS</h1>
                    <button className='botao'>Login</button>
                </div>
                <div className='fotohome'>
                    <img src={fotohome} />
                    <button className='botaoservico'>Contratar Serviços</button>
                    <button className='botaocadastro'>Cadastrar Serviços</button>
                </div>
                
            </div>
        );
    }
}

export default Menu;