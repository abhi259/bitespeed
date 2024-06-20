import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const SettingsPannel = () => {
  const handleTextUpdate = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="flex flex-col ">
      <div className="flex justify-between p-4">
        <ArrowBackIcon />
        <h1>Messages</h1>
        <div></div>
      </div>
      <hr />
      <div className="p-4">
        <textarea
          id="textAreaLabel"
          placeholder="Type your message here"
          className="w-full rounded-sm p-2 text-black"
          rows={4}
          onChange={handleTextUpdate}
        />
      </div>
    </div>
  );
};

export default SettingsPannel;
