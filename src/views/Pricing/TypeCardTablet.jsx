import TypesData from "../../data/pricing.json";
const TypeCardTablet = ({ feature, isMonthly, index }) => {
  return (
    <div
      className={`w-full h-auto  flex items-start md:flex-row  justify-between py-10 pr-[56px] ${
        index === 1
          ? "text-white bg-[#000000] pl-[20px]"
          : "text-black bg-[#F5F5F5] pl-10 "
      }`}
    >
      <div
        className="h-full w-[6px]"
        style={{
          display: index === 1 ? "block" : "none",
          background:
            index === 1
              ? "linear-gradient(27deg, #FFC593 0%, #BC7198 51.95%, #5A77FF 100%)"
              : "",
        }}
      ></div>
      <div className="flex flex-row w-[50%] lg:w-[30%] ">
        <div className="flex flex-col items-start gap-[18px] justify-start">
          <h2
            className={`text-center font-dm-sans text-2xl font-bold leading-6 ${
              index === 1 ? "text-white " : "text-black"
            }`}
          >
            {feature.title}
          </h2>
          <p
            className={` font-dm-sans text-[15px]  leading-6 opacity-60 ${
              index === 1 ? "text-white " : "text-black"
            }`}
          >
            {feature.description}
          </p>

          <button
            className={`w-[90%] py-3 text-center font-dm-sans text-[15px]  leading-6 ${
              index === 1 ? "text-black bg-[#FFFFFF]" : "text-white bg-black"
            }`}
          >
            PICK PLAN
          </button>
        </div>
      </div>
      <div className="md:flex md:flex-col gap-4 items-end">
        <div
          className={` text-center font-dm-sans text-5xl font-bold leading-6 ${
            index === 1 ? "text-white " : "text-black"
          }`}
        >
          {isMonthly ? feature.monthly : feature.yearly}
        </div>
        <span
          className={`text-center font-dm-sans text-[15px]  leading-6 opacity-60 ${
            index === 1 ? "text-white " : "text-black"
          }`}
        >
          per month
        </span>
      </div>
    </div>
  );
};
export default TypeCardTablet;
