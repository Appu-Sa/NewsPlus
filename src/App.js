import { useState } from "react";
import "./App.css";
import Api from "./components/Api";
import Nav from "./components/Nav";

function App() {
  const [cat, setCat] = useState("general");
  const [country, setCountry] = useState("us");
  return (
    <>
      <Nav setCat={setCat} setCountry={setCountry}/>
      <Api cat={cat} country={country}/>
    </>
  );
}

export default App;
