import TypesData from "../../data/pricing.json";
const TypeCard = ({ feature, isMonthly, index }) => {
  return (
    <div
      className={`w-full h-auto pb-[40px] flex flex-col items-center gap-5 ${
        index === 1 ? "text-white bg-[#000000]" : "text-black bg-[#F5F5F5]"
      }`}
    >
      <div
        className="w-full h-[6px]"
        style={{
          display: index === 1 ? "block" : "none",
          background:
            index === 1
              ? "linear-gradient(27deg, #FFC593 0%, #BC7198 51.95%, #5A77FF 100%)"
              : "",
        }}
      ></div>
      <div className="w-full h-[6px]"></div>
      <h2
        className={`text-center font-dm-sans text-2xl font-bold leading-6 ${
          index === 1 ? "text-white " : "text-black"
        }`}
      >
        {feature.title}
      </h2>
      <p
        className={`text-center font-dm-sans text-[15px]  leading-6 opacity-60 ${
          index === 1 ? "text-white " : "text-black"
        }`}
      >
        {feature.description}
      </p>
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
      <button
        className={`w-[90%] py-3 text-center font-dm-sans text-[15px]  leading-6 ${
          index === 1 ? "text-black bg-[#FFFFFF]" : "text-white bg-black"
        }`}
      >
        PICK PLAN
      </button>
    </div>
  );
};
export default TypeCard;
