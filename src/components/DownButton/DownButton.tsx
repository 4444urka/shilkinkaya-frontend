import { Avatar, AvatarProps } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import React from "react";
import { fadeInWithTranslation } from "../../lib/animations";

export interface IDownButtonProps extends AvatarProps {
  onClick?: () => void;
}

/**
 * Кнопка дауна)))))
 */
const DownButton: React.FC<IDownButtonProps> = ({
  onClick,
  sx,
  ...restProps
}) => {
  return (
    <Avatar
      onClick={onClick}
      sx={{
        width: "40px",
        height: "40px",
        position: "fixed",
        alignSelf: "self-end",
        bottom: 70,
        right: 10,
        bgcolor: "white",
        cursor: "pointer",
        animation: `${fadeInWithTranslation} 0.3s ease-in-out`,
        ...sx,
      }}
      {...restProps}
    >
      <ArrowDownwardIcon sx={{ color: "black" }} />
    </Avatar>
  );
};

export default DownButton;
