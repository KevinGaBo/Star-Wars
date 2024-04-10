import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center"
	style={{
		backgroundImage: `url("https://cdn.pixabay.com/animation/2023/03/19/02/34/02-34-11-741_512.gif")`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	  }}>
		<p className="text-light">
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<a href="http://www.4geeksacademy.com">4Geeks Academy</a>
		</p>
	</footer>
);
