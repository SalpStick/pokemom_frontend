import { useState, useContext } from "react";
  import "./ItemModal.css";
  import App from "../App/App";
  import { getPokemon } from  "../../utils/PokeAPI";
  import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemModal({ activeModal, card, closeActiveModal }) {
  const [types, setTypes] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const currentUser = useContext(CurrentUserContext);

  if (card.name != undefined) {
    getPokemon(card.name).then((data) =>{
      let typesStr = "";
   for(let i = 0; i < data.types.length; i++){
    if(i > 0){
      typesStr+= ", ";
    }
      typesStr += (data.types[i].type.name);
   };
   setTypes(typesStr);  
   console.log(name);
   if(name === "" || (name != card.name && name != "shiny " + card.name)){
    setUrl(card.imageUrl);
    setName(card.name);
   }
  }
  );
}

const changeForm = () => {
  if(name.includes("shiny")){
    setName(card.name);
    setUrl(card.imageUrl);
  }
  else{
    setName("shiny " + card.name);
    getPokemon(card.name).then((data) =>{
      setUrl(data.sprites.front_shiny);
    }
  );
  }
}

  // const isOwn = card.owner === currentUser?._id;
    
  //   const itemDeleteButtonClassName = `modal__delete ${
  //   isOwn ? "modal__delete_visible" : "modal__delete_hidden"
  // }`;

  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__container modal__container_type_image">
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close"
        >
          {" "}
        </button>
        <img src={url} alt="card image" className="modal__image" onClick={changeForm}/>
        <div className="modal__footer">
          <div>
            <h2 className="modal__caption">{name}</h2>
            <p className="modal__info">Type: {types}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
