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

  updateTodo(todo) {
    return fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: todo.name }),
    }).then(resp => {
      return resp;
    });
  }

  async getTodo(id) {
    const response = await fetch(`http://localhost:3000/todos/${id}`, {
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
