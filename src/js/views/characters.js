import React, { useState, useEffect, useNavigate, useContext } from "react";
import { Context } from "../store/appContext";

export const Characters = () => {

  const { store, actions } = useContext(Context);

  const characters = store.characters
  console.log(characters);

/*   
  const navigate = useNavigate(); */


  return (
    <div style={{ display: "flex",  overflowX: "auto", whiteSpace: "nowrap"}}>
      {characters?.map ((character) => (
        <div key={character.uid} className="card" style={{ width: "18rem", margin: "0 0.5rem" }}>
          <div className="card-body">
            <img 
              src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} 
              style={{ maxWidth: "100%" }} />
            <h5 
              className="card-title" 
              style={{ maxWidth: "100%" }}>{character.name}</h5>
            <a href="#" className="btn btn-primary">Ver</a>
          </div>
        </div>
        ))}
    </div>
  )
}
