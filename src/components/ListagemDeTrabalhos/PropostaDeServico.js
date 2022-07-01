import React from 'react'
import styled from 'styled-components'
// import axios from 'axios'

const ContainerPrincipal = styled.div`
    position: fixed;
    background-color: #f5f4fc;
    margin-left: 15%;
    width: 70%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const DetalhesContainer = styled.div`
    margin-top: 10rem;
    display: flex;
    width: 35%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 40vh;
`

const DescricaoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 45%;
    margin-bottom: 1rem;
    font-size: 1.2rem;
`

const BotoesContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
`

const TituloDetalhes = styled.h2`
    font-weight: 600;
    font-size: 3.5rem;
    color: #7d66ac;
    margin-bottom: 1rem;
` 

const MetodoPagamento = styled.span`
    padding: 0.3rem 0.6rem;
    margin-left: 0.2rem;
    background-color: #7d66ac;
    color: #f5f4fc;
    border-radius: 50px;
`

const BotaoDetalhesAdd = styled.button`
    padding: 0.5rem 0.8rem;
    border-radius: 5px;
    border: none;
    background-color: #7d66ac;
    color: #f5f4fc;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
        background-color: #505050;
        cursor: pointer;
    }
`

const BotaoDetalhesVolta = styled.button`
    padding: 0.5rem 0.8rem;
    border-radius: 5px;
    border: 1px solid rgba(125, 172, 102, 0.5);
    background-color: #f5f4fc;
    color: #7d66ac;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
        border: 1px solid rgba(125, 102, 172, 1);
        cursor: pointer;
    }
`

class PropostaDeServico extends React.Component {
    render() {
        return (
            <ContainerPrincipal>
                <DetalhesContainer>
                    <TituloDetalhes>Pastelaria</TituloDetalhes>
                    <DescricaoContainer>
                        <p>Aceita: <MetodoPagamento>Paypal</MetodoPagamento></p>
                        <p>Até 30/12/2022 por <strong>R$ 5.00</strong></p>
                        <p>Vendemos pastéis</p>
                    </DescricaoContainer>
                    <BotoesContainer>
                        <BotaoDetalhesAdd>Adicionar ao carrinho</BotaoDetalhesAdd>
                        <BotaoDetalhesVolta onClick={this.props.botaoVoltaClick}>Voltar para a lista</BotaoDetalhesVolta>
                    </BotoesContainer>
                </DetalhesContainer>
            </ContainerPrincipal>
        )
    }
}

export default PropostaDeServico