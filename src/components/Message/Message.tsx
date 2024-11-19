import Paper from "@mui/material/Paper";
import React from "react";
import { grey } from "@mui/material/colors";

interface MessageProps {
  type?: "my" | "notMy";
  children: React.ReactNode;
}

const MessageStyles = {
  display: "flex",
  width: "fit-content",
  minWidth: "20%",
  padding: 1,
  borderRadius: 2,
  maxWidth: "70%",
  wordWrap: "break-word",
};

const MyMessageStyles = {
  ...MessageStyles,
  backgroundColor: grey[100],
  alignSelf: "self-end",
};

const NotMyMessageStyles = {
  ...MessageStyles,
  backgroundColor: grey[400],
  alignSelf: "self-end",
};

const Message: React.FC<MessageProps> = ({ children, type = "my" }) => {
  return (
    <Paper
      elevation={1}
      sx={type === "my" ? MyMessageStyles : NotMyMessageStyles}
    >
      {children}
    </Paper>
  );
};

export default Message;
