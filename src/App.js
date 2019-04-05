// import './App.css';
import React, { Component }  from 'react';
// import Form from './Components/Form.js';
import TeamScreen from './Components/TeamScreen.js';

import { 
  BrowserRouter as Router, 
  Route, 
  Switch, } from "react-router-dom";


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      name: "",
      players: [],
      formSubmitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  };



  handleChange(e) {
    let input = e.currentTarget;
    this.setState({name: input.value});

  };


  handleClick() {
    let playersList = [...this.state.players, this.state.name];
    this.setState({players: playersList});
  };


  handleSubmit() {
    this.setState({formSubmitted: true,});
  };




  render() {
    return(

      <React.Fragment>

            <ol>
              {this.state.players.map( (player, index) => 
                <li key = {index} >{player}</li>)}
            </ol>

            {this.state.players.length < 3 ? 
              <div>
              <input 
                onChange = {this.handleChange} 
                value = {this.state.name} 
                type = "text"
                placeholder = "Player's name" />
              <button onClick = {this.handleClick}>Add Player</button>
              </div> : <button onClick = {this.handleSubmit}>Find out your Teams</button>
            }



          <TeamScreen players={this.state.players} />



      </React.Fragment>

    );
  }


};

export default App;