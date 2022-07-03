import React from 'react'
import styled from 'styled-components'
import cartIcon from '../../img/cart_icon.png'

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem;
    background-color: #cfcbe2;
    border-radius: 5px;
    box-shadow: 0px 2px 10px #7d66c1;
`

const CardTitulo = styled.h4`
    font-size: 1.4rem;
    text-align: center;
    max-height: 2rem;
`

const CardDescricao = styled.p`
    color: #505050;
    margin: 2.5rem 0;
`

const BotoesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    `

const BotaoDetalhes = styled.p`
    text-transform: uppercase;
    padding: 0.5rem;
    border-radius: 5px;
    &:hover {
        background-color: #c4bbe1;
        cursor: pointer;
    }
`

const CartIcone = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    padding: 0.5rem;
    border-radius: 100%;
    &:hover {
        background-color: #c4bbe1;
        cursor: pointer;
    }
`

class CardServico extends React.Component {
    render() {
        return (
            <CardContainer>
                <CardTitulo>{this.props.titulo}</CardTitulo>
                <CardDescricao>Até {this.props.prazo} por <strong>R$ {this.props.preco.toFixed(2)}</strong></CardDescricao>
                <BotoesContainer>
                    <BotaoDetalhes onClick={this.props.onClick} id={this.props.id}>Ver detalhes</BotaoDetalhes>
                    <CartIcone src={cartIcon}/>
                </BotoesContainer>
            </CardContainer>
        )
    }
}

export default CardServico