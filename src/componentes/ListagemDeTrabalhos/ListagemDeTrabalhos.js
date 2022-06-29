import React from 'react'
import styled from 'styled-components'
import InputComponente from './InputComponente'

const FiltroContainer = styled.section`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    width: 15%;
    border-right: 1px solid black;
    min-height: 100vh;
`

class ListagemDeTrabalhos extends React.Component {
    state = {
        inputValorMinimo: '',
        inputValorMaximo: '',
        inputValorBusca: ''
    }

    handleValorMinimo = (event) => {
        this.setState({inputValorMinimo: event.target.value})
    }

    handleValorMaximo = (event) => {
        this.setState({inputValorMaximo: event.target.value})
    }

    handleValorBusca = (event) => {
        this.setState({inputValorBusca: event.target.value})
    }
    

    render() {
        return (
            <div>
                <FiltroContainer>
                    <InputComponente
                        nome='Valor mínimo'
                        type='number'
                        value={this.state.inputValorMinimo}
                        onChange={this.handleValorMinimo}
                    />
                    <InputComponente
                        nome='Valor máximo'
                        type='number'
                        value={this.state.inputValorMaximo}
                        onChange={this.handleValorMaximo}
                    />
                    <InputComponente
                        nome='Busca por nome'
                        type='text'
                        value={this.state.inputValorBusca}
                        onChange={this.handleValorBusca}
                    />
                    <label htmlFor='ordenacao'>Ordenação</label>
                    <select name='ordenacao' id='ordenacao'>
                        <option value='semOrdenacao'>Sem Ordenação</option>
                        <option value='titulo'>Título</option>
                        <option value='valorMinimo'>Menor Valor</option>
                        <option value='valorMaximo'>Maior Valor</option>
                        <option value='prazo'>Prazo</option>
                    </select>
                </FiltroContainer>
            </div>
        )
    }
}

export default ListagemDeTrabalhos