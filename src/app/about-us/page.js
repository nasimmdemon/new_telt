import LayoutOne from "@/components/Layout/LayoutOne";
import BenefitSeven from "@/components/Sections/Benefit/BenefitSeven";
import BrandOne from "@/components/Sections/Brand/BrandOne";
import ContactOne from "@/components/Sections/Contact/ContactOne";
import HeadingSubpage from "@/components/HeadingSubpage/HeadingSubpage";
import OutstandingCaseStudies from "@/components/HeadingSubpage/OutstandingCaseStudies";
import CounterAbout from "@/components/Sections/Counter/CounterAbout";
import BenefitAbout from "@/components/Sections/Benefit/BenefitAbout";
import HistoryAbout from "@/components/Sections/About/HistoryAbout";
import TeamAbout from "@/components/Sections/Team/TeamAbout";
import caseData from "@/data/case-study/data.json";

export default function AboutUs() {
  const data = caseData[3];

  return (
    <>
      <LayoutOne className="-style-1">
        <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]"></div>
        <HeadingSubpage
          classname={"lg:pt-20 sm:pt-14 pt-10 lg:pb-[60px] sm:pb-12 pb-8"}
          title={"Om Oss"}
          desc={
            "Lär känna vår resa, vårt mål och vår starka passion för kreativitet och innovation."
          }
        />
        <OutstandingCaseStudies data={data} showDesc />
        <BrandOne
          classname={
            "lg:pt-20 md:pt-14 pt-10 lg:pb-[60px] md:pb-12 py-8 style-subpage"
          }
        />
        <CounterAbout />
        <BenefitSeven background="bg-linear" />
        <HistoryAbout />
        <BenefitAbout />

        <ContactOne classname={"bg-linear-blue"} />
      </LayoutOne>
    </>
  );
}
