"use client";

import { SAMPLEDATA } from "@/constants/SAMPLEDATA";
import { elementType } from "@/type/treeType";
import {
  MOON_X,
  MOON_Y,
  BACKGROUND,
  WIDTH,
  TRANS_X,
} from "@/constants/bg_const";
import { useRef } from "react";
import html2canvas from "html2canvas";
import { ITEMNAME } from "@/constants/ITEMNAME";

import {
  MARGINLEFT,
  MARGINTOP,
  ROTATION,
  CANE_FLIPX,
} from "@/constants/decor_const";

const blankFiller = {
  page: -1,
  position: -1,
  type: -1,
  sender: "",
  message: "",
};

const NAME = ITEMNAME;

type DecorOnTreeProps = {
  position: number;
  type: number;
  display?: boolean;
  displayMessage?: boolean;
  sender?: string;
  message?: string;
  onFacadeChange?: (isOpen: boolean) => void; //ชั่วคราวแก้facadeปิดไม่หมดหน้า
};

const DecorOnTree = ({ position, type, display }: DecorOnTreeProps) => {
  if (display && position >= 0 && position <= 8) {
    return (
      <>
        <img
          draggable="false"
          src={`/assets/onTree/${NAME[type]}.svg`}
          className={`${
            type === 3 ? `scale-x-[${CANE_FLIPX[position]}]` : ""
          } absolute w-[55px] z-[65] scale-100`}
          style={{
            marginTop: MARGINTOP[position],
            marginLeft: MARGINLEFT[position],
            transform: `rotate(${ROTATION[position]}) scaleX(${
              type === 3 ? CANE_FLIPX[position] : "1"
            })`,
          }}
        ></img>
      </>
    );
  } else {
    return <></>;
  }
};

const Test = () => {
  const receivedData = SAMPLEDATA;
  const ref = useRef<HTMLDivElement>(null);

  //tree data
  const pageElements: elementType[] =
    receivedData?.elements?.filter((e: elementType) => e.page === 1) || [];
  const pageElementsList = [
    pageElements.find((item) => item.position === 0) ?? blankFiller,
    pageElements.find((item) => item.position === 1) ?? blankFiller,
    pageElements.find((item) => item.position === 2) ?? blankFiller,
    pageElements.find((item) => item.position === 3) ?? blankFiller,
    pageElements.find((item) => item.position === 4) ?? blankFiller,
    pageElements.find((item) => item.position === 5) ?? blankFiller,
    pageElements.find((item) => item.position === 6) ?? blankFiller,
    pageElements.find((item) => item.position === 7) ?? blankFiller,
    pageElements.find((item) => item.position === 8) ?? blankFiller,
  ];

  //bg data
  const bgCurrentWidth = WIDTH[receivedData.background];
  const bgCurrent = BACKGROUND[receivedData.background];
  const moonX = MOON_X[receivedData.background];
  const moonY = MOON_Y[receivedData.background];

  const handleExport = async () => {
    if (ref.current) {
      console.log("dowloading");

      const canvas = await html2canvas(ref.current, { useCORS: true });
      const link = document.createElement("a");
      link.download = "tree.png"; // PNG recommended
      link.href = canvas.toDataURL("image/png");
      link.click();
    }
    console.log("don't see ref");
  };

  //className="fixed h-[844px] w-[390px]"
  /*
   */
  return (
    <>
      <div className="h-[932px] w-[430px] border-1" ref={ref}>
        <div className="w-full h-260 overflow-hidden relative bg-[var(--sky-intro,_radial-gradient(89.44%_41.26%_at_50%_54.46%,_#00504c_0%,_#012e34_100%))]">
          {/* bg zone */}
          <div className="relative z-[4] mt-[190px] flex flex-col items-end w-full justify-center border-2 border-red-400">
            <div className="flex justify-center border-4">
              <img
                draggable="false"
                className="relative z-[3] max-w-[none] max-h-[56vh] overflow-visible h-auto"
                src={`/assets/background/${bgCurrent}.svg`}
                style={{
                  width: bgCurrentWidth,
                  transform: `translateX(${TRANS_X[receivedData.background]})`,
                }}
              />
            </div>
            <div className="bg-white z-[2] w-full h-[25vh]"></div>
          </div>

          <img
            draggable="false"
            className="absolute z-[1] transition-all w-[170px]"
            style={{
              top: moonY,
              left: moonX,
            }}
            src="/assets/moon.svg"
          />
          {/* text zone */}
          <div className="absolute z-[50] flex w-full justify-center top-[20px]">
            <div className="flex flex-col text-center">
              <div className="align-top">
                <span className="text-white font-bold font-inter-noto text-[42px]">
                  {receivedData.name}
                </span>
                <span className="text-white font-milonga text-[25px] pl-[5px]">
                  ‘s
                </span>
              </div>
              <div className="text-white text-[25px] font-milonga mt-[-8px]">
                <span>Christmas Tree</span>
              </div>
            </div>
          </div>
          {/* tree zone */}
          <div
            draggable="false"
            className="flex z-[50] w-full justify-center items-center absolute top-0 left-0 h-full"
          >
            <img
              draggable="false"
              src="/assets/tree.svg"
              className="min-w-[362px] w-[362px] h-auto mt-[-1vh] z-[50] overflow-visible"
            ></img>

            {Array.from({ length: 9 }, (_, i) => (
              <DecorOnTree
                key={i}
                position={pageElementsList[i].position}
                type={pageElementsList[i].type}
                display={true}
                displayMessage={false}
                sender={pageElementsList[i].sender}
                message={pageElementsList[i].message}
              />
            ))}
          </div>
          {/* link bar zone */}
        </div>
      </div>
      <button
        onClick={handleExport}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
        style={{ position: "relative", zIndex: 9999 }}
      >
        Export as PNG
      </button>
    </>
  );
};

export default Test;
