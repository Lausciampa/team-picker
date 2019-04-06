import React, { Component } from 'react';



// // Create a Fn to randomnize a given array:
function shufflePlayers(arr) {
	let i = arr.length - 1; //initial point in the arr: Last item

	for ( i; i > 0; i-- ) {	 //it will iterate until i reaches 0, from last item to the first.

	    let j = Math.floor( Math.random() * (i + 1) );  //this generates a random number that will be multiplied by the current value of (i + 1), and Math.floor is applied to get an integer

	    let temp = arr[i];
	    arr[i] = arr[j];
	    arr[j] = temp;
	}
	return arr;    
};



class TeamScreen extends Component {

	constructor(props){
		super(props);

		this.state = {
			teamA: [],
			teamB: [],
		};
	};



	render() {

        let players = this.props.finalPlayersList;

        let teamA = shufflePlayers(players); //first half of the splited array
        let teamB = teamA.splice(teamA.length/2); //second half (the chopped off one)



		return (

			<React.Fragment>


				<p>{teamA}</p>
				<p>{teamB}</p>


				
			</React.Fragment>



		);
	};

};


export default TeamScreen;



