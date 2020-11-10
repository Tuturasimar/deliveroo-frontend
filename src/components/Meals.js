import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Meals = ({ data, panier, setPanier }) => {
  return (
    <div className="menu">
      {data.categories.map((list, index) => {
        // console.log(list);
        return (
          <>
            <div key={index}>
              {list.meals.length !== 0 && <h2>{list.name}</h2>}

              <div className="list">
                {list.meals.map((meal, index) => {
                  return (
                    <div key={index} className="littlebox">
                      <div
                        className="text"
                        onClick={() => {
                          const newMeal = [...panier];
                          let isMealPresent = false;

                          for (let i = 0; i < newMeal.length; i++) {
                            if (newMeal[i].id === meal.id) {
                              newMeal[i].quantity++;
                              isMealPresent = true;
                            }
                          }
                          if (!isMealPresent) {
                            newMeal.push({
                              id: meal.id,
                              title: meal.title,
                              price: meal.price,
                              quantity: 1,
                            });
                          }

                          setPanier(newMeal);
                          // console.log(newMeal);
                        }}
                      >
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
          </>
        );
      })}
    </div>
  );
};

export default Meals;
