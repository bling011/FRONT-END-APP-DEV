const BASE_URL = 'http://127.0.0.1:8000/api/todos/';

// Get all todos
export const getTodos = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error('Failed to fetch todos');
  return response.json();
};

// Add a new todo
export const addTodo = async (title) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, completed: false }),
  });

  if (!response.ok) throw new Error('Failed to add todo');
  return response.json();
};

// Update a todo
export const updateTodo = async (id, updatedFields) => {
  const response = await fetch(`${BASE_URL}${id}/`, {
    method: 'PATCH', // Ensure this is PATCH
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedFields),
  });

  if (!response.ok) throw new Error(`Failed to update todo with id ${id}`);
  return response.json();
};

// Delete a todo
export const deleteTodo = async (id) => {
  const response = await fetch(`${BASE_URL}${id}/`, { method: 'DELETE' });
  if (!response.ok) throw new Error(`Failed to delete todo with id ${id}`);
};