import { Box, Typography } from "@mui/material";
import React from "react";
import { useAppMedia } from "../../hooks/hooks";

interface IParagraphProps {
  children?: React.ReactNode;
}

const Paragraph: React.FC<IParagraphProps> = ({ children }) => {
  const matches = useAppMedia();
  return (
    <Box sx={{ display: "flex", marginX: matches ? 10 : 3 }}>
      <Typography variant="body1">{children}</Typography>
    </Box>
  );
};

export default Paragraph;
