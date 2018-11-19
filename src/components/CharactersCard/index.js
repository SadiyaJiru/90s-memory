//This Comonent is used for displaying the characters cards onto the screen
import React from "react";
import "./style.css";

//generate our BootStrap Card

//the span has an onlcick event, give it the the ID of the Character that has been clicked
            // <img alt={props.image} src={props.image} />

 function CharactersCard (props){
  return(
    <div class="card myCard" onClick={props.charactersClicked}>
  
    <img src={props.image} alt={props.image} />  </div>
    )
 }
  
   


export default CharactersCard;
