import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {

	const { store } = useContext(Context);

	const characters = store.characters
	const planets = store.planets
	const vehicles = store.vehicles

	const [errorImageUrl] = useState('https://i.pinimg.com/474x/9f/d0/02/9fd00203ccb2d3b53270623f7c5e8482.jpg');

	const handleImageError = (event) => {
	  event.target.src = errorImageUrl; 
	};

	return (
		<div className="demoContainer">
			<div className="characters demoCards">
				<Link to="/characters">
					<button className="btn btnDemo btn-danger mx-3" >Ver personajes</button>
				</Link>
				{characters?.map((character) => (
					<div key={character.uid} 
						className="card mt-2" 
						style={{ width: "18rem", margin: "0 0.5rem" }}>
						<div className="card-body">
							<img
								src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
								style={{ maxWidth: "100%" }}
								onError={handleImageError} 
								/>
							<h5
								className="card-title"
								style={{ maxWidth: "100%" }}>{character.name}
							</h5>
						</div>
					</div>
				))}
			</div>
			<div className="planets demoCards">
				<Link to="/planets">
					<button className="btn btnDemo btn-danger mx-3" >Ver planetas</button>
				</Link>
				{planets?.map((planets) => (
					<div key={planets.uid} 
						className="card mt-2" 
						style={{ width: "18rem", margin: "0 0.5rem" }}>
						<div className="card-body">
							<img
								src={`https://starwars-visualguide.com/assets/img/planets/${planets.uid}.jpg`}
								style={{ maxWidth: "100%" }}
								onError={handleImageError} 
								/>
							<h5
								className="card-title"
								style={{ maxWidth: "100%" }}>{planets.name}</h5>
						</div>
					</div>
				))}
			</div>
			<div className="vehicles demoCards"
				style={{width: "150rem", height: "15rem" }}>
				<Link to="/vehicles">
					<button className="btn btnDemo btn-danger mx-3" >Ver vehiculos</button>
				</Link>
				{vehicles?.map((vehicles) => {
					return (
						<div key={vehicles.uid} className="card mt-2" style={{ width: "18rem", margin: "0 0.5rem" }}>
							<div className="card-body">
								<img
									src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.uid}.jpg`}
									style={{ maxWidth: "100%", height: "10rem" }} 
									onError={handleImageError} 
									/>
								<h5
									className="card-title"
									style={{ maxWidth: "100%" }}>{vehicles.name}
								</h5>
							</div>
						</div>
					)
				})}
			</div>
		</div>

	)
}