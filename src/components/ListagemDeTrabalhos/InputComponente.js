import React from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
    margin: 0.5rem 0;
    display: flex;
    flex-direction: column;
    `

const InputElemento = styled.input`
    background-color: #f5f4fc;
    padding: 0.6rem;
    border-radius: 5px;
`

class InputComponente extends React.Component {
    render() {
        return (
            <InputContainer>
                <label htmlFor={this.props.nome}>{this.props.nome}</label>
                <InputElemento 
                    type={this.props.type}
                    placeholder={this.props.nome}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    id={this.props.nome}    
                />
            </InputContainer>
        )
    }
}

export default InputComponente