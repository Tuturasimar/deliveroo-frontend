import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Panier = ({ panier, setPanier, calculTotal }) => {
  if (panier.length !== 0) {
    return (
      <div className="panier">
        <button>Valider mon panier</button>
        {/* {console.log(panier)} */}
        {panier.map((commande, index) => {
          return (
            <>
              <div key={index}>
                <div className="details">
                  <div className="counter">
                    <FontAwesomeIcon
                      icon="minus-square"
                      className="icon"
                      onClick={() => {
                        const newCounter = [...panier];
                        newCounter[index].quantity--;
                        newCounter[index].quantity === 0 &&
                          newCounter.splice(index, 1);
                        setPanier(newCounter);
                      }}
                    />
                    <span>{commande.quantity}</span>
                    <FontAwesomeIcon
                      icon="plus-square"
                      className="icon"
                      onClick={() => {
                        const newCounter = [...panier];
                        newCounter[index].quantity++;
                        setPanier(newCounter);
                      }}
                    />
                  </div>

                  <span>{commande.title}</span>
                  <span className="price">{commande.price} €</span>
                </div>
              </div>
            </>
          );
        })}
        <div className="line1">
          <span>Sous-total</span>
          <span>{calculTotal(panier)} €</span>
        </div>
        <div className="line">
          <span>Frais de livraison</span>
          <span>2,50 €</span>
        </div>
        <div className="line3">
          <span>Total</span>
          <span>{calculTotal(panier) + 2.5} €</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="panier2">
        <button>Valider mon panier</button>
        <p>Votre panier est vide.</p>
      </div>
    );
  }
};

export default Panier;
