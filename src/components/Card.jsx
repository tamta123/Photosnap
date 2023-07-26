import homecardData from "../data/homecard.json";

const Card = () => {
  const homecard = homecardData;
  return (
    <div className="">
      {homecard?.map((card, index) => (
        <div
          className={`md:flex lg:grid  lg:h-auto ${
            index !== 1
              ? "md:flex-row-reverse lg:grid-cols-[1fr,1.3fr]"
              : "md:flex lg:grid-cols-[1.3fr,1fr]"
          } md:h-[650px]`}
          key={index}
          style={{ direction: index !== 1 ? "rtl" : "initial" }}
        >
          <div className="flex justify-center items-center">
            <img
              className="md:hidden object-cover"
              src={card.photo.mobile}
              alt=""
            />
            <img
              className="hidden md:block lg:hidden object-cover"
              src={card.photo.tablet}
              alt=""
            />
            <img
              className="hidden lg:block object-cover w-[100%] h-auto"
              src={card.photo.desktop}
              alt=""
            />
          </div>

          <div
            className={`flex flex-col gap-4 pb-[74px] pl-[33px] pr-[24px] md:justify-center md:px-0 md:py-0  ${
              index !== 0 ? "md:pl-[54px]" : "md:pl-0"
            } `}
            style={{
              backgroundColor: index === 0 ? "black" : "white",
              paddingTop: index === 0 ? "" : "72px",
            }}
          >
            <div className="md:flex md:gap-16 md:items-center">
              <div
                className="w-[128px] h-[6px] mb-[66px] md:h-[304px] md:w-[6px]"
                style={{
                  display: index === 0 ? "block" : "none",
                  background:
                    index === 0
                      ? "linear-gradient(27deg, #FFC593 0%, #BC7198 51.95%, #5A77FF 100%)"
                      : "",
                }}
              ></div>
              <div className="md:w-[80%] md:flex md:flex-col md:gap-4">
                <h2
                  className="text-2xl font-sans font-semibold leading-10 tracking-tight uppercase md:text-[40px] md:tracking-[4.167px]"
                  style={{ color: index === 0 ? "white" : "black" }}
                >
                  {card.title}
                </h2>
                <p
                  className="font-sans text-sm font-normal leading-6 opacity-[0.6000000238418579;] md:text-[15px]"
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
          </div>
        </div>
      ))}
    </div>
  );
};
export default Card;
