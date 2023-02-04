import logo from './logo.svg';
import './App.css';
import { useState } from "react";
function App() {
  const [message] = useState("Click Here")
  return (
    <div>
     <button>{message}</button>
    </div>
  );
}

export default App;
