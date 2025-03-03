import { useState, useEffect } from "react";
import img from "../assets/images.jpg";
import img1 from "../assets/images1.jpg";
import img2 from "../assets/images2.jpg";
import img3 from "../assets/images3.jpg";

export default function ImageSlider() {
  const images = [img, img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("left");
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative max-w-[1240px] w-full mx-auto mt-[90px] px-4 overflow-hidden">
      <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[470px]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Slider Image"
            className={`absolute w-full h-full object-cover transition-transform duration-700 
            ${index === currentIndex ? "translate-x-0" : direction === "left" ? "-translate-x-full" : "translate-x-full"}`}
          />
        ))}
      </div>
    </div>
  );
}