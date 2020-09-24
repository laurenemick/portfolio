import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

	return (
		<div className="navigation">
			<NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/contact">Contact</NavLink>
		</div>
	);
};

export default Navigation;