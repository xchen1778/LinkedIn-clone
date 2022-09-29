import React, { useContext, useState } from "react";
import "../css/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import UserContext from "../contexts/user.context";
import BlackScreen from "./BlackScreen";

function Header() {
  const { name, setName, photoUrl, setPhotoUrl, isLoggedIn, setIsLoggedIn } =
    useContext(UserContext);
  const logout = () => {
    setIsLoggedIn(false);
    setName("");
    setPhotoUrl("");
    window.localStorage.clear();
  };
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <div className="header">
        <div className="header-content">
          <div className="header-left">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
              alt=""
            />
            <div className="header-search">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search"
                onFocus={() => {
                  setIsFocused(true);
                }}
                onBlur={() => {
                  setIsFocused(false);
                }}
              />
            </div>
          </div>

          <div className="header-right">
            {isLoggedIn ? (
              <>
                <div className="mobile-hidden">
                  <HeaderOption Icon={HomeIcon} title="Home" isActive={true} />
                  <HeaderOption Icon={SupervisorAccountIcon} title="Network" />
                  <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                  <HeaderOption Icon={ChatIcon} title="Messaging" />
                  <HeaderOption
                    Icon={NotificationsIcon}
                    title="Notifications"
                  />
                </div>
                <HeaderOption
                  avatar={
                    photoUrl ||
                    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  }
                  title="Me"
                />
                <div onClick={logout}>
                  <HeaderOption Icon={ExitToAppIcon} title="Logout" />
                </div>
              </>
            ) : (
              <a className="header-link" href="">
                <HeaderOption Icon={AccountCircleIcon} title="Login" />
              </a>
            )}
          </div>
        </div>
      </div>
      {isFocused && <BlackScreen />}
    </>
  );
}

export default Header;
