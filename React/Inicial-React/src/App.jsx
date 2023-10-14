import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name: 'Manaure',
    count: 0,
  };

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  newName = () => {
    this.setState({ name: 'millene' });
  };

  mudarNome = () => {
    const inputName = document.querySelector('.inputName');
    this.setState({ name: inputName.value });
    inputName.value = '';
  };

  render() {
    const { name, count } = this.state;

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
      </>
    );
  }
}

export default App;
