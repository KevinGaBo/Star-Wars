import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from "react-router-dom";
import "../../styles/demo.css";


export const Planets = () => {

  const { store, actions } = useContext(Context);
  const planets = store.planets;

  const backgroundImageUrl = "https://i.makeagif.com/media/10-08-2019/E2Cq2J.gif";
  const [errorImageUrl, setErrorImageUrl] = useState('https://i.pinimg.com/474x/9f/d0/02/9fd00203ccb2d3b53270623f7c5e8482.jpg');

  const handleImageError = (event) => {
    event.target.style.width = '300rem';
    event.target.style.height = '16rem';
    event.target.src = errorImageUrl;
  };

  return (
    <div className='generalCards'
    style={{
      backgroundImage: `url(${backgroundImageUrl})`,
    }}>
      <div className='stylesCard'>
        {planets?.map((planet) => (
          <div key={planet.uid} className="card" style={{ width: "18rem", margin: "0 0.5rem" }}>
            <div className="card-body">
              <img
                src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                style={{ maxWidth: "100%" }}
                onError={handleImageError}
              />
              <h5
                className="card-title"
                style={{ maxWidth: "100%" }}>{planet.name}</h5>
                <div 
                  style={{ 
                    display: "flex",
                    marginLeft: "auto" }}
                >
              <Link to={`/planets/${planet.uid}`}>
                <button className="btn btn-danger me-2" >Ver planeta</button>
              </Link>
              <Link to="/demo">
                <button className="btn btn-primary ms-2 " >Vuelve atras</button>
              </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
