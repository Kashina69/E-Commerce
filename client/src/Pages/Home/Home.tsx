import Slider from "../../Components/Slider/Slider";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts item ={"Featured Products"} />
      <FeaturedProducts item ={"Trending Products"} />
    </div>
  );
};
export default Home;
