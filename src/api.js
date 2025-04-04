// api.js

const BASE_URL = 'http://127.0.0.1:8000/api/todos/';

export const getTodos = async () => {
  try {
    const response = await fetch(BASE_URL);
    
    if (!response.ok) {
      // Log the error if the response status is not ok (404, 500, etc.)
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.text();  // Get raw response text
    
    console.log("API Response:", data);   // Log the raw response to check if it's HTML or JSON
    
    // Try to parse the response as JSON
    return JSON.parse(data);
  } catch (error) {
    // Log any errors that occur during the fetch or parsing
    console.error("Error fetching todos:", error);
  }
};
