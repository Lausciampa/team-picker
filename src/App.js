import React, { Component }  from 'react';
import TeamScreen from './Components/TeamScreen.js';
import './styles/css/main.css';


import { 
  BrowserRouter as Router, 
  Route, 
  Link, } from "react-router-dom";


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      name: "",
      players: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

  };



  handleChange(e) {
    let input = e.currentTarget;
    this.setState({name: input.value});
  };


  handleClick() {
    let playersList = [...this.state.players, this.state.name];
    this.setState({players: playersList, name: ""});
  };



  render() {
    return(

      <Router>

        <React.Fragment> 

          <Route exact path="/" render = { () => (

            <div className="home-mainContainer">

              <h1>Team Picker</h1>
              <div className="home-formContainer">

                    <div className="home-formElementsContainer">
                    {this.state.players.length < 10 ? 

                      <div>
                        <input 
                          onChange = {this.handleChange} 
                          value = {this.state.name} 
                          type = "text" required
                          placeholder = "Enter player's name" 
                          maxlength = "40" 
                          size = "25"/> 
                        <br />
                        <button onClick = {this.handleClick} className="button">ADD PLAYER</button>
                      </div> : <Link to="/teams"><button className="button">SHOW YOUR TEAMS</button></Link>

                    }
                    </div>

                    {!this.state.players.length ? null :                     
                      <ul>
                        <div className="home-PlayersContainer">
                          {this.state.players.map( (player, index) => 
                          <li key = {index} >{player}</li>)}
                        </div>
                      </ul>
                    }

              </div>
              

            </div>
          )} /> {/*Route exact path */}

          <Route path="/teams" render = { () => (
            <TeamScreen finalPlayersList = {this.state.players} />

          )} />

        </React.Fragment>

      </Router>

    );
  }


};

export default App;