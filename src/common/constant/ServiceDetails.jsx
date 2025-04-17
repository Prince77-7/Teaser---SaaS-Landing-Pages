import React from 'react';
import { WiBarometer } from "react-icons/wi"; // Example Icon 1
import { FaBalanceScale, FaChartLine, FaGavel, FaShieldAlt, FaSyncAlt, FaFileSignature, FaUserCheck, FaSeedling, FaTasks, FaLightbulb } from "react-icons/fa"; // Example Icons
import { MdOutlineAnalytics, MdPhonelinkSetup, MdQuestionAnswer, MdOutlineTrackChanges, MdOutlinePolicy, MdManageAccounts } from "react-icons/md";

// Define detailed content for each service
export const ServiceDetailsContent = [
  {
    slug: 'credit-analysis',
    title: 'Credit Analysis',
    pageTitle: 'In-Depth Credit Analysis | Empowerment Consulting Services',
    pageDescription: 'Understand your credit report inside and out with our comprehensive credit analysis service. We identify errors and opportunities for improvement.',
    mainDescription: 'Our detailed credit analysis service provides a comprehensive review of your credit reports from Equifax, Experian, and TransUnion. We meticulously examine every detail to identify inaccuracies, negative items, and strategic opportunities to improve your score.',
    details: [
      {
        icon: <MdOutlineAnalytics size={40} />, 
        title: 'Three-Bureau Report Review',
        desc: 'We obtain and analyze your reports from all three major credit bureaus for a complete picture.',
      },
      {
        icon: <FaFileSignature size={40} />,
        title: 'Error Identification',
        desc: 'Pinpointing inaccuracies, outdated information, and unverifiable items that could be harming your score.',
      },
      {
        icon: <FaChartLine size={40} />, 
        title: 'Score Factor Analysis',
        desc: 'Understanding the key factors impacting your specific credit score and identifying areas for improvement.',
      },
       {
        icon: <MdManageAccounts size={40} />, 
        title: 'Personalized Consultation',
        desc: 'Reviewing our findings with you and explaining the next steps in your credit repair journey.',
      },
    ],
  },
  {
    slug: 'dispute-management',
    title: 'Dispute Management',
    pageTitle: 'Expert Dispute Management | Empowerment Consulting Services',
    pageDescription: 'Let ECS handle the complex credit dispute process for you. We challenge inaccuracies with bureaus and creditors to clean up your report.',
    heroImage: '/images/dispute-management-hero.jpg', // Placeholder path - Add image to /public/images/
    subHeadline: 'Challenging inaccuracies effectively to clean up your credit report.',
    mainDescription: 'Navigating the dispute process with credit bureaus and creditors can be time-consuming and confusing. Our Dispute Management service takes this burden off your shoulders. We systematically challenge inaccurate, unfair, or unverified negative items on your behalf.',
    whySection: {
        title: 'Why Professional Dispute Management Matters',
        text: 'Incorrect information can significantly lower your credit score, costing you money and opportunities. Our expertise ensures disputes are filed correctly and efficiently, maximizing the chances of removing damaging errors and complying with all regulations like the FCRA.',
    },
    processSteps: [
        { title: 'Initial Review & Strategy', description: 'We analyze your report to identify disputable items and form a strategic plan.' },
        { title: 'Dispute Preparation', description: 'Crafting and gathering necessary documentation for compelling disputes.' },
        { title: 'Submission to Bureaus/Furnishers', description: 'Submitting disputes accurately to credit bureaus and relevant data furnishers.' },
        { title: 'Follow-Up & Escalation', description: 'Tracking responses, managing correspondence, and escalating if necessary.' },
    ],
    keyBenefits: [
        { icon: <FaGavel size={30}/>, title: 'Expert Handling', description: 'Leverage our knowledge of FCRA and dispute tactics.' },
        { icon: <FaSyncAlt size={30}/>, title: 'Time Savings', description: 'We handle the paperwork and follow-up, saving you hours.' },
        { icon: <FaShieldAlt size={30}/>, title: 'Maximized Results', description: 'Increase the likelihood of successful error removal.' },
    ],
    details: [
      {
        icon: <FaGavel size={40} />, 
        title: 'Bureau Disputes',
        desc: 'Filing formal disputes with Equifax, Experian, and TransUnion according to FCRA guidelines.',
      },
      {
        icon: <MdPhonelinkSetup size={40} />, 
        title: 'Creditor Interventions',
        desc: 'Communicating directly with original creditors when necessary to challenge information or request goodwill deletions.',
      },
      {
        icon: <MdOutlineTrackChanges size={40} />, 
        title: 'Follow-Up and Tracking',
        desc: 'Monitoring the status of disputes and following up as needed to ensure resolution.',
      },
       {
        icon: <FaFileSignature size={40} />, 
        title: 'Documentation Management',
        desc: 'Organizing and managing all correspondence related to your disputes.',
      },
    ],
    inlineCTA: { text: 'Start Your Dispute Process', link: 'https://calendly.com/jrmooreservices/credit-consultation' }
  },
  {
    slug: 'credit-building',
    title: 'Credit Building',
    pageTitle: 'Strategic Credit Building | Empowerment Consulting Services',
    pageDescription: 'Improve your creditworthiness with our personalized credit building strategies, focusing on positive habits and effective tools.',
    heroImage: '/images/credit-building-hero.jpg', // Placeholder path - Add image to /public/images/
    subHeadline: 'Proactively strengthen your credit profile for long-term financial health.',
    mainDescription: 'Repairing negative items is only part of the equation. Our Credit Building service focuses on establishing positive credit habits and leveraging the right tools to strengthen your credit profile for the long term, opening doors to better financial opportunities.',
     whySection: {
        title: 'Why Focus on Credit Building?',
        text: 'A good credit score is built, not just repaired. Proactive credit building demonstrates responsible financial behavior to lenders, leading to better loan terms, lower interest rates, and easier approvals in the future. It\&apos;s about creating a foundation for sustained financial wellness.',
    },
    processSteps: [
        { title: 'Goal Assessment', description: 'Understanding your financial goals and current credit standing.' },
        { title: 'Strategy Development', description: 'Creating a personalized plan incorporating positive habits and potential credit-building tools.' },
        { title: 'Implementation Guidance', description: 'Providing clear steps and advice on managing existing credit and potentially adding new, positive tradelines.' },
        { title: 'Progress Monitoring', description: 'Tracking your score improvements and adjusting the strategy as needed.' },
    ],
    keyBenefits: [
        { icon: <FaChartLine size={30}/>, title: 'Improved Score Potential', description: 'Actively build positive history that boosts your score.' },
        { icon: <FaUserCheck size={30}/>, title: 'Increased Creditworthiness', description: 'Become a more attractive borrower to lenders.' },
        { icon: <FaLightbulb size={30}/>, title: 'Financial Empowerment', description: 'Learn habits for long-term financial success.' },
    ],
    details: [
      {
        icon: <FaTasks size={40} />, 
        title: 'Personalized Action Plan',
        desc: 'Developing a tailored strategy based on your specific credit situation and goals.',
      },
      {
        icon: <WiBarometer size={40} />, 
        title: 'Credit Utilization Guidance',
        desc: 'Advising on how to manage credit card balances effectively to optimize your utilization ratio.',
      },
      {
        icon: <FaBalanceScale size={40} />, 
        title: 'Credit Mix Recommendations',
        desc: 'Suggesting appropriate types of credit (if needed) to build a healthier credit mix over time.',
      },
      {
        icon: <FaSeedling size={40} />, 
        title: 'Positive Payment Strategies',
        desc: 'Reinforcing the importance of on-time payments and providing tools or tips to stay consistent.',
      },
    ],
    inlineCTA: { text: 'Build Your Credit Score', link: 'https://calendly.com/jrmooreservices/credit-consultation' }
  },
]; 