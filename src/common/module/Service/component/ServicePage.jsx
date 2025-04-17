import ComponentTransition from "@/common/component/element/ComponentTransition";
import Image from "@/common/component/element/Image";
import Rails from "@/common/component/element/Rails";
import React from "react";
import { FaCode, FaArrowRight } from "react-icons/fa6";
import { WiDayCloudy } from "react-icons/wi";
import Feedback from "../../Feedback";
import CardOffer from "@/common/component/element/CardOffer";
import { ServiceDetailsContent } from "@/common/constant/ServiceDetails";
import Link from 'next/link';

export default function ServicePage() {
  return (
    <ComponentTransition className="h-auto max-w-[1500px] px-10 xl:px-20 pb-20">
      <div className="flex justify-center py-5 ">
        <div className="flex justify-center mt-20 relative ">
          <h1 className="text-4xl md:text-7xl py-5 px-10 text-center dark:bg-gradient-to-r from-white from-50% to-[#979797] bg-text bg-clip-text text-transparent font-bold">
            Our Credit Repair Services
          </h1>
          <div className=" absolute w-[80%] h-[250px] z-[-99] top-[-70px]">
            <Rails />
            <div className="bg-gradient-to-b from-white dark:from-black from-20% to-transparent absolute inset-0 "></div>
            <div className="bg-gradient-to-l from-white dark:from-black from-1% to-transparent to-30% absolute inset-0"></div>
            <div className="bg-gradient-to-r from-white dark:from-black from-1% to-transparent to-30% absolute inset-0"></div>
            <div className="bg-gradient-to-t from-white dark:from-black from-1% to-transparent to-30% absolute inset-0"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <p className="text-base md:text-2xl text-neutral-500 md:w-[70%] text-center">
          Empowerment Consulting Services offers comprehensive solutions to help you understand, manage, and improve your credit score.
        </p>
      </div>
      <div className="py-10 mt-20 flex gap-10 justify-center flex-row flex-wrap relative">
        <div className="absolute z-[-9] glowbg w-[100%] md:w-[500px] h-[400px] left-0 "></div>
        <ComponentTransition className="w-full overflow-hidden px-10 py-5 md:basis-[30%] h-[300px] bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
          <WiDayCloudy size={50} />
          <h1 className="text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            Detailed Credit Analysis
          </h1>
          <h2 className="text-sm text-neutral-800 dark:text-neutral-300">
            Understanding Your Full Report
          </h2>
          <p className="text-base text-neutral-700 dark:text-neutral-400 mt-5 md:line-clamp-2 lg:line-clamp-4 line-clamp-4">
            We meticulously review your credit reports from all three major bureaus (Equifax, Experian, TransUnion) to identify any inaccuracies, negative items, or potential areas for score improvement.
          </p>
        </ComponentTransition>
        <ComponentTransition
          delay={0.2}
          className="w-full h-auto md:h-[300px] md:basis-[65%] overflow-hidden bg-neutral-100 border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <Image
            src="/img1.png"
            alt="Credit Analysis Illustration"
            width={400}
            height={400}
            loading="lazy"
            className="w-full object-cover scale-110 h-full"
          />
        </ComponentTransition>
        <ComponentTransition
          delay={0.1}
          className="w-full h-[250px] md:basis-[30%] overflow-hidden border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <Image
            src="/img.png"
            alt="Dispute Management Illustration"
            width={400}
            height={400}
            loading="lazy"
            className="w-full h-[280px] object-cover scale-110"
          />
        </ComponentTransition>
        <ComponentTransition
          delay={0.1}
          className="w-full h-[250px] px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-neutral-950 border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <FaCode size={40} />
          <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            Dispute Management
          </h1>
          <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
            Challenging Inaccuracies
          </h2>
          <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
            ECS handles the entire dispute process, challenging questionable negative items directly with credit bureaus and creditors on your behalf.
          </p>
        </ComponentTransition>
        <ComponentTransition
          delay={0.1}
          className="w-full h-[250px] px-10 py-5 md:basis-[30%] relative overflow-hidden border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <div className="absolute glowbg inset-0 left-0 "></div>
          <FaCode size={40} />
          <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            Personalized Credit Building
          </h1>
          <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
            Your Roadmap to Better Credit
          </h2>
          <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
            Based on your analysis, we develop a customized strategy outlining the specific steps needed to rebuild and maintain a healthy credit profile.
          </p>
        </ComponentTransition>
      </div>
      <div className="py-10 mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 justify-center relative">
        {ServiceDetailsContent.map((service, index) => (
          <ComponentTransition 
            key={index} 
            delay={index * 0.1} 
            className="w-full flex flex-col justify-between p-6 bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl hover:shadow-lg transition-shadow duration-300"
          >
            <div>
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-3">
                {service.title}
              </h2>
              <p className="text-base text-neutral-700 dark:text-neutral-400 mb-4 line-clamp-3">
                {service.pageDescription}
              </p>
            </div>
            <Link href={`/services/${service.slug}`} className="mt-auto inline-flex items-center text-gold-600 dark:text-gold-500 hover:text-gold-700 dark:hover:text-gold-400 font-medium group">
               Learn More 
               <FaArrowRight className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </ComponentTransition>
        ))}
      </div>
      <div className="w-full mt-20">
        <Feedback className='!px-0' />
      </div>
      <CardOffer title='Ready To Get Started!' className="!px-0" />
    </ComponentTransition>
  );
}
