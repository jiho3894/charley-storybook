import React from 'react';

export interface IButtonProps {
  text: string;
}

const Button = ({ text = '버튼' }: IButtonProps) => {
  return <div className="text-blue-400">{text}</div>;
};
export default Button;
