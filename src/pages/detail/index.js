import React, { useContext, useEffect, useState } from "react";
import NavBar from "../../components/navBar";
import { useParams } from "react-router";
import { ReceipeContext } from "../../context/receipeContext";

export default function Detail() {
  const params = useParams();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const { favourites, setFavourites } = useContext(ReceipeContext);

  async function fetchReceipeDetail() {
    setLoading(true);
    const url = `https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}`;

    const fetchDetail = await fetch(url);
    const detailResult = await fetchDetail.json();

    if (detailResult.status) {
      setDetail(detailResult.data.recipe);
    }
    setLoading(false);
  }

  function handleAddFavourites(detail) {
    const copyFav = [...favourites];

    const index = copyFav.findIndex((fav) => fav.id === detail.id);
    if (index === -1) {
      copyFav.push(detail);
    } else {
      copyFav.splice(index);
    }

    setFavourites(copyFav);
  }

  useEffect(() => {
    fetchReceipeDetail();
  }, []);

  return (
    <>
      <NavBar />

      <div className="detail-wrapper">
        {loading && (
          <div className="loading">
            <h2>Loading...</h2>
          </div>
        )}

        {detail && (
          <div className="detail-content">
            <div className="left-section">
              <img src={detail.image_url} alt={detail.title} />
            </div>
            <div className="right-section">
              <div className="title">
                <h4>{detail.publisher}</h4>
                <h2>{detail.title}</h2>
              </div>

              <div className="add_to_favourites">
                <button
                  type="button"
                  className="btn"
                  onClick={() => handleAddFavourites(detail)}
                >
                  {favourites.findIndex((fav) => fav.id === detail.id) === -1
                    ? "Add to Favourites"
                    : "Remove from Favourites"}
                </button>
              </div>

              <div className="ingredients-section">
                <h4>Ingredients</h4>
                <ul>
                  {detail.ingredients.length
                    ? detail.ingredients.map((ingredient, key) => {
                        return (
                          <li key={key}>
                            <span>
                              {ingredient.quantity} {ingredient.unit}
                            </span>

                            <span>{ingredient.description}</span>
                          </li>
                        );
                      })
                    : null}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
