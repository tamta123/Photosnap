import { BetaCard } from "../../components";
import ReadStories from "./ReadStories";

const Stories = () => {
  return (
    <div>
      <div className="md:h-[64px]"></div>
      <div className="">
        <img
          className="md:hidden"
          src="/assets/stories/mobile/moon-of-appalacia.jpg"
          alt="moon of appalacia"
        />
        <div
          className="flex flex-col gap-4 pb-[74px] pl-[33px] pr-[24px] bg-[black]   "
          style={{
            backgroundImage:
              "url(/assets/stories/desktop/moon-of-appalacia.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="w-[128px] h-[6px] mb-[48px] md:hidden"
            style={{
              background:
                "linear-gradient(27deg, #FFC593 0%, #BC7198 51.95%, #5A77FF 100%)",
            }}
          ></div>
          <div className="md:w-[50%] md:flex md:flex-col md:gap-6">
            <span className="font-sans text-[12px] font-bold leading-6 text-white md:mt-[140px]">
              LAST MONTH’S FEATURED STORY
            </span>
            <h2 className="w-[70%] text-[32px] text-[white] font-sans font-semibold leading-10 tracking-[3.333px] uppercase">
              HAZY FULL MOON OF APPALACHIA
            </h2>
            <div className="flex gap-2">
              <span className="font-sans text-sm font-normal leading-6 text-[white] opacity-[0.6000000238418579;]">
                March 2nd 2020
              </span>
              <span className="font-sans text-sm font-normal leading-6 text-[white]">
                by John Appleseed
              </span>
            </div>
            <p className="font-sans text-sm font-normal leading-6 text-[white] opacity-[0.6000000238418579;]">
              The dissected plateau area, while not actually made up of
              geological mountains, is popularly called "mountains," especially
              in eastern Kentucky and West Virginia, and while the ridges are
              not high, the terrain is extremely rugged.
            </p>
            <div className="flex items-center gap-4">
              <span className="font-sans text-[12px] font-bold leading-6 text-white tracking-[2px]">
                VIEW THE STORIES
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
        </div>
      </div>
      <ReadStories />
    </div>
  );
};

export default Stories;
