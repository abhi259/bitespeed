import React from "react";
import SmsIcon from "@mui/icons-material/Sms";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";

const NodesPanel = () => {
  const onDragStart = (event, nodeType) => {
    console.log("Drag started", nodeType);
    // event.dataTransfer.setData('application/reactflow', nodeType);
    // event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="w-[300px] flex flex-col gap-7">
      <div draggable onDragStart={(event) => onDragStart(event, "messages")}>
        messages
      </div>
      <div draggable onDragStart={(event) => onDragStart(event, "photos")}>
        Photos
      </div>
      <div draggable onDragStart={(event) => onDragStart(event, "videos")}>
        videos
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default NodesPanel;

const customNodes = [
  {
    id: "messages",
    type: "messageNode",
    icon: <SmsIcon />,
  },
  {
    id: "photos",
    type: "pictureNode",
    icon: <InsertPhotoIcon />,
  },
  {
    id: "videos",
    type: "videoNode",
    icon: <VideoCameraBackIcon />,
  },
];
