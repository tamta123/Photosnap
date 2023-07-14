import PricingFeaturesData from "../../data/offers.json";
import tickImg from "../../../public/assets/pricing/desktop/check.svg";

const PricingFeatures = () => {
  const features = PricingFeaturesData;

  return (
    <div className="px-[29px]">
      <h2 className="text-black font-sans text-xs font-bold leading-normal tracking-[2px] mb-[14px] uppercase">
        Features
      </h2>
      <div className="w-full h-[1px] bg-black my-[23px]"></div>
      <div>
        {features?.map((feature, index) => (
          <div className="" key={index}>
            <h3 className="text-black font-sans text-xs font-bold leading-normal tracking-[2px] mb-[14px]">
              {feature.title}
            </h3>
            <div className="flex justify-between gap-4 ">
              <div>
                <span className="text-black opacity-50 font-sans text-[10px] font-bold leading-normal tracking-[1.667px]">
                  BASIC
                </span>
                <div>
                  {feature.basic ? <img src={tickImg} alt="Tick" /> : null}
                </div>
              </div>
              <div>
                <span className="text-black opacity-50 font-sans text-[10px] font-bold leading-normal tracking-[1.667px]">
                  PRO
                </span>
                <div>
                  {feature.pro ? <img src={tickImg} alt="Tick" /> : null}
                </div>
              </div>
              <div>
                <span className="text-black opacity-50 font-sans text-[10px] font-bold leading-normal tracking-[1.667px]">
                  BUSINESS
                </span>
                <div>
                  {feature.business ? <img src={tickImg} alt="Tick" /> : null}
                </div>
              </div>
            </div>
            <div className="w-full h-[2px] bg-[#DFDFDF] my-6"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PricingFeatures;
