"use client"; // ✅ MUST be at the top

import { useRouter } from "next/navigation";
import { ITEMNAME } from "@/constants/ITEMNAME";

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

  return (
    <>
      <div
        onClick={handleSelect}
        className={`transition-all rounded-[7.5px] w-[85px] h-[85px] decorator-box flex justify-center ${
          typeNumber === selecting
            ? "border-white border-[3px] border-spacing-[5px]"
            : ""
        } items-center`}
      >
        <img
          className="w-[50px]"
          src={`/assets/onTree/${ITEMNAME[typeNumber]}.svg`}
        ></img>
      </div>
    </>
  );
};

export default DecoratorBox;
