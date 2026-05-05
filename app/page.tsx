'use client'

import Image from "next/image";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import WhatsTheSolution from "@/components/WhatsTheSolution";
import Solution from "@/components/Solution";
import Working from "@/components/Working";
import Engine from "@/components/Engine";
import WhyShiptosQuestion from "@/components/WhyShiptosQuestion";
import WhyShiptosAnswer from "@/components/WhyShiptosAnswer";
import Stats from "@/components/Stats";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <WhatsTheSolution />
      <Solution />
      <Working />
      <Engine />
      <WhyShiptosQuestion />
      <WhyShiptosAnswer />
      <Stats />
      <Blog />
    </>
  );
}
