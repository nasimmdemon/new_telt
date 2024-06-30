"use client";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import countries from "react-select-country-list";
import Styles from "./multiStepForm.module.css";

const steps = [
  { id: 1, label: "Select Service" },
  { id: 2, label: "Question 1" },
  { id: 3, label: "Question 2" },
  { id: 4, label: "Question 3" },
  { id: 5, label: "Personal Info" },
];

const services = [
  "SEO",
  "Hemsida",
  "Konverteringsökning",
  "Sociala medier",
  "Hjälp med befintlig webbplats eller blogg",
  "Vet ej",
];

const questions = {
  SEO: [
    {
      question: "Vad gäller SEO arbetet för?",
      options: ["Hemsida", "Blogg", "E-handel"],
    },
    {
      question: "Vilka är dina huvudsakliga SEO-mål?",
      options: [
        "Ökning av backlinks",
        "Öka konverteringar",
        "Förbättring av meta-tags",
        "Förbättring av innehåll på webben",
      ],
    },
    {
      question: "Vad är din budget för SEO-tjänster?",
      options: [
        "Under 10 000 SEK",
        "10 000 - 50 000 SEK",
        "50 000 - 100 000 SEK",
        "Över 100 000 SEK",
        "Vet ej",
      ],
    },
  ],
  "Sociala medier": [
    {
      question: "What social media platforms do you use?",
      options: ["Facebook", "Instagram", "Twitter", "LinkedIn"],
    },
    {
      question: "What type of content do you want to create?",
      options: ["Images", "Videos", "Blog posts", "Infographics"],
    },
    {
      question: "What is your primary goal with social media?",
      options: [
        "Increase followers",
        "Engage with audience",
        "Promote products/services",
        "Drive website traffic",
      ],
    },
  ],
  "En webbshop": [
    {
      question: "What type of products do you sell?",
      options: [
        "Physical goods",
        "Digital products",
        "Services",
        "Subscriptions",
      ],
    },
    {
      question: "Which e-commerce platform do you use?",
      options: ["Shopify", "WooCommerce", "Magento", "Other"],
    },
    {
      question: "What features are you looking for in a web shop?",
      options: [
        "Responsive design",
        "Secure payment gateway",
        "User-friendly interface",
        "SEO-friendly",
      ],
    },
  ],
  "Hjälp med en befintlig webbplats eller blogg": [
    {
      question: "What issues are you facing with your current website?",
      options: [
        "Slow loading speed",
        "Poor design",
        "Low traffic",
        "Technical issues",
      ],
    },
    {
      question: "What improvements do you want to make?",
      options: [
        "Redesign website",
        "Improve SEO",
        "Add new features",
        "Fix bugs",
      ],
    },
    {
      question: "Do you need ongoing maintenance?",
      options: ["Yes", "No", "Maybe", "Not sure"],
    },
  ],
  Konverteringsökning: [
    {
      question: "What is your current conversion rate?",
      options: ["Less than 1%", "1-3%", "3-5%", "More than 5%"],
    },
    {
      question: "What conversion goals do you have?",
      options: [
        "Increase sales",
        "Generate leads",
        "Increase sign-ups",
        "Improve engagement",
      ],
    },
    {
      question:
        "What conversion optimization techniques are you interested in?",
      options: [
        "A/B testing",
        "Landing page optimization",
        "User experience improvement",
        "Personalization",
      ],
    },
  ],
  "Vet ej": [
    {
      question: "What business goals are you looking to achieve?",
      options: [
        "Increase brand awareness",
        "Generate more leads",
        "Boost sales",
        "Improve customer engagement",
      ],
    },
    {
      question: "Which areas do you think need improvement?",
      options: [
        "Website design",
        "SEO",
        "Social media presence",
        "Conversion rates",
      ],
    },
    {
      question: "Would you like a consultation to discuss your needs?",
      options: ["Yes", "No", "Maybe", "Not sure"],
    },
  ],
};

const countryOptions = countries().getData();

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    question1: "",
    question2: "",
    question3: "",
    email: "",
    phone: "",
    country: "",
    name: "",
  });

  const handleRadioChange = (e, field) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleCountryChange = (selectedOption) => {
    setFormData({ ...formData, country: selectedOption.label });
  };

  const handleNext = () => {
    if (isValidStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const isValidStep = (step) => {
    switch (step) {
      case 1:
        return formData.service !== "";
      case 2:
        return formData.question1 !== "";
      case 3:
        return formData.question2 !== "";
      case 4:
        return formData.question3 !== "";
      case 5:
        return (
          formData.email !== "" &&
          formData.phone !== "" &&
          formData.country !== "" &&
          formData.name !== ""
        );
      default:
        return false;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <label className="block mb-2 text-blue-500">
              Vi börjar. Vad behöver du hjälp med?
            </label>
            <div className="mb-4 mt-12">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`w-full mb-2 p-2 py-4 border rounded-lg cursor-pointer ${
                    formData.service === service
                      ? "bg-barActive border-black text-black"
                      : "border-grey"
                  }`}
                  onClick={() => setFormData({ ...formData, service })}
                >
                  <input
                    type="radio"
                    value={service}
                    checked={formData.service === service}
                    onChange={(e) => handleRadioChange(e, "service")}
                    className="mr-2"
                  />
                  {service}
                </div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <label className="block mb-2 text-blue-500">
              {questions[formData.service][0].question}
            </label>
            <div className="mb-4 mt-12">
              {questions[formData.service][0].options.map((option, index) => (
                <div
                  key={index}
                  className={`w-full mb-2 p-2 py-4 border rounded-lg cursor-pointer ${
                    formData.question1 === option
                      ? "bg-barActive border-black text-black"
                      : "border-grey"
                  }`}
                  onClick={() =>
                    setFormData({ ...formData, question1: option })
                  }
                >
                  <input
                    type="radio"
                    value={option}
                    checked={formData.question1 === option}
                    onChange={(e) => handleRadioChange(e, "question1")}
                    className="mr-2"
                  />
                  {option}
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <label className="block mb-2 text-blue-500">
              {questions[formData.service][1].question}
            </label>
            <div className="mb-4 mt-12">
              {questions[formData.service][1].options.map((option, index) => (
                <div
                  key={index}
                  className={`w-full mb-2 p-2 py-4 border rounded-lg cursor-pointer ${
                    formData.question2 === option
                      ? "bg-barActive border-black text-black"
                      : "border-grey"
                  }`}
                  onClick={() =>
                    setFormData({ ...formData, question2: option })
                  }
                >
                  <input
                    type="radio"
                    value={option}
                    checked={formData.question2 === option}
                    onChange={(e) => handleRadioChange(e, "question2")}
                    className="mr-2"
                  />
                  {option}
                </div>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <label className="block mb-2 text-blue-500">
              {questions[formData.service][2].question}
            </label>
            <div className="mb-4 mt-12">
              {questions[formData.service][2].options.map((option, index) => (
                <div
                  key={index}
                  className={`w-full mb-2 p-2 py-4 border rounded-lg cursor-pointer ${
                    formData.question3 === option
                      ? "bg-barActive border-black text-black"
                      : "border-grey"
                  }`}
                  onClick={() =>
                    setFormData({ ...formData, question3: option })
                  }
                >
                  <input
                    type="radio"
                    value={option}
                    checked={formData.question3 === option}
                    onChange={(e) => handleRadioChange(e, "question3")}
                    className="mr-2"
                  />
                  {option}
                </div>
              ))}
            </div>
          </div>
        );
      case 5:
        return (
          <div>
            <label className="block mb-2 text-blue-500">Name:</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              required
            />
            <label className="block mb-2 text-blue-500">Email Address:</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              required
            />
            <label className="block mb-2 text-blue-500">Phone Number:</label>
            <div className="w-[100%]">
              <PhoneInput
                country={"us"}
                value={formData.phone}
                onChange={handlePhoneChange}
                containerClass="mb-4"
                inputClass="w-[100%] p-2 border border-gray rounded"
                required
                className={Styles.phoneInput}
              />
            </div>
            <label className="block mb-2 text-blue-500">Select Country:</label>
            <Select
              options={countryOptions}
              onChange={handleCountryChange}
              className="mb-4"
              required
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="pb-44 pt-12 flex items-center justify-center bg-black">
      <div className="w-[70%] max-sm:w-[95%] max-w-[1250px] pb-6 bg-white p-8 rounded-xl shadow-lg relative transition-transform duration-500">
        <h2 className="text-2xl font-bold ">TELT</h2>
        <p className="mb-6">Let's boost your business</p>
        <div className="relative pt-1 mb-4">
          <div className="flex mb-2 items-center justify-between">
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-barColor">
              <div
                className="bg-black h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${(currentStep / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={`step-content transition-transform duration-500`}>
            {renderStepContent()}
          </div>
          <div className="flex justify-between mt-2 bottom-0 left-0 w-full p-8">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                className=" text-black px-4 py-2 rounded"
              >
                Back
              </button>
            )}
            {currentStep < 5 && (
              <button
                type="button"
                onClick={handleNext}
                className="bg-[#2a2a2a] text-white px-4 py-2 rounded "
              >
                Next
              </button>
            )}
            {currentStep === 5 && (
              <button
                type="submit"
                className="bg-[#2a2a2a] text-white px-4 py-2 rounded ml-4"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default MultiStepForm;
