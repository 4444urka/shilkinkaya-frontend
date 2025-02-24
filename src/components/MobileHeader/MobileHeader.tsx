import { AppBar, Box, Drawer, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import React from "react";
import MobileNavMenu from "../MobileNavMenu/MobileNavMenu";
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

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box>
      <AppBar color="primary" sx={{ position:"fixed",boxShadow: 0, mb: 0, top: 0, left: 0  }}>
        <Toolbar sx={{ height: 70 }}>
          <IconButton
            onClick={toggleDrawer(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            <MobileNavMenu onClickCloseButton={toggleDrawer(false)}>Shilkinskaya 21</MobileNavMenu>
          </Drawer>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              // fontStyle: "italic",
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
