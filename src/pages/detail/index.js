import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar";
import { useParams } from "react-router";

export default function Detail() {
  const params = useParams();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchReceipeDetail() {
    setLoading(true);
    const url = `https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}`;

    const fetchDetail = await fetch(url);
    const detailResult = await fetchDetail.json();

    console.log(detailResult);
    if (detailResult.status) {
      setDetail(detailResult.data.recipe);
    }
    setLoading(false);
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
                <button type="button" className="btn">
                  Add to Favourites
                </button>
              </div>

              <div className="ingredients">
                <h4>Ingredients</h4>
                {detail.ingredients.length
                  ? detail.ingredients.map((ingredient, key) => {
                      return (
                        <p key={key}>
                          <span>
                            {ingredient.quantity} {ingredient.unit}
                          </span>

                          <span>{ingredient.description}</span>
                        </p>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
