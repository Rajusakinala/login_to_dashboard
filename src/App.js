import "./App.css";
import Login from "./components/Login";
import Dashborad from "./components/Dashborad";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [loggedDetails, setLoggedDetails] = useState({});
  return (
    <div className="App">
      {!isLoggedIn && (
        <Login
          setIsLoggedIn={setIsLoggedIn}
          setLoggedDetails={setLoggedDetails}
        />
      )}
      {isLoggedIn && (
        <Dashborad
          setIsLoggedIn={setIsLoggedIn}
          loggedDetails={loggedDetails}
        />
      )}
    </div>
  );
}

export default App;
