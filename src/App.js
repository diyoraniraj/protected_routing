import {BrowserRouter , Routes, Route  } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Pages/Navbar";
import Protected from "./Pages/Protected";
import Home  from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";

const App = () => {
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const logIn = () => {
    setisLoggedIn(true);
  };
  const logOut = () => {
    setisLoggedIn(false);
  };
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        {isLoggedIn ? (
          <button onClick={logOut}>Logout</button>
        ) : (
          <button onClick={logIn}>Login</button>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Protected isLoggedIn={isLoggedIn}><Profile /></Protected>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      </BrowserRouter> 
  );
}
export default App;
