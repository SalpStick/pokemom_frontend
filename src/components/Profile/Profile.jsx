import SideBar from "../Sidebar/Sidebar";
import LikedSection from "../LikedSection/LikedSection";
import react from "react";
import "./Profile.css";

function Profile({ handleCardClick, pokeItems, handleAddClick, handleCardLike, handleLogout, handleEditProfile }) {
  return (
    <div className="profile__page">
      <SideBar 
      handleLogout={handleLogout}
      handleEditProfile={handleEditProfile}
      />

      <LikedSection
        handleCardClick={handleCardClick}
        pokeItems = {pokeItems}
        handleAddClick={handleAddClick}
        handleCardlike={handleCardLike}
      />
    </div>
  );
}
export default Profile;