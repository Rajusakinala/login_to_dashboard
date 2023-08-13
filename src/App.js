import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Dashborad from "./components/Dashborad";
import { useState } from "react";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <div className="App">
      {!isLoggedIn && <Login setisLoggedIn={setisLoggedIn} />}
      {isLoggedIn && <Dashborad setisLoggedIn={setisLoggedIn} />}
    </div>
  );
}

export default App;
