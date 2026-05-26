import Image from "next/image";
import Hero from "../components/home/Hero";
import WhyChoose from "../components/home/WhyChoose";
import HowWorks from "../components/home/HowWorks";
import FeedBack from "../components/home/FeedBack";
import FeatureRooms from "../components/home/FeatureRooms";

export default function Home() {
  return (
    <div className="">
    <Hero/>
    <FeatureRooms/>
    <WhyChoose/>
    <HowWorks/>
    <FeedBack/>
    </div>
  );
}
