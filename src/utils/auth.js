const BASE_URL  = process.env.NODE_ENV === "production"
? "https://api.pokemom.ignorelist.com"
: "http://localhost:3001";
import { _checkResponse } from "./api";

export const signup = (name, avatar, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  })
    .then(_checkResponse)
    .then((data) => {
      console.log("Processed signup response: ", data);
      return data;
    });
};

export const signin = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(_checkResponse);
};

export const editProfile = ({ name, avatar }) => {
  const token = localStorage.getItem("jwt");

  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      avatar,
    }),
  }).then(_checkResponse);
};

export const fetchUserData = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then(_checkResponse)
    .then((data) => {
      if (!data) {
        throw new Error("Failed to fetch user data");
      }
      return data;
    });
};
