import Image from "@/common/component/element/Image";
import React from "react";
import ContactForm from "./ContactForm";
import ComponentTransition from "@/common/component/element/ComponentTransition";

const CardContact = () => {
  return (
    <>
      <div className="py-10 mt-10 w-full h-auto flex gap-10 justify-center flex-row flex-wrap relative">
        <ComponentTransition delay={0.1} className="w-full md:px-10 py-5 md:basis-[40%] ">
          <h1 className="text-xl py-2 font-bold uppercase">
            We&rsquo;re Ready!
          </h1>
          <h1 className="text-4xl py2 font-bold ">Get In Touch</h1>

          <h1 className="mt-10 text-lg">Our Location:</h1>
          <h2 className="text-neutral-500">3540 Summer Ave #305</h2>
          <h2 className="text-neutral-500">Memphis, TN 38122</h2>
          {/* <h2 className="text-neutral-500">Email: mfahlevi740@gmail.com</h2> */}
        </ComponentTransition>
        <div className="w-full h-auto md:h-[300px] md:basis-[55%] ">
          <ContactForm />
        </div>

        <ComponentTransition delay={0.2} className="w-full h-auto overflow-hidden rounded-3xl  md:basis-[47%] ">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254.86506939203596!2d-89.94314612570203!3d35.149814482118046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887f816abc43318d%3A0x1ff2f39de30746d4!2s3540%20Summer%20Ave%20Suite%20305%2C%20Memphis%2C%20TN%2038122!5e16!3m2!1sen!2sus!4v1744918660113!5m2!1sen!2sus"
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="border-none h-[350px] px-0 rounded-3xl"
          ></iframe>
        </ComponentTransition>
        <ComponentTransition delay={0.3} className="w-full h-[350px] overflow-hidden rounded-3xl  md:basis-[47%]">
          <Image 
          src="https://images.unsplash.com/photo-1653745289778-bacf6d8a96e5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
          width={400}
          height={400}
          priority
          className="w-full h-full object-cover scale-110"
          />
        </ComponentTransition>
      </div>
    </>
  );
};

export default CardContact;
