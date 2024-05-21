interface Item {
  id: number;
  img: string;
  title: string;
  oldPrice: number;
  price: number;
}
interface CardProps{
  item: Item;
}
const Card: React.FC<CardProps> = ({item}) =>{
  return (
    <div className="card">
      <img src={item.img} alt={item.title} />
      <h2>{item.title}</h2>
      <p>Old Price: ${item.oldPrice}</p>
      <p>Price: ${item.price}</p>
    </div>
  )
}

export default Card