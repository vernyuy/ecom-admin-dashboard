import React from "react";
import { buttonProps } from "../types/types";

const Button = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
  isDisable,
}: buttonProps) => {
  return (
    <button
      className={containerStyles}
      type={btnType}
      onClick={handleClick}
      disabled={isDisable}
    >
      {" "}
      {title}{" "}
    </button>
  );
};

export default Button;
