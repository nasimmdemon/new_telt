import LayoutOne from "../components/Layout/LayoutOne";
import SliderOne from "@/components/Sections/Slider/SliderOne";
import AboutOne from "@/components/Sections/About/AboutOne";
import serviceData from "@/data/service/data.json";
import ServiceOne from "@/components/Sections/Service/ServiceOne";
import BrandOne from "@/components/Sections/Brand/BrandOne";
import TestimonialOne from "@/components/Sections/Testimonial/TestimonialOne";
import testimonialData from "@/data/testimonial/data.json";
import ContactOne from "@/components/Sections/Contact/ContactOne";

export default function Home() {
  return (
    <>
      <LayoutOne className="-style-1">
        <SliderOne className="-style-1 lg:py-[60px] py-10" />
        <AboutOne bg="bg-linear-blue" />
        <ServiceOne data={serviceData} start={6} limit={16} />
        <AboutOne bg="bg-gradient-to-r from-indigo-800 to-[#6f32a8] shadow" />
        <BrandOne classname={"bg-white lg:py-20 md:py-14 py-10"} />

        <TestimonialOne data={testimonialData} />
        <AboutOne bg="bg-gradient-to-r from-pink to-yellow mb-12 shadow" />
        <ContactOne classname={"bg-linear-blue"} />
      </LayoutOne>
    </>
  );
}
