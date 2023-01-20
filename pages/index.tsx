import { useRouter } from "next/router";
import { useUser } from "@supabase/auth-helpers-react";
import type { NextPage } from "next";
import Button from "../components/button";
import ButtonNext from "../components/button-next";
import Layout from "../components/layout";
import { useEffect } from "react";
import supabase from "../utils/supabase";

const Home: NextPage = () => {
  const router = useRouter();
  const user = useUser();

  return (
    <Layout>
      <div className="flex-1 w-full h-full flex  flex-col py-0 px-5 box-border items-center justify-between text-center text-base text-light-grey-8001 font-body-date1">
        <div className="flex-1 flex flex-col rounded-3xl p-[2px]  shadow-sm w-full h-full bg-gradient-to-t from-[#9747FF]  via-[#26F4DE] to-[#1f1f1f]">
          <div className="flex-1 relative rounded-3xl justify-between bg-[#1f1f1f] [background:black shadow-[0px_12px_40px_rgba(0,_0,_0,_0.5)] w-full h-full flex flex-col pt-[42px] px-5 pb-[92px] box-border items-center  gap-[32px]">
            <div className="flex-1 self-stretch h-full flex flex-col items-center justify-center gap-[32px] z-[0]">
              <div className="flex flex-col items-center text-main-color-011">
                <img
                  className="w-[218.49px] h-[31.68px] shrink-0 object-cover"
                  alt=""
                  src="../giveway1@2x.png"
                />
                <div className=" tracking-[0.3em] leading-[40px] font-light">
                  11.05.2022
                </div>
              </div>
              <b className="self-stretch  text-[32px] leading-[40px]">
                Win a Christmas Sandbox for free !
              </b>
              <div className="self-stretch ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                felis massa, dapibus nec pulvinar vulputate, auctor id metus.
                Fusce sed velit sollicitudin, sagittis tortor nec, gravida
                lacus.
              </div>
            </div>
            <Button
              content="Connect your Crypto Wallet"
              onClick={() => {
                router.push("login-with-discord");
              }}
            />
            <div className="absolute bottom-[-70px]">
              <ButtonNext disabled={user ? false : true} />
            </div>
          </div>
        </div>
      </div>
      <div className="text-xs text-center inline-block w-full h-3.5 opacity-[0.5] pb-[20px] mt-[60px]">
        Powered by Chorus
      </div>
      <div className="absolute left-0 right-0 bottom-0 w-full flex gap-[2px]">
        <div className="w-[2/6] h-[10px] shrink-0 flex-[2] self-stretch rounded-lg bg-white"></div>
        <div className="w-[1/6] h-[10px] flex-[1] self-stretch rounded-lg bg-[#29E8FC]"></div>
        <div className="w-[1/6] h-[10px] flex-[1] self-stretch rounded-lg bg-[#29E8FC]"></div>
        <div className="w-[1/6] h-[10px] flex-[1] self-stretch rounded-lg bg-[#29E8FC]"></div>
        <div className="w-[1/6] h-[10px] flex-[1] self-stretch rounded-lg bg-[#29E8FC]"></div>
      </div>
    </Layout>
  );
};

export default Home;
