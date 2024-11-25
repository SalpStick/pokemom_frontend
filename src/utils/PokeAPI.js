import { _checkResponse } from "./api";

export const getPokemon = (title) => {
  const trueName = title.toLowerCase();
  return fetch(`https://pokeapi.co/api/v2/pokemon/${trueName}/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}
