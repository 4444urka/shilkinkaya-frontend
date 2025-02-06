import SendIcon from "@mui/icons-material/Send";
import { IconButton, InputBase, InputBaseProps, Paper } from "@mui/material";
import React, { useState } from "react";

interface IMessageTextAreaProps extends Omit<InputBaseProps, "onSubmit"> {
  onSubmit: (text: string) => void;
  placeholder: string;
}

const MessageTextArea: React.FC<IMessageTextAreaProps> = ({
  onSubmit,
  placeholder,
  ...restProps
}) => {
  const [messageText, setMessageText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(messageText);
    setMessageText("");
  };

  return (
    <Paper
      onSubmit={handleSubmit}
      component="form"
      sx={{
        backgroundColor: "white",
        p: "5px 10px",
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <InputBase
        value={messageText}
        onChange={handleChange}
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        inputProps={{ "aria-label": "send message" }}
        {...restProps}
      />
      <IconButton
        disabled={!messageText}
        type="submit"
        color="primary"
        sx={{ p: "10px", mr: "15px" }}
        aria-label="directions"
      >
        <SendIcon />
      </IconButton>
    </Paper>
  );
};

export default MessageTextArea;
