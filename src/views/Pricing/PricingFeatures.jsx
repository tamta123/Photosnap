import PricingFeaturesData from "../../data/offers.json";
import tickImg from "../../../public/assets/pricing/desktop/check.svg";

const PricingFeatures = () => {
  const features = PricingFeaturesData;

  return (
    <div className="px-[29px]">
      <h2>Features</h2>
      <div className="w-full h-[1px] bg-black"></div>
      <div>
        {features?.map((feature, index) => (
          <div className="" key={index}>
            <h3>{feature.title}</h3>
            <div className="flex gap-4 ">
              <div>
                <span>BASIC</span>
                <div>
                  {feature.basic ? <img src={tickImg} alt="Tick" /> : null}
                </div>
              </div>
              <div>
                <span>PRO</span>
                <div>
                  {feature.pro ? <img src={tickImg} alt="Tick" /> : null}
                </div>
              </div>
              <div>
                <span>BUSINESS</span>
                <div>
                  {feature.business ? <img src={tickImg} alt="Tick" /> : null}
                </div>
              </div>
            </div>
            <div className="w-full h-[2px] bg-[#DFDFDF]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PricingFeatures;
