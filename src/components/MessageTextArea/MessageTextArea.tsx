import SendIcon from "@mui/icons-material/Send";
import {
  BaseTextFieldProps,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

interface IMessageTextAreaProps extends Omit<BaseTextFieldProps, "onSubmit"> {
  onSubmit: (text: string) => void;
  children: React.ReactNode;
}

const MessageTextArea: React.FC<IMessageTextAreaProps> = ({
  onSubmit,
  children,
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
    <form onSubmit={handleSubmit}>
      <TextField
        value={messageText}
        onChange={handleChange}
        label={children}
        sx={{
          border: 0,
          outline: 0,
          width: "100%",
          boxSizing: "border-box",
        }}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit">
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
        {...restProps}
      />
    </form>
  );
};

export default MessageTextArea;
