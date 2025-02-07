import { useState, useEffect } from "react";

export function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://helloproj3.onrender.com/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <h1>Hello pitzy24456232werwesadfadsr</h1>
      <h1>{message}</h1>
    </div>
  );
}