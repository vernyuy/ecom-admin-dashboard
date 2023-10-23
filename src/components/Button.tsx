import React from "react";
import { buttonProps } from "../types/types";
import Image from "next/image";

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
      type={btnType}
      className={containerStyles}
      onClick={handleClick}
      disabled={isDisable}
    >
      {title}
    </button>
  );
};

export default Button;
