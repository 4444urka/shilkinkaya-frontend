import { Box } from "@mui/material";
import React from "react";
import Typed from "typed.js";
import { text } from "../../utils/homepageText";
import "./styles.css";
import { useAppMedia } from "../../hooks/hooks";

const Homepage = () => {
  const matches = useAppMedia();
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: text,
      typeSpeed: 20,
      startDelay: 1000,
      backDelay: 6000,
      loop: true,
      smartBackspace: true,
      backSpeed: 5,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <Box
      sx={{
        w: "100%",
        px: matches ? 10 : 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span className="mainText" ref={el} />
    </Box>
  );
};

export default Homepage;
