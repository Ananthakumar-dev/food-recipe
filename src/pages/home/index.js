import React, { useContext } from "react";
import NavBar from "../../components/navBar";
import { ReceipeContext } from "../../context/receipeContext";
import ReceipeList from "./receipeList";

export default function Home() {
  const { receipes, loading, error } = useContext(ReceipeContext);

  return (
    <>
      <NavBar />
      <div className="result-container">
        {loading && (
          <div className="loading">
            <h2>Loading...</h2>
          </div>
        )}
        {error && (
          <div className="error">
            <h2>{error}</h2>
          </div>
        )}

        {!loading && !error && receipes.length ? (
          <div className="receipes-list">
            {receipes.map((receipe, key) => {
              return <ReceipeList key={key} receipe={receipe} />;
            })}
          </div>
        ) : !loading && !error ? (
          <div className="no-content-message">
            <h2> No results to show! Please search something </h2>
          </div>
        ) : null}
      </div>
    </>
  );
}
