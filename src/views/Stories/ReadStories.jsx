import storiesData from "../../data/stories.json";

const ReadStories = () => {
  const stories = storiesData;

  return (
    <div className="">
      {stories.map((story, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.66), rgba(0, 0, 0, 0)) , url(${story.backgroundImages})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "360px",
          }}
          className="flex flex-col justify-center px-[33px] "
        >
          <div className="flex flex-col justify-center mt-[180px] ">
            <span className="text-[13px] text-[white] font-sans font-normal leading-normal">
              {story.date}
            </span>
            <h3 className="text-[18px] text-[white] font-sans font-semibold leading-10">
              {story.title}
            </h3>
            <span className="text-[13px] text-[white] font-sans font-normal leading-normal">
              {story.author}
            </span>
            <div className="h-[2px] w-full bg-[#FFF] opacity-25 mt-[16px] mb-[20px]"></div>
            <div className="flex items-center justify-between gap-3">
              <span className="font-sans text-[12px] font-bold leading-6 text-white tracking-[2px]">
                READ STORY
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                <g fill="white" fillRule="evenodd" stroke="white">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ReadStories;

//divs gavuwerot position center
//gamoviyeneb desktop photos, display grid (destopze -4 tabletze-2 mobile 1)
