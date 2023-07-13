import Card from "../../components/Card";
import HomeFeatures from "./HomeFeatures";
import ReadStory from "./ReadStory";

const Home = () => {
  return (
    <>
      <Card />
      <ReadStory />
      <div className="w-full h-[63px]"></div>
      <HomeFeatures />
    </>
  );
};
export default Home;
