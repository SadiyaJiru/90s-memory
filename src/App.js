//Top level container component
import React, { Component } from "react";
import CharacterCard from "./components/CharactersCard";
import Wrapper from "./components/Wrapper";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard"
import characters from "./characters.json";

//mock data from characters.json

// 
class App extends Component {
           //delete  after class name App-header
//initialize the default state , characters property on state object
state = {
 characters,
  clicked: [],
  score: 0,
  highestScore: 0
  
};


//a function that changes the characters state to "clicked" if clicked
charactersClicked = event =>{

const currentClick= event.target.alt;


// alert("I was clicked")

//if the current click is equal to the one before, store it in previouslyClicked
const previouslyClicked = this.state.clicked.indexOf(currentClick) > -1;

if (previouslyClicked){
    this.setState({
      //Images get shuffled around every you guess correct on a character
      characters: this.state.characters.sort( function (a,b){
        return 0.5 - Math.random();    
    }),
    highestScore: (this.state.score > this.state.highestScore) ? this.state.score : this.state.highestScore,

    clicked: [],
    score: 0,

})

alert("You lost, try again.")

//if you click on a character that has not been clicked 
}  else {
  this.setState(
    {
      //shuffle the images randomly
      characters: this.state.characters.sort(function(a, b) {
        return 0.5 - Math.random();
      }),
      //
      clicked: this.state.clicked.concat(
        currentClick
      ),
      //incarament the score
      score: this.state.score + 1
     
    },
    //if you get them all right without double clicking 
  () =>{
    //if guess all 12 images correctly you win
if(this.state.score === 15){

  // alert(`you win`);

  //Reset the game
  this.setState({

    characters: this.state.characters.sort(function(a, b) {
      return 0.5 - Math.random();

    }),
    highestScore: (this.state.score > this.state.highestScore) ? this.state.score : this.state.highestScore,

    clicked: [],
    score: 0
});
  }
  });
}
};

//render methond that renders the top level componenet of Wrapper
//Wrapper will render a title, use .map to create an array of all the characters in the clicked state
//for each Character we want to generate a CharacterCard and pass in the charactersClicked method from above
  render() {
    return (
      <Wrapper>
      <ScoreBoard 
        score={this.state.score}
        highestScore ={this.state.highestScore}

      />
      <div className ="wrapper">
{this.state.characters.map(characters =>(
  <CharacterCard
charactersClicked = {this.charactersClicked}
id={characters.id}
name={characters.name}
key={characters.id}
// name={character.name}
image={characters.image}
/>

))}
</div>
</Wrapper>
    );
  }
}

export default App;
