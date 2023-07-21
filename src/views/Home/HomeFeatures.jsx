import featuresData from "../../data/features.json";

const HomeFeatures = () => {
  const features = featuresData.slice(0, 3);

  return (
    <div>
      {features?.map((feature, index) => (
        <div
          className="px-[33px] pb-[56px] flex flex-col items-center"
          key={index}
        >
          <img className="mb-[48px]" src={feature.icon} />
          <div className="flex flex-col justify-center items-center gap-4">
            <span>{feature.title}</span>
            <p className="text-center md:w-[70%]">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default HomeFeatures;
