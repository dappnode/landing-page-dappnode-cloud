import React, { useEffect, useState } from "react";

interface Slide {
  title: string;
  text: string;
  imgSrc: string;
}

const slides: Slide[] = [
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
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval); // Clear interval on component unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <div className="mx-5 flex flex-col-reverse gap-10 lg:mx-[5%] lg:flex-row lg:gap-20 xl:mx-[10%] xl:gap-52">
      <div className="relative flex min-h-max w-full flex-col-reverse justify-between  lg:w-2/5 lg:flex-col ">
        <div />
        <div className="flex flex-col items-center justify-center gap-10 text-center ">
          <h2 className="lg:text-3xl xl:text-5xl">
            {slides[currentIndex].title}
          </h2>
          <p className="lg:text-xl xl:text-2xl">{slides[currentIndex].text}</p>
        </div>
        <div className="mb-10 flex h-7 flex-row items-center justify-center gap-5 lg:mb-0">
          {slides.map((slides, index) => (
            <button
              className={`h-3 w-3 rounded-full  ${index === currentIndex ? "bg-dappnodePurple" : "bg-gray-400"}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
      <div className="relative w-full overflow-hidden lg:w-3/5">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
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
          className="absolute bottom-0 right-12 transform  p-2 text-2xl text-black transition-transform duration-300 ease-in-out hover:scale-125"
        >
          {"<"}
        </button>
        <button
          onClick={nextSlide}
          className="absolute bottom-0 right-3  transform  p-2 text-2xl text-black transition-transform duration-300 ease-in-out hover:scale-125"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
