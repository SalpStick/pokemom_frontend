import React from "react";
import "./LikedSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function LikedSection({ handleCardClick, pokeItems, handleCardlike }) {
  const currentUser = useContext(CurrentUserContext);
  const userLikedItems = pokeItems.filter(
    (item) => item.likes.includes(currentUser._id)
  );
  return (
    <div className="liked-section">
        <p className="liked-section_your-itemsText">Liked Pokemon</p>
      <ul className="liked-section__items">
        {userLikedItems.map((item) => {
          return(
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={handleCardClick}
              onCardLike={handleCardlike}
            />
          );
        })}
      </ul>
    </div>
  );
}
export default LikedSection;
