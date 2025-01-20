// import { useState } from "react";
import "./App.css";
import Navbar from "./components/main/Navbar";
import Side1 from "./components/sections/Side1";
import Col1 from "./components/sections/Col1";
import Side2 from "./components/sections/Side2";
import Col2 from "./components/sections/Col2";
import Col3 from "./components/sections/Col3";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="w-screen h-screen flex items-center justify-center">
        <p className="montserrat-title ">Knob Section</p>
      </div>
      <Side1 />
      <Col1 />
      <Side2 />
      <Col2 />
      <Col3 />
    </>
  );
}

export default App;
