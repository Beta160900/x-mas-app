import { useParams } from "next/navigation"
import { SAMPLEDATA } from "@/constants/SAMPLEDATA";
import { useState } from "react";
import PreviewTree from "@/components/PreviewTree";

const CreatorPreview = () => {
  //fetch API here
  const { id } = useParams();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isPopUp, setPopUp] = useState(false);

  const textToCopy = String(`https://xmas.tucm.cc/t/${id}`);
  const [copyStatus, setCopyStatus] = useState("");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopyStatus("success");
      setPopUp(true);
      setTimeout(() => setCopyStatus(""), 4000);
      setTimeout(() => setPopUp(false), 4900);
    } catch (err) {
      setCopyStatus("failed");
    }
  };

  function handleClosed() {
    setModalOpen(false);
  }

  function handleOpen() {
    setModalOpen(true);
  }

  return (
    <>
      <div className="preview-bg">
        <div className="flex flex-col items-center py-[20px] justify-between h-full max-h-[95vh]">
          <p className="text-center text-grad-effect grad-commonred text-[35.2px] font-bold">
            PREVIEW
          </p>
          <div className="w-[301.5px] h-[542.5px] sky-intro rounded-[24.5px]"></div>{" "}
          {/** FOR PREVIEW BOX; DIDNT ADD YET */}
          <div className="flex flex-row justify-evenly w-[393px]">
            <div className="w-[124px] h-[41px] flex flex-row grad-commonred items-center justify-center rounded-[20.6px]">
              <p className="text-white">SAVE</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M3.25781 13.0304L3.25781 13.8449C3.25781 15.1942 4.35168 16.2881 5.70104 16.2881L13.8451 16.2881C15.1945 16.2881 16.2884 15.1942 16.2884 13.8449L16.2884 13.0304M13.0307 9.77281L9.77309 13.0304M9.77309 13.0304L6.51545 9.77281M9.77309 13.0304L9.77309 3.25753"
                  stroke="white"
                  stroke-width="1.22162"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div
              onClick={handleOpen}
              className="w-[156px] h-[41px] flex flex-row grad-commonred items-center justify-center rounded-[20.6px]"
            >
              <p className="text-white">GET LINK</p>
              <img className="pl-[5px]" src="/assets/icon/linkIcon.svg"></img>
            </div>
          </div>
          <div className="flex flex-row w-[393px] px-[40px] justify-between">
            <div className="flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="21"
                viewBox="0 0 19 21"
                fill="none"
              >
                <path
                  d="M11.875 4.375L6.33333 10.5L11.875 16.625"
                  stroke="url(#paint0_radial_998_292)"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_998_292"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(-4.06832 9.30197 30.5942 8.67678 9.37977 10.2599)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#C9333C" />
                    <stop offset="0.844685" stop-color="#992129" />
                    <stop offset="1" stop-color="#901E25" />
                  </radialGradient>
                </defs>
              </svg>
              <a href="/create/new">
                <p className="text-[20px] text-grad-effect grad-commonred">
                  BACK
                </p>
              </a>
            </div>
            <div className="flex flex-row items-center">
              <a href={`/create/${id}`}>
                <p className="text-[20px] text-grad-effect grad-commonred underline italic font-bold decoration-[#901E25]">
                  GO TO YOUR TREE
                </p>
              </a>
              <svg
                className="scale-x-[-1]"
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="21"
                viewBox="0 0 19 21"
                fill="none"
              >
                <path
                  d="M11.875 4.375L6.33333 10.5L11.875 16.625"
                  stroke="url(#paint0_radial_998_292)"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_998_292"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(-4.06832 9.30197 30.5942 8.67678 9.37977 10.2599)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#C9333C" />
                    <stop offset="0.844685" stop-color="#992129" />
                    <stop offset="1" stop-color="#901E25" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
          {isModalOpen ? (
            <>
              <div className="preview-facade flex flex-col items-center justify-center">
                <div className="rounded-[20.6px] grad-commonred w-[349px] h-[94px] flex flex-col justify-between items-center py-[15px] px-[26px] mb-[10vh]">
                  <div className="flex flex-row justify-between w-[300px]">
                    <p className="text-[15.4px] text-white">
                      CLICK TO COPY THE LINK!
                    </p>
                    <button onClick={handleClosed}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M0.15133 8.38414C-0.0475087 8.58298 -0.0533569 8.92218 0.15133 9.12101C0.356017 9.31985 0.695213 9.31985 0.894052 9.12101L4.6369 5.37816L8.37975 9.12101C8.57859 9.31985 8.92364 9.3257 9.12248 9.12101C9.32132 8.91633 9.32132 8.58298 9.12248 8.38414L5.37963 4.63544L9.12248 0.89259C9.32132 0.693751 9.32716 0.354555 9.12248 0.155716C8.91779 -0.048971 8.57859 -0.048971 8.37975 0.155716L4.6369 3.89857L0.894052 0.155716C0.695213 -0.048971 0.350169 -0.0548192 0.15133 0.155716C-0.0475087 0.360403 -0.0475087 0.693751 0.15133 0.89259L3.89418 4.63544L0.15133 8.38414Z"
                          fill="#FFFFFF"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="w-[319px] h-[36px] bg-white rounded-[20.6px] flex flex-row justify-evenly place-items-center">
                    <p className="text-grad-effect grad-commonred">
                      https://xmas.tucm.cc/t/{id}
                    </p>
                    <button onClick={handleCopy}>
                      <img src="/assets/icon/copytabRed.svg"></img>
                    </button>
                  </div>
                </div>
                <div className="w-[92px] h-[41px] text-center items-center">
                  <p className="">DONE</p>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default CreatorPreview;
