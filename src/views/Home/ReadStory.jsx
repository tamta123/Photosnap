import storiesData from "../../stories.json";

const ReadStory = () => {
  const stories = storiesData.stories.slice(0, 4);

  return (
    <div>
      {stories.map((story, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.66), rgba(0, 0, 0, 0)) , url(${story.backgroundImages})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "360px",
          }}
          className="flex flex-col justify-center px-[33px]"
        >
          <div className="flex flex-col justify-center ">
            <h3>{story.title}</h3>
            <span>{story.author}</span>
            <div className="h-2px w-full bg-black"></div>
            <div className="flex">
              <span>READ STORY</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                <g fill="none" fillRule="evenodd" stroke="#000">
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
export default ReadStory;

//divs gavuwerot position center
//photoebi gavushvat background imagead
//gamoviyeneb desktop photos, display grid (destopze -4 tabletze-2 mobile 1)
