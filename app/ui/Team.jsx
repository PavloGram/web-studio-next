import React from "react";
import { team } from "../lib/placeholder-data";
import Image from "next/image";

export default function Team() {
  return (
    <div className="bg-main-bg-color py-[60px]">
      <h2 className="text-center text-[28px] font-bold tracking-[0.84px]  mb-[30px]">Наша команда</h2>
     <ul className="w-[480px] mx-auto  flex flex-wrap justify-center gap-[30px]">
      {team.map((el) => {
        return (
          <li
            key={el.id}
            className="pb-6 bg-whiteTextColor rounded-b"
            style={{
              boxShadow:
                "0px 2px 1px 0px rgba(0, 0, 0, 0.20), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
            }}
          >
            <Image
              src={el.mobPhoto}
              alt="team member"
              width={450}
              height={460}
              className="mb-[30px]"
            />
            <h2 className="text-center font-sm font-medium tracking-[0.48px] mb-[10px]">
              {el.name}
            </h2>
            <p className="text-sm text-center text-primaryTextColor tracking-[0.48px] mb-4">
              {el.position}
            </p>
            <ul className="flex gap-[10px] justify-center">
              {el.socialNetworks.map((e) => {
                return (
                  <li key={e.name}>
                    <a
                      href={e.link}
                      className=" w-[44px] h-[44px] rounded-full flex items-center justify-center"
                    >
                      <Image src={e.icon} alt={e.name} width={20} height={20} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul> 
    </div>
    
  );
}
