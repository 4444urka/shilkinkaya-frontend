import React from "react";
import Form from "../Form/Form";
import { IFormProps } from "../Form/Form";
import { TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";

export interface IAuthFormProps extends IFormProps {
  children: React.ReactNode;
  buttonText: string;
}

// Форма, которая используется на страницах с авторизацией и регистрацией.
const AuthForm: React.FC<IAuthFormProps> = ({
  children,
  buttonText,
  ...restProps
}) => {
  return (
    <Form sx={{ width: "20vw", minWidth: "300px", gap: 80 }} {...restProps}>
      <Typography
        variant="h3"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {children}
      </Typography>
      <TextField name="username" label="Логин" variant="outlined">
        Логин
      </TextField>
      <TextField
        name="password"
        label="Пароль"
        type="password"
        variant="outlined"
      >
        Пароль
      </TextField>
      <LoadingButton sx={{ height: "40px" }} type="submit" variant="contained">
        {buttonText}
      </LoadingButton>
    </Form>
  );
};

export default AuthForm;
