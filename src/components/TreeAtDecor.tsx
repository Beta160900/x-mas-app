import Background from "./Background";
import Tree from "./Tree";
import { elementType, receivedDataType } from "@/type/treeType";

type TreeAtDecorProps = {
  receivedData: receivedDataType;
  pageElements: elementType[];
};

const TreeAtDecor = ({ receivedData, pageElements }: TreeAtDecorProps) => {
  return (
    <>
      <Background var={receivedData.background} />
      <div className="absolute z-50 flex w-full justify-center top-5 anim-intro-fadeIn">
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
      <Tree treeData={pageElements} displayMessage={false} />
    </>
  );
};

export default TreeAtDecor;
