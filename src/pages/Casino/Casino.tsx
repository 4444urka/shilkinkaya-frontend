import LoadingButton from "@mui/lab/LoadingButton";
import { Box, Typography } from "@mui/material";
import { animated, useSpring } from "@react-spring/web";
import React from "react";
import { useAppDispatch, useAppMedia, useAppSelector } from "../../hooks/hooks";
import { decrementByAmount, incrementByAmount } from "../../slices/coinSlice";

const CASE_COST: number = 100;
const REWARDS: number[] = [10, 20, 25, 30, 50, 60, 80, 100, 250, 500];

const Casino = () => {
  const matches = useAppMedia();
  const dispatch = useAppDispatch();
  const coins = useAppSelector((state) => state.coins.value);
  const [reward, setReward] = React.useState<number>(0);
  const [spinning, setSpinning] = React.useState<boolean>(false);

  const { transform } = useSpring({
    transform: spinning ? "rotateX(360deg)" : "rotateX(0deg)",
    config: { duration: 1000 },
  });

  function spinCase(): void {
    if (coins >= CASE_COST) {
      dispatch(decrementByAmount(CASE_COST));
      setSpinning(true);
      setTimeout(() => {
        const randomReward =
          REWARDS[Math.floor(Math.random() * REWARDS.length)];
        setReward(randomReward);
        setSpinning(false);
        dispatch(incrementByAmount(reward));
      }, 1000);
    } else {
      alert("Недостаточно монет!");
    }
  }

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
        <Typography variant="h3">Ваш баланс: {coins}</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 7,
          }}
        >
          <animated.div style={{ transform }}>
            <Typography variant="h1">{reward}</Typography>
          </animated.div>
          <LoadingButton
            variant="contained"
            size="large"
            sx={{ width: "200px" }}
            onClick={spinCase}
            loading={spinning}
            disabled={spinning}
          >
            {CASE_COST} монет
          </LoadingButton>
        </Box>
      </Box>
    </>
  );
};

export default Casino;
