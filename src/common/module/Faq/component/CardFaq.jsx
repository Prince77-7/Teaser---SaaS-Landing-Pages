import Buttons from "@/common/component/element/Buttons";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import FaqAccordian from "@/common/component/element/FaqAccordian";
import Image from "@/common/component/element/Image";
import React from "react";
import { FaPiedPiper } from "react-icons/fa";

const CardFaq = () => {
  return (
    <div className="py-10 flex w-full justify-center flex-row relative flex-wrap">
      <div className="absolute  z-[-9] glowbg w-[100%] md:w-[600px] h-[400px] top-[50px]"></div>
      <FaqAccordian />

      <ComponentTransition className="border-[1px] border-neutral-600 rounded-3xl max-md:flex-col flex">
        <div className="w-full h-auto md:h-[400px] md:basis-[50%] overflow-hidden  max-md:rounded-t-3xl  lg:rounded-tl-3xl lg:rounded-bl-3xl ">
          <Image
            src="/robot.jpg"
            alt="Header Image"
            width={400}
            height={400}
            loading="lazy"
            className="w-full object-cover md:top-[-100px] relative"
          />
        </div>
        <div className="w-full px-5 lg:px-10 py-5 md:basis-[50%] h-[400px] bg-neutral-50 dark:bg-neutral-950/50   rounded-br-3xl rounded-tr-3xl">
          <FaPiedPiper size={50} />
          <h1 className="text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-300">
            Still Have Questions?
          </h1>
          <p className="text-base mb-10 text-neutral-700 mt-5 max-xl:line-clamp-5 dark:text-neutral-300">
            If you don&apos;t see your question answered here, please feel free to contact us or book a consultation to discuss your specific situation.
          </p>
          <a 
            href="https://calendly.com/jrmooreservices/credit-consultation" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white transition-colors duration-300 bg-blue-600 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-black"
          >
            Book Consultation
          </a>
        </div>
      </ComponentTransition>
    </div>
  );
};

export default CardFaq;
