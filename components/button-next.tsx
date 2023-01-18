import type { NextPage } from "next";

interface IProps {
  disabled: boolean;
  onClick?: () => void;
}

const ButtonNext: NextPage<IProps> = (props: IProps) => {
  return (
    <button
      onClick={props.onClick}
      className="relative rounded-[50%] border-0 w-[140px] h-[140px] bg-transparent p-0"
    >
      {!props.disabled && (
        <img
          className="absolute top-[0px] left-[0px] w-[100%] h-[100%]"
          alt=""
          src="../property-1default.svg"
        />
      )}
      {props.disabled && (
        <img
          className="absolute top-[0px] left-[0px] w-[100%] h-[100%]"
          alt=""
          src="../property-1disabled.svg"
        />
      )}
    </button>
  );
};

export default ButtonNext;
