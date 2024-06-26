import Image from "next/image";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import serviceData from "../../data/service/data.json";
import { convertToSlug } from "../../common/utils";

export default function FooterOne({ classname }) {
  return (
    <footer id="footer">
      <div className={`footer-block ${classname}`}>
        <div className="container py-[60px]">
          <div className="flex justify-between gap-y-8 max-xl:flex-wrap">
            <div className="xl:w-1/4 md:w-1/2">
              <div className="footer-company-infor flex flex-col gap-5">
                <Link href="/" className="logo ml-[-34px]">
                  {classname ? (
                    <Image
                      src={"/images/logo-black.png"}
                      width={5000}
                      height={5000}
                      alt="logo"
                      className="w-[148px]"
                    />
                  ) : (
                    <Image
                      src={"/images/logo_black.png"}
                      width={5000}
                      height={5000}
                      alt="logo"
                      className="w-[148px]"
                    />
                  )}
                </Link>
                <div className="caption1">
                  På TELT har vi drivit automatisering och digitalisering över
                  flera branscher genom tjänster som webbproduktion,
                  onlinestrategier, marknadsföring och grafisk design. Kontakta
                  oss för att ta det första steget mot en lönsam lösning för
                  ditt företag.{" "}
                </div>
                <div className="caption1">
                  Mån - Fre: 09:00 - 20:00 <br />
                  Stängt på helgerna
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="footer-navigate flex md:justify-evenly max-md:gap-20 max-sm:gap-y-6 max-sm:flex-wrap">
                <div className="footer-nav-item">
                  <div className="item-heading text-button">Verksamhet</div>
                  <ul className="list-nav mt-3">
                    <li className="mt-2">
                      <Link
                        className={`caption1 hover-underline ${
                          classname && "underline-white"
                        }`}
                        href="/about-us"
                      >
                        Om oss
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link
                        className={`caption1 hover-underline ${
                          classname && "underline-white"
                        }`}
                        href="/company/our-teams"
                      >
                        Vårt team
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link
                        className={`caption1 hover-underline ${
                          classname && "underline-white"
                        }`}
                        href="/company/testimonials"
                      >
                        Vårt omdöme
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link
                        className={`caption1 hover-underline ${
                          classname && "underline-white"
                        }`}
                        href="/blog/blog-grid"
                      >
                        Nyheter
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link
                        className={`caption1 hover-underline ${
                          classname && "underline-white"
                        }`}
                        href="/case-studies/case-studies-one"
                      >
                        Portfölj
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link
                        className={`caption1 hover-underline ${
                          classname && "underline-white"
                        }`}
                        href="/contact"
                      >
                        Kontakt
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-nav-item">
                  <div className="item-heading text-button">IT-tjänster</div>
                  <ul className="list-nav mt-3">
                    {serviceData.slice(0, 6).map((item) => (
                      <li className="mt-2" key={item.id}>
                        <Link
                          className={`caption1 hover-underline ${
                            classname && "underline-white"
                          }`}
                          href={"/services/[slug]"}
                          as={
                            "/services/" +
                            convertToSlug(item.title) +
                            "?id=" +
                            item.id
                          }
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 w-full">
              <div className="company-contact max-xl:w-1/2 max-sm:w-full">
                <div className="heading text-button">Nyheter</div>
                <div className="send-block mt-4 flex items-center w-full relative">
                  <Icon.Envelope className="text-lg absolute top-1/2 left-0 -translate-y-1/2" />
                  <input
                    className={`caption1 w-full h-[50px] pl-7 pr-9 bg-transparent border-b ${
                      classname
                        ? "border-white focus:border-white"
                        : "border-black"
                    }`}
                    type="text"
                    placeholder="Fyll i din email"
                  />
                  <button className="absolute right-0 top-1/2 -translate-y-1/2">
                    <Icon.PaperPlaneTilt className="text-2xl" />
                  </button>
                </div>
                <div className="list-social flex items-center flex-wrap gap-2.5 mt-7">
                  <Link
                    className={`item rounded-full w-10 h-10 flex items-center justify-center duration-300 border ${
                      classname
                        ? "border-surface2 hover:text-black hover:bg-white"
                        : "border-black hover:text-white hover:bg-black"
                    }`}
                    href="https://www.facebook.com/"
                    target="_blank"
                  >
                    <i className="icon-facebook text-base"></i>
                  </Link>
                  <Link
                    className={`item rounded-full w-10 h-10 flex items-center justify-center duration-300 border ${
                      classname
                        ? "border-surface2 hover:text-black hover:bg-white"
                        : "border-black hover:text-white hover:bg-black"
                    }`}
                    href="https://www.linkedin.com/"
                    target="_blank"
                  >
                    <i className="icon-linkedin text-base"></i>
                  </Link>
                  <Link
                    className={`item rounded-full w-10 h-10 flex items-center justify-center duration-300 border ${
                      classname
                        ? "border-surface2 hover:text-black hover:bg-white"
                        : "border-black hover:text-white hover:bg-black"
                    }`}
                    href="https://www.twitter.com/"
                    target="_blank"
                  >
                    <i className="icon-twitter text-base"></i>
                  </Link>
                  <Link
                    className={`item rounded-full w-10 h-10 flex items-center justify-center duration-300 border ${
                      classname
                        ? "border-surface2 hover:text-black hover:bg-white"
                        : "border-black hover:text-white hover:bg-black"
                    }`}
                    href="https://www.youtube.com/"
                    target="_blank"
                  >
                    <i className="icon-youtube text-base"></i>
                  </Link>
                  <Link
                    className={`item rounded-full w-10 h-10 flex items-center justify-center duration-300 border ${
                      classname
                        ? "border-surface2 hover:text-black hover:bg-white"
                        : "border-black hover:text-white hover:bg-black"
                    }`}
                    href="https://www.instagram.com/"
                    target="_blank"
                  >
                    <i className="icon-instagram text-sm"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="flex items-center sm:justify-between max-sm:flex-col gap-y-2 justify-center py-2 border-t border-outline">
              <div className="left-block flex items-center">
                <div className="copy-right text-surface1 caption1">
                  ©2024 Telt. All Rights Reserved.
                </div>
              </div>
              <div className="nav-link flex items-center gap-2.5">
                <Link
                  className="text-surface1 caption1 hover-underline"
                  href="#!"
                >
                  Användarvillkor
                </Link>
                <span className="text-surface1 caption1">|</span>
                <Link
                  className="text-surface1 caption1 hover-underline"
                  href="#!"
                >
                  Integritetspolicy
                </Link>
                <span className="text-surface1 caption1">|</span>
                <Link
                  className="text-surface1 caption1 hover-underline"
                  href="#!"
                >
                  Cookiepolicy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
