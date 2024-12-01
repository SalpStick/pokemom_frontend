import "./Main.css";
import TitleCard from "../TitleCard/TitleCard.jsx";
import ItemCard from "../ItemCard/ItemCard";
import React , { useContext } from 'react';

function Main({ handleCardClick, pokemonItems, handleCardLike }) {

  return (
    <main>
      <TitleCard/>
      <section className="cards">
        <p className="card__text">
          Gotta catch 'em all
        </p>
        <ul className="cards__list">
          {pokemonItems
            .filter((item) => {
              return item
            }).map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                  onCardLike={handleCardLike}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
