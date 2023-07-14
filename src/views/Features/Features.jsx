import { BetaCard } from "../../components";
import PhotoSnapFeatures from "./PhotoSnapFeatures";

const Features = () => {
  return (
    <>
      <div className="mb-[64px]">
        <img src="../../public/assets/features/mobile/hero.jpg" alt="" />
        <div className="flex flex-col gap-4 pb-[74px] pl-[33px] pr-[24px] bg-[black]">
          <div
            className="w-[128px] h-[6px] mb-[48px]"
            style={{
              background:
                "linear-gradient(27deg, #FFC593 0%, #BC7198 51.95%, #5A77FF 100%)",
            }}
          ></div>

          <h2 className="w-[70%] text-[32px] text-[white] font-sans font-semibold leading-10 tracking-[3.333px] uppercase">
            FEATURES
          </h2>
          <p className="font-sans text-sm font-normal leading-6 text-[white] opacity-[0.6000000238418579;]">
            We make sure all of our features are designed to be loved by every
            aspiring and even professional photograpers who wanted to share
            their stories.
          </p>
        </div>
      </div>
      <PhotoSnapFeatures />
      <BetaCard />
    </>
  );
};
export default Features;
