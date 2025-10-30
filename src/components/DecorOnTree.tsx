import { ITEMNAME } from "@/constants/ITEMNAME";
import Facade from "./facade";
import { useState } from "react";

const MARGINTOP = [
  "-220px",
  "-150px",
  "-50px",
  "50px",
  "130px",
  "50px",
  "250px",
  "180px",
  "260px",
];
const MARGINLEFT = [
  "-40px",
  "100px",
  "-20px",
  "-140px",
  "-10px",
  "170px",
  "-170px",
  "90px",
  "220px",
];

const BOXTOP = [
  "-270px",
  "-220px",
  "-90px",
  "150px",
  "90px",
  "-60px",
  "350px",
  "310px",
  "170px",
];
const BOXLEFT = [
  "-180px",
  "250px",
  "-200px",
  "-240px",
  "70px",
  "270px",
  "-300px",
  "90px",
  "300px",
];

const ROTATION = [
  "10deg",
  "-10deg",
  "5deg",
  "10deg",
  "5deg",
  "-10deg",
  "15deg",
  "-5deg",
  "-15deg",
];
const CANE_FLIPX = ["1", "-1", "1", "1", "1", "-1", "-1", "1", "-1"];
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

  if (display && position >= 0 && position <= 8) {
    return (
      <>
        <img
          draggable="false"
          onClick={handleOpen}
          src={`/assets/onTree/${NAME[type]}.svg`}
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

        {displayMessage && (
          <div
            className="text-[15px] absolute z-[70] text-center grad-commonred p-2 rounded-full text-white font-bold font-inter-noto shadow-2xl text-nowrap max-w-[160px] overflow-clip"
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
