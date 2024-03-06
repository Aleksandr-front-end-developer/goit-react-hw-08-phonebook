const URL = 'https://65d7251927d9a3bc1d7a4eac.mockapi.io/';

export const getContacts = () => {
  return fetch(`${URL}contacts`, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  }).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(res.statusText);
    }
  });
};
export const postContact = contact => {
  return fetch(`${URL}contacts`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(contact),
  }).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(res.statusText);
    }
  });
};
export const deleteContact = id => {
  return fetch(`${URL}contacts/${id}`, {
    method: 'DELETE',
  }).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(res.statusText);
    }
  });
};
