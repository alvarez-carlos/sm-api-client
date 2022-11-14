import React from "react";

import { Link } from "react-router-dom";
import "./SurveyCard.css";

const Cards = ({ title, description, id }) => {
  return (
    <div className="box">
      <div className="my-card">
        <div className="my-card-container">
          <p className="my-card-title">{title}</p>
          <p className="padding my-card-paragraph">{description}</p>
          <div className="card-links-container">
          <Link to={`/surveys/${id}/questions`} className="padding links my-card-link app-link">
            see questions
          </Link>
          <Link to={`/surveys/${id}/answers`} className="padding links my-card-link app-link">
            see answers
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
