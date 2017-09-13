import fetch from 'isomorphic-fetch';

class Todo {
  create(name) {
    return fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        name: name,
      },
    }).then(resp => {
      return resp;
    });
  }
}

export default new Todo();
