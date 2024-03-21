import React, {useState, useEffect, useNavigate, useContext} from 'react'
import { Context } from '../store/appContext';

export const Planets = () => {
  
  const {store, actions} = useContext(Context);
  const planets = store.planets
  console.log(planets);

  /*const navigate = useNavigate(); */

  return (
    <div style={{ display: "flex",  overflowX: "auto", whiteSpace: "nowrap"}}>
      {planets?.map ((planets) => (
        <div key={planets.uid} className="card" style={{ width: "18rem", margin: "0 0.5rem" }}>
          <div className="card-body">
            <img 
              src={`https://starwars-visualguide.com/assets/img/planets/${planets.uid}.jpg`} 
              style={{ maxWidth: "100%" }} />
            <h5 
              className="card-title" 
              style={{ maxWidth: "100%" }}>{planets.name}</h5>
            <a href="#" className="btn btn-primary">Ver</a>
          </div>
        </div>
        ))}
    </div>
  )
}