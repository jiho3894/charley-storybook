import React from 'react';

export interface IButtonProps {
  text: string;
  onClick: () => void;
}

const Button = ({ text = '제출하기', onClick }: IButtonProps) => {
  return (
    <div
      onClick={onClick}
      className="w-[200px] h-[40px] bg-charley rounded-[10px] m-auto flex justify-center items-center"
    >
      <span className="text-white">{text}</span>
    </div>
  );
};
export default Button;
