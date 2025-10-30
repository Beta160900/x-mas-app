// น่าจะมีไฟล์แยก?
const BACKGROUND = ["60thbldg", "55thbldg"];

/** !!!!! TEMPORARY FOR PRE-REL. SESSION !!!!! */
const WIDTH = ["760px", "516px"];

const MOON_X = ["65vw", "-60px"];
const MOON_Y = ["5vh", "-40px"];

const TRANS_X = ["24px", "31px"]; //TEMPORARY

const Background = ({ var: bgIndex }: { var: number }) => {
  const bgCurrentWidth = WIDTH[bgIndex];
  const bgCurrent = BACKGROUND[bgIndex];
  const moonX = MOON_X[bgIndex];
  const moonY = MOON_Y[bgIndex];

  return (
    <>
      <div className="fixed bottom-0 z-[4] flex flex-col items-end w-full pointer-events-none justify-center">
        <div className="flex min-w-[100vw] justify-center">
          <img
            draggable="false"
            className="relative z-[3] max-w-[none] max-h-[56vh] overflow-visible h-auto"
            src={`/assets/background/${bgCurrent}.svg`}
            style={{
              width: bgCurrentWidth,
              transform: `translateX(${TRANS_X[bgIndex]})`,
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
    </>
  );
};

export default Background;
