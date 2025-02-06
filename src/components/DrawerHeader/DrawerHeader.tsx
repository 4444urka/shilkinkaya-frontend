import { Box, BoxProps, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

export interface IDrawerHeaderProps extends BoxProps {
  children: React.ReactNode;
  onClickCloseButton?: () => void;
}

const DrawerHeader: React.FC<IDrawerHeaderProps> = ({
  children,
  onClickCloseButton,
  ...restProps
}) => {
  return (
    <Box
      {...restProps}
      sx={{
        px: 2,
        height: 70,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{
          color: "black",
          flexGrow: 1,
          fontWeight: "bold",
          // fontStyle: "italic",
          fontSize: "20px",
        }}
      >
        {children}
      </Typography>
      <IconButton aria-label="Close" onClick={onClickCloseButton}>
        <CloseIcon sx={{ color: "black" }} />
      </IconButton>
    </Box>
  );
};

export default DrawerHeader;
