"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Tree from "@/components/Tree";
import Loader from "@/components/loading";
import ErrorComponent from "@/components/error";
import { receivedDataType, elementType } from "@/type/treeType";
import Background from "@/components/Background";
import LinkIcon from "@/vector/assets/icon/linkIcon";
import CopyTabRed from "@/vector/assets/icon/copyTabRed";
import save_png from "@/components/save_png";

const CreatorPreview = () => {
  //fetch API here
  const { id } = useParams<{ id: string }>();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isPopUp, setPopUp] = useState(false);

  const textToCopy = String(`http://localhost:3000/t/${id}`);
  const [copyStatus, setCopyStatus] = useState("");

  const {
    isPending,
    isError,
    data: receivedData,
    error,
  } = useQuery<receivedDataType, Error>({
    queryKey: ["getdata", id],
    queryFn: async () => {
      if (!id) throw new Error("no id ;-;");
      const res = await fetch(
        `/api/tree/getElement?id=${encodeURIComponent(id)}`
      );
      const resJson = await res.json();
      if (!resJson.getElement) throw new Error("can't get element");
      return resJson.data;
    },
  });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopyStatus("success");
      setPopUp(true);
      setTimeout(() => setCopyStatus(""), 4000);
      setTimeout(() => setPopUp(false), 4900);
    } catch (err) {
      console.error(err);
      setCopyStatus("failed");
    }
  };

  function handleClosed() {
    setModalOpen(false);
  }

  function handleOpen() {
    setModalOpen(true);
  }

  if (isError) return <ErrorComponent message={`${error.message}`} />; // this need to be string
  if (isPending) return <Loader />;
  const pageElements = receivedData.elements.filter(
    (e: elementType) => e.page === 1
  );
  return (
    <>
      <div className="preview-bg">
        <div className="flex flex-col items-center py-5 justify-between h-full max-h-[95vh]">
          <p className="text-center text-grad-effect grad-commonred text-[35.2px] font-bold">
            PREVIEW
          </p>
          <div className="relative w-[301.5px] h-[542.5px] sky-intro rounded-[24.5px] overflow-hidden ">
            {/** FOR PREVIEW BOX; DIDNT ADD YET <PreviewTree
              pageElements={pageElements}
              receivedData={receivedData}
              <Background var={receivedData.background} />
            />*/}
            <div className="absolute z-50 flex w-full justify-start top-[7px] anim-intro-fadeIn">
              <div className="flex flex-col ml-5 text-left">
                <div className="align-top">
                  <span className="text-white font-bold font-inter-noto text-[42px]">
                    {receivedData.name}
                  </span>
                  <span className="text-white font-milonga text-[25px] pl-[5px]">
                    ‘s
                  </span>
                </div>
                <div className="text-white text-[25px] font-milonga -mt-2">
                  <span>Christmas Tree</span>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen scale-80">
              <Background var={receivedData.background} />
              <div className="absolute h-screen w-screen translate-y-10 z-10">
                <Tree treeData={pageElements} displayMessage={false} />
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-evenly w-[393px]">
            {/*dave button */}
            <div
              className="w-[124px] h-[41px] flex flex-row grad-commonred items-center justify-center rounded-[20.6px] hover:shadow-2xl"
              onClick={async () => {
                save_png(receivedData);
              }}
            >
              <p className="text-white ">SAVE</p>
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
            {/* get link buttton*/}
            <div
              onClick={handleOpen}
              className="w-[156px] h-[41px] flex flex-row grad-commonred items-center justify-center rounded-[20.6px] hover:shadow-2xl"
            >
              <p className="text-white">GET LINK</p>
              <LinkIcon className="ml-[5px]" />
            </div>
          </div>
          {/* back go to ur tree button */}
          <div className="flex flex-row w-[393px] px-10 justify-between">
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
              <Link href="/create/new">
                <p className="text-[20px] text-grad-effect grad-commonred hover:text-[23px]">
                  BACK
                </p>
              </Link>
            </div>
            <div className="flex flex-row items-center">
              <Link href={`/create/${id}`}>
                <p className="text-[20px] text-grad-effect grad-commonred underline italic font-bold decoration-[#901E25] hover:text-[23px]">
                  GO TO YOUR TREE
                </p>
              </Link>
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
                <div
                  className={`text-[13px] font-inter bottom-[100px] text-white absolute z-60 px-3 py-2 rounded-full 
                      ${
                        copyStatus === "success"
                          ? "anim-intro-easeIn visible"
                          : copyStatus === "" && isPopUp
                          ? "anim-outro-easeOut"
                          : "invisible"
                      }`}
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.50)",
                    backdropFilter: "blur(2px)",
                  }}
                >
                  Link Copied!
                </div>
                <div className="rounded-[20.6px] grad-commonred w-[349px] h-[94px] flex flex-col justify-between items-center py-[15px] px-[26px] mb-[4vh]">
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
                  <div className="w-[319px] h-9 bg-white rounded-[20.6px] flex flex-row justify-evenly place-items-center">
                    <p className="text-grad-effect grad-commonred">
                      {textToCopy}
                    </p>
                    <button onClick={handleCopy}>
                      <CopyTabRed />
                    </button>
                  </div>
                </div>
                <div className="w-[92px] h-[41px] flex flex-row grad-commonred items-center justify-center rounded-[20.6px]">
                  <p className="text-white" onClick={handleClosed}>
                    DONE
                  </p>
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

{
  /*<div className="flex flex-row justify-between w-[300px]">
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
                      http://localhost:3000/t/{id}
                    </p>
                    <button onClick={handleCopy}>
                      <img src="/assets/icon/copytabRed.svg"></img>
                    </button>
                  </div> */
}

export default CreatorPreview;
