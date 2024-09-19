import React, { useContext } from "react";
import { Mycontext } from "../../../utils/Context";
import { IoMdArrowRoundBack } from "react-icons/io";
import { PiImageBold } from "react-icons/pi";

const CampaignSummary = ({ isModalVisible, setIsModalVisible }) => {
  const { campData, setCampData } = useContext(Mycontext);
  // const [selectedFiles, setSelectedFiles] = useState([]);

  // const handleFileChange = (event) => {
  //   const files = Array.from(event.target.files);
  //   setSelectedFiles(files);
  //   setCampData({ ...campData, uploadData: [...campData.uploadData, ...files] });
  // };

  const handleRemoveAsset = (index) => {
    const newUploadData = campData.uploadData.filter((_, i) => i !== index);
    setCampData({ ...campData, uploadData: newUploadData });
  };

  const handleSaveDraft = () => {
    localStorage.setItem('campaignDraft', JSON.stringify(campData));
    alert('Draft saved successfully!');
  };

  const handleLaunchCampaign = () => {
    localStorage.setItem('campaignData', JSON.stringify(campData));
    alert('Campaign launched successfully!');
    setIsModalVisible(false);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      {isModalVisible && (
        <div className="fixed inset-0 top-0  z-50 flex items-center justify-center bg-[#0000004d] bg-opacity-50">
          <div className="bg-white absolute left-[38%] top-[2%] w-[550px]  p-4 rounded-md">
            <div className="flex gap-2 items-center cursor-pointer" onClick={closeModal}>
              <IoMdArrowRoundBack />
              <span className="text-[14px] font-normal font-body">Campaign Preview</span>
            </div>

            <div className="p-5 text-start">
              <h1 className="text-[26px] font-body font-semibold text-[#0066FF]">{campData.campaignName}</h1>
              <p className="text-[12px] font-body font-normal text-[#797A7B]">{campData.description}</p>

              <div className="py-6">
                {/* Platform */}
                <div className="flex justify-between py-2">
                  <div className="text-[12px] font-body font-normal text-[#797A7B]">Platform:</div>
                  <div className="text-[14px] font-body font-normal text-[#000000]">
                    {campData.selectedOptionsplatform?.map(option => option.label).join(", ")}
                  </div>
                </div>

                {/* Location */}
                <div className="flex justify-between py-2">
                  <div className="text-[12px] font-body font-normal text-[#797A7B]">Location:</div>
                  <div className="text-[14px] font-body font-normal text-[#000000]">
                    {campData.selectedOptionslocation?.map(option => option.label).join(", ")}
                  </div>
                </div>

                {/* Start Date */}
                <div className="flex justify-between py-2">
                  <div className="text-[12px] font-body font-normal text-[#797A7B]">Start Date:</div>
                  <div className="text-[14px] font-body font-normal text-[#000000]">{campData.startDate}</div>
                </div>

                {/* End Date */}
                <div className="flex justify-between py-2">
                  <div className="text-[12px] font-body font-normal text-[#797A7B]">End Date:</div>
                  <div className="text-[14px] font-body font-normal text-[#000000]">{campData.endDate}</div>
                </div>

                {/* Deliverables */}
                <div className="flex justify-between py-2">
                  <div className="text-[12px] font-body font-normal text-[#797A7B]">Deliverables:</div>
                  <div className="flex items-center gap-2">
                    {campData.postCount > 0 && (
                      <div className="bg-[#e8fff0] text-[#1f2223] text-[14px] font-normal font-body px-3 py-1 rounded-full">
                        {campData.postCount} x post
                      </div>
                    )}
                    {campData.reelCount > 0 && (
                      <div className="bg-[#e8fff0] text-[#1f2223] text-[14px] font-normal font-body px-3 py-1 rounded-full">
                        {campData.reelCount} x reel
                      </div>
                    )}
                    {campData.storyCount > 0 && (
                      <div className="bg-[#e8fff0] text-[#1f2223] text-[14px] font-normal font-body px-3 py-1 rounded-full">
                        {campData.storyCount} x story
                      </div>
                    )}
                  </div>
                </div>

                {/* Compensation */}
                {/* <div className="flex justify-between py-2">
                  <div className="text-[12px] font-body font-normal text-[#797A7B]">Compensation:</div>
                  <div className="text-[14px] font-body font-normal text-[#000000]">Payment / ${campData.amount}</div>
                </div> */}

<div className="flex justify-between py-2">
  <div className="text-[12px] font-body font-normal text-[#797A7B]">Compensation:</div>

  <div className="text-[14px] font-body  gap-3 font-normal text-[#000000]">
  <span>{campData.payment && `Payment / $${campData.amount}`}</span>

    <span>  {campData.product && `Product / ${campData.productDescription}`} </span>
    <span>{campData.others && `Other / ${campData.otherDescription}`} </span>
  </div>
</div>





                
              </div>

              <div>
                <h1 className="text-[14px] font-body font-normal text-[#1F2223]">Additional information</h1>
                <p className="text-[12px] font-body font-normal text-[#797A7B] py-2">
                  {campData.addDescription}
                </p>
              </div>

              <div className="py-2">
                <h1 className="text-[14px] font-body font-normal text-[#1F2223]">Brand Assets:</h1>
                {/* Show brand assets if any */}
               
                {Array.isArray(campData.uploadData) && campData.uploadData.length > 0 ? (
                  <div className="mt-3 flex gap-2 flex-wrap">
                    {campData.uploadData.map((asset, index) => (
                      <div
                        key={index}
                        className="bg-[#f9f9f9] mr-2 border-[1px] border-[#363939] flex items-center justify-between px-3 gap-2 p-1 w-[216.5px] rounded-[10px] mt-2"
                      >
                        <div className="flex items-center gap-2">
                          <PiImageBold className="text-[#384EDD] text-xl" />
                          <span>{asset.name}</span>
                        </div>
                        <button
                          className="text-xl font-bold"
                          onClick={() => handleRemoveAsset(index)}
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-[12px] font-body font-normal text-[#797A7B]">No brand assets uploaded</p>
                )}
              </div>

              <div className="py-5">
                <button className="bg-gradient-to-r from-[#1E3BDD] to-[#D21DD5] border border-solid border-blue-600 text-white w-full px-14 py-3 rounded-[6px]" onClick={handleLaunchCampaign}>
                  <span className="text-[16px] font-body font-semibold">Launch campaign</span>
                </button>
              </div>
              <div className="text-center">
                <button onClick={handleSaveDraft} className="text-[16px] cursor-pointer font-body font-normal text-[#0062F5]">
                  Save draft
                </button>
              </div>

              <div>
                <p className="text-[12px] font-body font-normal py-2">
                  Note: <span className="text-[#797A7B]">After launching the campaign, the selected amount will be deducted from your wallet (only if you have selected payment as mode of compensation).</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CampaignSummary;
