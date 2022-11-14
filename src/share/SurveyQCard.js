import React from "react";

// import { Link } from "react-router-dom";
import "./SurveyQCard.css";

const Cards = ({ title, description, id }) => {
  return (
    <div className="box">
      <div className="my-card">
        <div className="my-card-container">
          <p className="my-card-title">{title}</p>
          {/* <p className="padding my-card-paragraph">{description}</p> */}
          {/* <Link to={`/surveys/${id}/questions/${}`} className="padding links my-card-link app-link">
            read more
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Cards;
