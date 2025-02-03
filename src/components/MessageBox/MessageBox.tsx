import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Paper, { PaperProps } from "@mui/material/Paper";
import React from "react";

interface IMessageProps extends PaperProps {
  type?: "my" | "notMy";
  date: string;
  children: React.ReactNode;
}

const MessageStyles = {
  display: "flex",
  justifyContent: "space-between",
  width: "fit-content",
  height: "fit-content",
  minWidth: "40px",
  borderRadius: "10px",
  padding: 1,
  maxWidth: "70%",
  wordWrap: "break-word",
};

const MyMessageStyles = {
  ...MessageStyles,
};

const NotMyMessageStyles = {
  ...MessageStyles,
  backgroundColor: "black",
  color: "white",
};

const MessageBox: React.FC<IMessageProps> = ({
  children,
  date,
  type = "my",
  ...restProps
}) => {
  const messageDate = new Date(date);
  const formattedTime = `${messageDate.getHours()}:${messageDate
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

  return (
    <Paper
      elevation={1}
      sx={type === "my" ? MyMessageStyles : NotMyMessageStyles}
      {...restProps}
    >
      <Typography variant="body1">{children}</Typography>
      <Typography
        variant="subtitle2"
        sx={{
          alignSelf: "flex-end",
          marginLeft: 1,
          fontSize: "0.75rem",
          color: grey[500],
        }}
      >
        {formattedTime}
      </Typography>
    </Paper>
  );
};

export default MessageBox;
