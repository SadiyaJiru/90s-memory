//This Comonent is used for displaying the characters cards onto the screen
import React from "react";
import "./style.css";

//generate our BootStrap Card

//the span has an onlcick event, give it the the ID of the Character that has been clicked
const CharactersCard = props => (
  
        <div className="card"  onClick={props.charactersClicked}>
          <div className="img-container">
            <img alt={"90s cartoons"} src={props.image} />
          </div>
        </div>
)
    


export default CharactersCard;
