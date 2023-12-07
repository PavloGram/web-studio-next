'use client'
import React from "react";
import { benefits } from "../lib/placeholder-data";
import Image from "next/image";

export default function Benefits() {
  return (
    <ul className="w-[450px] mx-auto mb-[60px]">
      {benefits.map((el) => {
        return <li key={el.title} >
          <div className=" w-[450px] h-[120px] bg-main-bg-color flex items-center justify-center rounded mb-[30px] ">
            <Image src={el.icon} alt="benefits icon" width={70} height={70} />
          </div>
          <h2 className="text-sm text-center font-bold tracking-[0.42px] uppercase mb-[10px]">{el.title}</h2>
          <p className="text-primaryTextColor text-sm font-normal leading-6 tracking-[0.42px] mb-[30px]">{el.description}</p>
        </li>;
      })}
    </ul>
  );
}
