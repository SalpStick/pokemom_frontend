import { useContext } from "react";
import "./Sidebar.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Sidebar({ handleEditProfile, handleLogout }) {
  const { name, avatar } = useContext(CurrentUserContext) || {};
  return (
    <div className="sidebar-page">
      <div className="sidebar__user">
        <img className="sidebar__avatar" src={avatar} alt="user__avatar" />
        <p className="sidebar_username">{name}</p>
      </div>
      <button
        className="sidebar__btn-change-profile"
        type="button"
        onClick={handleEditProfile}
      >
        Change profile data
      </button>
      <button
        className="sidebar__btn-logout"
        type="button"
        onClick={handleLogout}
      >
        Log out
      </button>
    </div>
  );
}

export default Sidebar;
