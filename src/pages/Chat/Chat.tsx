import { Box } from "@mui/material";
import React from "react";
import { useAppMedia } from "../../hooks/hooks";
import Message from "../../components/Message/Message";

const Chat = () => {
  const matches = useAppMedia();
  return (
    <Box
      sx={{
        display: "flex",
        paddingX: matches ? 30 : 2,
        gap: 3,
        flexDirection: "column-reverse",
      }}
    >
      <Message>привки</Message>
      <Message>привки</Message>
    </Box>
  );
};

export default Chat;
