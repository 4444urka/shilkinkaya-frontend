/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import "./styles.css";

export interface IFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  onSubmit: (values: { [key: string]: any }) => void;
  sx?: React.CSSProperties;
}

// TODO: Добавить валидацию

// Абстрактный компонент формы, он принимает в себя inputs или textarea и кнопку отправки. При отправки формы мы получаем Object с ключами formName и значениями.
const Form: React.FC<IFormProps> = ({
  children,
  onSubmit,
  sx,
  ...restProps
}) => {
  const [values, setValues] = useState<{ [key: string]: any }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(values);
  };

  const clonedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      if ((child as React.ReactElement<any>).props.name) {
        return React.cloneElement(child as React.ReactElement<any>, {
          onChange: handleChange,
          value: values[(child as React.ReactElement<any>).props.name] || "",
        });
      }
    }
    return child;
  });

  return (
    <form
      className="formContainer"
      style={{ ...sx }}
      onSubmit={handleSubmit}
      {...restProps}
    >
      {clonedChildren}
    </form>
  );
};

export default Form;
