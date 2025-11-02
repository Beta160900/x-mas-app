import {
  MOON_X,
  MOON_Y,
  BACKGROUND,
  WIDTH,
  TRANS_X,
} from "@/constants/bg_const";
import Moon from "@/vector/assets/moon";

const Background = ({ var: bgIndex }: { var: number }) => {
  const bgCurrentWidth = WIDTH[bgIndex];
  const BgComponent = BACKGROUND[bgIndex];
  const moonX = MOON_X[bgIndex];
  const moonY = MOON_Y[bgIndex];

  return (
    <>
      <div className="fixed bottom-0 z-4 flex flex-col items-end w-full pointer-events-none justify-center">
        <div className="flex min-w-screen justify-center">
          <BgComponent
            className={`relative z-3 overflow-visible h-auto`}
            style={{
              width: bgCurrentWidth,
              transform: `translateX(${TRANS_X[bgIndex]})`,
            }}
          />
          {/**<BgComponent
            className={`relative z-3 max-w-none max-h-[56vh] overflow-visible h-auto `}
            styles={{
              width: bgCurrentWidth,
              transform: `translateX(${TRANS_X[bgIndex]})`,
            }}
          />
           * <img
            draggable="false"
            className="relative z-[3] max-w-[none] max-h-[56vh] overflow-visible h-auto"
            src={`/assets/background/${bgCurrent}.svg`}
            style={{
              width: bgCurrentWidth,
              transform: `translateX(${TRANS_X[bgIndex]})`,
            }}
          />
           */}
        </div>
        <div className="bg-white z-2 w-full h-[25vh]"></div>
      </div>

      <Moon
        className="absolute z-1 transition-all w-[250px] block"
        style={{
          top: moonY,
          left: moonX,
        }}
      />

      {/**<Moon
        className="absolute z-1 transition-all w-[170px]"
        style={{
          top: moonY,
          left: moonX,
        }}
      />
           * <img
        draggable="false"
        className="absolute z-[1] transition-all w-[170px]"
        style={{
          top: moonY,
          left: moonX,
        }}
        src="/assets/moon.svg"
      />
           */}
    </>
  );
};

export default Background;
