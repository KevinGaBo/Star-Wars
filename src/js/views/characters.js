import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/demo.css";
import { MdFavorite } from "react-icons/md";




export const Characters = () => {

  const { store, actions } = useContext(Context);

  const characters = store.characters
  const backgroundImageUrl = "https://i.blogs.es/23b58b/star-wars-wallpapers-6/450_1000.jpg";


  const [errorImageUrl, setErrorImageUrl] = useState('https://i.pinimg.com/originals/e8/63/92/e863927635dc1c5aba5663e8dd33efa0.jpg');
  const [isFavorited, setIsFavorited] = useState(false);

 /*  const handleFavoriteClick = () => {
    //setIsFavorited(!isFavorited); 
  }; */

  const handleImageError = (event) => {
    event.target.style.width = '300rem';
    event.target.style.height = '16rem';
    event.target.src = errorImageUrl;
  };

 console.log(store.favorites)
  return (
    <div className="generalCards" style={{
      backgroundImage: `url(${backgroundImageUrl})`,
    }}>
      <div className="stylesCard">
        {characters?.map((character) => (
          <div key={character.uid} className="card character" style={{ margin: "0 0.5rem" }}>
            <div className="card-body" >
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
                style={{ maxWidth: "100%" }}
                onError={handleImageError}
              />
              <h5
                className="card-title"
                style={{ maxWidth: "100%" }}>{character.name}</h5>
              <div className="buttonContainer">
                <Link to={`/people/${character.uid}`}>
                  <button className="btn btn-danger me-1" >Ver personaje</button>
                </Link>
                <Link to="/demo">
                  <button className="btn btn-primary ms-1" >Vuelve atras</button>
                </Link>
                <Link>
                  <button
                    className="btn favoriteButton"
                    style={{ color: store.favorites.includes(character.name) ? "#ff0000" : "#f1e2e2" }}
                    onClick={() => {
                      if (!store.favorites.includes(character.name)){
                        actions.addFavorites(character.name)
                      }
                      else {actions.removeFavorites(character.name)}
                    }}
                  ><MdFavorite />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
