import { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
const Slider = () => {
    const [currentSlide, setcurrentSlide] = useState(0)
    const prevSlide =()=>{
        setcurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
        console.log(currentSlide);
        
    }
    const nextSlide =()=> {
        setcurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
        console.log(currentSlide);
        
    }
    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb",
    ];
    return (
        <div className="">
            <div className="flex transition-all" style={{transform:`translateX(-${currentSlide * 100}%)`}}>
                <img src={data[0]} className="object-cover" alt="" />
                <img src={data[1]} className="object-cover" alt="" />
                <img src={data[2]} className="object-cover" alt="" />
            </div>
            <div className="flex">
                <div className="left p-2 border-[1px] cursor-pointer m-3" onClick={prevSlide}>
                    <HiArrowLeft  className="h-5 w-5 "/>
                </div>
                <div className="right p-2 border-[1px] cursor-pointer m-3" onClick={nextSlide}>
                    <HiArrowRight className="h-5 w-5 " />
                </div>
            </div>
        </div>
    );
};
export default Slider;