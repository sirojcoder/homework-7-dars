import { useState } from "react";
import img from "../assets/images.webp"
import img1 from "../assets/images1.png"
import img2 from "../assets/images2.webp"
import img3 from "../assets/images3.jpg"

export default function ImageSlider() {
  const images = [
   img, img1, img2, img3
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative max-w-[1240px] w-full mx-auto mt-[90px] px-4">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[currentIndex]}
          alt="Slider Image"
          className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] object-cover"
        />
      </div>
  
     
      <button
        onClick={prevSlide}
        className="absolute -left-4 sm:-left-3 top-1/2 transform -translate-y-1/2 
                   bg-gray-900 text-white text-lg sm:text-2xl px-4 sm:px-5 py-2 sm:py-3 
                   rounded-full shadow-xl hover:bg-gray-700 transition-all duration-300"
      >
        ❮
      </button>
  
     
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:-right-3 top-1/2 transform -translate-y-1/2 
                   bg-gray-900 text-white text-lg sm:text-2xl px-4 sm:px-5 py-2 sm:py-3 
                   rounded-full shadow-xl hover:bg-gray-700 transition-all duration-300"
      >
        ❯
      </button>
    </div>
  );
  
}
