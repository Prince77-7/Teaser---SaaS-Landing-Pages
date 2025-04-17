import { CiShop } from "react-icons/ci";
import { FaConnectdevelop, FaPager, FaPiedPiper } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoIosSchool } from "react-icons/io";
import { IoDiamondOutline } from "react-icons/io5";
import { MdAnimation } from "react-icons/md";
import { MdOutlineAutoAwesomeMotion } from "react-icons/md";

const size = 35

export const Services = [
  {
    icon: (
      <FaConnectdevelop
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
        
      />
    ),
    title: "What exactly is credit repair?",
    desc: "Credit repair is the process of identifying and addressing errors, inaccuracies, or unverifiable information on your credit reports that may be negatively impacting your credit score. Empowerment Consulting Services helps navigate this process.",
  },
  {
    icon: (
      <MdAnimation
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "How long does credit repair take?",
    desc: "The timeframe varies depending on individual credit situations and the responsiveness of credit bureaus. While some see improvements in a few months, it often takes 6-12 months for significant changes. We focus on consistent effort for the best results.",
  },
  {
    icon: (
      <MdOutlineAutoAwesomeMotion
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "Is credit repair legal?",
    desc: "Yes, credit repair is legal. You have the right under the Fair Credit Reporting Act (FCRA) to dispute inaccurate information on your credit reports. ECS operates fully within the legal framework to help you exercise these rights.",
  },
  {
    icon: (
      <IoIosSchool
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "Can you guarantee a specific score increase?",
    desc: "No legitimate credit repair company can guarantee a specific score increase or the removal of accurate negative items. However, ECS guarantees to perform all services outlined in our agreement professionally and ethically to work towards improving your credit profile.",
  },
  {
    icon: (
      <ImProfile
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "What information do I need to provide?",
    desc: "To start, we typically need your personal identification details, access to your credit reports (we can help obtain these), and information regarding any specific items you believe are inaccurate.",
  },
];

export const ServiceItem = [
  {
    title: 'Detailed Credit Analysis',
    desc: 'We perform an in-depth analysis of your credit reports from all three major bureaus to identify inaccuracies and areas for improvement.',
    icon : <FaPager className="h-12 w-12 mb-4 dark:text-white text-black " />
  },
  {
    title: 'Dispute Management',
    desc: 'ECS handles the dispute process for you, challenging questionable negative items directly with credit bureaus and creditors.',
    icon : <ImProfile className="h-12 w-12 mb-4 dark:text-white text-black " />
  },
  {
    title: 'Personalized Action Plan',
    desc: 'Receive a customized strategy outlining the steps needed to rebuild and maintain a healthy credit profile.',
    icon : <IoDiamondOutline className="h-12 w-12 mb-4 dark:text-white text-black " />
  },
  {
    title: 'Creditor Communication',
    desc: 'We can communicate with your creditors on your behalf for negotiations or goodwill requests when appropriate.',
    icon : <CiShop className="h-12 w-12 mb-4 dark:text-white text-black " />
  },
  {
    title: 'Credit Education Resources',
    desc: 'Gain access to valuable resources to understand credit scoring, budgeting, and long-term financial wellness.',
    icon : <IoIosSchool className="h-12 w-12 mb-4 dark:text-white text-black " />
  },
  {
    title: 'Ongoing Progress Tracking',
    desc: 'Monitor your credit repair progress through regular updates and access to your updated reports and scores.',
    icon : <FaPiedPiper className="h-12 w-12 mb-4 dark:text-white text-black " />
  },

];

