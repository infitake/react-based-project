import React, { Component } from 'react';
import Infinity from './Infinity';
class App extends Component {
  state = {
    infinity : [
    {name: 'ravi', classe: 'rtf', rollno: 33, id: 1},
    {name: 'anil', classe: 'efd', rollno: 44, id: 2},
    {name: 'vikram', classe: 'das', rollno: 55, id: 3}
  ]
}
  render() {
    return ( 
      <div className="App">
      <h1>My first React app</h1>
      <p>Welcome :)</p>
      <Infinity infinity={this.state.infinity}/>
      </div>
    );
  }
}

export default App;
