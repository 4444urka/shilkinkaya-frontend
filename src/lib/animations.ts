import { keyframes } from "@mui/material";

export const fadeInWithTranslation = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(10px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;

export const babubabu = keyframes`
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(10%);
  }
  100% {
    transform: translateX(0);
  }
`;

export const pump = keyframes`
  from {
      transform: translateX(5%);
  }
  to {
      transform: translateX(0%);
    }
`;

export const scroll = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
`;
