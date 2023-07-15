import React from 'react';

export interface IButtonProps {
  text: string;
}

const Button = ({ text = '제출하기' }: IButtonProps) => {
  return (
    <div className="button">
      <span className="text-white">{text}</span>
    </div>
  );
};
export default Button;
