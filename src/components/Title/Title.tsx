import { Box, Typography } from "@mui/material";
import React from "react";
import { useAppMedia } from "../../hooks/hooks";

interface ITitleProps {
  children?: React.ReactNode;
}

const Title: React.FC<ITitleProps> = ({ children }) => {
  const matches = useAppMedia();
  return (
      <Typography variant="h3" sx = {{ mb: 3}}>{children}</Typography>
  );
};

export default Title;
