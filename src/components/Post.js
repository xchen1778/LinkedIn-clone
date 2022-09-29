import { Avatar } from "@mui/material";
import React from "react";
import InputOption from "./InputOption";
import "../css/Post.css";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Post({ id, name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post-header">
        <Avatar src={photoUrl} />
        <div className="post-info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <MoreHorizIcon className="post-menu" />
      </div>

      <div className="post-body">
        <p>{message}</p>
      </div>

      <div className="post-buttons">
        <InputOption
          id={id}
          Icon={ThumbUpOutlinedIcon}
          title="Like"
          color="gray"
        />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
}

export default Post;
