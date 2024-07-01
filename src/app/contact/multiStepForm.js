"use client";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Styles from "./multiStepForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faBrowser,
  faMoneyBillTransfer,
  faRectangleAd,
  faHandshakeAngle,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons"; // Adjust this line based on the actual import path of your icons

const steps = [
  { id: 1, label: "Select Service" },
  { id: 2, label: "Question 1" },
  { id: 3, label: "Question 2" },
  { id: 4, label: "Question 3" },
  { id: 5, label: "Personal Info" },
];

const services = [
  { name: "SEO", icon: faGoogle },
  { name: "Hemsida", icon: faBrowser },
  { name: "Konverteringsökning", icon: faMoneyBillTransfer },
  { name: "Sociala medier", icon: faRectangleAd },
  { name: "Hjälp med befintlig webbplats eller blogg", icon: faHandshakeAngle },
  { name: "Vet ej", icon: faQuestion },
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
  Hemsida: [
    {
      question: "Vart vill du ha din plattform?",
      options: ["Next JS", "Php", "WordPress", "Shopify", "Wix"],
    },
    {
      question: "Vad är syftet med din webbplats?",
      options: [
        "E-handel",
        "Blogg",
        "Företagspresentation",
        "Portfölj",
        "Annat",
      ],
    },
    {
      question: "Vilka funktioner vill du inkludera på din webbplats?",
      options: [
        "Blogg",
        "Bokningssystem",
        "Kontaktformulär",
        "E-handel funktioner",
        "Användarrecensioner",
        "Nyhetsbrev registrering",
        "Annat",
      ],
    },
  ],

  Konverteringsökning: [
    {
      question: "Vart har du din plattform?",
      options: ["Wordpress", "Visual studio", "Shopify", "Wix", "Editor X"],
    },
    {
      question: "Vad säljer du?",
      options: ["Tobak & CBD/Hampa", "Materiella varor", "Tjänster"],
    },
    {
      question: "Vad har du för konvertering i månaden?",
      options: ["<10%", "10 - 20%", "20 - 40%"],
    },
    {
      question: "Vad är din budget?",
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
      question: "Vad gäller det för media?",
      options: ["Instagram", "Facebook", "TikTok", "Snapchat", "Flashback"],
    },
    {
      question: "Hur ofta vill du marknadsföra dig i månaden?",
      options: ["4 gånger", "6 gånger", "12 gånger", "16 gånger"],
    },
    {
      question: "Ska vi designa annonsernas bilder?",
      options: ["Ja", "Nej"],
    },
    {
      question: "Vilken typ av innehåll vill du marknadsföra?",
      options: ["Produkter", "Tjänster", "Blogginlägg", "Event", "Annat"],
    },
  ],
  "Hjälp med befintlig webbplats eller blogg": [
    {
      question: "Vilken plattform använder du för din nuvarande webbplats?",
      options: ["JavaScript", "Next JS", "WordPress", "Shopify", "Wix"],
    },
    {
      question: "Vad är syftet med din webbplats?",
      options: [
        "E-handel",
        "Blogg",
        "Företagspresentation",
        "Portfölj",
        "Annat",
      ],
    },
    {
      question: "Vilka områden behöver du hjälp med?",
      options: [
        "Design och layout",
        "Funktionalitet och funktioner",
        "Innehållsskapande",
        "SEO och marknadsföring",
        "Hastighetsoptimering",
        "Säkerhet",
        "Annat",
      ],
    },
    {
      question: "Vill du ha hjälp med SEO för din webbplats?",
      options: ["Ja", "Nej"],
    },
    {
      question: "Hur många backlinks önskar du i månaden?",
      options: ["10", "50", "200+"],
    },
  ],
  "Vet ej": [
    {
      question: "Vilken plattform använder du för sponsrade ads?",
      options: ["Google", "Instagram", "Facebook", "TikTok", "Twitter"],
    },
    {
      question: "Hur ofta marknadsför du dig idag?",
      options: [
        "En gång i månaden",
        "En gång i veckan",
        "Flera gånger i veckan",
      ],
    },
    {
      question: "Behöver du hjälp med design för marknadsföring?",
      options: ["Ja", "Nej"],
    },
    {
      question: "Gäller det sponsrade videos eller bilder?",
      options: ["Ja", "Nej"],
    },
  ],
};

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    questions: {},
    email: "",
    phone: "",
    name: "",
  });

  const handleRadioChange = (e, field) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      questions: {
        ...prevFormData.questions,
        [field]: value,
      },
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
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
    if (step === 1) return formData.service !== "";
    if (step > 1 && step <= questions[formData.service]?.length + 1) {
      return (
        formData.questions[questions[formData.service][step - 2].question] !==
        undefined
      );
    }
    if (step === questions[formData.service]?.length + 2) {
      return (
        formData.email !== "" && formData.phone !== "" && formData.name !== ""
      );
    }
    return false;
  };

  const renderStepContent = () => {
    if (currentStep === 1) {
      return (
        <div>
          <label className="block mb-2 text-blue-500">
            Vi börjar. Vad behöver du hjälp med?
          </label>
          <div className="mb-4 mt-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`w-full mb-2 p-2 py-4 border rounded-lg cursor-pointer transition-all duration-300 flex justify-between items-center ${
                  formData.service === service.name
                    ? "bg-gray-700 text-white border-gray-600"
                    : "bg-white text-black border-gray-300"
                } hover:bg-gray-600 hover:text-white hover:shadow-lg`}
                onClick={() =>
                  setFormData({ ...formData, service: service.name })
                }
              >
                <div>
                  <input
                    type="radio"
                    value={service.name}
                    checked={formData.service === service.name}
                    onChange={(e) => handleRadioChange(e, "service")}
                    className="mr-2 accent-gray-200"
                  />
                  {service.name}
                </div>
                <FontAwesomeIcon icon={service.icon} className="ml-2" />
              </div>
            ))}
          </div>
        </div>
      );
    } else if (
      currentStep > 1 &&
      currentStep <= questions[formData.service]?.length + 1
    ) {
      const questionIndex = currentStep - 2;
      const question = questions[formData.service][questionIndex].question;
      const options = questions[formData.service][questionIndex].options;

      return (
        <div>
          <label className="block mb-2 text-blue-500">{question}</label>
          <div className="mb-4 mt-12">
            {options.map((option, index) => (
              <div
                key={index}
                className={`w-full mb-2 p-2 py-4 border rounded-lg cursor-pointer transition-all duration-300 flex justify-between items-center ${
                  formData.questions[question] === option
                    ? "bg-gray-700 text-white border-gray-600"
                    : "bg-white text-black border-gray-300"
                } hover:bg-gray-600 hover:text-white hover:shadow-lg`}
                onClick={() =>
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    questions: {
                      ...prevFormData.questions,
                      [question]: option,
                    },
                  }))
                }
              >
                <div>
                  <input
                    type="radio"
                    value={option}
                    checked={formData.questions[question] === option}
                    onChange={(e) => handleRadioChange(e, question)}
                    className="mr-2 accent-gray-200"
                  />
                  {option}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (currentStep === questions[formData.service]?.length + 2) {
      return (
        <div>
          <label className="block mb-2 text-blue-500">Namn:</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mb-4 bg-gray-800 text-gray-200"
            required
          />
          <label className="block mb-2 text-blue-500">E-post:</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mb-4 bg-gray-800 text-gray-200"
            required
          />
          <label className="block mb-2 text-blue-500">Telefonnummer:</label>
          <div className="w-[100%]">
            <PhoneInput
              country={"us"}
              value={formData.phone}
              onChange={handlePhoneChange}
              containerClass="mb-4"
              inputClass="w-[100%] p-2 border border-gray-300 rounded bg-gray-800 text-gray-200"
              required
              className={Styles.phoneInput}
            />
          </div>
        </div>
      );
    }
    return null;
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
                style={{
                  width: `${
                    (currentStep / (questions[formData.service]?.length + 2)) *
                    100
                  }%`,
                }}
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
            {currentStep < questions[formData.service]?.length + 2 && (
              <button
                type="button"
                onClick={handleNext}
                className="bg-[#2a2a2a] text-white px-4 py-2 rounded "
              >
                Next
              </button>
            )}
            {currentStep === questions[formData.service]?.length + 2 && (
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
