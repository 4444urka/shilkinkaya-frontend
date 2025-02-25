import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useAppMedia } from "../../hooks/hooks";

const Footer = () => {
  const matches = useAppMedia();
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        padding: "30px 0",
      }}
    >
      <Stack
        spacing={4}
        direction="row"
        justifyContent="center"
        flexWrap="wrap"
      >
        <Box>
          <Typography variant="h6" gutterBottom>
            О нас
          </Typography>
          <Typography variant="body2">
            Здесь самые умные мысли. И Коробец.
          </Typography>
        </Box>
        <Box sx={{ ml: !matches ? "0 !important" : 0 }}>
          <Typography variant="h6" gutterBottom>
            Контакты
          </Typography>
          <Typography variant="body2">
            Адрес: ул. Шилкинская, 21, Владивосток
          </Typography>

          <Typography variant="body2">+7 (995) 867-02-08</Typography>
        </Box>
        <Box sx={{ ml: !matches ? "0 !important" : 0 }}>
          <Typography variant="h6" gutterBottom>
            Социальные сети
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <a
              href="https://t.me/+u_ScG3ygy3QyYTcy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                startIcon={<SendIcon />}
                variant="outlined"
                color="secondary"
              >
                Telegram
              </Button>
            </a>
          </Box>
        </Box>
      </Stack>
      <Box
        sx={{
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        <Typography variant="body2" sx={{ color: "#ffffffa4" }}>
          © {new Date().getFullYear()} Шилкинская 21. Все права защищены.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
