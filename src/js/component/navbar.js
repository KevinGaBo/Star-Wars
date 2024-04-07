import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FaRegTrashAlt } from "react-icons/fa";


export const Navbar = () => {
	const { store, actions } = useContext(Context);


	const backgroundImageUrl = "https://media.istockphoto.com/id/500755774/es/foto/lightsaber-en-el-espacio-medio-ambiente-listo-para-bocetos-de-sus-personajes.jpg?s=612x612&w=0&k=20&c=nn81aIKxaOScCXmqCnwytgTez4K4vprTKcorIIgOyrA=";
	console.log(store.favorites);
	return (
		<nav
			className="navbar navbar-light bg-light"
			style={{
				backgroundImage: `url(${backgroundImageUrl})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				width: 'calc(100vw + 54rem)',
				marginLeft: '-10px',
				marginRight: '-10px'
			}}
		>
			<Link to="/">
				<button className="btn btn-primary">Back to Home</button>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						{store.favorites.length} Favoritos
					</button>
					<ul className="dropdown-menu">
						{store.favorites.map((favorite, index) => {
							return (
								<li
									key={index}>
									<p>{favorite}
										<FaRegTrashAlt
											onClick={() => {
												actions.removeFavorites(index)
											}} />
									</p>
								</li>
							)
						})}
					</ul>
				</div>
				<Link to="/demo">
					<button className="btn btn-primary">Check all information</button>
				</Link>
			</div>
		</nav>
	);
};
