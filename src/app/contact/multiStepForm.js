"use client";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import countries from "react-select-country-list";
import Styles from "./multiStepForm.module.css";

const steps = [
  { id: 1, label: "Step 1" },
  { id: 2, label: "Step 2" },
  { id: 3, label: "Step 3" },
  { id: 4, label: "Step 4" },
];

const countryOptions = countries().getData();

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    step1: "",
    step2: "",
    step3: "",
    email: "",
    phone: "",
    country: "",
    name: "",
  });

  const handleRadioChange = (e, step) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [step]: value,
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
        return formData.step1 !== "";
      case 2:
        return formData.step2 !== "";
      case 3:
        return formData.step3 !== "";
      case 4:
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
              Select options for Step 1:
            </label>
            <div className="mb-4 flex flex-col sm:flex-row mt-12">
              <div
                className={`flex w-full md:mx-4 items-center mb-2 p-2 py-4 border rounded-lg cursor-pointer ${
                  formData.step1 === "Option 1"
                    ? "bg-barActive border-black text-black"
                    : "border-grey"
                }`}
                onClick={() => setFormData({ ...formData, step1: "Option 1" })}
              >
                <input
                  type="radio"
                  value="Option 1"
                  checked={formData.step1 === "Option 1"}
                  onChange={(e) => handleRadioChange(e, "step1")}
                  className="mr-2 bg-black"
                />
                Option 1
              </div>
              <div
                className={`flex w-full md:mx-4 items-center mb-2 p-2 py-4 border rounded-lg cursor-pointer ${
                  formData.step1 === "Option 2"
                    ? "bg-barActive border-black text-black"
                    : "border-grey"
                }`}
                onClick={() => setFormData({ ...formData, step1: "Option 2" })}
              >
                <input
                  type="radio"
                  value="Option 2"
                  checked={formData.step1 === "Option 2"}
                  onChange={(e) => handleRadioChange(e, "step1")}
                  className="mr-2"
                />
                Option 2
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <label className="block mb-2 text-blue-500">
              Select options for Step 2:
            </label>
            <div className="mb-4 flex flex-col sm:flex-row mt-12">
              <div
                className={`flex w-full md:mx-4 items-center mb-2 p-2 py-4 border rounded-lg cursor-pointer ${
                  formData.step2 === "Option 1"
                    ? "bg-barActive border-black text-black"
                    : "border-grey"
                }`}
                onClick={() => setFormData({ ...formData, step2: "Option 1" })}
              >
                <input
                  type="radio"
                  value="Option 1"
                  checked={formData.step2 === "Option 1"}
                  onChange={(e) => handleRadioChange(e, "step2")}
                  className="mr-2"
                />
                Option 1
              </div>
              <div
                className={`flex w-full md:mx-4 items-center mb-2 p-2 py-4 border rounded-lg cursor-pointer ${
                  formData.step2 === "Option 2"
                    ? "bg-barActive border-black text-black"
                    : "border-grey"
                }`}
                onClick={() => setFormData({ ...formData, step2: "Option 2" })}
              >
                <input
                  type="radio"
                  value="Option 2"
                  checked={formData.step2 === "Option 2"}
                  onChange={(e) => handleRadioChange(e, "step2")}
                  className="mr-2"
                />
                Option 2
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <label className="block mb-2 text-blue-500">
              Select options for Step 3:
            </label>
            <div className="mb-4 flex flex-col sm:flex-row mt-12">
              <div
                className={`flex w-full md:mx-4 items-center mb-2 p-2 py-4 border rounded-lg cursor-pointer ${
                  formData.step3 === "Option 1"
                    ? "bg-barActive border-black text-black"
                    : "border-grey"
                }`}
                onClick={() => setFormData({ ...formData, step3: "Option 1" })}
              >
                <input
                  type="radio"
                  value="Option 1"
                  checked={formData.step3 === "Option 1"}
                  onChange={(e) => handleRadioChange(e, "step3")}
                  className="mr-2"
                />
                Option 1
              </div>
              <div
                className={`flex w-full md:mx-4 items-center mb-2 p-2 py-4 border rounded-lg cursor-pointer ${
                  formData.step3 === "Option 2"
                    ? "bg-barActive border-black text-black"
                    : "border-grey"
                }`}
                onClick={() => setFormData({ ...formData, step3: "Option 2" })}
              >
                <input
                  type="radio"
                  value="Option 2"
                  checked={formData.step3 === "Option 2"}
                  onChange={(e) => handleRadioChange(e, "step3")}
                  className="mr-2"
                />
                Option 2
              </div>
            </div>
          </div>
        );
      case 4:
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
      <div className="w-[70%] pb-6 bg-white p-8 rounded-xl shadow-lg relative transition-transform duration-500">
        <h2 className="text-2xl font-bold mb-6">Telt</h2>
        <div className="relative pt-1 mb-4">
          <div className="flex mb-2 items-center justify-between">
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-barColor">
              <div
                className="bg-black h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${(currentStep / steps.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={`step-content transition-transform duration-500`}>
            {renderStepContent()}
          </div>
          <div className="flex justify-between mt-12 bottom-0 left-0 w-full p-8">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                className=" text-black px-4 py-2 rounded"
              >
                Back
              </button>
            )}
            {currentStep < 4 && (
              <button
                type="button"
                onClick={handleNext}
                className="bg-[#2a2a2a] text-white px-4 py-2 rounded "
              >
                Next
              </button>
            )}
            {currentStep === 4 && (
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
