import Image from "next/image";
import Benefits from "./ui/Benefits";
import Team from "./ui/Team";

export default function Home() {
  return (
    <main>
      <div className="w-[480px] h-[400px] mx-auto bg-mob-hero-bg bg-hero-bg px-[60px] py-[118px] flex flex-col items-center justify-between mb-[60px]">
        <p className="uppercase text-whiteTextColor text-center text-[26px] font-black leading-10 tracking-[1.56px]">
          Ефективні рішення для вашого бізнесу
        </p>
        <button className="py-[10px] px-[24px] bg-mainButtonColor rounded hover:bg-hoverButtonColor hover:shadow-[0_4px_4px_0_rgba(0,0,0,0.15)] transition duration-[250ms]">
          <p className="text-whiteTextColor text-center text-base font-bold leading-[30px] tracking-[0.96px]">
            Замовити послугу
          </p>
        </button>
      </div>
      <Benefits/>
      <Team/>
      <p>Hello</p>
    </main>
  );
}
