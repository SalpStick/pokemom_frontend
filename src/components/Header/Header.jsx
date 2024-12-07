import "./Header.css";
import Pokemom from "../../images/Pokemom.png"
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function Header({ onLoginClick, onRegisterClick, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <header>
      <nav className="header">
        <Link to="/">
          <img className="header__logo" src={Pokemom} alt="App Logo" />
        </Link>

        <div className="header__user-container">
          {!isLoggedIn && (
          <>
            <div>
              <button
                type="text"
                className="header__register-btn"
                onClick={onRegisterClick}
              >
                Sign Up
              </button>
            </div>
            <div>
              <button
                type="text"
                className="header__login-btn"
                onClick={onLoginClick}
              >
                Log In
              </button>
            </div>
          </>
        )}

        {isLoggedIn && (
          <>
            <Link to="/profile" className="header__username">
              <div>{currentUser.name}</div>
            </Link>
            <div>
              <img
                src={currentUser.avatar}
                alt="logo"
                className="header__avatar"
              />
            </div>
          </>
        )}
      </div>
      </nav>
    </header>
  );
}

export default Header;
