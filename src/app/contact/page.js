const { default: LayoutOne } = require("@/components/Layout/LayoutOne");
const { default: MultiStepForm } = require("./multiStepForm");

const Contact = () => {
  return (
    <>
      <LayoutOne className="-style-1">
        <MultiStepForm />
      </LayoutOne>
    </>
  );
};

export default Contact;
