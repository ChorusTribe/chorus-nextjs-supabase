import type { NextPage } from "next";
import HeaderLogo from "../components/header-logo";
import Button from "../components/button";
import ButtonNext from "../components/button-next";

const Step1: NextPage = () => {
  return (
    <div className="relative flex flex-col justify-between w-[100vw] h-[100vh] min-w-[375px] overflow-hidden bg-[url(../public/step-1@3x.png)] bg-cover bg-no-repeat bg-[top] text-center text-base text-white font-body-date1">
      <div className="w-full h-full flex  flex-col py-0 px-5 box-border items-center justify-between text-center text-base text-light-grey-8001 font-body-date1">
        <div className="flex justify-center flex-1">
          <HeaderLogo />
        </div>
        <div className="rounded-3xl p-[2px]  shadow-sm w-full h-full flex-2 bg-gradient-to-t from-[#9747FF]  via-[#26F4DE] to-[#1f1f1f]">
          <div className="rounded-3xl justify-between bg-[#1f1f1f] [background:black shadow-[0px_12px_40px_rgba(0,_0,_0,_0.5)] w-full h-full flex flex-col pt-[42px] px-5 pb-[92px] box-border items-center relative gap-[32px]">
            <div className="self-stretch flex flex-col items-center justify-center gap-[32px] z-[0]">
              <b className="self-stretch relative text-[32px] leading-[40px]">
                Join Our Discord.
              </b>
              <div className="self-stretch relative">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                felis massa, dapibus nec pulvinar vulputate, auctor id metus.
                Fusce sed velit sollicitudin, sagittis tortor nec, gravida
                lacus.
              </div>
            </div>
            <Button
              icon="../discord-icon.svg"
              withIcon={true}
              content="Login With Discord"
            />
            <div className="absolute bottom-[-70px]">
              <ButtonNext disabled={true} />
            </div>
          </div>
        </div>
      </div>
      <div className="text-xs text-center inline-block w-full h-3.5 opacity-[0.5] pb-[20px] mt-[80px]">
        Powered by Chorus
      </div>
      <div className="absolute bottom-0 w-[100vw] flex gap-[2px]">
        <div className="w-[1/6] h-[10px] flex-[1] self-stretch rounded-lg bg-[#29E8FC]"></div>
        <div className="w-[2/6] h-[10px] shrink-0 flex-[2] self-stretch rounded-lg bg-white"></div>
        <div className="w-[1/6] h-[10px] flex-[1] self-stretch rounded-lg bg-[#29E8FC]"></div>
        <div className="w-[1/6] h-[10px] flex-[1] self-stretch rounded-lg bg-[#29E8FC]"></div>
        <div className="w-[1/6] h-[10px] flex-[1] self-stretch rounded-lg bg-[#29E8FC]"></div>
      </div>
    </div>
  );
};

export default Step1;
