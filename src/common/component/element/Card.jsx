import React from "react";
import ComponentTransition from "./ComponentTransition";
import Image from "./Image";

export default function Card({ Content }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-10">
      {Content.map((item, index) => (
        <ComponentTransition
          delay={index * 0.1}
          key={index}
          className="w-full group md:basis-[30%] overflow-hidden border-[1px] dark:border-neutral-700 border-neutral-300 rounded-3xl"
        >
          <div className="relative group overflow-hidden h-[300px]">
            <div className="absolute w-[100px] top-0 right-[-10%] h-[100px] z-[-9] group-hover:lg:w-[100%] group-hover:lg:h-[100%]  rounded-full group-hover:lg:rounded-none transition-all duration-500 bg-gradient-to-br from-gold-400 to-gold-600 opacity-75 filter blur-xl group-hover:lg:translate-y-[0%]"></div>
            <div className="absolute w-[100px] bottom-0 left-[-10%] h-[100px] z-[-9] group-hover:lg:w-[100%] group-hover:lg:h-[100%] rounded-full group-hover:lg:rounded-none transition-all duration-500 bg-gradient-to-tl from-gold-400 to-gold-600 opacity-75 filter blur-xl group-hover:lg:translate-y-[0%]"></div>
            <div className="px-5 py-5 flex flex-col items-center justify-center text-center h-full group-hover:text-white relative z-10">
              {item.icon}
              {item.img && (
                <Image src={item.img} alt={item.title} width={400} heigth={400} />
              )}
              <h1 className="text-2xl dark:text-white text-black  transition-all duration-300 font-semibold">
                {item.title}
              </h1>
              <p className="mt-2 dark:text-white text-black  transition-all duration-300">
                {item.desc}
              </p>
            </div>
          </div>
        </ComponentTransition>
      ))}
    </div>
  );
}
