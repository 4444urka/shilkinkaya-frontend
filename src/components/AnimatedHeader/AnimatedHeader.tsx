import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import React from "react";
import { scroll } from "../../lib/animations";
import "./styles.css";

interface IAnimatedHeaderProps {
  children: React.ReactNode;
}

// Хэдер который используется на странице с входом и регистрацией.
const AnimatedHeader: React.FC<IAnimatedHeaderProps> = ({ children }) => {
  // Массив состоящий из надписей, которые затем будут плыть влево.
  const scrollItems = Array.from({ length: 100 }, () => `${children}`);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        height: 60,
        bgcolor: "primary.main",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          animation: `${scroll} 1000s linear infinite`,
          gap: "15px",
        }}
      >
        {scrollItems.map((item, index) => (
          <Typography
            key={index}
            variant="h2"
            sx={{
              whiteSpace: "nowrap",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <NavLink to="/" className="homepageLink">
              {item}
            </NavLink>
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default AnimatedHeader;
