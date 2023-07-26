import { BetaCard } from "../../components";
import PhotoSnapFeatures from "./PhotosnapFeatures";

const Features = () => {
  return (
    <>
      <div className="md:h-[64px]"></div>
      <div
        className="mb-[64px] md:flex md:flex-row-reverse lg:grid lg:grid-cols-[1.3fr,1fr] lg:w-auto"
        style={{ direction: "rtl" }}
      >
        <img className="md:hidden " src="/features/mobile/hero.jpg" alt="" />
        <img
          className="md:block hidden lg:hidden "
          src="/assets/features/tablet/hero.jpg"
          alt=""
        />
        <img
          className="lg:block hidden w-[100%] h-auto "
          src="/assets/features/desktop/hero.jpg"
          alt=""
        />

        <div className="flex flex-col gap-4 pb-[74px] pl-[33px] pr-[24px] bg-[black] md:justify-around  lg:justify-start md:flex-row md:px-0 md:gap-[54px] md:items-center md:pb-0 lg:w-auto">
          <div
            className="w-[128px] h-[6px] mb-[48px] md:w-[6px] md:h-[144px]"
            style={{
              background:
                "linear-gradient(27deg, #FFC593 0%, #BC7198 51.95%, #5A77FF 100%)",
            }}
          ></div>
          <div className="">
            <h2 className="w-[70%] text-[32px] text-[white] font-sans font-semibold leading-10 tracking-[3.333px] uppercase md:mb-4">
              FEATURES
            </h2>
            <p className="font-sans text-sm font-normal leading-6 text-[white] opacity-[0.6000000238418579;] md:w-[75%]">
              We make sure all of our features are designed to be loved by every
              aspiring and even professional photograpers who wanted to share
              their stories.
            </p>
          </div>
        </div>
      </div>
      <PhotoSnapFeatures />
      <BetaCard />
    </>
  );
};
export default Features;
