import PricingFeaturesData from "../../data/offers.json";
import tickImg from "../../../public/assets/pricing/desktop/check.svg";

const PricingFeaturesTablet = () => {
  const features = PricingFeaturesData;

  return (
    <div className="px-[29px]">
      <h2 className="text-black font-sans text-xs font-bold leading-normal tracking-[2px] mb-[14px] uppercase md:px-[24px] ">
        Features
      </h2>
      <div className="w-full h-[1px] bg-black my-[23px] "></div>
      <div>
        {features?.map((feature, index) => (
          <div className="md:flex flex-col" key={index}>
            <div className="flex items-center justify-between">
              <h3 className="text-black font-sans text-xs font-bold leading-normal tracking-[2px] mb-[14px] md:px-[24px]">
                {feature.title}
              </h3>
              <div className="w-[60%] flex justify-between md:items-start gap-4 md:px-[24px]">
                <div className="md:flex md:flex-col md:justify-center md:items-center">
                  <span className="text-black opacity-50 font-sans text-[10px] font-bold leading-normal tracking-[1.667px]">
                    BASIC
                  </span>
                  <div>
                    {feature.basic ? <img src={tickImg} alt="Tick" /> : null}
                  </div>
                </div>
                <div className="md:flex md:flex-col md:justify-center md:items-center">
                  <span className="text-black opacity-50 font-sans text-[10px] font-bold leading-normal tracking-[1.667px]">
                    PRO
                  </span>
                  <div>
                    {feature.pro ? <img src={tickImg} alt="Tick" /> : null}
                  </div>
                </div>
                <div className="md:flex md:flex-col md:justify-center md:items-center">
                  <span className="text-black opacity-50 font-sans text-[10px] font-bold leading-normal tracking-[1.667px]">
                    BUSINESS
                  </span>
                  <div>
                    {feature.business ? <img src={tickImg} alt="Tick" /> : null}
                  </div>
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
export default PricingFeaturesTablet;

// es Sul Sesacvlelia
