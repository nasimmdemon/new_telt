import React from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const ContactOne = ({ classname }) => {
  return (
    <section className={`section-contact py-[60px] ${classname}`}>
      <div className="container">
        <div className="lg:flex items-center justify-between">
          <div className="content-main w-full xl:w-7/12 lg:w-1/2 text-white">
            <span className="text-label tag text-white bg-blue">Kontakt</span>
            <h3 className="heading3 mt-3">
              Bli kontaktad - fyll i formuläret nedan så kontaktar en av våra
              experter dig snart
            </h3>
            <p className="desc mt-6">
              Maxa ditt företags fulla potential med vår kostnadsfria
              konsultation. Vårt team av experter kommer att utvärdera dina
              IT-behov, rekommendera skräddarsydda lösningar och återkomma med
              uppskattat prisförslag
            </p>
            <div className="list-features mt-4 pb-6 border-b border-line">
              <div className="item flex items-center">
                <Icon.Check className="text-xl" />
                <span className="body2 pl-3">Personlig Service:</span>
              </div>
              <div className="item flex items-center mt-2">
                <Icon.Check className="text-xl" />
                <span className="body2 pl-3">SEO / utvecklare experter</span>
              </div>
              <div className="item flex items-center mt-2">
                <Icon.Check className="text-xl" />
                <span className="body2 pl-3">Kostnadseffektivitet</span>
              </div>
              <div className="item flex items-center mt-2">
                <Icon.Check className="text-xl" />
                <span className="body2 pl-3">Support 24/7</span>
              </div>
              <div className="item flex items-center mt-2">
                <Icon.Check className="text-xl" />
                <span className="body2 pl-3">Engagemang från vårt team</span>
              </div>
              <div className="item flex items-center mt-2">
                <Icon.Check className="text-xl" />
                <span className="body2 pl-3">
                  Planering för projektgenomförande och uppföljning.
                </span>
              </div>
              <div className="item flex items-center mt-2">
                <Icon.Check className="text-xl" />
                <span className="body2 pl-3">Genomgång av prissättning.</span>
              </div>
            </div>
            <div className="flex items-center mt-6">
              <Icon.Envelope className="text-xl" />
              <span className="body2 pl-3">info@telt.se</span>
            </div>
            <div className="flex items-center mt-2">
              <Icon.PhoneCall className="text-xl" />
              <span className="body2 pl-3">010 585 30 01</span>
            </div>
            <div className="flex items-center mt-2">
              <Icon.MapPin className="text-xl" />
              <span className="body2 pl-3">BOX 2361, 116 74 Stockholm</span>
            </div>
          </div>
          <div className="w-full xl:w-1/3 lg:w-[40%] max-lg:mt-10">
            <div className="form-block rounded-2xl bg-white py-6 px-7 flex flex-col gap-5">
              <div className="heading5">Boka En Kostnadsfri Konsultation</div>
              <form className="grid max-lg:grid-cols-2 gap-5 gap-y-2">
                <div className="name w-full max-sm:col-span-2">
                  <label
                    className="inline-block caption1 text-surface1 pb-2"
                    htmlFor="name"
                  >
                    Namn
                  </label>
                  <input
                    className="w-full bg-white px-4 py-3 rounded border border-outline"
                    type="text"
                    id="name"
                    placeholder=""
                    required
                  />
                </div>
                <div className="phone w-full max-sm:col-span-2">
                  <label
                    className="inline-block caption1 text-surface1 pb-2"
                    htmlFor="phone"
                  >
                    Telefon
                  </label>
                  <input
                    className="w-full bg-white px-4 py-3 rounded border border-outline"
                    type="text"
                    id="phone"
                    placeholder=""
                    required
                  />
                </div>
                <div className="email w-full max-sm:col-span-2">
                  <label
                    className="inline-block caption1 text-surface1 pb-2"
                    htmlFor="companyEmail"
                  >
                    E-Post
                  </label>
                  <input
                    className="w-full bg-white px-4 py-3 rounded border border-outline"
                    type="email"
                    id="companyEmail"
                    placeholder=""
                    required
                  />
                </div>
                <div className="organization w-full max-sm:col-span-2">
                  <label
                    className="inline-block caption1 text-surface1 pb-2"
                    htmlFor="company"
                  >
                    Företag/Organisation
                  </label>
                  <input
                    className="w-full bg-white px-4 py-3 rounded border border-outline"
                    type="text"
                    id="company"
                    placeholder=""
                    required
                  />
                </div>
                <div className="select w-full max-lg:col-span-2">
                  <label
                    className="inline-block caption1 text-surface1 pb-2"
                    htmlFor="cate"
                  >
                    Hur kan vi hjälpa dig?
                  </label>
                  <div className="select-block relative">
                    <select
                      className="w-full bg-white pl-4 pr-6 py-3 rounded border border-outline"
                      name="form"
                      id="cate"
                    >
                      <option value="Webbutveckling">Webbutveckling</option>
                      <option value="SEO">SEO</option>
                      <option value="Konverteringsökning">
                        Konverteringsökning
                      </option>
                      <option value="Sociala Medier">Sociala Medier</option>
                      <option value="Befintlig Webbplats">
                        Befintlig Webbplats
                      </option>
                    </select>
                    <Icon.CaretDown className="absolute top-1/2 right-4 -translate-y-1/2 text-xl" />
                  </div>
                </div>
                <div className="message w-full max-lg:col-span-2">
                  <label
                    className="inline-block caption1 text-surface1 pb-2"
                    htmlFor="message"
                  >
                    Meddelande
                  </label>
                  <textarea
                    className="w-full bg-white px-4 py-3 rounded border border-outline display-block"
                    name="message"
                    rows="3"
                    id="message"
                    placeholder=""
                    required
                  ></textarea>
                </div>
                <div className="block-button max-lg:col-span-2 mt-3">
                  <button className="button-main w-full">Bekräfta</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactOne;
