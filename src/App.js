import React from 'react'
import Menu from './components/menu';
import ListagemDeTrabalhos from './components/ListagemDeTrabalhos/ListagemDeTrabalhos';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ListagemDeTrabalhos />
      </div>
    );
  }
}

export default App;
