import type { NextPage } from "next";

interface IProps {
  withIcon?: boolean;
  icon?: string;
  sizeMd?: boolean;
  success?: boolean;
  onClick?: () => void;
  content?: string;
}
const Button: NextPage<IProps> = (props: IProps) => {
  return (
    <button
      onClick={props.onClick}
      className="bg-transparent relative group rounded-small p-0 m-0 items-start justify-start gap-[22px] text-center text-base text-white1 font-title-h2 border-0 box-content"
    >
      {!props.withIcon && !props.sizeMd && !props.success && (
        <>
          <div
            className="z-0 top-[0px] left-[0px] rounded-base flex flex-row py-3 px-10 items-start justify-start
            [background:linear-gradient(135deg,_#29e8fc,_#7c54f2)] shadow-[0px_1px_64px_rgba(86,_100,_215,_0.4)] 
            group-hover:[background:linear-gradient(-45deg,_#29e8fc,_#7c54f2)] group-hover:shadow-[0px_1px_34px_rgba(86,_100,_215,_0.5)]
            group-focus:[background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_linear-gradient(-47.81deg,_#29e8fc,_#7c54f2)] group-focus:shadow-[0px_1px_34px_rgba(86,_100,_215,_0.5)]"
          >
            <div className="leading-[115%] font-semibold flex">
              {props.content}
            </div>
          </div>
        </>
      )}
      {props.sizeMd && (
        <>
          <div
            className="z-0 top-[0px] left-[0px] w-auto rounded-base
              flex flex-row py-4 px-12 items-start justify-start
              [background:linear-gradient(135deg,_#29e8fc,_#7c54f2)] shadow-[0px_1px_64px_rgba(86,_100,_215,_0.4)]
              group-hover:[background:linear-gradient(-45deg,_#29e8fc,_#7c54f2)] group-hover:shadow-[0px_1px_34px_rgba(86,_100,_215,_0.5)]
              group-focus:[background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_linear-gradient(-47.81deg,_#29e8fc,_#7c54f2)] group-focus:shadow-[0px_1px_34px_rgba(86,_100,_215,_0.5)]"
          >
            <div className="leading-[115%] font-semibold">{props.content}</div>
          </div>
        </>
      )}
      {props.withIcon && !props.success && (
        <>
          <div
            className="z-0 top-[0px] left-[0px] rounded-base 
              flex flex-row py-3 px-10 items-center justify-start gap-[10px]
              [background:linear-gradient(135deg,_#29e8fc,_#7c54f2)] shadow-[0px_1px_64px_rgba(86,_100,_215,_0.4)]
              group-hover:[background:linear-gradient(-45deg,_#29e8fc,_#7c54f2)] group-hover:shadow-[0px_1px_34px_rgba(86,_100,_215,_0.5)]
              group-focus:[background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_linear-gradient(-47.81deg,_#29e8fc,_#7c54f2)] group-focus:shadow-[0px_1px_34px_rgba(86,_100,_215,_0.5)]"
          >
            <img
              className="w-4 h-4 shrink-0"
              alt={props.icon}
              src={props.icon}
            />
            <div className="leading-[115%] font-semibold">{props.content}</div>
          </div>
        </>
      )}
      {props.success && (
        <div
          className="z-0 top-[0px] left-[0px] rounded-base 
            [background:linear-gradient(135deg,_#26f4de,_#58edb9)] shadow-[0px_1px_34px_rgba(86,_100,_215,_0.4)] 
            flex flex-row py-3 px-10 items-center justify-start gap-[10px]"
        >
          <img className="w-4 h-4 shrink-0" alt="" src="../twitter.svg" />
          <div className="leading-[115%] font-semibold">{props.content}</div>
        </div>
      )}
    </button>
  );
};

export default Button;
