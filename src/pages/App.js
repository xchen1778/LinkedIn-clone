import React, { useState, useEffect } from "react";
import "../css/App.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Login from "./Login";
import UserContext from "../contexts/user.context";
import Widgets from "../components/Widgets";

function App() {
  useEffect(() => {
    document.title = "Feed | LinkedIn";
  }, []);

  const app = (
    <>
      <Header />
      <div className="app-body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </>
  );
  const [name, setName] = useState(
    JSON.parse(window.localStorage.getItem("user")) || ""
  );
  const [photoUrl, setPhotoUrl] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(!!name);

  return (
    <div className="app">
      <UserContext.Provider
        value={{
          name,
          setName,
          photoUrl,
          setPhotoUrl,
          isLoggedIn,
          setIsLoggedIn,
        }}
      >
        {isLoggedIn ? app : <Login />}
      </UserContext.Provider>
    </div>
  );
}

export default App;
