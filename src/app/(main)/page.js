import Image from "next/image";
import Hero from "../components/home/Hero";
import WhyChoose from "../components/home/WhyChoose";
import HowWorks from "../components/home/HowWorks";

export default function Home() {
  return (
    <div className="">
    <Hero/>
    <WhyChoose/>
    <HowWorks/>
    </div>
  );
}
