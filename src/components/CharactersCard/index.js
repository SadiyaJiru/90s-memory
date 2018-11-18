//This Comonent is used for displaying the characters cards onto the screen
import React from "react";
import "./style.css";
//generate our BootStrap Card

//the span has an onlcick event, give it the the ID of the Character that has been clicked
function CharactersCard(props) {
    return (
        <div className="card">
          <div className="img-container">
            <img alt={props.name} src={props.image} />
          </div>
          <span onClick={() => props.charactersClicked(props.id)} className="clicked">
            
          </span>
        </div>
      );
    }
    


export default CharactersCard;
