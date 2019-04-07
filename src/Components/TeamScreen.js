import React, { Component } from 'react';
import '../styles/css/main.css';



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



const TeamScreen = ({ finalPlayersList }) => {

    let teamA = shufflePlayers(finalPlayersList); //first half of the splited array
    let teamB = teamA.splice(teamA.length/2); //second half (the chopped off one)

	return (

		<React.Fragment>

			<div className="teamScreen-Container">

				
				<div className="teamsContainer">
					<h2>Team A</h2>

					<div className="players-Container">
						<ol>
							{teamA.map( (player, index) => <li key = {index} >{player}</li> )}
						</ol>
					</div>
				</div>
				
				<br />

				<div className="teamsContainer">
					<h2>Team B</h2>
					<div className="players-Container">
						<ol>
							{teamB.map( (player, index) => <li key = {index} >{player}</li> )}
						</ol>
					</div>
				</div>

			</div>
			
		</React.Fragment>
	);
};

export default TeamScreen;



