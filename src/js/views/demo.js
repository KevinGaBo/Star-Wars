import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {

	const { store, actions } = useContext(Context);

	const characters = store.characters
	const planets = store.planets
	const vehicles = store.vehicles
	const vehicle = store.vehicle


	console.log(vehicle)


	/*   
	  const navigate = useNavigate(); */


	return (
		<div>
			<div className="characters" style={{ display: "flex", overflowX: "auto", whiteSpace: "nowrap" }}>
			<Link to="/characters">
				<button className="btn btn-danger mx-3" >Ver personajes</button>
			</Link>
				{characters?.map((character) => (
					<div key={character.uid} className="card mt-2" style={{ width: "18rem", margin: "0 0.5rem" }}>
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
			<div style={{ display: "flex", overflowX: "auto", whiteSpace: "nowrap" }}>
			<Link to="/planets">
				<button className="btn btn-danger mx-3" >Ver planetas</button>
			</Link>
				{planets?.map((planets) => (
					<div key={planets.uid} className="card mt-2" style={{ width: "18rem", margin: "0 0.5rem" }}>
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
			<div style={{ display: "flex", overflowX: "auto", whiteSpace: "nowrap" }}>
			<Link to="/vehicles">
				<button className="btn btn-danger mx-3" >Ver vehiculos</button>
			</Link>
				{vehicles?.map((vehicles) => {
					actions.getVehicleById (vehicles.uid)
					return (
					<div key={vehicles.uid} className="card mt-2" style={{ width: "18rem", margin: "0 0.5rem" }}>
						<div className="card-body">
							<img
								src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.uid}.jpg`}
								style={{ maxWidth: "100%" }} />
							<h5
								className="card-title"
								style={{ maxWidth: "100%" }}>{vehicles.name}</h5>
									<p className="card-text"
								style={{ maxWidth: "100%" }}>{vehicle.model}</p>
														
						</div>
					</div>
				)})}
			</div>
		</div>

	)
}