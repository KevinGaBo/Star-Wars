import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/demo.css";
import { MdFavorite } from "react-icons/md";

export const Characters = () => {
  const { store, actions } = useContext(Context);
  const characters = store.characters;
  const errorImageUrl = "https://i.pinimg.com/originals/e8/63/92/e863927635dc1c5aba5663e8dd33efa0.jpg";

  const [imageError, setImageError] = useState({}); 

  const handleImageError = (event, character) => {
    event.target.style.width = "300px";
    event.target.style.height = "160px";
    event.target.src = errorImageUrl;
    setImageError(prevState => ({
      ...prevState,
      [character.uid]: true 
    }));
  };
  
  const handleFavoriteClick = (character) => {
    if (!store.favorites.includes(character.name)) {
      actions.addFavorites(character.name);
    } else {actions.removeFavorites(character.name);}
  };

  return (
    <div className="generalCards">
      <div className="stylesCard">
        {characters?.map((character) => (
          <div key={character.uid} className="card character" style={{ margin: "0 0.5rem" }}>
            <div className="card-body">
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
                style={{ maxWidth: "100%" }}
                onError={(event) => handleImageError(event, character)}
              />
              <h5 className="card-title" style={{ maxWidth: "100%" }}>{character.name}</h5>
              <div className="buttonContainer">
                <Link to={`/people/${character.uid}`}>
                  <button className="btn btn-danger me-1">Ver personaje</button>
                </Link>
                <Link to="/demo">
                  <button className="btn btn-primary ms-1">Vuelve atras</button>
                </Link>
                <button
                  className="btn favoriteButton"
                  style={{ color: store.favorites.includes(character.name) ? "#ff0000" : "#f1e2e2" }}
                  onClick={() => handleFavoriteClick(character)}>
                  <MdFavorite />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
