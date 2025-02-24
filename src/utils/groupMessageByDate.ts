import { TMessage } from "../types/TMessage";

export const dateParse = (timestamp: string): string => {
  const date = new Date(timestamp);
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  return `${date.getDate()} ${months[date.getMonth()]}`;
};

export const formatDate = (timestamp: string): string => {
  const date = new Date(timestamp);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

export const groupMessagesByDate = (messages: TMessage[]) => {
  const groupedMessages: { [key: string]: TMessage[] } = {};
  messages.forEach((message) => {
    const messageDate = new Date(message.date);
    const now = new Date();
    let date: string;

    if (messageDate.getFullYear() === now.getFullYear()) {
      date = dateParse(message.date);
    } else {
      date = formatDate(message.date);
    }

    if (!groupedMessages[date]) {
      groupedMessages[date] = [];
    }
    groupedMessages[date].push(message);
  });
  return groupedMessages;
};
