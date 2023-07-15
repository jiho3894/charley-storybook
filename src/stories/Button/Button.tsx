import React from 'react';

export interface IButtonProps {
  text: string;
}

const Button = ({ text = '제출하기' }: IButtonProps) => {
  return (
    <div className="w-[200px] h-[40px] bg-[#5d04d9] rounded-[10px] m-auto flex justify-center items-center">
      <span className="text-white">{text}</span>
    </div>
  );
};
export default Button;
