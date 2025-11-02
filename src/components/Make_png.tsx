"use client";
import { elementType } from "@/type/treeType";
import Moon from "@/vector/assets/moon";
import {
  MOON_X,
  MOON_Y,
  BACKGROUND,
  WIDTH,
  TRANS_X,
} from "@/constants/bg_const";
import TreeVec from "@/vector/assets/tree";

import { ITEM } from "@/constants/ITEMNAME";

import {
  MARGINLEFT,
  MARGINTOP,
  ROTATION,
  CANE_FLIPX,
} from "@/constants/decor_const";
import { receivedDataType } from "@/type/treeType";

const blankFiller = {
  page: -1,
  position: -1,
  type: -1,
  sender: "",
  message: "",
};

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
  const ITEM_component = ITEM[type];
  if (display && position >= 0 && position <= 8) {
    return (
      <>
        <ITEM_component
          className={`${
            type === 3 ? `scale-x-[${CANE_FLIPX[position]}]` : ""
          } absolute w-[55px] z-65 scale-100`}
          style={{
            marginTop: MARGINTOP[position],
            marginLeft: MARGINLEFT[position],
            transform: `rotate(${ROTATION[position]}) scaleX(${
              type === 3 ? CANE_FLIPX[position] : "1"
            })`,
          }}
        />
      </>
    );
  } else {
    return <></>;
  }
};

const Make_png = (data: receivedDataType) => {
  const receivedData = data;

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
  const Bg_component = BACKGROUND[receivedData.background];
  const moonX = MOON_X[receivedData.background];
  const moonY = MOON_Y[receivedData.background];

  return (
    <>
      <div className="h-[960px] w-[540px] flex flex-col justify-end">
        <div className="w-full h-[900px] overflow-hidden relative bg-(--sky-intro,radial-gradient(89.44%_41.26%_at_50%_54.46%,#00504c_0%,#012e34_100%))">
          {/* bg zone */}
          <div className="relative z-4 mt-[190px] flex flex-col items-end w-full justify-center">
            <div className="flex justify-center">
              <Bg_component
                className="relative z-3 max-w-none max-h-[56vh] overflow-visible h-auto"
                style={{
                  width: bgCurrentWidth,
                  transform: `translateX(${TRANS_X[receivedData.background]})`,
                }}
              />
            </div>
            <div className="bg-white z-2 w-full h-[25vh]"></div>
          </div>
          <Moon
            className="absolute z-1 transition-all w-[170px]"
            style={{
              top: moonY,
              left: moonX,
            }}
          />
          <div className="absolute z-50 flex w-full justify-center top-5">
            <div className="flex flex-col text-center">
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
          <div
            draggable="false"
            className="flex z-50 w-full justify-center items-center absolute top-0 left-0 h-full"
          >
            <TreeVec className="min-w-[362px] w-[362px] h-auto mt-[-1vh] z-50 overflow-visible" />

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
        </div>
      </div>
    </>
  );
};
export default Make_png;
