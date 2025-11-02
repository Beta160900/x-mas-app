/**
== FRONTEND PROGRESS CHECKLIST ==
[/] Title
[/] Background
[X] Preview                   < DUE 23 >
[/] Creator View
[/] Decorate + Self Preview
[X] Visitor View              < DUE 22 18:00 >
[X] Gift Received             < DUE 24 >
[/] Error
*/

"use client";
import TitleText from "@/vector/assets/titletext";
import TitleTree from "@/vector/assets/titletree";
import Landing from "@/components/landing";

const Home = () => {
  return (
    <>
      <div className="items-center flex-col justify-center" id="common-bg">
        <div className="w-auto h-auto pt-5 flex items-center justify-center">
          <div className="items-center flex-col justify-center" id="common-bg">
            <div className="w-auto h-auto pt-[20px]] flex items-center justify-center">
              <div className="anim-intro-fadeIn">
                <TitleText className="max-h-[16vh] z-10" />
                {/**
                 * <img
                    draggable="false"
                    className="transition-all absolute min-w-[1800px]"
                    id="text"
                    src="/assets/titletree.svg"
                  />
                 */}

                <div className="transition-all flex justify-center mt-[-110px] overflow-hidden">
                  <TitleTree className="absolute scale-90" />
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ transform: "translate(-50%, 110%)" }}
            className="absolute flex justify-center items-center z-20 left-[50%] bottom-[15%]"
          >
            <Landing />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
