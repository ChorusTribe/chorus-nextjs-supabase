import { useState } from "react";
import type { NextPage } from "next";
import Button from "../components/button";
import GhostButton from "../components/ghost-button";
import ButtonNext from "../components/button-next";
import ButtonNextAlt from "../components/button-next-alt";
import CardNoBtn from "../components/card-no-btn";
import CardWithBtn from "../components/card-with-btn";
import HeaderLogo from "../components/header-logo";

const Buttons: NextPage = () => {
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="relative bg-white1 w-full overflow-hidden flex flex-col p-[100px] box-border items-start justify-center gap-[32px] text-left text-lg text-black font-title-h2">
      <Button content={"Connect your Crypto Wallet"} />
      <Button content={"Connect your Crypto Wallet"} withIcon={true} />
      <Button content={"Connect your Crypto Wallet"} sizeMd={true} />
      <Button content={"Connect your Crypto Wallet"} success={true} />
      <GhostButton />
      <ButtonNext
        disabled={disabled}
        onClick={() => {
          alert("adfds");
          setDisabled(!disabled);
        }}
      />
      <ButtonNextAlt />
      <CardNoBtn />
      <CardWithBtn />
      <HeaderLogo />
    </div>
  );
};

export default Buttons;
