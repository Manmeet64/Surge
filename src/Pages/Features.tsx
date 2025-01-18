import React, { useEffect } from "react";

const Features: React.FC = () => {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLDivElement>(".card");
    const stackArea = document.querySelector<HTMLDivElement>(".stack_area");

    const rotateCards = () => {
      let angle = 0;
      cards.forEach((card, index) => {
        if (card.classList.contains("away")) {
          card.style.transform = `translateY(-120vh) rotate(-48deg)`;
        } else {
          card.style.transform = `rotate(${angle}deg)`;
          angle -= 10;
          card.style.zIndex = (cards.length - index).toString();
        }
      });
    };

    const handleScroll = () => {
      if (!stackArea) return;

      const distance = window.innerHeight / 2; // Center of the viewport
      const topVal = stackArea.getBoundingClientRect().top; // Top of the stack area
      const threshold = -1; // Threshold to delay the first card's disappearance
      const index = Math.floor(
        -1 * ((topVal - distance) / distance) + threshold
      );

      cards.forEach((card, i) => {
        if (i < index) {
          card.classList.add("away"); // Move cards away
        } else {
          card.classList.remove("away"); // Bring cards back
        }
      });

      rotateCards(); // Reapply rotations after scroll
    };

    // Initial setup to apply rotations
    rotateCards();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="stack_area flex w-full h-[400vh]">
      {/* Left Section */}
      <div className="left bg-blue-500 h-screen sticky top-0 flex-[0_0_50%]"></div>

      {/* Right Section */}
      <div className="right bg-white h-screen sticky top-0 flex-[0_0_50%] relative">
        <div className="card flex justify-center items-center text-2xl card-4 bg-orange-500 w-[360px] h-[360px] rounded-[32px] absolute top-[calc(50%-180px)] left-[calc(50%-180px)] transition-transform ease-in-out duration-500">
          <h3>Sales Analysis & Training</h3>
        </div>
        <div className="card flex justify-center items-center text-2xl card-1 bg-slate-100 w-[360px] h-[360px] rounded-[32px] absolute top-[calc(50%-180px)] left-[calc(50%-180px)] transition-transform ease-in-out duration-500">
          <h3>Campaign Description</h3>
        </div>
        <div className="card flex justify-center items-center text-2xl card-2 bg-purple-500 w-[360px] h-[360px] rounded-[32px] absolute top-[calc(50%-180px)] left-[calc(50%-180px)] transition-transform ease-in-out duration-500">
          <h3>SEO Reports</h3>
        </div>
        <div className="card flex justify-center items-center text-2xl card-4 bg-green-500 w-[360px] h-[360px] rounded-[32px] absolute top-[calc(50%-180px)] left-[calc(50%-180px)] transition-transform ease-in-out duration-500">
          <h3>FAQs and courses</h3>
        </div>
      </div>
    </div>
  );
};

export default Features;
