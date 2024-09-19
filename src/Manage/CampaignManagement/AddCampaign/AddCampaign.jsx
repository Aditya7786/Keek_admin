import React, { useContext, useState } from "react";
import Select, { components } from "react-select";
import { PiImageBold } from "react-icons/pi";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { MdChevronRight } from "react-icons/md";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { SlSocialYoutube } from "react-icons/sl";
import { RiErrorWarningLine } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mycontext } from "../../../utils/Context";
import { IoIosCheckmark } from "react-icons/io";
// import { IoCloseSharp } from "react-icons/io5";
import fileImg from "../../../Assets/fileImg.svg";
import { LuCreditCard } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import CampaignSummary from "./CampaignData";
// import { Payment } from "@mui/icons-material";

const AddCampaign = () => {
  const contextState = useContext(Mycontext);
  const { campData, setCampData } = useContext(Mycontext);
  const expanded = contextState.expanded;
  const formData = contextState.campData;
  const setFormData = contextState.setCampData;
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [descriptionCount, setDescriptionCount] = useState(0);

  const [uploadedFiles, setUploadedFiles] = useState([]);

  const platformoptions = [
    { value: "Instagram", label: "Instagram" },
    { value: "Snapchat", label: "Snapchat" },
    { value: "Facebook", label: "Facebook" },
    { value: "Twitter", label: "Twitter" },
  ];

  const locationoptions = [
    { value: "New Delhi", label: "New Delhi" },
    { value: "Nagpur", label: "Nagpur" },
    { value: "Pune", label: "Pune" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Hyderabad", label: "Hyderabad" },
    { value: "Banglore", label: "Banglore" },
    { value: "Chennai", label: "Chennai" },
    { value: "Kolkata", label: "Kolkata" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => {
      const updatedFormData = {
        ...prevFormData,
        [name]: value,
      };

      // Clear the error for the specific field if it has been filled
      setErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };

        if (value) {
          updatedErrors[name] = undefined; // Clear the error for this field
        }

        return updatedErrors;
      });

      return updatedFormData;
    });

    if (name === "description") {
      setDescriptionCount(value.length);
    }

    // If you want to validate the entire form whenever a field changes, you can uncomment this:
    // validate();
  };

  const handlechangeDate = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => {
      const updatedFormData = {
        ...prevFormData,
        [name]: value,
      };

      setErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };

        if (name === "startDate") {
          // Clear the error for startDate only
          updatedErrors.startDate = undefined;

          // Check if endDate needs to be re-validated (if both dates are filled)
          if (
            updatedFormData.endDate &&
            new Date(value) <= new Date(updatedFormData.endDate)
          ) {
            updatedErrors.endDate = undefined;
          }
        }

        if (name === "endDate") {
          // Clear the error for both startDate and endDate
          updatedErrors.startDate = undefined;
          updatedErrors.endDate = undefined;

          // Revalidate the endDate to make sure it's not before startDate
          if (
            updatedFormData.startDate &&
            new Date(value) < new Date(updatedFormData.startDate)
          ) {
            updatedErrors.endDate = "End Date cannot be before Start Date";
          }
        }

        return updatedErrors;
      });

      return updatedFormData;
    });

    if (name === "description") {
      setDescriptionCount(value.length);
    }

    // Optionally, validate the entire form when a field changes
    // validate();
  };

  const handleMultiSelectChange = (selectedOptions, actionMeta) => {
    const updatedErrors = { ...errors };

    // Clear the error if any option is selected for the specified field
    if (selectedOptions.length > 0) {
      if (actionMeta.name === "selectedOptionsplatform") {
        delete updatedErrors.platform;
      } else if (actionMeta.name === "selectedOptionslocation") {
        delete updatedErrors.location;
      }
    }

    setFormData({
      ...formData,
      [actionMeta.name]: selectedOptions,
    });

    // Update the errors state
    setErrors(updatedErrors);
  };

  const removeSelectedOption = (optionToRemove, fieldName) => {
    const updatedOptions = formData[fieldName].filter(
      (option) => option.value !== optionToRemove.value
    );

    setFormData({
      ...formData,
      [fieldName]: updatedOptions,
    });

    // Re-check error if no options remain for the specified field
    if (updatedOptions.length === 0) {
      setErrors({
        ...errors,
        [fieldName === "selectedOptionsplatform" ? "platform" : "location"]: `${
          fieldName === "selectedOptionsplatform" ? "Platform" : "Location"
        } is required`,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form submitted", formData);
    }
  };

  const handleIncrement = (field) => {
    setFormData((prevFormData) => {
      const newValue = prevFormData[field] + 1;

      // Remove errors related to this field
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[`${field}Error`];
        return newErrors;
      });

      // Update form data and validate
      return {
        ...prevFormData,
        [field]: newValue,
      };
    });
  };

  const handleDecrement = (field) => {
    setFormData((prevFormData) => {
      const newValue = prevFormData[field] > 0 ? prevFormData[field] - 1 : 0;

      // Set error if the new value is zero
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        if (newValue === 0) {
          newErrors[`${field}Error`] = `${field} must be greater than 0`;
        } else {
          delete newErrors[`${field}Error`];
        }
        return newErrors;
      });

      // Update form data and validate
      return {
        ...prevFormData,
        [field]: newValue,
      };
    });
  };

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const newUploadedFiles = [...uploadedFiles, ...files];

    setCampData({
      ...campData,
      uploadData: newUploadedFiles,
    });

    // Remove the error for the file upload field once a file is uploaded
    if (newUploadedFiles.length > 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        addUpload: undefined,
      }));
    }

    setUploadedFiles(newUploadedFiles);
  };

  const handleRemoveAsset = (index) => {
    const newUploadData = campData.uploadData.filter((_, i) => i !== index);
    setCampData({ ...campData, uploadData: newUploadData });
  };

  const validate = () => {
    const errors = {};

    // Existing validations
    if (!formData.campaignName)
      errors.campaignName = "Campaign Name is required";
    if (!formData.description) errors.description = "Description is required";
    if (formData.description.length > 500)
      errors.description = "Description cannot exceed 500 words";
    if (
      !formData.selectedOptionsplatform ||
      formData.selectedOptionsplatform.length === 0
    )
      errors.platform = "Platform is required";

    if (!campData.uploadData || campData.uploadData.length === 0) {
      errors.addUpload = "Upload file is required";
    }
    if (
      !formData.selectedOptionslocation ||
      formData.selectedOptionslocation.length === 0
    )
      errors.location = "Location is required";
    if (!formData.startDate) errors.startDate = "Start Date is required";
    if (!formData.endDate) errors.endDate = "End Date is required";
    if (new Date(formData.endDate) < new Date(formData.startDate))
      errors.endDate = "End Date cannot be before Start Date";

    if (!formData.amount) errors.amount = "Amount is required"; // For payment
    if (!formData.productDescription)
      errors.productDescription = "Product Description is required"; // For product
    if (!formData.otherDescription)
      errors.otherDescription = "Description is required"; // For other
    if (!formData.addDescription)
      errors.addDescription = "Description is required"; // For additional other

    // Check if compensation methods are selected
    // if (!formData.compensation)
    //   errors.compensation = "Choose one of the compensation methods"; // For payment
    if (!formData.payment && !formData.product && !formData.others) {
      errors.compensation = "Choose one of the compensation methods";
    }

    // Check specific errors related to counts
    if (formData.postCount <= 0)
      errors.postCountError = "choose one of the option ";
    if (formData.reelCount <= 0)
      errors.reelCountError = "Reel count must be greater than zero";
    if (formData.storyCount <= 0)
      errors.storyCountError = "Story count must be greater than zero";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = (e) => {
    e.preventDefault();
    console.log(formData);
    validate();
    //  && formData.startDate && formData.endDate && formData.AddCampaign)
    if (
      formData.campaignName &&
      formData.description &&
      formData.selectedOptionsplatform[0]?.value &&
      formData.selectedOptionslocation[0]?.value &&
      formData.startDate &&
      formData.endDate &&
      (formData.payment || formData.product || formData.others)
    ) {
      console.log("Form submitted", formData);
      setIsModalVisible(!isModalVisible);
    }
  };

  const handleCompensationSelection = (field) => {
    setFormData((prevFormData) => {
      const updatedFormData = {
        ...prevFormData,
        [field]: !prevFormData[field],
      };

      // Remove the error for compensation if a method is selected
      if (
        updatedFormData.payment ||
        updatedFormData.product ||
        updatedFormData.others
      ) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          compensation: null,
        }));
      }

      return updatedFormData;
    });
  };

  const handleFieldFocus = (field) => {
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };

      // Remove the specific field error
      newErrors[field] = undefined;

      // Remove compensation error if any of the compensation-related fields are focused
      if (
        field === "amount" ||
        field === "productDescription" ||
        field === "otherDescription"
      ) {
        newErrors.compensation = undefined;
      }

      return newErrors;
    });
  };

  const MultiValue = () => null;
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <div
        className={`relative max-h-[1855px]   mx-6 bg-white  ${
          !expanded
            ? "left-[90px] w-[calc(100%-150px)]"
            : "left-[320px] w-[calc(100%-1088px)]"
        } rounded-xl drop-shadow-md   `}
      >
        <div className={`bg-white pt-[29.75px] top-28 my-4 left-[311px] h-fit rounded-xl ${expanded ? 'w-[1088px] ':' w-full'}  `}>
          <div className="h-[64.85px]  border-b">
            <div className="flex flex-row p-6 px-[40px] items-center gap-[3.14px]">
              <Link
                to="/CampaignManagement"
                className={`text-[16px] font-normal font-body flex flex-row ${
                  currentPath === "/CampaignManagement" ? "text-[#2463eb]" : ""
                }`}
              >
                Manage Campaigns
                <MdChevronRight className="m-1 items-center" size={"15.7px"} />
              </Link>
              <Link
                to="/AddCampaign"
                className={`text-[16px] font-semibold font-body ${
                  currentPath === "/AddCampaign" ? "text-[#2463eb]" : ""
                } gap-x-2`}
              >
                Add Campaigns
              </Link>
            </div>
          </div>
          <div className="p-6 px-[40px] my-2">
            <form onSubmit={handleSubmit}>
              <div className="my-4">
                <label className="text-[18px] font-normal font-body">
                  Campaign Name <sup className="text-[#2463eb]">*</sup>
                </label>
                <input
                  className={`border-[0.7px] mt-2  rounded-lg w-full px-[20px] py-[19px] gap-2.5 my-2 focus:outline-none focus:border-[#0066FF] ${
                    errors.campaignName ? "border-red-500" : "border-[#363939]"
                  }`}
                  type="text"
                  name="campaignName"
                  id="name"
                  value={formData.campaignName}
                  onChange={handleChange}
                  placeholder="Save Trees and recycle"
                />
                {errors.campaignName && (
                  <p className="text-[#FF424C] text-sm flex flex-row gap-1">
                    <span>
                      <RiErrorWarningLine className="m-1" />
                    </span>
                    {errors.campaignName}
                  </p>
                )}
              </div>

              <div className="my-4">
                <label className="text-[18px] font-normal font-body">
                  Campaign Description <sup className="text-[#2463eb]">*</sup>
                </label>
                <textarea
                  className={`border-[0.7px] mt-2 h-[120px]  rounded-lg w-full px-[20px] py-[19px] resize-none gap-2.5 focus:outline-none focus:border-[#0066FF] ${
                    errors.description ? "border-red-500" : "border-[#363939]"
                  }`}
                  name="description"
                  id="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Write a description about the campaign."
                />
                <div
                  className={`text-gray-500 text-sm flex ${
                    errors.description ? "justify-between" : "justify-end"
                  }  mr-2`}
                >
                  {errors.description && (
                    <p className="text-red-500 text-sm flex flex-row gap-1">
                      <span>
                        <RiErrorWarningLine className="m-1" />
                      </span>
                      {errors.description}
                    </p>
                  )}
                  {/* <div className="">{descriptionCount}/500</div> */}
                </div>
              </div>

              {/* platform */}
              <div className="my-4">
                <label className="text-[18px] font-body font-normal">
                  Select Platform <sup className="text-[#2463eb]">*</sup>
                </label>
                <Select
                  className={`rounded-lg w-full my-2 focus:outline-none focus:border-[#0066FF] ${
                    errors.platform ? "border-red-500" : "border-[#363939]"
                  }`}
                  isMulti
                  name="selectedOptionsplatform"
                  options={platformoptions}
                  placeholder="Select Platform"
                  value={formData.selectedOptionsplatform}
                  onChange={handleMultiSelectChange}
                  components={{ MultiValue }}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: "#363939 ",
                      border: "1px solid",
                      padding: "19px 20px",
                      borderRadius: "8px",
                    }),
                    option: (baseStyles, state) => ({
                      ...baseStyles,
                      color: "black",
                      backgroundColor: state.isFocused ? "#DBE0FF" : "white",
                    }),
                    multiValue: (baseStyles) => ({
                      ...baseStyles,
                      display: "none",
                    }),
                  }}
                />

                <div className="mt-2 flex flex-wrap">
                  {formData.selectedOptionsplatform.map((option) => (
                    <div
                      key={option.value}
                      className="inline-flex items-center px-3 py-1 mr-2 mb-2 bg-[#384EDD] text-sm text-white rounded-full"
                    >
                      <span className="mr-2">{option.label}</span>
                      <button
                        type="button"
                        className="text-white"
                        onClick={() =>
                          removeSelectedOption(
                            option,
                            "selectedOptionsplatform"
                          )
                        }
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>

                {errors.platform && (
                  <p className="text-red-500 text-sm flex flex-row gap-1">
                    <span>
                      <RiErrorWarningLine className="m-1" />
                    </span>
                    {errors.platform}
                  </p>
                )}
              </div>

              {/* location */}
              <div className="my-4">
                <label className="text-[18px] font-body font-normal">
                  Select Location <sup className="text-[#2463eb]">*</sup>
                </label>
                <Select
                  className={`rounded-lg w-full my-2 focus:outline-none focus:border-[#384edd] ${
                    errors.location ? "border-red-500" : "border-[#363939]"
                  }`}
                  isMulti
                  name="selectedOptionslocation"
                  options={locationoptions}
                  placeholder="Select Location"
                  value={formData.selectedOptionslocation}
                  onChange={handleMultiSelectChange}
                  components={{ MultiValue }}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: "#363939",
                      padding: "19px 20px",
                      borderRadius: "8px",
                    }),

                    option: (baseStyles, state) => ({
                      ...baseStyles,
                      backgroundColor: state.isFocused ? "#DBE0FF" : "white",
                    }),
                    multiValue: (baseStyles) => ({
                      ...baseStyles,
                      color: "white",
                      backgroundColor: "#384EDD",
                      borderRadius: "50px",
                    }),
                    multiValueLabel: (baseStyles) => ({
                      ...baseStyles,
                      color: "white",
                      textAlign: "center",
                    }),
                  }}
                />

                <div className="mt-2 flex flex-wrap">
                  {formData.selectedOptionslocation.map((option) => (
                    <div
                      key={option.value}
                      className="inline-flex items-center px-2 py-1 mr-2 mb-2 bg-[#384EDD] text-sm text-white rounded-full"
                    >
                      <span className="mr-2">{option.label}</span>
                      <button
                        type="button"
                        className="text-white"
                        onClick={() =>
                          removeSelectedOption(
                            option,
                            "selectedOptionslocation"
                          )
                        }
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>

                {errors.location && (
                  <p className="text-red-500 text-sm flex flex-row gap-1">
                    <span>
                      <RiErrorWarningLine className="m-1" />
                    </span>
                    {errors.location}
                  </p>
                )}
              </div>

              {/* start date */}
              <div className="flex flex-row justify-start w-full text-gray my-4">
                <div className="w-1/2 ">
                  <label
                    htmlFor="startDate"
                    className=" text-[18px] font-normal font-body"
                  >
                    Start Date<sup className="text-[#2463eb]">*</sup>
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    id="startDate"
                    value={formData.startDate}
                    onChange={handlechangeDate}
                    className={`shadow appearance-none mt-3 w-full   px-[20px] py-[19px] border-[#363939]  border rounded-md text-[#B1B2B2] focus:outline-none focus:border-[#0066FF] ${
                      errors.startDate ? "border-red-500" : ""
                    }`}
                  />
                  {errors.startDate && (
                    <p className="text-red-500 text-sm flex flex-row gap-1">
                      <span>
                        <RiErrorWarningLine className="m-1" />
                      </span>
                      {errors.startDate}
                    </p>
                  )}
                </div>
                {/* end date */}
                <div className="self-end text-[14px] font-normal font-body text-[#57595a] mx-6 mt-5">
                  To
                </div>
                <div className="w-1/2 ">
                  <label
                    htmlFor="endDate"
                    className=" text-[18px] font-normal font-body"
                  >
                    End Date<sup className="text-[#2463eb]">*</sup>
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    id="endDate"
                    value={formData.endDate}
                    onChange={handlechangeDate}
                    className={`shadow appearance-none mt-3 w-full px-[20px] py-[19px] border-[#363939]  border rounded-md text-[#B1B2B2] focus:outline-none  focus:border-[#0066FF] ${
                      errors.endDate ? "border-red-500" : ""
                    }`}
                  />
                  {errors.endDate && (
                    <p className="text-red-500 text-sm flex flex-row gap-1">
                      <span>
                        <RiErrorWarningLine className="m-1" />
                      </span>
                      {errors.endDate}
                    </p>
                  )}
                </div>
              </div>

              {/* post */}
              <div className="my-4">
                <label className="text-[18px] font-normal font-body ">
                  Deliverables <sup className="text-[#2463eb]">*</sup>
                </label>
                <div className="flex flex-row gap-6 my-5">
                  {/* Post Count */}
                  <div>
                    <div
                      className={
                        formData.postCount > 0
                          ? "flex flex-col border-2 border-[#0066FF] items-center justify-center w-[144px] h-[132px] bg-[#E9F2FF] rounded-[10px]"
                          : "flex flex-col items-center border-2 border-black justify-center w-[144px] h-[132px] bg-[#F6F6F6] rounded-[10px]"
                      }
                    >
                      <PiImageBold size={"24px"} className="text-[#B4B5BF]" />
                      <p className="text-[16px]">Post</p>
                    </div>
                    <div className="flex flex-row font-semibold w-[122px] ml-3 mt-3 border border-[#B1B2B2] rounded-md">
                      <button
                        className="h-[36px] w-[40px] flex items-center justify-center"
                        type="button"
                        onClick={() => handleDecrement("postCount")}
                      >
                        <CgMathMinus />
                      </button>
                      <span className="w-[39px] h-[36px] border-x border-[#B1B2B2] flex items-center justify-center">
                        {formData.postCount}
                      </span>
                      <button
                        className="h-[36px] w-[40px] flex items-center justify-center"
                        type="button"
                        onClick={() => handleIncrement("postCount")}
                      >
                        <CgMathPlus />
                      </button>
                    </div>
                  </div>

                  {/* Reel Count */}
                  <div>
                    <div
                      className={
                        formData.reelCount > 0
                          ? "flex flex-col border-2 border-[#0066FF] items-center justify-center w-[144px] h-[132px] bg-[#E9F2FF] rounded-[10px]"
                          : "flex flex-col items-center border-2 border-black justify-center w-[144px] h-[132px] bg-[#F6F6F6] rounded-[10px]"
                      }
                    >
                      <SlSocialYoutube
                        size={"24px"}
                        className="text-[#B4B5BF]"
                      />
                      <p className="text-[16px]">Reel</p>
                    </div>
                    <div className="flex flex-row font-semibold w-[122px] ml-3 mt-3 border border-[#B1B2B2] rounded-md">
                      <button
                        className="h-[36px] w-[40px] flex items-center justify-center"
                        type="button"
                        onClick={() => handleDecrement("reelCount")}
                      >
                        <CgMathMinus />
                      </button>
                      <span className="w-[39px] h-[36px] border-x border-[#B1B2B2] flex items-center justify-center">
                        {formData.reelCount}
                      </span>
                      <button
                        className="h-[36px] w-[40px] flex items-center justify-center"
                        type="button"
                        onClick={() => handleIncrement("reelCount")}
                      >
                        <CgMathPlus />
                      </button>
                    </div>
                  </div>

                  {/* Story Count */}
                  <div>
                    <div
                      className={
                        formData.storyCount > 0
                          ? "flex flex-col border-2 border-[#0066FF] items-center justify-center w-[144px] h-[132px] bg-[#E9F2FF] rounded-[10px]"
                          : "flex flex-col items-center border-2 border-black justify-center w-[144px] h-[132px] bg-[#F6F6F6] rounded-[10px]"
                      }
                    >
                      <HiOutlineVideoCamera
                        size={"24px"}
                        className="font-bold text-[#B4B5BF]"
                      />
                      <p className="text-[16px]">Story</p>
                    </div>
                    <div className="flex flex-row font-semibold w-[122px] ml-3 mt-3 border border-[#B1B2B2] rounded-md">
                      <button
                        className="h-[36px] w-[40px] flex items-center justify-center"
                        type="button"
                        onClick={() => handleDecrement("storyCount")}
                      >
                        <CgMathMinus />
                      </button>
                      <span className="w-[39px] h-[36px] border-x border-[#B1B2B2] flex items-center justify-center">
                        {formData.storyCount}
                      </span>
                      <button
                        type="button"
                        className="h-[36px] w-[40px] flex items-center justify-center"
                        onClick={() => handleIncrement("storyCount")}
                      >
                        <CgMathPlus />
                      </button>
                    </div>
                  </div>
                </div>
                {errors.postCountError &&
                  errors.reelCountError &&
                  errors.storyCountError && (
                    <p className="text-red-500 flex text-sm">
                      <span>
                        <RiErrorWarningLine className="m-1" />
                      </span>
                      {errors.postCountError ||
                        errors.reelCountError ||
                        errors.storyCountError}
                    </p>
                  )}
              </div>

              {/* Payment */}

              <div className="my-4">
                <div>
                  <label className="text-[18px]">
                    Select Mode of Compensation{" "}
                    <sup className="text-[#2463eb]">*</sup>
                  </label>
                  <div className="flex flex-row gap-6 my-4">
                    {/* Payment */}
                    <div>
                      <div
                        onClick={() => handleCompensationSelection("payment")}
                        className={`flex cursor-pointer flex-col border-2 items-center justify-center w-[144px] h-[132px] rounded-[10px] 
            ${
              formData.payment
                ? "border-[#0066FF] bg-[#E9F2FF]"
                : "border-black bg-[#F6F5F8]"
            }`}
                      >
                        <LuCreditCard
                          size={"24px"}
                          className="text-[#B4B5BF]"
                        />
                        <p className="text-[16px]">Payment</p>
                      </div>
                    </div>

                    {/* Product */}
                    <div>
                      <div
                        onClick={() => handleCompensationSelection("product")}
                        className={`flex cursor-pointer flex-col border-2 items-center justify-center w-[144px] h-[132px] rounded-[10px] 
            ${
              formData.product
                ? "border-[#0066FF] bg-[#E9F2FF]"
                : "border-black bg-[#F6F5F8]"
            }`}
                      >
                        <MdOutlineShoppingCart
                          size={"30px"}
                          className="text-[#B4B5BF]"
                        />
                        <p className="text-[16px]">Product</p>
                      </div>
                    </div>

                    {/* Other */}
                    <div>
                      <div
                        onClick={() => handleCompensationSelection("others")}
                        className={`flex cursor-pointer flex-col border-2 items-center justify-center w-[144px] h-[132px] rounded-[10px] 
            ${
              formData.others
                ? "border-[#0066FF] bg-[#E9F2FF]"
                : "border-black bg-[#F6F5F8]"
            }`}
                      >
                        <MdOutlineShoppingCart
                          size={"30px"}
                          className="font-bold text-[#B4B5BF]"
                        />
                        <p className="text-[16px]">Other</p>
                      </div>
                    </div>
                  </div>

                  {/* Display validation error for compensation */}
                  {errors.compensation && (
                    <p className="text-red-500 flex text-sm mt-2">
                      <span>
                        <RiErrorWarningLine className="m-1" />
                      </span>
                      {errors.compensation}
                    </p>
                  )}
                </div>

                {/* Payment, Product, and Other sections */}
                <div>
                  {formData.payment && (
                    <div className="mt-6">
                      <h1 className="text-[18px]">
                        Enter Amount <sup className="text-[#2463eb]">*</sup>
                      </h1>
                      <input
                        className={`border-[0.7px] w-[500px] mt-2 border-[#363939] rounded-lg px-[19px] py-3 gap-2.5 my-2 focus:outline-none focus:border-[#0066FF] 
          ${errors.amount ? "border-red-500" : ""}`}
                        type="number"
                        name="amount"
                        id="amount"
                        placeholder="$ Amount"
                        value={formData.amount || ""}
                        onChange={handleChange}
                        onFocus={() => handleFieldFocus("amount")} // Clear error on focus
                      />
                      {errors.amount && (
                        <p className="text-red-500 flex text-sm">
                          <span>
                            <RiErrorWarningLine className="m-1" />
                          </span>
                          {errors.amount}
                        </p>
                      )}
                    </div>
                  )}

                  {formData.product && (
                    <div className="mt-4">
                      <h1 className="text-[18px]">
                        Product Description{" "}
                        <sup className="text-[#2463eb]">*</sup>
                      </h1>
                      <textarea
                        className={`border-[0.7px] mt-2 h-[120px] border-[#363939] rounded-lg w-[500px] px-[19px] p-4 gap-2.5 focus:outline-none focus:border-[#384edd] 
          ${errors.productDescription ? "border-red-500" : ""}`}
                        name="productDescription"
                        id="productDescription"
                        placeholder="Tell influencers about the product or add link"
                        value={formData.productDescription || ""}
                        onChange={handleChange}
                        onFocus={() => handleFieldFocus("productDescription")} // Clear error on focus
                      />
                      {errors.productDescription && (
                        <p className="text-red-500 flex text-sm">
                          <span>
                            <RiErrorWarningLine className="m-1" />
                          </span>
                          {errors.productDescription}
                        </p>
                      )}
                    </div>
                  )}

                  {formData.others && (
                    <div className="mt-4">
                      <h1 className="text-[18px]">
                        Add Description <sup className="text-[#2463eb]">*</sup>
                      </h1>
                      <textarea
                        className={`border-[0.7px] mt-2 h-[120px] border-[#363939] rounded-lg w-[500px] px-[19px] p-4 gap-2.5 focus:outline-none focus:border-[#384edd] 
          ${errors.otherDescription ? "border-red-500" : ""}`}
                        name="otherDescription"
                        id="otherDescription"
                        placeholder="Add description or add link"
                        value={formData.otherDescription || ""}
                        onChange={handleChange}
                        onFocus={() => handleFieldFocus("otherDescription")} // Clear error on focus
                      />
                      {errors.otherDescription && (
                        <p className="text-red-500 flex text-sm">
                          <span>
                            <RiErrorWarningLine className="m-1" />
                          </span>
                          {errors.otherDescription}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* upload file */}
              <div>
                {/* upload display */}
                <div className="my-4">
                  <h1 className="text-[18px] font-normal">
                    Upload Brand Assets<sup className="text-[#2463eb]">*</sup>
                  </h1>
                  <p className="mt-3 text-[14px] font-body text-[#57595A]">
                    Upload your Brands assets like logo, graphics & much more.
                    These can be used by Influencers for better marketing!
                  </p>

                  {Array.isArray(campData.uploadData) &&
                    campData.uploadData.length > 0 && (
                      <div className="mt-3 flex gap-2 flex-wrap">
                        {campData.uploadData.map((asset, index) => (
                          <div
                            key={index}
                            className="bg-[#f9f9f9] border-[1px] border-[#363939] flex items-center justify-between px-3 gap-2 p-2 w-[400px] rounded-[10px] mt-2"
                          >
                            <div className="flex items-center pl-2 gap-3">
                              {/* <PiImageBold className="text-[#384EDD] text-3xl" /> */}
                              <img src={fileImg} alt="file" />
                              <span>{asset.name}</span>
                            </div>
                            <div className="flex  items-center gap-6 ">
                              <IoIosCheckmark className=" text-2xl bg-[#22c55e] rounded-full text-white" />
                              <button
                                className="text-3xl "
                                onClick={() => handleRemoveAsset(index)}
                              >
                                &times;
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                </div>
                <div className="my-2 flex flex-row gap-9">
                  {/* upload-- */}
                  <label htmlFor="file">
                    <div className="flex items-center mt-3 justify-center py-3 w-44 cursor-pointer border rounded-[10px] bg-[#0066FF]">
                      <span className="text-sm font-semibold text-white">
                        Upload Assets
                      </span>
                      <input
                        type="file"
                        id="file"
                        multiple
                        onChange={handleUpload}
                        className="sr-only"
                      />
                    </div>
                  </label>
                  {/* Display validation error for file upload */}
                  {errors.addUpload && (
                    <p className="text-red-500 text-sm flex items-center mt-2">
                      <span>
                        <RiErrorWarningLine className="m-1" />
                      </span>
                      {errors.addUpload}
                    </p>
                  )}
                </div>
              </div>

              {/* additional information */}
              <div className="my-4">
                <h1 className="text-[18px] font-body font-normal">
                  Additional Information
                </h1>
                <p className="mt-3 text-[#57595A]">
                  Add any special requests or any additional information you
                  might want to add
                </p>
                <textarea
                  className={`border-[0.7px] mt-3 h-[120px] resize-none border-[#363939] rounded-lg w-full px-[20px] py-[19px] gap-2.5 focus:outline-none focus:border-[#0066FF] `}
                  name="addDescription"
                  id="addDescription"
                  placeholder="Write Additional information"
                  value={formData.addDescription || ""}
                  onChange={handleChange}
                />
              </div>

              {/* button */}
              <div className="flex  justify-end my-20">
                <div>
                  <button
                    value="save"
                    className="w-[150px] mr-2  py-3 text-white rounded-[10px] bg-[#0066FF] "
                  >
                    Save
                  </button>

                  <button
                    type="submit"
                    onClick={handleNext}
                    className="w-[150px] mr-2  py-3 text-white rounded-[10px] bg-[#0066FF] "
                  >
                    Next
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

       
      </div>

      <div>
          <CampaignSummary
            className={` ${isModalVisible ? "hidden" : "block"}`}
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
        </div>
    </>
  );
};


export default AddCampaign;
