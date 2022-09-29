import React, { useEffect, useState, useContext } from "react";
import "../css/Feed.css";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import ImageIcon from "@mui/icons-material/Image";
import InputOption from "./InputOption";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { db } from "../firebase";
import firebase from "firebase/app";
import "firebase/firestore";
import UserContext from "../contexts/user.context";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const { name, photoUrl } = useContext(UserContext);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    if (input) {
      db.collection("posts").add({
        name: name,
        description: `${name.toLowerCase().replace(/\s/g, "")}@linkedin.com`,
        message: input,
        photoUrl:
          photoUrl || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setInput("");
    }
  };

  return (
    <div className="feed">
      <div className="feed-inputContainer">
        <div className="feed-input">
          <DriveFileRenameOutlineIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Start a post"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed-inputOption">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Article"
            color="#7FC15E"
          />
        </div>
      </div>

      <div className="feed-post">
        {posts.map(({ id, data }) => (
          <Post
            key={id}
            id={id}
            name={data.name}
            description={data.description}
            message={data.message}
            photoUrl={data.photoUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Feed;
