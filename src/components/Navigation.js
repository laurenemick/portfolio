import React from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
// FIXME: add backend or mailtrap to send emails 
// https://blog.mailtrap.io/react-send-email/
	return (
		<div className="navigation">
			<div className="icons">
				<a href="https://www.linkedin.com/in/laurenemick/">
					<FontAwesomeIcon icon={faLinkedinIn} size="2x" />
				</a>
				<a href="https://github.com/laurenemick">
					<FontAwesomeIcon icon={faGithub} size="2x" /> 
				</a>
				<NavLink to="/contact">
					<FontAwesomeIcon icon={faAt} size="2x" />
				</NavLink> 
			</div>

			<div className="links">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/projects">Projects</NavLink>
				<NavLink to="/experience">Experience</NavLink>
				<NavLink to="/contact">Contact</NavLink>
			</div>
		</div>
	);
};

export default Navigation;