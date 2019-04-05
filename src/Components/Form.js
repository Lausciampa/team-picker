import React, { Component } from 'react';
import TeamScreen from './TeamScreen.js';




class Form extends Component {

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

		);
	}






};

export default Form;