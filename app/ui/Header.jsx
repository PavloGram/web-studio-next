import Link from "next/link";
import React from "react";
import { raleway } from "./fonts";
import Burger from "../../public/svg/burger.svg";

export default function Header() {
  return (
    <header className="px-[15px] py-[10px] flex items-center justify-between w-[480px] mx-auto ">
      <Link
        href="/"
        className={`${raleway.className} antialiased capitalize text-2xl`}
      >
        <span className="text-logoDesignColor">Web</span>studio
      </Link>
      <button>
        <Burger width={40} height={40} /> 
      </button>
      {/* <nav>
            <Link href='/'>Web Studio</Link>
            <Link href='/'>Portfolio</Link>
            <Link href='/'>Contacts</Link>
        </nav> */}
    </header>
  );
}
