import React, { useContext } from "react";
import NavBar from "../../components/navBar";
import { ReceipeContext } from "../../context/receipeContext";
import ReceipeList from "../home/receipeList";

export default function Favourites() {
  const { favourites } = useContext(ReceipeContext);

  return (
    <>
      <NavBar />
      <h2 className="fav-title">Favourites</h2>
      <div className="result-container">
        {favourites.length ? (
          <div className="receipes-list">
            {favourites.map((receipe, key) => {
              return <ReceipeList key={key} receipe={receipe} />;
            })}
          </div>
        ) : (
          <div className="no-content-message">
            <h2> No favourites added </h2>
          </div>
        )}
      </div>
    </>
  );
}
