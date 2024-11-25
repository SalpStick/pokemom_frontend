import { useContext } from "react";
import "./ItemCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, onCardLike }) {

  const currentUser = useContext(CurrentUserContext);
  if (!item || !item.likes) {
    return <li className="card">Error: Missing item data</li>;
  }

  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleLike = () => {
    if (currentUser) {
      const isLiked = item.likes.includes(currentUser._id);
      onCardLike({ id: item._id, isLiked });
    }
  };

  const isLiked = currentUser ? item.likes.includes(currentUser._id) : false;

  const itemLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : ""
  }`;

  return (
    <li className="card">
      <div className="card__title">
      <h2 className="card__name">{item.name}</h2>
      {currentUser && (
          <button
            type="button"
            className={itemLikeButtonClassName}
            onClick={handleLike}
          ></button>
      )}
      </div>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
