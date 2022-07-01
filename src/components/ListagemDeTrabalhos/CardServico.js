import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    padding: 1rem;
    background-color: gray;
    border: 1px solid black;
`

class CardServico extends React.Component {
    render() {
        return (
            <CardContainer>
                <h4>{this.props.titulo}</h4>
                <p>Preço: R$ {this.props.preco.toFixed(2)}</p>
                <p>Prazo: {this.props.prazo}</p>
                <div>
                    <button onClick={this.props.onClick} id={this.props.id}>Ver detalhes</button>
                    <button>Adicionar ao carrinho</button>
                </div>
            </CardContainer>
        )
    }
}

export default CardServico