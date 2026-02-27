import { useEffect, useState } from "react";

export default function App() {
  const [msg, setMsg] = useState("carregando...");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/hello")
      .then((r) => r.json())
      .then((data) => setMsg(data.message))
      .catch(() => setMsg("erro ao conectar no backend"));
  }, []);

  return (
    <div style={{ fontFamily: "Arial", padding: 24 }}>
      <h1>Fase Baby Ecommerce</h1>
      <p>Backend diz: <b>{msg}</b></p>
    </div>
  );
}