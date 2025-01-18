import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

function Footer() {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Set up Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  // GSAP animation
  useEffect(() => {
    if (isVisible) {
      gsap.to(".heading", {
        duration: 1,
        y: "460px",
        delay: 1,
        ease: "power2.inOut",
        opacity: 1,
      });

      gsap.to(".div-1", {
        duration: 1,
        y: "600px",
        delay: 1.5,
        opacity: 1,
        ease: "power2.inOut",
      });
    }
  }, [isVisible]);

  return (
    <section
      ref={footerRef}
      className="h-[100vh] w-[100%] bg-white flex justify-center items-start relative"
    >
      <h1
        className="heading opacity-0 text-4xl font-semibold font-poppins absolute top-[-100px]"
        style={{ transform: "translateY(-100%)" }}
      >
        Your messages, our priorities
      </h1>

      <div className="div-1 w-[240px] h-[240px] absolute left-[75%] top-[-100px] opacity-0 bg-slate-100 p-20">
        <p>We empower businesses (yes again)</p>
      </div>
    </section>
  );
}

export default Footer;
