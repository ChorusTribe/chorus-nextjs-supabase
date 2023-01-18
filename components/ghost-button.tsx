import type { NextPage } from "next";

const GhostButton: NextPage = () => {
  return (
    <div className="relative group rounded-small flex flex-row p-5 items-start justify-start gap-[10px] text-right text-base text-dark-grey-5001 font-title-h2 border-0">
      <div className="z-0 absolute top-[0px] left-[-50%] flex flex-row py-3 px-6 items-center justify-center">
        <div className="relative leading-[115%] font-semibold">Back</div>
      </div>
      <div className="-z-50 group-hover:z-[10] absolute top-[0px] left-[-50%] flex flex-row py-3 px-6 items-center justify-center">
        <div className="relative leading-[115%] font-semibold [background:linear-gradient(135deg,_#29e8fc,_#7c54f2)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          Back
        </div>
      </div>
      <div className="-z-50 group-focus:z-[10] absolute top-[0px] left-[-50%] flex flex-row py-3 px-6 items-center justify-center text-main-color-011">
        <div className="relative leading-[115%] font-semibold">Back</div>
      </div>
    </div>
  );
};

export default GhostButton;
