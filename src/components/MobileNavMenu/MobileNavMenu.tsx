import {
  Box,
  BoxProps,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";
import DrawerHeader from "../DrawerHeader/DrawerHeader";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export interface IMobileNavMenuProps extends BoxProps {
  children: React.ReactNode;
  onClickCloseButton?: () => void;
}

const MobileNavMenu: React.FC<IMobileNavMenuProps> = ({
  children,
  onClickCloseButton,
  ...restProps
}) => {
  const [accountOpen, setAccountOpen] = React.useState(false);

  const handleAccountClick = () => {
    setAccountOpen(!accountOpen);
  };

  return (
    <Box {...restProps} sx={{ width: 350 }} role="presentation">
      <DrawerHeader onClickCloseButton={onClickCloseButton}>
        {children}
      </DrawerHeader>
      <List>
        {/* Аккаунт */}
        <ListItemButton onClick={handleAccountClick}>
          <ListItemText primary="Аккаунт" />
          {accountOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={accountOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton component="a" href="/login">
              <ListItemText primary="Вход" />
            </ListItemButton>
            <ListItemButton component="a" href="/register">
              <ListItemText primary="Регистрация" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton component="a" href="/wallet">
          <ListItemText primary="Кошелёк" />
        </ListItemButton>
        <ListItemButton component="a" href="/casino">
          <ListItemText primary="Казино" />
        </ListItemButton>
        <ListItemButton component="a" href="/chat">
          <ListItemText primary="Чат" />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default MobileNavMenu;
