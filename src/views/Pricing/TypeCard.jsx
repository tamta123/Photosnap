import TypesData from "../../data/pricing.json";
const TypeCard = ({ feature, isMonthly }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <div className="w-[90%] h-auto pb-[40px]">
        <div className="w-full h-[6px] "></div>
        <h2>{feature.title}</h2>
        <p>{feature.description}</p>
        <div>{isMonthly ? feature.monthly : feature.yearly}</div>
        <span>per month</span>
        <button className="w-full h-[45%]">PICK PLAN</button>
      </div>
    </div>
  );
};
export default TypeCard;
