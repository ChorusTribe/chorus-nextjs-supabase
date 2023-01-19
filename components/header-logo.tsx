import type { NextPage } from "next";

enum Theme {
  DARK,
  LIGHT,
}
interface IProps {
  theme?: Theme;
}
const HeaderLogo: NextPage<IProps> = ({ theme = Theme.DARK }: IProps) => {
  return (
    <div className="overflow-hidden flex p-5 items-start justify-start gap-[10px]">
      {theme == Theme.DARK && (
        <div className="flex flex-col py-6 px-5 items-center justify-center">
          <img
            className="relative w-[136px] h-[53px] object-cover"
            alt="../warner-music-group-logo-2021-1@2x.png"
            src="../warner-music-group-logo-2021-1@2x.png"
          />
        </div>
      )}
      {theme == Theme.LIGHT && (
        <div className="flex flex-col py-6 px-5 items-center justify-center">
          <img
            className="relative w-[136px] h-[53px] object-cover"
            alt="../warner-music-group-logo-2021-11@2x.png"
            src="../warner-music-group-logo-2021-11@2x.png"
          />
        </div>
      )}
    </div>
  );
};

export default HeaderLogo;
