import React, { useEffect, useState } from "react";

interface Slide {
  title: string;
  text: string;
  imgSrc: string;
}

const Slides: Slide[] = [
  {
    title: "Solo Staking",
    text: "In case getting a hardware isn't an option for you - you can use Dappnode Cloud to host an Ethereum or Gnosis validator, thus participating in the network and earning rewards.",
    imgSrc: "/carousel/solo-staking-carousel.webp",
  },
  {
    title: "Blockchain Network Participation",
    text: "You can run a full node, become a validator, or participate in mining on various blockchain networks without worrying about hardware requirements, internet connectivity, or power outages.        ",
    imgSrc: "/carousel/network-carousel.webp",
  },
  {
    title: "Educational Purposes",
    text: "Students and researchers can use Dappnode Cloud to learn about blockchain, decentralized networks, and dApps in a practical and hands-on way without the need of purchasing your permanent node!        ",
    imgSrc: "/carousel/educational-carousel.webp",
  },
  {
    title: "Distributed Application Development",
    text: "Developers can use Dappnode in Cloud to create and test decentralized applications (dApps) in a scalable and reliable environment, such as AWS. This allows for easier debugging, testing, and deployment of your dApps!   ",
    imgSrc: "/carousel/distributed-development-carousel.webp",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? Slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === Slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex]);

  return (
    <div className="mx-[10%] flex flex-row gap-52">
      <div className=" flex w-2/5 flex-col items-center justify-center gap-10 text-center">
        <h2>{Slides[currentIndex].title}</h2>
        <p>{Slides[currentIndex].text}</p>
      </div>
      <div className="relative w-3/5 overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={slide.imgSrc}
                alt={`Slide ${index}`}
                className="h-auto w-full"
              />
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 transform bg-gray-500 p-2 text-white"
        >
          {"<"}
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 transform bg-gray-500 p-2 text-white"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
