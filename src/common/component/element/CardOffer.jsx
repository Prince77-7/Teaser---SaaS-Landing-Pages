import { ButtonSpot } from "@/common/component/element/ButtonSpot";
import Image from "@/common/component/element/Image";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

export default function CardOffer({title, className = ''}) {
  return (
    <div className={clsx(className,`px-2 py-20 relative`)}>
      <div className="w-full px-5 relative overflow-hidden flex-col rounded-3xl flex justify-center items-center bg-neutral-300/50 dark:bg-neutral-800/50 py-40">
        <Image
          src="/cta-background.jpg"
          alt="Consultation Background"
          width={400}
          height={400}
          priority
          className="w-full h-full object-cover z-[-9] absolute inset-0"
        />
        <h1 className="text-3xl md:text-7xl py-5 text-center bg-clip-text bg-gradient-to-r dark:from-white from-black from-50% dark:to-[#b1b1b1] to-[#292929]   md:w-[80%] text-transparent font-bold">
          {title}
        </h1>
        <div className="w-full flex flex-col items-center md:flex-row justify-center gap-3">
          <a 
            href="https://calendly.com/jrmooreservices/credit-consultation" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white transition-colors duration-300 bg-blue-600 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-black"
          >
            Book Your Consultation
          </a>
          <Link href="/services">
            <ButtonSpot title="Learn More" />
          </Link>
        </div>
      </div>
      <div className="absolute  z-[-9] glowbg w-[100%] md:w-[600px] h-[400px] top-[50px]"></div>
    </div>
  );
}
