import featuresData from "../../data/features.json";

const PhotoSnapFeatures = () => {
  const features = featuresData;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {features?.map((feature, index) => (
        <div
          className="px-[33px] pb-[56px] flex flex-col items-center md:justify-center"
          key={index}
        >
          <img className="mb-[48px]" src={feature.icon} />
          <div className="flex flex-col justify-center items-center gap-4">
            <span className="font-bold">{feature.title}</span>
            <p className="text-center opacity-[0.6000000238418579]">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PhotoSnapFeatures;
