import type { NextPage } from "next";
import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import Button from "../components/button";
import ButtonNext from "../components/button-next";
import { signInWithDiscord, signOut } from "../utils/oauth";
import Layout from "../components/layout";

const LoginWithDiscord: NextPage = () => {
  const router = useRouter();
  const user = useUser();
  const singIn = () => {
    signInWithDiscord();
  };

  return (
    <Layout>
      <div className="w-full h-full flex  flex-col py-0 px-5 box-border items-center justify-between text-center text-base text-light-grey-8001 font-body-date1">
        <div className="rounded-3xl p-[2px]  shadow-sm w-full h-full flex-2 bg-gradient-to-t from-[#9747FF]  via-[#26F4DE] to-[#1f1f1f]">
          <div className="relative rounded-3xl justify-between bg-[#1f1f1f] [background:black shadow-[0px_12px_40px_rgba(0,_0,_0,_0.5)] w-full h-full flex flex-col pt-[42px] px-5 pb-[92px] box-border items-center  gap-[32px]">
            <div className="self-stretch h-full flex flex-col items-center justify-center gap-[32px] z-[0]">
              <b className="self-stretch  text-[32px] leading-[40px]">
                Join Our Discord.
              </b>
              <div className="self-stretch ">
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
              onClick={singIn}
            />
            <div className="absolute bottom-[-70px]">
              <ButtonNext
                disabled={user ? false : true}
                onClick={() => {
                  router.push("welcome");
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-xs text-center inline-block w-full h-3.5 opacity-[0.5] pb-[20px] mt-[60px]">
        Powered by Chorus
      </div>
      <div className="absolute left-0 bottom-0 right-0 w-full flex gap-[2px]">
        <div className="w-[1/6] h-[10px] flex-[1] self-stretch rounded-lg bg-white"></div>
        <div className="w-[2/6] h-[10px] shrink-0 flex-[2] self-stretch rounded-lg bg-white"></div>
        <div className="w-[1/6] h-[10px] flex-[1] self-stretch rounded-lg bg-[#29E8FC]"></div>
        <div className="w-[1/6] h-[10px] flex-[1] self-stretch rounded-lg bg-[#29E8FC]"></div>
        <div className="w-[1/6] h-[10px] flex-[1] self-stretch rounded-lg bg-[#29E8FC]"></div>
      </div>
    </Layout>
  );
};

export default LoginWithDiscord;
