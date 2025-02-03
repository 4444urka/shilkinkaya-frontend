import { Box } from "@mui/material";
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import AnimatedHeader from "./components/AnimatedHeader/AnimatedHeader";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MobileHeader from "./components/MobileHeader/MobileHeader";
import { useAppMedia } from "./hooks/hooks";
import Casino from "./pages/Casino/Casino";
import Chat from "./pages/Chat/Chat";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Wallet from "./pages/Wallet/Wallet";

function App() {
  const matches = useAppMedia();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          margin: 0,
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                {matches ? (
                  <Header>Shilkinskaya 21</Header>
                ) : (
                  <MobileHeader>Shilkinkaya 21</MobileHeader>
                )}
                <Box
                  component="main"
                  sx={{ flex: 1, pt: 3, pb: 3, backgroundColor: "white" }}
                >
                  <Outlet />
                </Box>
                <Footer />
              </>
            }
          >
            <Route index element={<Homepage />} />
            <Route path="casino" element={<Casino />} />
            <Route path="wallet" element={<Wallet />} />
          </Route>
          <Route
            path="/"
            element={
              <>
                <AnimatedHeader>Shilkinskaya 21</AnimatedHeader>
                <Box
                  component="main"
                  sx={{ flex: 1, backgroundColor: "white", pt: 10, pb: 10 }}
                >
                  <Outlet />
                </Box>
                <Footer />
              </>
            }
          >
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Registration />} />
          </Route>

          <Route
            path="/"
            element={
              <>
                {matches ? (
                  <Header>Shilkinskaya 21</Header>
                ) : (
                  <MobileHeader>Shilkinkaya 21</MobileHeader>
                )}
                <Box component="main" sx={{ flex: 1 }}>
                  <Outlet />
                </Box>
              </>
            }
          >
            <Route path="chat" element={<Chat />} />
          </Route>
        </Routes>
      </Box>
    </>
  );
}
export default App;
