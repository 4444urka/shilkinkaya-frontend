import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { useMediaQuery } from "@mui/material";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const useAppMedia = () => {
  const media = useMediaQuery("(min-width:600px)");
  return media;
};

export const useAuth = () => {
  return true;
};
