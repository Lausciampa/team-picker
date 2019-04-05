// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import React, { Component }  from 'react';
// import Form from './Components/Form.js';
import TeamScreen from './Components/TeamScreen.js';

import { 
  BrowserRouter as Router, 
  Route, 
  Switch, } from "react-router-dom";


// const App = ({formSubmitted}) => (

//   <React.Fragment>

//     <Form />

//     { formSubmitted ? null : <TeamScreen /> }

//   </React.Fragment>

// );

// export default App;



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
    this.handleForm = this.handleForm.bind(this);

  };



  handleChange(e) {
    let input = e.currentTarget;
    this.setState({name: input.value});

  };


  handleClick() {
    let playersList = [...this.state.players, this.state.name];
    this.setState({players: playersList});
  };


  handleForm(e) {
    e.preventDefault();
    this.setState({formSubmitted: true,})
    
  };




  render() {
    return(

      <React.Fragment>


        { !this.state.formSubmitted ?  
          <form onSubmit = {this.handleForm}>

            <ol>
              {this.state.players.map( (player, index) => 
                <li key = {index} >{player}</li>)}
            </ol>

            

            {this.state.players.length < 3 ? 
              <div>
              <input 
                onChange = {this.handleChange} 
                value = {this.state.name} 
                type = "text" required
                placeholder = "Player's name" />
              <button onClick = {this.handleClick}>Add Player</button>
              </div> : <button>Find out your Teams</button>
            }

          </form> 

          : <TeamScreen players={this.state.players} /> }



      </React.Fragment>

    );
  }


};

export default App;