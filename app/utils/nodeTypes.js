import CustomNode from "../_components/customNodes/CustomNode";
import SmsIcon from "@mui/icons-material/Sms";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";

export const nodeTypes = {
  messageNode: CustomNode,
  pictureNode: CustomNode,
  videoNode: CustomNode,
};

export const getIcon = ({ type }) => {
  switch (type) {
    case "messageNode":
      return {
        icon: <SmsIcon />,
        label: "Message Node",
        color: "bg-blue-500",
      };
    case "pictureNode":
      return {
        icon: <InsertPhotoIcon />,
        label: "Picture Node",
        color: "bg-pink-600 ",
      };
    case "videoNode":
      return {
        icon: <VideoCameraBackIcon />,
        label: "Video Node",
        color: "bg-purple-600 ",
      };
    default:
      return null;
  }
};


