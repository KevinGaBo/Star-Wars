import React, { useState, useEffect, useNavigate, useContext } from "react";
import { Context } from "../store/appContext";

export const Vehicles = () => {

  const { store, actions } = useContext(Context);
  const vehicles = store.vehicles
  console.log(vehicles);

/*const navigate = useNavigate(); */

  return (
    <div style={{ display: "flex",  overflowX: "auto", whiteSpace: "nowrap"}}>
      {vehicles?.map ((vehicles) => (
        <div key={vehicles.uid} className="card" style={{ width: "18rem", margin: "0 0.5rem" }}>
          <div className="card-body">
            <img 
              src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.uid}.jpg`} 
              style={{ maxWidth: "100%" }} />
            <h5 
              className="card-title" 
              style={{ maxWidth: "100%" }}>{vehicles.name}</h5>
            <a href="#" className="btn btn-primary">Ver</a>
          </div>
        </div>
        ))}
    </div>
  )
}
