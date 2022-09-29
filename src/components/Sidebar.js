import { Avatar } from "@mui/material";
import React, { useContext } from "react";
import "../css/Sidebar.css";
import UserContext from "../contexts/user.context";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar-recentItem">
      <span className="sidebar-hash">#</span>
      <p>{topic}</p>
    </div>
  );

  const { name, photoUrl } = useContext(UserContext);

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img
          src="https://images.unsplash.com/photo-1517495306984-f84210f9daa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
          alt=""
        />
        <Avatar
          className="sidebar-avatar"
          src={
            photoUrl ||
            "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          }
        />
        <h2>{name}</h2>
        <h4>{name.toLowerCase().replace(/\s/g, "")}@linkedin.com</h4>
      </div>

      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Who viewed you</p>
          <p className="sidebar-statNumber">2,543</p>
        </div>
        <div className="sidebar-stat">
          <p>Views on post</p>
          <p className="sidebar-statNumber">2,448</p>
        </div>
      </div>

      <div className="sidebar-bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
