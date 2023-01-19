import type { NextPage } from "next";
import Button from "../components/button";
import ButtonNext from "../components/button-next";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import Layout from "../components/layout";

const Welcome: NextPage = () => {
  const user = useUser();

  return (
    <Layout>
      <div className="w-full h-full flex  flex-col py-0 px-5 box-border items-center justify-between text-center text-base text-light-grey-8001 font-body-date1">
        <div className="rounded-3xl p-[2px]  shadow-sm w-full h-full flex-2 bg-gradient-to-t from-[#9747FF]  via-[#26F4DE] to-[#1f1f1f]">
          <div className="relative rounded-3xl justify-between bg-[#1f1f1f] [background:black shadow-[0px_12px_40px_rgba(0,_0,_0,_0.5)] w-full h-full flex flex-col pt-[42px] px-5 pb-[92px] box-border items-center  gap-[32px]">
            <div className="self-stretch h-full flex flex-col items-center justify-center gap-[32px] z-[0]">
              <b className="self-stretch  text-[32px] leading-[40px]">
                Welcome !
              </b>
              <div className="self-stretch ">
                Hello ! We are happy to see you in our Discord ! Go to the next
                step to know what you have to do now.
              </div>
            </div>
            <Button
              withIcon={true}
              icon={"../success-icon.svg"}
              content={`Hello ${user && user?.email}`}
            />
            <div className="absolute bottom-[-70px]">
              <ButtonNext disabled={false} />
            </div>
          </div>
        </div>
      </div>
      <div className="text-xs text-center inline-block w-full h-3.5 opacity-[0.5] pb-[20px] mt-[60px]">
        Powered by Chorus
      </div>
      <div className="absolute left-0 bottom-0 right-0 w-full flex gap-[2px]">
        <div className="w-[1/6] h-[10px] flex-[1] self-stretch rounded-lg bg-white"></div>
        <div className="w-[1/6] h-[10px] flex-[1] self-stretch rounded-lg bg-white"></div>
        <div className="w-[2/6] h-[10px] shrink-0 flex-[2] self-stretch rounded-lg bg-white"></div>
        <div className="w-[1/6] h-[10px] flex-[1] self-stretch rounded-lg bg-[#29E8FC]"></div>
        <div className="w-[1/6] h-[10px] flex-[1] self-stretch rounded-lg bg-[#29E8FC]"></div>
      </div>
    </Layout>
  );
};

export default Welcome;
