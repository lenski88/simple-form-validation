import React, { useState } from "react";
import "./App.css";
import { FormInput } from "./components/FormInput";

function App() {
  const [values, setValues] = useState({
    userName: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      type: "text",
      name: "userName",
      placeholder: "User name",
      error:
        "User should be 3-16 characters and should't include any special character",
      label: "User name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      type: "email",
      name: "email",
      placeholder: "Email",
      error: "It should be a valid email address",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      type: "date",
      name: "birthday",
      placeholder: "Birthday",
      label: "Birthday",
      required: true,
    },
    {
      id: 4,
      type: "password",
      name: "password",
      placeholder: "Password",
      error:
        "It should be 8-20 characters and include at least 1 letter, 1 number , 1 special character",
      label: "Password",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
    },
    {
      id: 5,
      type: "password",
      name: "confirmPassword",
      placeholder: "Confrirm password",
      error: "Passwords don't match",
      label: "Confrirm password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (eo) => {
    console.log(values);
    eo.preventDefault();
  };

  const onChange = (eo) => {
    setValues({ ...values, [eo.target.name]: eo.target.value });
  };

  return (
    <div className="App">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        {inputs.map((i) => {
          return (
            <React.Fragment key={i.id}>
              <label>{i.label}</label>
              <FormInput
                type={i.type}
                name={i.name}
                placeholder={i.placeholder}
                error={i.error}
                values={values[i.name]}
                pattern={i.pattern}
                required={i.required}
                onChange={onChange}
              />
            </React.Fragment>
          );
        })}

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
