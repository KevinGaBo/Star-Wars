import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { Planets } from "./planets";



export const SingleCard = () => {

  const { store, actions } = useContext(Context);
  const character = store.character;
  
  const params = useParams()
  const [card, setCard] = useState({})
  const [errorImageUrl, setErrorImageUrl] = useState('https://i.pinimg.com/474x/9f/d0/02/9fd00203ccb2d3b53270623f7c5e8482.jpg');

  const handleImageError = (event) => {
    event.target.src = errorImageUrl;
  };
  
  console.log("CARD", card)

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/${params.type}/${params.uid}`)
      .then(res => res.json())
      .then(data => setCard(data.result.properties))
      .catch(err => console.error(err))
  }, [])



  let content;

  switch (params.type) {
    case "planets":
      content = (
        <div className="singleCard">
          <div className="row g-0">
            <div className="col-md-4">
              <img 
                src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`} 
                className="img-fluid rounded-start" alt="..."                 
                onError={handleImageError}
                />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title fs-2 fw-bold text-white">{card.name}</h5>
                <div>
                  <p className="card-text fs-3 fst-italic text-white">climate: {card.climate}</p>
                  <p className="card-text fs-3 fst-italic text-white">gravity: {card.gravity}</p>
                  <p className="card-text fs-3 fst-italic text-white">population: {card.population}</p>
                  <p className="card-text fs-3 fst-italic text-white">terrain: {card.terrain}</p>
                </div>
              </div>
            </div>
          </div>
          <Link to="/planets">
            <button className="btn btn-danger mx-3" >Ver planetas</button>
          </Link>
        </div>
      );
      break;

    case "people":
      content = (
        <div className="singleCard">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title fs-2 fw-bold text-white">{card.name}</h5>
                <div>
                  <p className="card-text fs-3 fst-italic text-white">height: {card.height}</p>
                  <p className="card-text fs-3 fst-italic text-white">hair_color: {card.hair_color}</p>
                  <p className="card-text fs-3 fst-italic text-white">skin_color: {card.skin_color}</p>
                  <p className="card-text fs-3 fst-italic text-white">eye_color: {card.eye_color}</p>
                </div>
              </div>
            </div>
          </div>
          <Link to="/characters">
            <button className="btn btn-danger mx-3" >Ver personajes</button>
          </Link>
        </div>
      );
      break;

    case "vehicles":
      content = (
        <div className="singleCard">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.uid}.jpg`} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title fs-2 fw-bold text-white">{card.name}</h5>
                <div>
                  <p className="card-text fs-3 fst-italic text-white">cargo_capacity: {card.climate}</p>
                  <p className="card-text fs-3 fst-italic text-white">consumables: {card.gravity}</p>
                  <p className="card-text fs-3 fst-italic text-white">cost_in_credits: {card.population}</p>
                  <p className="card-text fs-3 fst-italic text-white">model: {card.terrain}</p>
                </div>
              </div>
            </div>
          </div>
          <Link to="/vehicles">
            <button className="btn btn-danger mx-3" >Ver vehiculos</button>
          </Link>
        </div>
      );
      break;

    default:
      content = null;
  }

  return <div>{content}</div>;
}

