import React from "react";

const ExperienceCard = props => {
    const { position, date, description, bullets } = props.experience;

    return (
        <div className="experienceCard">
            <p>{position}</p>
            <p>{date}</p>
            <p>{description}</p>
            <p style={{whiteSpace: 'pre-line'}}>{bullets}</p>
        </div>
    )
}

export default ExperienceCard;