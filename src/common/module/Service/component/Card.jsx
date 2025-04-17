import Image from "@/common/component/element/Image";
import React from "react";
import { WiDayCloudy } from "react-icons/wi";
import { FaCode } from "react-icons/fa";
import ComponentTransition from "@/common/component/element/ComponentTransition";

const Card = () => {
  return (
    <div className="py-10 flex gap-10 justify-center flex-row flex-wrap relative">
      <div className="absolute  z-[-9] glowbg w-[100%] md:w-[500px] h-[400px]  left-0 "></div>
      <ComponentTransition className="w-full overflow-hidden px-10 py-5 md:basis-[30%] h-[300px] bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
        <WiDayCloudy size={50} />
        <h1 className="text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
          Credit Report Analysis
        </h1>
        <h2 className="text-sm text-neutral-800 dark:text-neutral-300">
          Understanding Your Credit Profile
        </h2>
        <p className="text-base text-neutral-700 dark:text-neutral-400 mt-5 md:line-clamp-2 lg:line-clamp-4 line-clamp-3">
          ECS provides a detailed review of your credit reports to pinpoint errors, negative items, and opportunities for score improvement.
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
          className="w-full object-cover scale-110"
        />
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full h-auto object-cover md:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <Image
          src="/img.png"
          alt="Dispute Management Illustration"
          width={400}
          height={400}
          loading="lazy"
          className="w-auto h-auto object-cover scale-110"
        />
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <FaCode size={40} />
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
          Negative Item Disputes
        </h1>
        <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
          Challenging Inaccuracies
        </h2>
        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
          We systematically dispute inaccurate, unfair, or unverified negative items with credit bureaus and creditors.
        </p>
      </ComponentTransition>

      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  px-10 py-5 md:basis-[30%] relative overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <div className="absolute  glowbg inset-0  left-0 "></div>
        <FaCode size={40} />
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
          Credit Score Building
        </h1>
        <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
          Strategies for Improvement
        </h2>
        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
          ECS provides guidance on positive credit habits and strategies to rebuild and strengthen your credit score over time.
        </p>
      </ComponentTransition>

      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-[#0a0a0a] border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <FaCode size={40} />
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
          Personalized Consultation
        </h1>
        <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
          Your Path to Financial Health
        </h2>
        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
          Work with our experts to develop a personalized plan tailored to your specific credit situation and goals.
        </p>
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-[#0a0a0a] border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <FaCode size={40} />
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
        Credit Monitoring Advice
        </h1>
        <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
        Stay Informed, Stay Protected
        </h2>
        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
        Learn the importance of credit monitoring and how to effectively track your progress and protect against identity theft.
        </p>
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-[#0a0a0a] border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <FaCode size={40} />
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
        Debt Management Guidance
        </h1>
        <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
        Strategies for Debt Reduction
        </h2>
        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
        Receive advice on managing existing debt and exploring potential options like consolidation or settlement where applicable.
        </p>
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-[#0a0a0a] border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <FaCode size={40} />
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
        Financial Education
        </h1>
        <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
        Empowering Your Future
        </h2>
        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
        Access resources and information to build long-term financial literacy and maintain good credit health.
        </p>
      </ComponentTransition>

      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  md:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <Image
          src="/img.png"
          alt="Financial Education Illustration"
          width={400}
          height={400}
          loading="lazy"
          className="w-full h-auto object-cover scale-110"
        />
      </ComponentTransition>

      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-[#0a0a0a] border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <FaCode size={40} />
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
        Dedicated Support
        </h1>
        <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
         Your Partner in Credit Repair
        </h2>
        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
        ECS provides ongoing support and communication throughout your credit repair journey.
        </p>
      </ComponentTransition>
    </div>
  );
};

export default Card;
