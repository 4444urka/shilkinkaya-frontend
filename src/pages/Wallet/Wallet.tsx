import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useAppDispatch, useAppMedia, useAppSelector } from "../../hooks/hooks";
import { increment } from "../../slices/coinSlice";

const Wallet = () => {
  const dispatch = useAppDispatch();
  const coins = useAppSelector((state) => state.coins.value);
  const matches = useAppMedia();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          paddingX: matches ? 30 : 2,
          gap: 7,
          flexDirection: "column",
        }}
      >
        <Typography variant="h3">Баланс</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 7,
          }}
        >
          <Typography variant="h1">{coins}</Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ width: "200px" }}
            onClick={() => dispatch(increment())}
          >
            Тап
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Wallet;
