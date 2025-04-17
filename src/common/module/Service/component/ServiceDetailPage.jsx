import ComponentTransition from "@/common/component/element/ComponentTransition";
import Image from "@/common/component/element/Image";
import Rails from "@/common/component/element/Rails";
import React from "react";
import Feedback from "../../Feedback";
import CardOffer from "@/common/component/element/CardOffer";
import { ButtonSpot } from "@/common/component/element/ButtonSpot";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import AnimatedCreditScoreGauge from "@/common/component/element/AnimatedCreditScoreGauge";

// Enhanced component to display individual service details
export default function ServiceDetailPage({ serviceData }) {
  if (!serviceData) {
    return <div>Service not found.</div>;
  }

  return (
    <div className="w-full max-w-[1500px]">
      {/* Hero Section */}
      <ComponentTransition className="px-4 md:px-10 xl:px-20 pt-24 md:pt-32 pb-16 relative bg-neutral-50 dark:bg-neutral-900/50 overflow-hidden">
          <div className="flex justify-center items-center flex-col text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-3 leading-tight font-bold dark:text-white text-neutral-900">
                {serviceData.title}
            </h1>
            {serviceData.subHeadline && (
                <p className="mt-2 text-lg md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-300 max-w-3xl">
                    {serviceData.subHeadline}
                </p>
            )}
          </div>
          {/* Optional Hero Image - Placeholder logic */}
          {serviceData.heroImage && (
            <div className="mt-12 w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-xl">
              <Image 
                src={serviceData.heroImage} 
                alt={`${serviceData.title} Hero Image`} 
                width={1200} 
                height={600} 
                className="w-full h-auto object-cover"
              />
            </div>
          )}
      </ComponentTransition>

      {/* Main Content Area */}
      <div className="px-4 md:px-10 xl:px-20 py-16 md:py-24 space-y-16 md:space-y-24">
        
        {/* Why Section (if exists) */}
        {serviceData.whySection && (
            <ComponentTransition className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white text-neutral-800">{serviceData.whySection.title}</h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-300">{serviceData.whySection.text}</p>
            </ComponentTransition>
        )}

        {/* ADDED: Animated Gauge Section (Only for Credit Building) */}
        {serviceData.slug === 'credit-building' && (
          <ComponentTransition className="max-w-lg mx-auto flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white text-neutral-800">Visualize Your Progress</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
              Watch how consistent positive habits can help your score climb towards your goals.
            </p>
            <AnimatedCreditScoreGauge targetScore={780} /> {/* Example Target Score */}
          </ComponentTransition>
        )}

        {/* Process Steps Section (if exists) */}
        {serviceData.processSteps && serviceData.processSteps.length > 0 && (
             <ComponentTransition className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center dark:text-white text-neutral-800">Our Process</h2>
                <ol className="relative border-l border-neutral-300 dark:border-neutral-700 space-y-8 ml-4">
                    {serviceData.processSteps.map((step, index) => (
                        <li key={index} className="ml-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-gold-200 rounded-full -left-4 ring-4 ring-white dark:ring-neutral-900 dark:bg-gold-900">
                                <FaChevronRight className="w-4 h-4 text-gold-700 dark:text-gold-300" />
                            </span>
                            <h3 className="font-semibold text-xl dark:text-white text-neutral-900">{step.title}</h3>
                            <p className="mt-1 text-base text-neutral-600 dark:text-neutral-400">{step.description}</p>
                        </li>
                    ))}
                </ol>
            </ComponentTransition>
        )}

        {/* What We Do / Details Section */}
        {serviceData.details && serviceData.details.length > 0 && (
            <ComponentTransition className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center dark:text-white text-neutral-800">What We Focus On</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {serviceData.details.map((detail, index) => (
                    <div key={index} className="flex items-start space-x-4 p-6 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg border border-neutral-200 dark:border-neutral-700">
                        <div className="flex-shrink-0 text-gold-600 dark:text-gold-500 mt-1">{detail.icon}</div>
                        <div>
                        <h3 className="text-lg font-semibold dark:text-white text-neutral-900">{detail.title}</h3>
                        <p className="mt-1 text-neutral-600 dark:text-neutral-300">{detail.desc}</p>
                        </div>
                    </div>
                    ))}
                </div>
             </ComponentTransition>
        )}

        {/* Key Benefits Section (if exists) */}
        {serviceData.keyBenefits && serviceData.keyBenefits.length > 0 && (
             <ComponentTransition className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center dark:text-white text-neutral-800">Key Benefits</h2>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    {serviceData.keyBenefits.map((benefit, index) => (
                        <div key={index} className="p-6 bg-neutral-100 dark:bg-neutral-900/50 rounded-lg border border-neutral-200 dark:border-neutral-700">
                            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gold-100 dark:bg-gold-900 text-gold-700 dark:text-gold-300">
                                {benefit.icon}
                             </div>
                            <h3 className="text-lg font-semibold mb-2 dark:text-white text-neutral-900">{benefit.title}</h3>
                            <p className="text-neutral-600 dark:text-neutral-400 text-sm">{benefit.description}</p>
                        </div>
                    ))}
                 </div>
            </ComponentTransition>
        )}

        {/* Inline CTA (if exists) */}
         {serviceData.inlineCTA && (
            <ComponentTransition className="text-center">
                <Link href={serviceData.inlineCTA.link} target="_blank" rel="noopener noreferrer">
                     <ButtonSpot 
                        className="!bg-gold-600 hover:!bg-gold-700 !text-white !px-8 !py-3 !max-w-none !w-auto"
                        title={serviceData.inlineCTA.text} 
                    />
                </Link>
            </ComponentTransition>
         )}

      </div>

      {/* Existing Feedback and Final CTA */}
      <div className="px-4 md:px-10 xl:px-20 pb-16 md:pb-24">
        <Feedback />
        <CardOffer title='Ready To Get Started?' />
      </div>
    </div>
  );
} 