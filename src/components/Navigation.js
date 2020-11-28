import React from "react";
import { NavLink } from "react-router-dom";

import DrawerMenu from "../material_ui/navDrawerMenu"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
// FIXME: add backend or mailtrap to send emails 
// https://blog.mailtrap.io/react-send-email/
	return (
		<section className="navigation">
			<div className="icons">
				<a className="icon" href="https://www.linkedin.com/in/laurenemick/">
					<FontAwesomeIcon icon={faLinkedinIn} size="2x" />
				</a>
				<a className="icon" href="https://github.com/laurenemick">
					<FontAwesomeIcon icon={faGithub} size="2x" /> 
				</a>
				{/* <NavLink className="icon" to="/contact">
					<FontAwesomeIcon icon={faAt} size="2x" />
				</NavLink>  */}
			</div>

			<div className="navDrawerMenu">
				<DrawerMenu />
			</div>

			<div className="links">
				<NavLink className="link" to="/">Home</NavLink>
				<NavLink className="link" to="/projects">Projects</NavLink>
				<a href="https://resume.creddle.io/resume/5j0v2dgq9qu" className="link">Resume</a>
				{/* <NavLink className="link" to="/contact">Contact</NavLink> */}
			</div>
		</section>
	);
};

export default Navigation;