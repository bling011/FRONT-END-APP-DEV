const BASE_URL = 'http://127.0.0.1:8000/api/todos/';

export const getTodos = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(`Error fetching todos: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};

export const addTodo = async (title, description = '') => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, description }),
  });
  if (!response.ok) {
    throw new Error('Error adding todo');
  }
  return await response.json();
};

export const updateTodo = async (id, data) => {
  const response = await fetch(`${BASE_URL}${id}/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Error updating todo');
  }
  return await response.json();
};

export const deleteTodo = async (id) => {
  const response = await fetch(`${BASE_URL}${id}/`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Error deleting todo');
  }
};
