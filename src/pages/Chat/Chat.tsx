import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useEffect, useRef } from "react";
import MessageBox from "../../components/MessageBox/MessageBox";
import MessageTextArea from "../../components/MessageTextArea/MessageTextArea";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { addMessage, removeAllMessages } from "../../slices/messageSlice";
import { TMessage } from "../../types/TMessage";
import { Delete } from "@mui/icons-material";

const Chat = () => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messages = useAppSelector((state) => state.messages.messages);
  const dispatch = useAppDispatch();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const onSubmit = (text: string) => {
    if (text) {
      dispatch(
        addMessage({
          ownerId: 1,
          text: text,
          date: new Date().toISOString(),
        })
      );
    }
  };

  const formatDate = (timestamp: string): string => {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const groupMessagesByDate = (messages: TMessage[]) => {
    const groupedMessages: { [key: string]: TMessage[] } = {};
    messages.forEach((message) => {
      const date = formatDate(message.date);
      if (!groupedMessages[date]) {
        groupedMessages[date] = [];
      }
      groupedMessages[date].push(message);
    });
    return groupedMessages;
  };

  const groupedMessages = groupMessagesByDate(messages);

  return (
    <Box sx={{ display: "flex", height: "calc(100vh - 70px)" }}>
      {/* Основной контент с чатом */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            backgroundColor: grey[200],
            padding: "30px 20px",
            overflowY: "auto",
          }}
        >
          {/* TODO: УДалить */}
          <MessageBox date={new Date().toISOString()}>
            <IconButton onClick={() => dispatch(removeAllMessages())}>
              <Delete />
            </IconButton>
          </MessageBox>
          {Object.keys(groupedMessages).map((date) => (
            <>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: "center",
                  margin: "10px 0",
                }}
                className="dateSeparator"
              >
                {date}
              </Typography>
              {groupedMessages[date].map((message, index) => (
                <MessageBox
                  type={index % 2 ? "notMy" : "my"}
                  key={index}
                  date={message.date}
                >
                  {message.text}
                </MessageBox>
              ))}
            </>
          ))}
          <div ref={messagesEndRef} />{" "}
          {/* Этот элемент используется для прокрутки */}
        </Box>
        <Box
          sx={{
            backgroundColor: "white",
          }}
        >
          <MessageTextArea onSubmit={onSubmit}>
            Отправить сообщение
          </MessageTextArea>
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;
