import type { NextPage } from "next";

const ButtonNextAlt: NextPage = () => {
  return (
    <div className="relative group rounded-small w-[140px] h-[140px] bg-gray-100 flex items-start justify-start gap-[20px] border-0 m-0">
      <img
        className="z-0 absolute top-[0px] left-[0px] w-[140px] h-[140px] shrink-0"
        alt=""
        src="../property-1default1.svg"
      />
      <img
        className="-z-50 group-hover:z-[10] absolute top-[0px] left-[0px] w-[140px] h-[140px] shrink-0"
        alt=""
        src="../property-1hover.svg"
      />
      <img
        className="-z-50 group-focus:z-[10] absolute top-[0px] left-[0px] w-[140px] h-[140px] shrink-0"
        alt=""
        src="../property-1focus.svg"
      />
      <img
        className="-z-50 group-disabled:z-[10] absolute top-[0px] left-[0px] w-[140px] h-[140px] shrink-0"
        alt=""
        src="../property-1disabled1.svg"
      />
    </div>
  );
};

export default ButtonNextAlt;
