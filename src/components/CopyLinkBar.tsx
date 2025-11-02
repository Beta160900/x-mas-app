import { useState } from "react";
import CopyTabWhite from "@/vector/assets/icon/copyTabWhite";

type CopyLinkBarProps = {
  id: string;
  FacadeOpen: boolean; // optional facade
};

const CopyLinkBar = ({ id, FacadeOpen }: CopyLinkBarProps) => {
  const textToCopy = String(`http://localhost:3000/t/${id}`);
  const [copyStatus, setCopyStatus] = useState("");

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

  const [isExtend, setExtend] = useState(false);
  const [isPopUp, setPopUp] = useState(false);
  function UpdateBar() {
    if (!isExtend) {
      setExtend(true);
    }
  }

  return (
    <>
      <div
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 z-100 flex w-full justify-center ${
          FacadeOpen ? "hidden" : ""
        }`}
      >
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
        <div
          onClick={UpdateBar}
          className="transition-all grad-commonred z-50 text-white font-bold p-3 text-center rounded-full cursor-pointer"
          style={{
            width: !isExtend ? "200px" : "320px",
            fontSize: !isExtend ? "20px" : "15px",
          }}
        >
          <div className="flex flex-row justify-evenly">
            <p>{!isExtend ? "Copy Link" : textToCopy}</p>
            <button onClick={handleCopy}>
              {/**
               * <img
                className="w-[20px]"
                src="/assets/icon/copyTabWhite.svg"
              ></img>
               */}
              <CopyTabWhite className="w-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CopyLinkBar;
