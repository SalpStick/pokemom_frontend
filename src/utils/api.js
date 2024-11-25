const baseUrl = process.env.NODE_ENV === "production"
? "https://api.wtwr1.ignorelist.com"
: "http://localhost:3001";

function _checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

function getItems() {
  return fetch(`${baseUrl}/items`).then(_checkResponse);
}

const getUserInfo = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(_checkResponse);
};

function addItems(name, link) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl: link,
    }),
  }).then(_checkResponse);
}

function deleteItems(id, token) {
  return fetch(`${baseUrl}/items/${id}`, { 
    method: "DELETE", 
    headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  }, })
    .then(_checkResponse)
    .then(() => console.log("Card has been deleted"));
}

function likeCard(cardId, token) {
  return fetch(`${baseUrl}/items/${cardId}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(_checkResponse);
}

function dislikeCard(cardId, token) {
  return fetch(`${baseUrl}/items/${cardId}/likes`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(_checkResponse);
}

export { getItems, addItems, deleteItems, likeCard, dislikeCard, _checkResponse, getUserInfo };
