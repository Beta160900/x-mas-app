"use client";
import { ITEM } from "@/constants/ITEMNAME";
import Facade from "./facade";
import { useState } from "react";
import {
  MARGINLEFT,
  MARGINTOP,
  BOXTOP,
  BOXLEFT,
  ROTATION,
  CANE_FLIPX,
} from "@/constants/decor_const";

type DecorOnTreeProps = {
  position: number;
  type: number;
  display?: boolean;
  displayMessage?: boolean;
  sender?: string;
  message?: string;
  onFacadeChange?: (isOpen: boolean) => void; //ชั่วคราวแก้facadeปิดไม่หมดหน้า
};

const DecorOnTree = ({
  position,
  type,
  display,
  displayMessage,
  sender,
  message,
  onFacadeChange,
}: DecorOnTreeProps) => {
  const [isClicked, setClicked] = useState(false);

  const handleClosed = () => {
    setClicked(false);
    onFacadeChange?.(false);
  };

  const handleOpen = () => {
    setClicked(true);
    onFacadeChange?.(true);
  };
  const ITEM_component = ITEM[type];
  if (display && position >= 0 && position <= 8) {
    return (
      <>
        {/**
         * <img
          draggable="false"
          onClick={handleOpen}
          src={`/assets/onTree/${ITEMNAME[type]}.svg`}
          className={`${
            type === 3 ? `scale-x-[${CANE_FLIPX[position]}]` : ""
          } absolute w-[55px] z-[65] scale-100 hover:scale-110`}
          style={{
            marginTop: MARGINTOP[position],
            marginLeft: MARGINLEFT[position],
            transform: `rotate(${ROTATION[position]}) scaleX(${
              type === 3 ? CANE_FLIPX[position] : "1"
            })`,
          }}
        ></img>
         */}
        <ITEM_component
          onClick={handleOpen}
          className={`${
            type === 3 ? `scale-x-[${CANE_FLIPX[position]}]` : ""
          } absolute w-[55px] z-65 scale-100 hover:scale-110`}
          style={{
            marginTop: MARGINTOP[position],
            marginLeft: MARGINLEFT[position],
            transform: `rotate(${ROTATION[position]}) scaleX(${
              type === 3 ? CANE_FLIPX[position] : "1"
            })`,
          }}
        />

        {displayMessage && (
          <div
            className="text-[15px] absolute z-70 text-center grad-commonred p-2 rounded-full text-white font-bold font-inter-noto shadow-2xl text-nowrap max-w-40 overflow-clip"
            style={{
              marginTop: BOXTOP[position],
              marginLeft: BOXLEFT[position],
            }}
          >
            {sender}
          </div>
        )}

        {displayMessage ? (
          <Facade
            returnedClosed={handleClosed}
            isOpen={isClicked}
            message={String(message)}
            sender={String(sender)}
          />
        ) : (
          <></>
        )}
      </>
    );
  } else {
    return <></>;
  }
};

export default DecorOnTree;
