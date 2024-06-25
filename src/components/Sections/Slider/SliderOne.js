import React from "react";
import classNames from "classnames";
import Link from "next/link";
import Styles from "./SliderOne.module.css";

export default function SliderOne({ data, className }) {
  return (
    <section
      className={`slider-block ${Styles.sliderOneBg} ${classNames(className)}`}
    >
      <div className="container">
        <div className="flex max-xl:flex-col-reverse gap-8">
          <div className="xl:w-2/3 w-full xl:pr-[15px]">
            <div className="text">
              <h2 className="heading2 xl:pr-[55px]">
                Vi tar hand om dina IT-behov så att du kan fokusera på det som
                verkligen räknas.
              </h2>
              <div className="body2 mt-4">
                Vi bygger allt efter dina behov och hjälper dig med
                marknadsföringen. Få skräddarsydda mjukvarulösningar och
                expertstöd.
              </div>
            </div>
            <div className="block-button xl:mt-10 mt-6 flex gap-4 flex-wrap">
              <Link className="button-main" href="/company/about-us">
                Få offert
              </Link>
              <Link
                className={`${Styles.contactButton} button-main bg-grey`}
                href="/pages/contact-us"
              >
                Kontakta oss
              </Link>
            </div>
          </div>
          <div className="xl:w-2/3 w-full xl:pl-[15px]"></div>
        </div>
      </div>
    </section>
  );
}
