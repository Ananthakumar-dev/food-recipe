import React from "react";
import { Link } from "react-router-dom";

export default function ReceipeList({ receipe }) {
  return (
    <div className="list">
      <Link to={`/food-details/${receipe.id}`}>
        <img
          src={receipe.image_url}
          alt={receipe.title}
          className="recipe-img"
        />
      </Link>

      <div className="list-content">
        <p className="publisher">
          <span className="highlight">Publisher :</span> {receipe.publisher}
        </p>
        <h3 className="title">{receipe.title}</h3>
      </div>
    </div>
  );
}
