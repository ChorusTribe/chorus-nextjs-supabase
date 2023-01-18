import type { NextPage } from "next";
import Button from "./button";
import GhostButton from "./ghost-button";

const CardNoBtn: NextPage = () => {
  return (
    <div className="w-full flex flex-row py-0 px-5 box-border items-start justify-center text-right text-sm text-dark-grey-8001 font-body-date1">
      <div className="rounded-3xl max-w-[600px] min-w-[335px] [background:linear-gradient(141.61deg,_#f1f1f1,_rgba(241,_241,_241,_0.44)_55.73%,_rgba(205,_205,_205,_0))] shadow-[0px_12px_40px_rgba(0,_0,_0,_0.2)] w-full h-full shrink-0 flex flex-col pt-[42px] px-5 pb-[92px] box-border items-center justify-center gap-[32px]">
        <div className="self-stretch flex flex-col items-center justify-center gap-[32px] text-center text-base">
          <div className="flex flex-col items-center justify-start text-main-color-011">
            <img
              className="relative w-[218.49px] h-[31.68px] shrink-0 object-cover"
              alt=""
              src="../giveway@2x.png"
            />
            <div className="relative tracking-[0.3em] leading-[40px] font-light">
              11.05.2022
            </div>
          </div>
          <b className="self-stretch relative text-lg leading-[40px]">
            Giveaway in progress...
          </b>
          <div className="self-stretch relative">
            The winner has not been annonced yet. Come back at the end of the
            giveaway to know if you won !
          </div>
        </div>
        <Button content="Connect your Crypto Wallet"></Button>
        <GhostButton />
      </div>
    </div>
  );
};

export default CardNoBtn;
