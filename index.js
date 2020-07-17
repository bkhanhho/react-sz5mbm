import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Buu Khanh'
    };

  }
   render() {
    return (<div/>);
   }
}

render(<App />, document.getElementById('root'));
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});
