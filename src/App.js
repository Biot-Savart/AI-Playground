import { useState } from "react";
const App = () => {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");

  const getCompletion = async () => {
    const response = await fetch("http://localhost:8000/completion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const data = await response.json();
    setResponse(data.text);
  };
  return (
    <div className="App">
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={getCompletion}>Send</button>
      <p>{response}</p>
    </div>
  );
};

export default App;
