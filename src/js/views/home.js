import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";


export const Home = () => {
	return (
		<div className="father text-center">
			<div className="background-image" />
			<Link to="/demo">
				<a href="#" className="btn btn-success">
					Los Jedi no buscan la aventura, sino el conocimiento.
				</a>
			</Link>
		</div >
	);
};
{/* 
				
			 */}