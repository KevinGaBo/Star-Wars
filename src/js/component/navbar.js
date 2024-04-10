import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FaRegTrashAlt } from "react-icons/fa";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    const backgroundImageUrl = "https://media.istockphoto.com/id/500755774/es/foto/lightsaber-en-el-espacio-medio-ambiente-listo-para-bocetos-de-sus-personajes.jpg?s=612x612&w=0&k=20&c=nn81aIKxaOScCXmqCnwytgTez4K4vprTKcorIIgOyrA=";

    return (
        <nav
            className="navbar navbar-light bg-light d-flex justify-content-between"
            style={{
                backgroundImage: `url(${backgroundImageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Link to="/">
                <button className="btn btn-primary">Back to Home</button>
            </Link>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {store.favorites.length} Favoritos
                </button>
                <ul className="dropdown-menu">
                    {store.favorites.map((favorite, index) => (
                        <li key={index}>
                            <p>{favorite}</p>
                            <FaRegTrashAlt
                                onClick={() => {
                                    actions.removeFavorites(index)
                                }}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <Link to="/demo">
                <button className="btn btn-primary">Check all information</button>
            </Link>
        </nav>
    );
};
