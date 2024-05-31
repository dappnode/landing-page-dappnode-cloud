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
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval); // Clear interval on component unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <div className="mx-[10%] flex flex-row gap-52">
      <div className="relative min-h-max w-2/5">
        <div className=" flex h-full flex-col items-center justify-center gap-10 text-center">
          <h2>{Slides[currentIndex].title}</h2>
          <p>{Slides[currentIndex].text}</p>
        </div>
        <div className="absolute bottom-32 left-[50%] mx-auto flex -translate-x-[50%] flex-row gap-5">
          {Slides.map((slides, index) => (
            <button
              className={`h-3 w-3 rounded-full  ${index === currentIndex ? "bg-dappnodePurple" : "bg-gray-400"}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
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
          className="absolute bottom-0 right-14 transform  p-2 text-2xl text-black transition-transform duration-300 ease-in-out hover:-translate-x-3 "
        >
          {"<"}
        </button>
        <button
          onClick={nextSlide}
          className="absolute bottom-0 right-5  transform  p-2 text-2xl text-black transition-transform duration-300 ease-in-out hover:translate-x-3 "
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
