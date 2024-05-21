import Card from "../Card/Card";
interface FeaturedProductProps{
    item:string;
}
const FeaturedProducts: React.FC<FeaturedProductProps> = ({item}) => {
  const data = [
    {
      id: 3,
      img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Skirt",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto-compress&cs=tinysrgb&w=1600",
      title: "Hat",
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div id="featuredProducts">
      <div className="top">
        <h1>{item}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet ut ad
          sequi expedita optio libero a numquam obcaecati voluptates
          repudiandae, officia eum dignissimos facere quis, rerum perspiciatis
          ullam. Quidem, amet.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
