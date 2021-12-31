import React, { useState } from "react";
import "./FormInput.css";

export const FormInput = (props) => {
  const [focused, setFocused] = useState(false);

  return (
    <>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        pattern={props.pattern}
        required={props.required}
        onChange={props.onChange}
        onFocus={() => props.name === "confirmPassword" && setFocused(true)}
        onBlur={() => setFocused(true)}
        focused={focused.toString()}
      />
      {focused && <span>{props.error}</span>}
    </>
  );
};
