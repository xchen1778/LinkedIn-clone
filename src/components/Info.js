import React from "react";
import "../css/Info.css";
import CloseIcon from "@mui/icons-material/Close";

function Info(props) {
  return (
    <div className="info">
      <span>
        These are the day’s top professional news stories and conversations.
      </span>
      <CloseIcon className="close-button" onClick={() => props.close(false)} />
    </div>
  );
}

export default Info;
