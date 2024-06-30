"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import Image from "next/image";
import Link from "next/link";

const logos = [
  "/images/brand/brand.png",
  "/images/brand/brand.png",
  "/images/brand/brand.png",
  "/images/brand/brand.png",
  "/images/brand/brand.png",
  "/images/brand/brand.png",
];

export default function BrandOne({ classname }) {
  return (
    <section className={`section-brand ${classname}`}>
      <div className="container">
        <h5 className="heading5 text-center">
          Förtroende från kunder över hela världen
        </h5>
      </div>
    </section>
  );
}
