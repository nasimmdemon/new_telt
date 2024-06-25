import React from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import Styles from "./SliderOne.module.css";

export default function SliderOne({ data, className }) {
  return (
    <section
      className={`slider-block ${Styles.sliderOneBg} ${classNames(className)}`}
    >
      <div className="container">
        <div className="flex max-xl:flex-col-reverse gap-8">
          <div className="xl:w-1/3 w-full xl:pr-[15px]">
            <div className="text">
              <h2 className="heading2 xl:pr-[55px]">
                IT services for small to mid-Sized companies
              </h2>
              <div className="body2 mt-4">
                We provide custom software solutions for any industry. Creating
                high - value software and technology for your business.
              </div>
            </div>
            <div className="block-button xl:mt-10 mt-6 flex gap-4 flex-wrap">
              <Link className="button-main" href="/company/about-us">
                Get a Free Assessment
              </Link>
              <Link className="button-main bg-grey" href="/pages/contact-us">
                Contact
              </Link>
            </div>
          </div>
          <div className="xl:w-2/3 w-full xl:pl-[15px]"></div>
        </div>
      </div>
    </section>
  );
}
