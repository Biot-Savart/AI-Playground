import { useState } from "react";
const App = () => {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button>Send</button>
      <p></p>
    </div>
  );
};

export default App;
