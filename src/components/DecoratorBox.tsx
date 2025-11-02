"use client";

import { useRouter } from "next/navigation";
import { ITEM } from "@/constants/ITEMNAME";

const DecoratorBox = ({
  typeNumber,
  selecting,
}: {
  typeNumber: number;
  selecting: number;
}) => {
  const router = useRouter();
  function handleSelect() {
    return router.push(`?page=-1&item=${typeNumber}`);
  }
  const ITEM_component = ITEM[typeNumber];

  return (
    <>
      <div
        onClick={handleSelect}
        className={`transition-all rounded-[7.5px] w-[85px] h-[85px] decorator-box flex justify-center mt-2 mb-2 ${
          typeNumber === selecting
            ? "border-white border-[3px] border-spacing-[5px]"
            : ""
        } items-center`}
      >
        {/**
         *<img
          className="w-[50px] "
          src={`/assets/onTree/${ITEMNAME[typeNumber]}.svg`}
        ></img>
        <ITEM_component className="w-[50px] pointer-events-auto" />
         */}
        <ITEM_component className="w-[50px] pointer-events-none" />
      </div>
    </>
  );
};

export default DecoratorBox;
