import React from "react";
import Image from "next/image";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const BenefitAbout = () => {
  return (
    <section className="our-value-block bg-linear-gradient-yellow lg:py-20 sm:py-14 py-10">
      <div className="container">
        <div className="heading text-center">
          <h3 className="heading3 text-center">Vi Finns Här För Dig</h3>
          <div className="text-center mt-3">
            Vi är alltid redo att lyssna på dina behov och ge professionell
            rådgivning.
          </div>
        </div>
        <div className="list-values grid xl:grid-cols-4 sm:grid-cols-2 gap-[30px] lg:mt-10 mt-6">
          <div className="item bg-white p-8 rounded-[20px] h-full">
            <Icon.Users className="text-blue text-6xl" />
            <div className="heading5 fw-600 mt-6">
              Webbutveckling & E-handel
            </div>
            <div className="text-surface1 mt-3">
              Vi skapar moderna webbplatser och e-handelslösningar som ökar din
              försäljning och förbättrar kundupplevelsen. Vårt team använder de
              senaste teknologierna för att säkerställa snabb, säker och
              mobiloptimerad prestanda.
            </div>
          </div>
          <div className="item bg-white p-8 rounded-[20px] h-full">
            <Icon.Trophy className="text-blue text-6xl" />
            <div className="heading5 fw-600 mt-6">SEO & Backlinks</div>
            <div className="text-surface1 mt-3">
              Vi hjälper dig att synas högre i sökmotorresultaten och driva mer
              organisk trafik till din webbplats. Våra tjänster inkluderar
              byggande av högkvalitativa backlinks för att stärka din webbplats
              auktoritet.
            </div>
          </div>
          <div className="item bg-white p-8 rounded-[20px] h-full">
            <Icon.Crosshair className="text-blue text-6xl" />
            <div className="heading5 fw-600 mt-6">
              Design för Marknadsföring
            </div>
            <div className="text-surface1 mt-3">
              Vi skapar visuellt tilltalande och effektiva designlösningar för
              alla dina marknadsföringsbehov. Från grafisk design till digitala
              kampanjer, vi hjälper ditt varumärke att sticka ut och engagera
              din målgrupp.
            </div>
          </div>
          <div className="item bg-white p-8 rounded-[20px] h-full">
            <Icon.ShieldCheck className="text-blue text-6xl" />
            <div className="heading5 fw-600 mt-6">Uthyrning av Konsulter</div>
            <div className="text-surface1 mt-3">
              Behöver du extra hjälp? Vi hyr ut erfarna konsulter inom webb och
              SEO. Våra experter kan integreras i ditt team och bidra med
              utveckling, design och löpande SEO-optimering för att din
              webbplats ska prestera på topp.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitAbout;
