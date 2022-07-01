import React from 'react'
import styled from 'styled-components'
import InputComponente from './InputComponente'
import CardServico from './CardServico'
import PropostaDeServico from './PropostaDeServico'

const MainContainer = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
`

const FiltroContainer = styled.section`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    width: 15%;
    border-right: 1px solid black;
    min-height: 100vh;
`

const ListaServicosContainer = styled.ul`
    padding: 1rem;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    grid-auto-rows: 13rem;
    grid-gap: 1rem;
    width: 70vw;
    border: 1px solid black;
`

class ListagemDeTrabalhos extends React.Component {
    state = {
        inputValorMinimo: '',
        inputValorMaximo: '',
        inputValorBusca: '',
        listaExemplo: [
            {titulo: 'teste', preco: 40, prazo: '05-21-2023', id: 0},
            {titulo: 'leste2', preco: 15, prazo: '08-15-2022', id: 1},
            {titulo: 'aeste3', preco: 250, prazo: '12-21-2022', id: 2},
            {titulo: 'queste4', preco: 5, prazo: '10-02-2023', id: 3},
            {titulo: 'neste5', preco: 39, prazo: '11-30-2022', id: 4},
        ],
        ordem: 'semOrdenacao',
        detalhes: 'off'
    }

    //Requisição da API
    getAllJobs = () => {

    }

    //Controladores de input
    handleValorMinimo = (event) => {
        this.setState({inputValorMinimo: event.target.value})
    }

    handleValorMaximo = (event) => {
        this.setState({inputValorMaximo: event.target.value})
    }

    handleValorBusca = (event) => {
        this.setState({inputValorBusca: event.target.value})
    }

    //Ordenação
    handleOrdem = () => {
        const select = document.getElementById('ordenacao')
        this.setState({
            ordem: select.options[select.selectedIndex].value
        })
    }
    
    render() {
        //filtragem
        let listaServicosFiltrada

        if(this.state.inputValorMaximo !== '') {
            listaServicosFiltrada = this.state.listaExemplo.filter((servico) => {
                return (
                    servico.titulo.toLowerCase().includes(this.state.inputValorBusca.toLowerCase())
                    && servico.preco >= this.state.inputValorMinimo 
                    && servico.preco <= this.state.inputValorMaximo
                )   
            })
        } 
        else if(this.state.inputValorMinimo !== '') {
            listaServicosFiltrada = this.state.listaExemplo.filter(servico=>{
                return (
                    servico.titulo.toLowerCase().includes(this.state.inputValorBusca.toLowerCase())
                    && servico.preco >= this.state.inputValorMinimo
                )
            })
        } 
        else {
            listaServicosFiltrada = this.state.listaExemplo.filter(servico=> {
                return (
                    servico.titulo.toLowerCase().includes(this.state.inputValorBusca.toLowerCase())
                )
            })
        }
        //Ordenação
        let listaServicosOrdenada = listaServicosFiltrada.sort((a,b) => {
            switch(this.state.ordem){
                case 'semOrdenacao':
                    return 0
                case 'titulo':
                    return a.titulo.localeCompare(b.titulo)
                case 'valorMinimo':
                    return a.preco - b.preco
                case 'valorMaximo':
                    return b.preco - a.preco
                case 'prazo':
                    console.log(new Date(a.prazo))
                    return new Date(a.prazo) - new Date(b.prazo)
                default:
                    return 0
            }
        })



        //itera pela lista e transforma em jxs
        const listaServicosJsx = listaServicosOrdenada.map(servico => {
            let data = new Date(servico.prazo)
            let dataFormatada = (data.getDate() + "/" + data.getMonth() + "/" + data.getFullYear())
            return (
                <CardServico
                    titulo={servico.titulo}
                    preco={servico.preco}
                    prazo={dataFormatada}
                    key={servico.id}
                />
            )
        })

        //renderização da tela de detalhes
        let telaDetalhes
        if(this.state.detalhes === 'on') {
            telaDetalhes = (
                <PropostaDeServico />
            )
        }

        return (
            <MainContainer>
                <FiltroContainer>
                    <h2>Filtros</h2>
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
                    <select name='ordenacao' id='ordenacao' onChange={this.handleOrdem}>
                        <option value='semOrdenacao'>Sem Ordenação</option>
                        <option value='titulo'>Título</option>
                        <option value='valorMinimo'>Menor Valor</option>
                        <option value='valorMaximo'>Maior Valor</option>
                        <option value='prazo'>Prazo</option>
                    </select>
                </FiltroContainer>

                <ListaServicosContainer>
                    {listaServicosJsx}
                </ListaServicosContainer>

                {telaDetalhes}

                <div>
                    <h2>Carrinho</h2>
                </div>

            </MainContainer>
        )
    }
}

export default ListagemDeTrabalhos