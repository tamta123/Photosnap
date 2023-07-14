import TypesData from "../../data/pricing.json";
const TypeCard = () => {
  const Types = TypesData;

  return (
    <div className="flex flex-col justify-center items-center gap-6">
      {Types.map((type, index) => (
        <div
          className="w-[90%] h-auto px-[22px] pt-[56px] pb-[40px]"
          style={{ background: index === 1 ? "#000000" : "#F5F5F5" }}
          key={index}
        >
          <h2 style={{ color: index === 1 ? "#FFFFFF" : "#000000" }}>
            {type.title}
          </h2>
          <p
            style={{
              color: index === 1 ? "#FFFFFF" : "#000000",
              opacity: index === 1 ? "0.6000000238418579" : "1",
            }}
          >
            {type.description}
          </p>
          <span
            style={{
              color: index === 1 ? "#FFFFFF" : "#000000",
              opacity: index === 1 ? "0.6000000238418579" : "1",
            }}
          >
            per month
          </span>
          <button
            className="w-full h-[45%]"
            style={{
              color: index === 1 ? "white" : "black",
              background: index === 1 ? "000000" : "FFFFFF",
            }}
          >
            PICK PLAN
          </button>
        </div>
      ))}
    </div>
  );
};
export default TypeCard;
