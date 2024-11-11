import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Wallet from "./pages/Wallet/Wallet";

function App() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          margin: 0 // Это гарантирует, что контейнер будет занимать всю высоту страницы
        }}
      >
        <Box component="main" sx={{ flex: 1, }}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/wallet" element={<Wallet />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </>
  );
}
export default App;
