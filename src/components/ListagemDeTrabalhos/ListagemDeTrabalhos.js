import React from 'react'
import styled from 'styled-components'
import InputComponente from './InputComponente'
import CardServico from './CardServico'
import Footer from '../footer'

const MainContainer = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    color: #7d66c1;
`

const TituloSection = styled.h2`
    text-align: center;
`

const FiltroContainer = styled.section`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    width: 15%;
    /* border-right: 1px solid #7d66c1; */
    min-height: 100vh;
    position: fixed;
    background-color: #cfcbe2;
`

const ListaServicosContainer = styled.ul`
    padding: 1rem;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    grid-auto-rows: 13rem;
    grid-gap: 1rem;
    width: 70%;
    margin-left: 15%;
    margin-bottom: 1rem;
`

const CarrinhoContainer = styled.div`
    width: 15%;
    min-height: 100vh;
    background-color: #cfcbe2;
    /* border-left: 1px solid #7d66c1; */
    padding: 1rem;
    position: fixed;
    right: 0;
`

const SelectOptions = styled.select`
    padding: 0.6rem;
`

class ListagemDeTrabalhos extends React.Component {
    state = {
        inputValorMinimo: '',
        inputValorMaximo: '',
        inputValorBusca: '',
        listaExemplo: [
            {titulo: 'Manutenção de computadores', preco: 200, prazo: '05-21-2023', id: 0},
            {titulo: 'Diarista', preco: 100, prazo: '08-15-2022', id: 1},
            {titulo: 'Programador', preco: 2000, prazo: '12-21-2022', id: 2},
            {titulo: 'Cabeleireiro', preco: 40, prazo: '10-02-2023', id: 3},
            {titulo: 'Web Designer', preco: 2500, prazo: '11-30-2022', id: 4},
            {titulo: 'Manutenção de computadores', preco: 200, prazo: '05-21-2023', id: 5},
            {titulo: 'Diarista', preco: 100, prazo: '08-15-2022', id: 6},
            {titulo: 'Programador', preco: 2000, prazo: '12-21-2022', id: 7},
            {titulo: 'Cabeleireiro', preco: 40, prazo: '10-02-2023', id: 8},
            {titulo: 'Web Designer', preco: 2500, prazo: '11-30-2022', id: 9},
            {titulo: 'Manutenção de computadores', preco: 200, prazo: '05-21-2023', id: 10},
            {titulo: 'Diarista', preco: 100, prazo: '08-15-2022', id: 11},
            {titulo: 'Programador', preco: 2000, prazo: '12-21-2022', id: 12},
            {titulo: 'Cabeleireiro', preco: 40, prazo: '10-02-2023', id: 13},
            {titulo: 'Web Designer', preco: 2500, prazo: '11-30-2022', id: 14},
            {titulo: 'Manutenção de computadores', preco: 200, prazo: '05-21-2023', id: 15},
            {titulo: 'Diarista', preco: 100, prazo: '08-15-2022', id: 16},
            {titulo: 'Programador', preco: 2000, prazo: '12-21-2022', id: 17},
            {titulo: 'Cabeleireiro', preco: 40, prazo: '10-02-2023', id: 18},
            {titulo: 'Web Designer', preco: 2500, prazo: '11-30-2022', id: 19},
            {titulo: 'Manutenção de computadores', preco: 200, prazo: '05-21-2023', id: 20},
            {titulo: 'Diarista', preco: 100, prazo: '08-15-2022', id: 21},
            {titulo: 'Programador', preco: 2000, prazo: '12-21-2022', id: 22},
            {titulo: 'Cabeleireiro', preco: 40, prazo: '10-02-2023', id: 23},
            {titulo: 'Web Designer', preco: 2500, prazo: '11-30-2022', id: 24},
            {titulo: 'Manutenção de computadores', preco: 200, prazo: '05-21-2023', id: 25},
            {titulo: 'Diarista', preco: 100, prazo: '08-15-2022', id: 26},
            {titulo: 'Programador', preco: 2000, prazo: '12-21-2022', id: 27},
            {titulo: 'Cabeleireiro', preco: 40, prazo: '10-02-2023', id: 28},
            {titulo: 'Web Designer', preco: 2500, prazo: '11-30-2022', id: 29},
        ],
        ordem: 'semOrdenacao'
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

        return (

            <div>
                <MainContainer>
                    <FiltroContainer>
                        <TituloSection>Filtros</TituloSection>
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
                        <SelectOptions name='ordenacao' id='ordenacao' onChange={this.handleOrdem}>
                            <option value='semOrdenacao'>Sem Ordenação</option>
                            <option value='titulo'>Título</option>
                            <option value='valorMinimo'>Menor Valor</option>
                            <option value='valorMaximo'>Maior Valor</option>
                            <option value='prazo'>Prazo</option>
                        </SelectOptions>
                    </FiltroContainer>
    
                    <ListaServicosContainer>
                        {listaServicosJsx}
                    </ListaServicosContainer>
    
                    <CarrinhoContainer>
                        <TituloSection>Carrinho</TituloSection>
                    </CarrinhoContainer>
                </MainContainer>
                <Footer />
            </div>
        )
    }
}

export default ListagemDeTrabalhos