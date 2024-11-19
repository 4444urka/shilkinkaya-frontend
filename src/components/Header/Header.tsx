import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  // Функция, выбирающая случайный класс анимации из списка и применяющая его к объекту
  const randomAnimate = (
    className: string, // Класс с объектом, к которому необходимо применить анимацию
    animationDuration: number, // Длительность анимации (Время через , которое класс анимации убирается от элемента)
    animationDelay: number, // Интервал между анимациями
    ...listOfAnimations: string[] // Список с названием классов анимации, которые затем выбираются случайным образом.
  ) => {
    // Выбираем элемент по названию класса
    const textElement = document.querySelector(className);

    // Если он существует, то выбираем случайную анимацию из списка и применяем её к элементу
    if (textElement) {
      const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * listOfAnimations.length);
        const randomAnimation = listOfAnimations[randomIndex];

        textElement.classList.add(randomAnimation);

        // В конце удаляем
        setTimeout(() => {
          textElement.classList.remove(randomAnimation);
        }, animationDuration);
      }, animationDelay);

      return () => clearInterval(interval);
    }
  };

  useEffect(() => {
    const cleanup = randomAnimate(
      ".rotating-text",
      10000,
      30000,
      "rotateX",
      "rotateY"
    );
    return cleanup;
  }, []);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      className="header"
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        height: 70,
        marginBottom: 5,
        gap: 5,
        paddingLeft: 30,
        bgcolor: "primary.main",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <Typography
        variant="h2"
        sx={{ marginRight: 5 }}
        className="rotating-text"
      >
        {children}
      </Typography>

      <NavLink to="/">
        <Button
          variant="text"
          sx={{
            color: "secondary.main",
          }}
        >
          Главная
        </Button>
      </NavLink>

      <Button
        variant="text"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<ExpandMoreIcon />}
        sx={{
          color: "secondary.main",
        }}
      >
        Аккаунт
      </Button>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <NavLink to="/login">
          <MenuItem onClick={handleClose}>Вход</MenuItem>
        </NavLink>
        <NavLink to="/register">
          <MenuItem onClick={handleClose}>Регистрация</MenuItem>
        </NavLink>
      </Menu>
      <NavLink to="/wallet">
        <Button
          variant="text"
          sx={{
            color: "secondary.main",
          }}
        >
          Кошелёк
        </Button>
      </NavLink>
      <NavLink to="/casino">
        <Button
          variant="text"
          sx={{
            color: "secondary.main",
          }}
        >
          Слоты
        </Button>
      </NavLink>
    </Box>
  );
};

export default Header;
