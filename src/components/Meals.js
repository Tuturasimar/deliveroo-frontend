import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Meals = ({ data }) => {
  return (
    <div>
      {data.categories.map((list, index) => {
        console.log(list);
        return (
          <div key={index}>
            {list.meals.length !== 0 && <h2>{list.name}</h2>}

            <div className="list">
              {list.meals.map((meal, id) => {
                return (
                  <div key={id} className="littlebox">
                    <div className="text">
                      <h3>{meal.title}</h3>

                      <p className="description">{meal.description}</p>
                      <p className="price">
                        <span>{`${meal.price} €`}</span>
                        {meal.popular && (
                          <span
                            className="popular"
                            style={{
                              color: "#FE8000",
                              fontSize: "10px",
                              fontFamily: "Bw Modelica Bold",
                            }}
                          >
                            <FontAwesomeIcon icon="star" /> Populaire
                          </span>
                        )}
                      </p>
                    </div>
                    {meal.picture && <img alt="meal" src={meal.picture} />}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Meals;
