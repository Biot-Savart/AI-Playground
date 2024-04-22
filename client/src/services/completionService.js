const getCompletion = async (text) => {
  const apiEndpoint =
    process.env.REACT_APP_API_ENDPOINT || "http://localhost:8000";
  try {
    const response = await fetch(`${apiEndpoint}/completion`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });
    const data = await response.json();
    return await data.text;
  } catch (error) {
    console.error("Failed to fetch completion:", error);
    return null;
  }
};

export default getCompletion;
