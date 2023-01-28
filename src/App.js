import React from "react";
import Students from "./components/Students";
import { useState } from "react";
import userData from "./data";
import "./styles.css";
function App() {

  const [studentData, setstudentData] = useState(userData)
  
  return (
    <div className="App">
      <Students user = {studentData}/>
    </div>
  );
}

export default App;
