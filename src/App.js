import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Dashborad from "./components/Dashborad";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      {!isLoggedIn && <Login setIsLoggedIn={setIsLoggedIn} />}
      {isLoggedIn && <Dashborad setIsLoggedIn={setIsLoggedIn} />}
    </div>
  );
}

export default App;
