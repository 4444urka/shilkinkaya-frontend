import LoadingButton from "@mui/lab/LoadingButton";
import { Box, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import { NavLink } from "react-router-dom";
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
            <Form className="RegistrationFormContainer">
              <Typography variant="h1" sx={{ color: "#000" }}>
                Регистрация
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
                  Зарегистрироваться
                </LoadingButton>
                <Typography>
                  Уже есть аккаунт?{" "}
                  <NavLink to="/login" style={{ textDecoration: "underline" }}>
                    Войти
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
