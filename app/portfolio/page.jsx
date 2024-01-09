"use client";
import React, { useState } from "react";

import Image from "next/image";
import FilterBtn from "../components/FilterBtn";
import PortfolioCollect from "../components/PortfolioCollect";

export default function Portfolio() {
  const [activeBtn, setActiveBtn] = useState("all");

  return (
    <article className="my-[60px]">
      <h2 className="visually-hidden">Портфоліо</h2>
      <FilterBtn activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
      <PortfolioCollect activeBtn={activeBtn} />
    </article>
  );
}
