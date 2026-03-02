"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

function AnimatedCounter({ end, suffix = "", prefix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = performance.now();
          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Header() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          fill
          src="https://images.pexels.com/photos/3041850/pexels-photo-3041850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="African farmers in field"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 lg:px-20 xl:px-28 pt-24 pb-8 lg:pt-40 lg:pb-12">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
            Africa&apos;s Carbon Wealth.{" "}
            <span className="text-buttercup">Finally Unlocked.</span>
          </h1>
          <p className="mt-6 lg:mt-8 text-lg lg:text-xl text-white/80 font-light max-w-2xl leading-relaxed">
            ZeroCarbon connects smallholder farmers to global carbon markets
            through real-time verification, fair pricing, and transparent
            earnings — turning sustainable farming into a revenue stream.
          </p>
          <div className="mt-8 lg:mt-10 flex flex-wrap gap-4">
            <Link
              href="/#how-it-works"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-gray-900 shadow-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Explore the Platform
            </Link>
            <Link
              href="/investors"
              className="rounded-full bg-buttercup px-7 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-buttercup/90 transition-colors duration-200"
            >
              Invest in ZeroCarbon
            </Link>
          </div>
        </div>
      </div>

      {/* Impact strip */}
      <div className="relative z-10 border-t border-white/10">
        <div className="px-5 lg:px-20 xl:px-28 py-8 lg:py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl lg:text-4xl font-bold text-buttercup">
                <AnimatedCounter prefix="$" end={50} suffix="B+" />
              </span>
              <span className="text-sm text-white/60 font-light">
                Global Carbon Market
              </span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-3xl lg:text-4xl font-bold text-buttercup">
                <AnimatedCounter end={33} suffix="M+" />
              </span>
              <span className="text-sm text-white/60 font-light">
                African Smallholder Farmers
              </span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-3xl lg:text-4xl font-bold text-buttercup">
                {"<"}<AnimatedCounter end={2} suffix="%" />
              </span>
              <span className="text-sm text-white/60 font-light">
                Credits from Africa Today
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
