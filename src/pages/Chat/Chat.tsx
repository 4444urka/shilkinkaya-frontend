import "./styles.css";
import { Avatar, Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useEffect, useRef } from "react";
import MessageBox from "../../components/MessageBox/MessageBox";
import MessageTextArea from "../../components/MessageTextArea/MessageTextArea";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { addMessage } from "../../slices/messageSlice";
import { TMessage } from "../../types/TMessage";
import { dateParse } from "../../utils/dateParse";

const Chat = () => {
  // Хук для автоматической прокрутки чата к последнему сообщению
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Достаём массив сообщений из хранилища
  const messages = useAppSelector((state) => state.messages.messages);

  // Получаем функцию для диспатча экшенов Redux
  const dispatch = useAppDispatch();

  // После каждого обновления массива сообщений скроллим чат вниз
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Колбэк, вызываемый при отправке нового сообщения
  const onSubmit = (text: string) => {
    if (text) {
      // Если поле не пустое, создаём объект сообщения и диспатчим экшен
      dispatch(
        addMessage({
          ownerId: 1,
          text: text,
          date: new Date().toISOString(),
        })
      );
    }
  };

  // Функция для форматирования даты по умолчанию (DD.MM.YYYY)
  const formatDate = (timestamp: string): string => {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  // Группировка массива сообщений по дням
  const groupMessagesByDate = (messages: TMessage[]) => {
    const groupedMessages: { [key: string]: TMessage[] } = {};
    messages.forEach((message) => {
      const messageDate = new Date(message.date);
      const now = new Date();
      let date: string;
      // Если сообщение прислано в текущем году, используем dateParse (пример: "1 марта"),
      // иначе форматируем как DD.MM.YYYY
      if (messageDate.getFullYear() == now.getFullYear()) {
        date = dateParse(message.date);
      } else {
        date = formatDate(message.date);
      }

      // Добавляем сообщение в массив нужного дня
      if (!groupedMessages[date]) {
        groupedMessages[date] = [];
      }
      groupedMessages[date].push(message);
    });
    return groupedMessages;
  };

  // Сгруппированный объект вида { "1 марта": [...сообщения...] }
  const groupedMessages = groupMessagesByDate(messages);

  return (
    <Box sx={{ display: "flex", height: "calc(100vh - 70px)" }}>
      {/* Левая часть экрана может быть занята списком участников или меню, здесь только чат */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            backgroundColor: grey[200],
            padding: "10px 10px",
            overflowY: "auto", // Скроллим при большом количестве сообщений
          }}
        >
          {/* Отображаем каждую группу сообщений в отдельном блоке с датой */}
          {Object.keys(groupedMessages).map((date) => {
            const dayMessages = groupedMessages[date];

            return (
              <React.Fragment key={date}>
                {/* Дата, отделяющая сообщения разных дней */}
                <Typography
                  variant="subtitle1"
                  sx={{ textAlign: "center", margin: "10px 0" }}
                  className="dateSeparator"
                >
                  {date}
                </Typography>

                {/* Массив сообщений за конкретный день */}
                {dayMessages.map((message, index) => {
                  const prevMessage = dayMessages[index - 1];
                  const sameOwner =
                    prevMessage && prevMessage.ownerId === message.ownerId;

                  return (
                    <Box
                      className="animatedMessage"
                      key={`${message.date}-${index}`}
                      sx={{
                        display: "flex",
                        mt: sameOwner ? 0.5 : 2, // Меньший отступ между сообщениями одного автора
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      {/* Если отправитель сообщения тот же, что и у предыдущего, убираем аватарку */}
                      {sameOwner ? (
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
                              ? "" // Можно указать ссылку на аватарку текущего пользователя
                              : "/profile/profile_image.png"
                          }
                          sx={{
                            bgcolor: "deeppink",
                            color: "black",
                            width: 35,
                            height: 35,
                          }}
                        >
                          4
                        </Avatar>
                      )}

                      {/* Компонент, отвечающий за отображение отдельного сообщения */}
                      <MessageBox messageObj={message} date={message.date}>
                        {message.text}
                      </MessageBox>
                    </Box>
                  );
                })}
              </React.Fragment>
            );
          })}
          {/* Этот элемент отслеживается useRef для прокрутки чата к концу */}
          <Box ref={messagesEndRef} />
        </Box>
        {/* Область ввода нового сообщения */}
        <Box
          sx={{
            backgroundColor: "white",
            overflow: "hidden",
          }}
        >
          {/* Поле для ввода нового сообщения (MessageTextArea) */}
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
