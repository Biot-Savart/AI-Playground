// src/services/completionService.js

const getCompletion = async (text) => {
    try {
        const response = await fetch("http://localhost:8000/completion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text }),
        });
        const data = await response.json();
        return data.text;
    } catch (error) {
        console.error("Failed to fetch completion:", error);
        return null;
    }
};

export default getCompletion;