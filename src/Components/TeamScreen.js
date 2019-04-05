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

        let manteca = this.props.finalPlayersList;

        // let arry = ["Laura", "Pete", "Joe", "Tom", "Jack", "stranger"];

        // let teamShuffled = shufflePlayers(manteca); //call the Fn to shuffle team members around

        // let teamA = teamShuffled; //extra step to make clear that the remaining of the splited arr (next step) will be storaged in this var

        // let teamB = teamShuffled.splice(teamShuffled.length/2); //teamB = removed items

        let teamA = shufflePlayers(manteca);
        let teamB = teamA.splice(teamA.length/2);



		return (

			<React.Fragment>


				<p>{teamA}</p>
				<p>{teamB}</p>


				
			</React.Fragment>



		);
	};

};


export default TeamScreen;



