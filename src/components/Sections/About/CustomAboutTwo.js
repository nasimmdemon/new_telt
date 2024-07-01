import Link from "next/link";

const CustomAboutTwo = (props) => {
  return (
    <section className="about-block">
      <div className="container">
        <div className={`content rounded-2xl ${props.bg} md:p-10 p-7`}>
          <div className="heading gap-y-4 md:pb-10 pb-8 border-b border-line">
            <div className="w-full xl:w-5/12 lg:w-1/2">
              <div className="tag text-label bg-blue text-white">
                {props.subHeading}
              </div>
              <h3 className="heading3 text-white mt-4">{props.title}</h3>
            </div>
            <div className="w-full">
              <div className="desc text-white">{props.description} </div>
              <Link
                className="text-button-sm text-white border-b-2 border-white mt-4 inline-block hover:border-black hover:text-black duration-300"
                href={props.url}
              >
                {props.buttonTitle}
              </Link>
            </div>
          </div>
          <div className="counter grid md:grid-cols-4 grid-cols-2 gap-y-6 md:pt-10 pt-8">
            <div className="counter-item px-5 border-l border-white">
              <div className="count-number heading3 text-white">10</div>
              <div className="body1 mt-1 text-white">Års erfarenhet</div>
            </div>
            <div className="counter-item px-5 border-l border-white">
              <div className="flex items-center">
                <div className="count-number heading3 text-white">700</div>
                <span className="heading3 text-white">+</span>
              </div>
              <div className="body1 mt-1 text-white">Projekt slutförda</div>
            </div>
            <div className="counter-item px-5 border-l border-white">
              <div className="count-number heading3 text-white">100%</div>
              <div className="body1 mt-1 text-white">Kvalitet</div>
            </div>
            <div className="counter-item px-5 border-l border-white">
              <div className="count-number heading3 text-white">4</div>
              <div className="body1 mt-1 text-white">Olika länder</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CustomAboutTwo;
