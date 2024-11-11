import { Paper } from "@mui/material";
import React from "react";

interface ContentPaperProps {
  children?: React.ReactNode;
}

const ContentPaper: React.FC<ContentPaperProps> = ({ children }) => {
  return (
    <Paper
      elevation={2}
      sx={{
        minWidth: 500,
        padding: 5,
        minHeight: "350px",
        maxHeight: "1000px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </Paper>
  );
};

export default ContentPaper;
