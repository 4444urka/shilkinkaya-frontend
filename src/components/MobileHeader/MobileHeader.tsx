import MenuIcon from "@mui/icons-material/Menu";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { NavLink } from "react-router-dom";

interface IMobileHeaderProps {
  children: React.ReactNode;
}

const MobileHeader: React.FC<IMobileHeaderProps> = ({ children }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color="primary" sx={{ boxShadow: 0, mb: 5 }}>
        <Toolbar sx={{ height: 70 }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              fontStyle: "italic",
              fontSize: "20px",
            }}
          >
            {children}
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <PermIdentityOutlinedIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <NavLink to="/login" style={{ textDecoration: "none" }}>
                <MenuItem onClick={handleClose}>Вход</MenuItem>
              </NavLink>
              <NavLink to="/register" style={{ textDecoration: "none" }}>
                <MenuItem onClick={handleClose}>Регистрация</MenuItem>
              </NavLink>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MobileHeader;
