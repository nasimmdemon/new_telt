import React from "react";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { convertToSlug } from "@/common/utils";

const ServiceOne = ({ data, start, limit }) => {
  return (
    <section className="service-block lg:py-5 sm:py-4 py-2 mb-3">
      <div className="container">
        <div className="flex items-center justify-between w-full max-lg:flex-wrap gap-y-4">
          <div className="xl:w-2/3 lg:w-3/4 w-full">
            <div className="tag text-label">Våra expertiser</div>
            <h3 className="heading3 mt-3">
              Vi förvandlar komplexa utmaningar till enkla lösningar för våra
              kunder.
            </h3>
          </div>
          <Link
            className="text-button border-b border-blue inline-block duration-300 hover:text-blue whitespace-nowrap"
            href={"/services/[slug]"}
            as={"/services/" + convertToSlug("seo")}
          >
            Se alla tjänster
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:gap-7 gap-5 md:gap-y-4 gap-y-5 mt-10">
          {data.slice(start, limit).map((item, index) => (
            <div
              key={index}
              className="service-item -list bg-surface py-4 px-5 flex items-center rounded-lg h-full"
            >
              <div className="service-name heading6 pl-3">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServiceOne;
