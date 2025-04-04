const BASE_URL = "https://todo-app-backend-1-j1c6.onrender.com/api/todos/"; // Use your Render backend

export async function getTodos() {
    try {
        const response = await fetch(`${BASE_URL}/api/todos/`);
        if (!response.ok) {
            throw new Error("Failed to fetch todos");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching todos:", error);
        return [];
    }
}

export async function addTodo(todoText) {
    try {
        const response = await fetch(`${BASE_URL}/api/todos/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: todoText }),
        });

        if (!response.ok) {
            throw new Error("Failed to add todo");
        }

        return await response.json();
    } catch (error) {
        console.error("Error adding todo:", error);
        return null;
    }
}
