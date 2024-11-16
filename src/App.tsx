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
        <Box component="main" sx={{ flex: 1 }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {matches ? (
                    <Header>Shilkinskaya 15</Header>
                  ) : (
                    <MobileHeader>Shilkinkaya 15</MobileHeader>
                  )}
                  <Outlet />
                </>
              }
            >
              <Route index element={<Homepage />} />
              <Route path="chat" element={<Chat />} />
              <Route path="casino" element={<Casino />} />
              <Route path="wallet" element={<Wallet />} />
            </Route>
            <Route
              path="/"
              element={
                <>
                  <AnimatedHeader>Shilkinskaya 15</AnimatedHeader>
                  <Outlet />
                </>
              }
            >
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Registration />} />
            </Route>
          </Routes>
        </Box>
        <Footer />
      </Box>
    </>
  );
}
export default App;
