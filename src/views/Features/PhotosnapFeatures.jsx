import featuresData from "../../features.json";

const PhotoSnapFeatures = () => {
  const features = featuresData;

  return (
    <div>
      {features.map((feature, index) => (
        <div key={index}>
          <img src={feature.icon} />
          <div>
            <span>{feature.title}</span>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PhotoSnapFeatures;
