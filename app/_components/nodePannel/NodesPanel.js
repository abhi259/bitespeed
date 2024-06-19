import React from "react";
import SmsIcon from "@mui/icons-material/Sms";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";

const NodesPanel = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className=" flex flex-col gap-4 justify-center items-center py-5">
      {customNodes.map((item) => (
        <div
          className=" flex  items-center w-[200px] border-2 rounded-md border-white p-4 "
          onDragStart={(event) => onDragStart(event, item.type)}
          key={item.id}
          draggable
        >
          <div className="pl-2">{item.icon}</div>
          <div className="p-4 flex justify-center w-full ">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default NodesPanel;

const customNodes = [
  {
    id: "0",
    type: "messageNode",
    label: "Message",
    icon: <SmsIcon fontSize="large" />,
  },
  {
    id: "1",
    type: "pictureNode",
    label: "Picture",
    icon: <InsertPhotoIcon fontSize="large" />,
  },
  {
    id: "2",
    type: "videoNode",
    label: "Video",
    icon: <VideoCameraBackIcon fontSize="large" />,
  },
];
