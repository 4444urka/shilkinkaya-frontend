import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Paper, { PaperProps } from "@mui/material/Paper";
import React from "react";
import { TMessage } from "../../types/TMessage";

// Просто ебаный костыль, чтобы не писать вручную id
const base_user_id = 1;

interface IMessageProps extends PaperProps {
  messageObj: TMessage;
  type?: "my" | "notMy";
  date?: string;
  children: React.ReactNode;
}

const baseMessageStyles = {
  display: "flex",
  justifyContent: "space-between",
  width: "fit-content",
  height: "fit-content",
  minWidth: "40px",
  borderRadius: "10px",
  padding: 1,
  maxWidth: "70%",
  wordBreak: "break-word",
};

const MyMessageStyles = {
  ...baseMessageStyles,
};

const NotMyMessageStyles = {
  ...baseMessageStyles,
  backgroundColor: "black",
  color: "white",
};

const MessageBox: React.FC<IMessageProps> = ({
  messageObj,
  children,
  date = messageObj.date,
  type = messageObj.ownerId === base_user_id ? "my" : "notMy",
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
      // Сливаем стили: базовые + пользовательские
      sx={{
        ...(type === "my" ? MyMessageStyles : NotMyMessageStyles),
      }}
      {...restProps}
    >
      <Typography variant="body1">{children}</Typography>
      <Typography
        variant="subtitle2"
        sx={{
          alignSelf: "flex-end",
          marginLeft: 1,
          minWidth: "35px",
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
