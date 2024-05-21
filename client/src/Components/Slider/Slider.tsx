import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
const Slider = () => {
    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb",
    ];
    return (
        <div className="relative">
            <div className="flex overflow-hidden">
                <img src={data[0]} className="object-cover" alt="" />
                <img src={data[1]} className="object-cover" alt="" />
                <img src={data[2]} className="object-cover" alt="" />
            </div>
            <div className="flex absolute left-1/2 bottom-20">
                <div className="left">
                    <HiArrowLeft  className="h-20"/>
                </div>
                <div className="right">
                    <HiArrowRight className="h-20" />
                </div>
            </div>
        </div>
    );
};
export default Slider;