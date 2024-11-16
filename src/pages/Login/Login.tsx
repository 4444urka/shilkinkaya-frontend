import { LoadingButton } from "@mui/lab";
import { Box, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import { NavLink } from "react-router-dom";
import AnimatedHeader from "../../components/AnimatedHeader/AnimatedHeader";
import "./styles.css";

interface Values {
  username: string;
  password: string;
}

const validate = (values: Values): Partial<Values> => {
  const errors: Partial<Values> = {};
  if (!values.username) {
    errors.username = "Обязательное поле";
  }

  if (!values.password) {
    errors.password = "Обязательное поле";
  }
  return errors;
};

const onSubmit = (
  values: Values,
  { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
) => {
  setTimeout(() => {
    setSubmitting(false);
    alert(JSON.stringify(values, null, 2));
  }, 500);
};

const Login = () => {
  return (
    <>
      <AnimatedHeader>Shilkinskaya 15</AnimatedHeader>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validate={validate}
          onSubmit={onSubmit}
        >
          {({ submitForm, isSubmitting }) => (
            <Form className="LoginFormContainer">
              <Typography variant="h1" sx={{ color: "#000" }}>
                Вход
              </Typography>
              <Field
                component={TextField}
                sx={{
                  width: "100%",
                }}
                variant="standard"
                size="large"
                name="username"
                label="Логин"
              />
              <Field
                component={TextField}
                sx={{
                  width: "100%",
                }}
                variant="standard"
                size="large"
                type="password"
                label="Пароль"
                name="password"
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <LoadingButton
                  loading={isSubmitting}
                  variant="contained"
                  size="large"
                  color="primary"
                  sx={{
                    width: "100%",
                  }}
                  disabled={isSubmitting}
                  onClick={submitForm}
                >
                  Логин
                </LoadingButton>
                <Typography>
                  Нет аккаунта?{" "}
                  <NavLink
                    to="/register"
                    style={{ textDecoration: "underline" }}
                  >
                    Зарегистрироваться
                  </NavLink>
                </Typography>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default Login;
