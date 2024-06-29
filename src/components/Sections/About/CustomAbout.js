import Link from "next/link";

const CustomAbout = (props) => {
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
        </div>
      </div>
    </section>
  );
};
export default CustomAbout;
