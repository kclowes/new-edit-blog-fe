import fetch from 'isomorphic-fetch';

class Todo {
  create(name) {
    return fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name }),
    }).then(resp => {
      return resp;
    });
  }

  async getTodos() {
    const response = await fetch('http://localhost:3000/todos', {
      method: 'GET',
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw Error;
    }
  }
}

export default new Todo();
