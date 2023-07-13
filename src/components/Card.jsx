import homecardData from "../data/homecard.json";

const Card = () => {
  const homecard = homecardData;
  return (
    <div>
      {homecard?.map((card, index) => (
        <div key={index}>
          <img src={card.photo.mobile} alt="" />
          <div
            className="flex flex-col gap-4 pb-[74px] pl-[33px] pr-[24px]"
            style={{
              backgroundColor: index === 0 ? "black" : "white",
              paddingTop: index === 0 ? "" : "72px",
            }}
          >
            <div
              className="w-[128px] h-[6px] mb-[66px]"
              style={{
                display: index === 0 ? "block" : "none",
                background:
                  index === 0
                    ? "linear-gradient(27deg, #FFC593 0%, #BC7198 51.95%, #5A77FF 100%)"
                    : "",
              }}
            ></div>
            <h2
              className="text-2xl font-sans font-semibold leading-10 tracking-tight uppercase"
              style={{ color: index === 0 ? "white" : "black" }}
            >
              {card.title}
            </h2>
            <p
              className="font-sans text-sm font-normal leading-6 opacity-[0.6000000238418579;]"
              style={{ color: index === 0 ? "white" : "black" }}
            >
              {card.description}
            </p>
            <div className="flex items-center gap-4">
              <span
                className="font-sans text-[12px] font-normal leading-6"
                style={{ color: index === 0 ? "white" : "black" }}
              >
                VIEW THE STORIES
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="14"
                style={{ fill: index === 0 ? "white" : "black" }}
              >
                <g
                  fillRule="evenodd"
                  style={{ stroke: index === 0 ? "white" : "black" }}
                >
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
export default Card;
