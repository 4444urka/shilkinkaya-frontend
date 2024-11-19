/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "@mui/material";
import AuthForm from "../../components/AuthForm/AuthForm";
import "./styles.css";

const onSubmit = (values: any) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
  }, 500);
};

const Login = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AuthForm onSubmit={onSubmit} buttonText="Войти">
          Вход
        </AuthForm>
      </Box>
    </>
  );
};

export default Login;
