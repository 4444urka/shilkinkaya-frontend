import { Paper, PaperProps, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

interface IMessageBoxProps extends PaperProps {
  type?: "my" | "notMy";
  date: string;
  children: React.ReactNode;
}

const MessageStyles = {
  display: "flex",
  justifyContent: "space-between",
};

const MyMessageStyles = {
  ...MessageStyles,
};

const NotMyMessageStyles = {
  ...MessageStyles,
  backgroundColor: "black",
  color: "white",
};

const MessageBox: React.FC<IMessageBoxProps> = ({
  type = "my",
  date,
  children,
  ...restProps
}) => {
  const messageDate = new Date(date);
  const formattedTime = `${messageDate.getHours()}:${messageDate.getMinutes().toString().padStart(2, "0")}`;

  return (
    <Paper
      elevation={1}
      sx={type == "my" ? MyMessageStyles : NotMyMessageStyles}
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
