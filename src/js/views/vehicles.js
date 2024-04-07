import React, { useState, useEffect, useNavigate, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/demo.css";



export const Vehicles = () => {

  const { store, actions } = useContext(Context);
  const vehicles = store.vehicles

  const backgroundImageUrl = "https://i.pinimg.com/originals/18/99/a5/1899a5a6e6567adfab2b5b94e4ae59e9.gif";
  const [errorImageUrl, setErrorImageUrl] = useState('https://i.pinimg.com/originals/e8/63/92/e863927635dc1c5aba5663e8dd33efa0.jpg');

  const handleImageError = (event) => {
    event.target.style.width = '300rem';
    event.target.style.height = '16rem';
    event.target.src = errorImageUrl;
  };

  return (
    <div className="generalCards"
    style={{
      backgroundImage: `url(${backgroundImageUrl})`,
    }}>
      <div className="stylesCard">
        {vehicles?.map((vehicles) => (
          <div key={vehicles.uid} className="card" style={{ width: "18rem", margin: "0 0.5rem" }}>
            <div className="card-body">
              <img
                src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.uid}.jpg`}
                style={{ maxWidth: "100%" }}
                onError={handleImageError}
              />
              <h5
                className="card-title"
                style={{ maxWidth: "100%" }}>{vehicles.name}</h5>
              <Link to={`/vehicles/${vehicles.uid}`}>
                <button className="btn btn-danger mx-3" >Ver vehiculo</button>
              </Link>
              <Link to="/demo">
                <button className="btn btn-primary mx-3 " >Vuelve atras</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
