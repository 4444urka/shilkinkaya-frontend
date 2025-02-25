import { Avatar, Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useEffect, useRef, useState } from "react";
import DownButton from "../../components/DownButton/DownButton";
import MessageBox from "../../components/MessageBox/MessageBox";
import MessageTextArea from "../../components/MessageTextArea/MessageTextArea";
import { useAppDispatch, useAppMedia, useAppSelector } from "../../hooks/hooks";
import { pump } from "../../lib/animations";
import { addMessage } from "../../slices/messageSlice";
import { groupMessagesByDate } from "../../utils/groupMessageByDate";
import { useHandleScroll } from "../../hooks/useHandleScroll";

const Chat = () => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Состояние, отслеживающее, находимся ли мы у нижней границы чата
  const [isAtBottom, setIsAtBottom] = useState<boolean>(true);
  const matches = useAppMedia();
  const messages = useAppSelector((state) => state.messages.messages);
  const dispatch = useAppDispatch();
  const groupedMessages = groupMessagesByDate(messages);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Обработчик прокрутки, скрывающий кнопку, если скролл находится внизу
  useHandleScroll(setIsAtBottom, chatContainerRef);

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

  return (
    <Box
      sx={{
        display: "flex",
        height: matches ? "calc(100vh - 70px)" : "100vh",
        flex: 1,
        backgroundColor: grey[200],
      }}
    >
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Box
          ref={chatContainerRef}
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: "64px 10px",
            paddingTop: matches ? "10px" : "80px",
            overflowY: "auto",
          }}
        >
          {/* TODO: Чисто дев хуйнюшка надо бы удалить нах */}
          {/* <Button onClick={() => setIsMyMessage(!isMyMessage)}>ПОМЕНЯТЬ</Button> */}
          {/* <Button onClick={() => dispatch(removeAllMessages())}>УДАЛИТЬ</Button> */}
          {Object.keys(groupedMessages).map((date) => {
            const dayMessages = groupedMessages[date];

            return (
              <React.Fragment key={date}>
                {/* Контейнер с датой */}
                <Typography
                  variant="subtitle1"
                  sx={{ textAlign: "center", margin: "10px 0" }}
                  className="dateSeparator"
                >
                  {date}
                </Typography>

                {dayMessages.map((message, index) => {
                  // Проверяем является ли владелец текущего сообщения таким же, как у предыдущего (это нужно для отображения аватарки)
                  const prevMessage = dayMessages[index - 1];
                  const isSameOwner =
                    prevMessage && prevMessage.ownerId === message.ownerId;
                  return (
                    <Box
                      key={`${message.date}-${index}`}
                      sx={{
                        display: "flex",
                        maxWidth: "95%",
                        // Увеличиваем отступ если владелец сообщения не такой же, как у предыдущего, тем самым группируя сообщения по пользователям
                        mt: isSameOwner ? 0.5 : 2,
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 1,
                        animation: `${pump} 0.3s ease-in-out`,
                      }}
                    >
                      {/* Добавляем аватарку */}
                      {isSameOwner ? (
                        <Box
                          sx={{
                            width: 35,
                            height: 35,
                          }}
                        />
                      ) : (
                        <Avatar
                          src={
                            message.ownerId === 1
                              ? ""
                              : message.ownerId === 3
                              ? "https://kubix.com.ua/upload/resize_cache/webp/iblock/7eb/vy1tsunwc7f210hqjaecmp1gz18937y1.webp"
                              : "/profile/profile_image.png"
                          }
                          sx={{
                            bgcolor: "deeppink",
                            color: "black",
                            width: 35,
                            height: 35,
                          }}
                        >
                          {/* TODO: Добавить логику отображения аватарки */}4
                        </Avatar>
                      )}
                      <MessageBox messageObj={message} />
                    </Box>
                  );
                })}
              </React.Fragment>
            );
          })}
          {/* Ссылка на низ страницы */}
          <Box ref={messagesEndRef} />
        </Box>
        {/* Кнопка быстрого перехода к концу переписки появляется если мы не внизу и при достаточном количестве сообщений */}
        {!isAtBottom && messages.length > 11 && (
          <DownButton
            onClick={() => {
              messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        )}
        <Box
          sx={{
            display: "flex",
            backgroundColor: "white",
            overflow: "hidden",
            position: "fixed",
            bottom: 0,
            width: "100%",
          }}
        >
          <MessageTextArea
            onSubmit={onSubmit}
            placeholder="Отправить сообщение"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;
