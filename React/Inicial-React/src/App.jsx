import { Component } from 'react';
import './App.css';

class App extends Component {
  /* Atribuindo um state diretamente; */
  state = {
    name: 'Manaure',
    count: 0,
    people: [
      {
        id: 1,
        name: 'Gilda',
        sobrenome: 'sousa',
        idade: 59,
      },
      {
        id: 2,
        name: 'Millene',
        sobrenome: 'soares',
        idade: 23,
      },
      {
        id: 3,
        name: 'Manaure',
        sobrenome: 'vasconcelos',
        idade: 25,
      },
    ],
  };

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  newName = () => {
    this.setState({ name: 'millene' });
  };

  mudarNome = () => {
    const inputName = document.querySelector('.inputName');
    if (inputName.value === '') return;
    this.setState({ name: inputName.value });
    inputName.value = '';
  }; 

  /* Lifecycle methods */
  timeoutUpdate = null;
  // Quando o componente é renderizado.
  componentDidMount() {
    const inputName = document.querySelector('.inputName');
    inputName.value = 'Atualizou';
    this.handleTimeOut()
  }
  // Quando o componente é atualizado.
  componentDidUpdate() {
    this.handleTimeOut()
  }
  // Quando o componente vai ser alterado.
  componentWillUnmount () {
    clearInterval(this.timeoutUpdate)
  }

  handleTimeOut() {
    const { count } = this.state;
    
    this.timeoutUpdate = setTimeout(() => {
      
      this.setState({ count: count + 1 });
    }, 1000);
  }

  render() {
    /* Desestruturação */
    const { name, count, people } = this.state;

    return (
      <>
        <div>
          Eu vou ser fera demais nisso. <br></br>
          Na programação eu vou ser muito fooooda!
        </div>
        <div className="card">
          <button onClick={this.incrementCount}>count is {count}</button>
        </div>
        <p className="read-the-docs" onClick={this.newName}>
          {name}
        </p>
        <div>
          <input type="text" className="inputName"></input> <br></br>
          <button onClick={this.mudarNome}>Mudar nome</button>
        </div>

        {/* State com arrays */}
        <div>
          {people.map((peoples) => (
            <div key={peoples.id}>
              <p>{peoples.name}</p>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default App;
