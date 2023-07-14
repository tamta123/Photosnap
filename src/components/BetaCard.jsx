const BetaCard = () => {
  return (
    <div
      style={{
        backgroundImage: "url(../../public/assets/shared/mobile/bg-beta.jpg)",
      }}
      className="flex flex-col gap-6 px-[33px] pb-[64px]"
    >
      <div
        className="w-[128px] h-[6px] mb-[66px]"
        style={{
          background:
            "linear-gradient(27deg, #FFC593 0%, #BC7198 51.95%, #5A77FF 100%)",
        }}
      ></div>
      <h2 className="w-[95%]  text-[32px] text-[white] font-sans font-semibold leading-10 tracking-[3.333px] uppercase">
        We’re in beta. Get your invite today!
      </h2>

      <div className="flex items-center gap-4">
        <span className="font-sans text-[12px] font-bold leading-6 text-white tracking-[2px]">
          GET AN INVITE
        </span>
        <svg
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
          width="43"
          height="14"
        >
          <g fillRule="evenodd" style={{ stroke: "white" }}>
            <path d="M0 7h41.864M35.428 1l6 6-6 6" />
          </g>
        </svg>
      </div>
    </div>
  );
};
export default BetaCard;
