
## "Team Picker" web app

This is the final project of the DevelopMe_ bootcamp which took place between January and April 2019.


### To run the project:

- git clone this repo
- run npm install or npm i in your terminal.
- run npm start to view on localhost:3000

You can also view the live app here: 

### Tecnologies used:

React, JavaScript, HTML, SASS, gulp, Git.


## The project: 

The exercise was to create a tool which randomly picks 5-a-side football teams from a list of 10 names (10 players = 2 teams of 5).


### My process:

I imagined this project as a two page web app: one to submit the name of the 10 players and the other page with the two teams created out of that initial 10-names list.

The first page (the landing page) needed a form to input the data along with a way to store it and pass it into the second page, in which the data needed to be shuffled and divided into two different groups.

Since we were talking about a list of names, I knew the way to store this data was going to be in an array. And a Class Component was going to be needed to store it and pass it to its child Component as 'props'.

The second page (the child Component) should be able to perform two actions with this data: shuffle it AND divide it into two different groups (arrays as these groups are also lists).

After doing some research, I concluded that the best way to shuffle an array is by writing a function that uses Fisher-Yates Shuffling Algorithm. With the resulting array, I could apply the JS method .splice() and divide the shuffled array equally in two parts. This way I'd achieve the two required arrays.


### Obstacles I came across:

The first thing that came to my mind when I saw the need for an input field and an action performed by a button, was "a form". However, I didn't manage to work out how to use the form along with the behaviour I wanted from the elements. As soon as I added a player, the submit action was triggered (as the "add player" button lived within the form), stopping me adding the other 9 players. 

To sort this out, I decided to leave aside the form and use instead an input field and two different buttons with their respective actions: one to keep track of the input value, and the other one to take the user to the next page by using the Link Component.


### Styling:

Using CSS is always as fun as it is challenging. Styling is a neverending task but I feel pretty satisfied with the result. 

I took some time to look for the perfect background image, as I thought it was a very important detail to make a good first impression. Also, the family fonts selected were chosen with their use in mind: for text and buttons the two font families needed to work well together and be easily read on the screen. For the headings, a family font that works well with the image and has visual impact.

The responsiveness of this design is something to keep working on. I found it extra challenging as the elements should always be located in relation to the image, in every possible size of the viewport. Nevertheless I think I managed to make it work well in most window sizes. And for smaller screens, I decided to remove the image but keep the same colour scheme in the background. Also for smaller screens, the two resulting teams will be displayed one on top of the other, as opposed to next to one and other (as seen in the full desktop version).


### Next steps:

In order to meet the deadline for this project, I had to leave out some functionality that I wanted to include such as:
- Form validation: the input shouldn't accept an empty instring as valid input. 
- Polish responsiveness.
- An additional feature in the second page to create again the randomnised teams (in case the user is unhappy with the inital result).
- The user should have the option to edit or delete playes' names from the original list on the home page.
- The user should have the option to customise the default name of the teams.

Additionally, I want to work on the optional advanced features of this project:
- support for n-a-side, where a list of any length can be split into two teams.
- support for balancing of the teams, where some measure of each player's strength is used to allocate teams fairly.


### Conclusions:

I first approached this project with some doubts about my own skills. After working on it for a week, I can't say enough how much I've enjoyed and how happy I am with the result (even though I acknowledge there's still a lot of room for improvement). It was one of the most valuable lessons of this course, as I had the chance to see what I was able to create with the lessons I learned. I've enjoyed applying my skills to solve problems, to make decisions, to identify my current limits and finding the way to create a product I can be proud of.
