import { BetaCard } from "../../components";

const Pricing = () => {
  return (
    <>
      <div className="">
        <img src="../../public/assets/pricing/mobile/hero.jpg" alt="" />
        <div className="flex flex-col gap-4 pb-[74px] pl-[33px] pr-[24px] bg-[black]">
          <div
            className="w-[128px] h-[6px] mb-[48px]"
            style={{
              background:
                "linear-gradient(27deg, #FFC593 0%, #BC7198 51.95%, #5A77FF 100%)",
            }}
          ></div>

          <h2 className="w-[70%] text-[32px] text-[white] font-sans font-semibold leading-10 tracking-[3.333px] uppercase">
            PRICING
          </h2>
          <p className="font-sans text-sm font-normal leading-6 text-[white] opacity-[0.6000000238418579;]">
            Create a your stories, Photosnap is a platform for photographers and
            visual storytellers. It’s the simple way to create and share your
            photos.
          </p>
        </div>
      </div>
      <div className="flex gap-3 h-[110px] w-full">
        <span>monthly</span>
        <div>
          <label
            htmlFor="darkMode"
            className={`h-5 w-10 rounded-[10px] relative cursor-pointer bg-[#DFDFDF] text-[#DFDFDF]`}
          >
            tamta
            <input
              className="sr-only peer"
              type="checkbox"
              id="darkMode"
              // onClick={toggleMode}
            />
            <span className="w-2/5 h-4/5 bg-black absolute rounded-[10px] left-[2px] top-[2px] peer-checked:left-[22px] transition-all duration-500"></span>
          </label>
        </div>

        <span>yearly</span>
      </div>
      <BetaCard />
    </>
  );
};
export default Pricing;
