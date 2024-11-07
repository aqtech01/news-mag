import "./App.css";
import NavBar from "./components/NavBar";
import NewsBoard from "./components/NewsBoard.jsx";
import React ,{useState} from "react";

function App() {
    const [category, setCategory] = useState("general");
  return (
    <>
      <NavBar setCategory={setCategory} />
        <NewsBoard category={category}  />
    </>
  );
}

export default App;
