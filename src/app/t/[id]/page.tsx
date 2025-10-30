"use client";

import { useParams, useSearchParams, useRouter } from "next/navigation";
import Tree from "@/components/Tree";
import Background from "@/components/Background";
import TreeAtDecor from "@/components/TreeAtDecor";
import DecoratorBox from "@/components/DecoratorBox";
import { ITEMNAME, DISPLAYITEMNAME } from "@/constants/ITEMNAME";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Loader from "@/components/loading";
import { useEffect } from "react";
import Link from "next/link";
import { elementType } from "@/type/treeType"; //datatype
import { useState } from "react";

const HandleTree = () => {
  const router = useRouter();
  const { id } = useParams<{ id: string }>(); //for API
  const [isFacadeOpen, setFacadeOpen] = useState(false);
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const pageNumber = page ? Number(page) : 1;

  useEffect(() => {
    if (!searchParams.get("page")) {
      router.push(`/t/${id}?page=0`);
    } else if (Number.isNaN(pageNumber)) {
      router.push(`/t/${id}?page=0`);
    } else if (!searchParams.get("item") && pageNumber === -1) {
      router.push(`/t/${id}?page=-1&item=0`);
    }
  }, [searchParams, pageNumber, router, id]);
  //receivedData<--api/tree/getelement(GET)
  const {
    isPending,
    isError,
    data: receivedData,
    error,
  } = useQuery({
    queryKey: ["getdata", id],
    queryFn: async () => {
      if (!id) throw new Error("no id ;-;");
      const res = await fetch(
        `/api/tree/getElement?id=${encodeURIComponent(id)}`
      );
      const resJson = await res.json();
      if (!resJson.getElement) throw new Error("can't get element");
      return resJson.data;
    },
  });
  //POST /api/tree/addElement?id=${encodeURIComponent(id)} bode {type, name, message}
  const addElementMutation = useMutation({
    mutationFn: async ({
      type,
      name,
      message,
    }: {
      type: number;
      name: string;
      message: string;
    }) => {
      if (!id) throw new Error("No ID provided");
      const res = await fetch(
        `/api/tree/addElement?id=${encodeURIComponent(id)}`,
        {
          method: "POST",
          body: JSON.stringify({ type, name, message }),
        }
      );
      const resJson = await res.json();
      if (!resJson.addData) throw new Error("failed to add element");
      return resJson;
    },
    onSuccess: () => {
      // Refetch the getElement query to update the UI
      queryClient.invalidateQueries({ queryKey: ["getdata", id] });
    },
  });

  //fetch API something here
  //const receivedData = SAMPLEDATA; //WAIT FOR API

  const item = searchParams.get("item");
  const itemNumber = item ? Number(item) : 0;

  useEffect(() => {
    if (
      !(0 <= itemNumber && itemNumber < ITEMNAME.length) ||
      (Number.isNaN(itemNumber) && pageNumber === -1)
    ) {
      router.push(`/t/${id}?page=-1&item=0`);
    }
  }, [itemNumber, pageNumber, router, id]);

  if (!receivedData || isPending) return <Loader />;
  if (isError) return <span>Error: {error.message}</span>;

  const pageElements = receivedData.elements.filter(
    (e: elementType) => e.page === (pageNumber <= 0 ? 1 : pageNumber)
  );
  function toNextPgDecor() {
    router.push(`/t/${id}?page=-3&item=${item}`); //redirect to ?page=-2 when finished
  }

  function nextPg() {
    router.push(`/t/${id}?page=${pageNumber + 1}`);
  }

  function prevPg() {
    router.push(`/t/${id}?page=${pageNumber - 1}`);
  }

  if (pageNumber === undefined || pageNumber <= 0) {
    if (pageNumber === 0) {
      //PAGE 0: INTRO TO VIEWER
      return (
        <>
          <div className="common-bg absolute top-0 left-0 w-full h-full z-0">
            <span className="anim-intro-fadeIn ">
              <TreeAtDecor
                pageElements={pageElements}
                receivedData={receivedData}
              />
              <div className="w-full absolute flex flex-row justify-center">
                <Link
                  href={`/t/${id}?page=-1`}
                  className="bottom-[-85vh] font-inter font-bold text-[20px] py-3 absolute z-[300] w-[200px] text-center grad-commonred text-white rounded-full self-center"
                >
                  DECORATE!
                </Link>
                <Link
                  href="/"
                  className="absolute bottom-[-90vh] grad-commonred text-grad-effect font-bold italic z-[300] text-center underline decoration-[#901E25]"
                >
                  CREATE YOUR OWN!
                </Link>
              </div>
            </span>
          </div>
        </>
      );
    } else if (pageNumber == -1) {
      //PAGE -1: CHOOSE DECORATION
      return (
        <>
          <div className="common-bg absolute top-0 left-0 w-full h-full z-0">
            <span className="anim-intro-fadeIn">
              <Background var={receivedData.background} />
              <Tree treeData={pageElements} displayMessage={false} />
              <div className="z-[150] blank-facade"></div>
              <div className="flex flex-col justify-center w-full bottom-0 h-[60vh] items-center z-[300]">
                <img
                  className="h-[200px] z-[300] mt-[-150px]"
                  src={`/assets/onTree/${ITEMNAME[itemNumber]}.svg`}
                ></img>
                <p
                  className="font-milonga text-[20px] z-[200] p-[10px] text-white"
                  style={{
                    textShadow: "0 0 2.803px rgba(0, 0, 0, 0.89)",
                  }}
                >
                  {DISPLAYITEMNAME[itemNumber]}
                </p>
                <div className="flex justify-center absolute w-full bottom-[380px] z-[5500]">
                  <div
                    className="absolute flex flex-col w-[300px] h-[350px] rounded-[30px]"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.32)",
                      backdropFilter: "blur(5px)",
                    }}
                  >
                    <div className="flex justify-center flex-col grad-commonred rounded-t-[30px] w-[300px] h-[47px]">
                      {/**red bar at the top */}
                      <span className="font-inter italic text-[22px] ml-[15px] text-white">
                        Choose your item
                      </span>
                    </div>
                    <div className="flex flex-col justify-center items-start h-[200px] mt-[10px] overflow-y-scroll scroll-decorator">
                      <div className="flex flex-row flex-wrap justify-evenly justify-items-center pt-[60px]">
                        <DecoratorBox typeNumber={0} selecting={itemNumber} />
                        <DecoratorBox typeNumber={1} selecting={itemNumber} />
                        <DecoratorBox typeNumber={2} selecting={itemNumber} />
                        <DecoratorBox typeNumber={3} selecting={itemNumber} />
                        <DecoratorBox typeNumber={4} selecting={itemNumber} />
                        <DecoratorBox typeNumber={5} selecting={itemNumber} />
                        <DecoratorBox typeNumber={6} selecting={itemNumber} />
                      </div>
                    </div>

                    <div
                      className="flex justify-end p-[10px]"
                      onClick={toNextPgDecor}
                    >
                      <div className="flex flex-row items-center grad-commonred w-[125px] h-[41px] rounded-[20px] justify-center hover:shadow-2xl transition-all">
                        <p className="font-inter text-white">NEXT</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="21"
                          viewBox="0 0 19 21"
                          fill="none"
                        >
                          <path
                            d="M7.125 4.375L12.6667 10.5L7.125 16.625"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </div>
        </>
      );
    } else if (pageNumber === -3) {
      return (
        <>
          <div className="common-bg absolute top-0 left-0 w-full h-full z-0 ">
            <span className="anim-intro-fadeIn">
              <Background var={receivedData.background} />
              <Tree treeData={pageElements} displayMessage={false} />
              <div className="z-[150] blank-facade flex flex-row justify-center">
                <div className="flex flex-col items-center justify-center mb-[50px]">
                  <p className="text-white font-inter text-[13px] p-[20px]">
                    Type your name and message below
                  </p>
                  <div className="grad-commonred text-ivory mb-[20px] font-inter-noto font-bold py-2 w-[150px] rounded-full text-center">
                    Type your name
                  </div>
                  <div className="flex justify-center grad-intro-box rounded-[12px] w-[284px] h-[40px]">
                    <input
                      id="nameInput"
                      placeholder="Type your name here.."
                      maxLength={25}
                      className="border-transparent focus:border-transparent bg-transparent focus:ring-0 outline-none text-ivory font-inter-noto text-center"
                    ></input>
                  </div>
                  <div className="grad-commonred text-ivory my-[20px] font-inter-noto font-bold py-2 w-[250px] rounded-full text-center">
                    Type your message
                  </div>
                  <div className="flex justify-center grad-intro-box rounded-[12px] w-[284px] h-[280px] pt-[20px]">
                    <textarea
                      id="nameInput"
                      placeholder="Type your message here.."
                      maxLength={450}
                      className="border-transparent focus:border-transparent bg-transparent focus:ring-0 resize-none outline-none text-ivory font-inter-noto text-wrap w-[250px] max-h-[250px] mr-[-5px] overflow-y-scroll scroll-skyintro"
                    ></textarea>
                  </div>
                  <div className="flex justify-end p-[10px]">
                    <div
                      onClick={async () => {
                        const name = (
                          document.getElementById(
                            "nameInput"
                          ) as HTMLInputElement
                        ).value;
                        const message = (
                          document.querySelector(
                            "textarea"
                          ) as HTMLTextAreaElement
                        ).value;
                        const type = itemNumber;
                        if (!name || !message) {
                          alert("Please fill in both name and message!");
                          return;
                        }
                        addElementMutation.mutate({ type, name, message });
                        router.push(`/t/${id}?page=1`);
                      }}
                      className="flex flex-row items-center grad-commonred w-[125px] h-[41px] rounded-[20px] justify-center hover:shadow-2xl transition-all"
                    >
                      <p className="font-inter text-white">NEXT</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="21"
                        viewBox="0 0 19 21"
                        fill="none"
                      >
                        <path
                          d="M7.125 4.375L12.6667 10.5L7.125 16.625"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </div>
        </>
      );
    }
  } else {
    const maxPage =
      receivedData.elements.length > 0
        ? Math.max(...receivedData.elements.map((e: elementType) => e.page))
        : 1; //get max of page
    if (pageNumber > maxPage) {
      router.push(`/t/${id}?page=${maxPage}`);
    }
    return (
      <>
        <div className="common-bg absolute top-0 left-0 w-full h-full">
          <Background var={receivedData.background} />
          <Tree
            treeData={pageElements}
            displayMessage={true}
            onFacadeChange={setFacadeOpen}
          />
          <div className="flex flex-col jusitfy-center absolute bottom-[50px] z-[140] w-full">
            <p className="text-[#0A462F] font-inter text-[20.8px] text-center">
              Page {pageNumber}/{maxPage}
            </p>
          </div>
          {/** NEED TO REFINE WITH GRAPHIC */}
          <div className={`${isFacadeOpen ? "hidden" : ""}`}>
            <div className="w-auto h-full left-0 flex flex-col justify-center z-[50] absolute px-[20px] items-center">
              <button
                onClick={prevPg}
                className={`outline-none ${
                  pageNumber === 1 ? "invisible" : "visible"
                }`}
              >
                <img draggable="false" src="/assets/icon/whiteArrow.svg"></img>
              </button>
            </div>
            <div className="w-auto h-full right-0 flex flex-col justify-center z-[50] absolute px-[20px] items-center">
              <button
                onClick={nextPg}
                className={`scale-x-[-1] outline-none  ${
                  pageNumber === maxPage ? "invisible" : "visible"
                }`}
              >
                <img draggable="false" src="/assets/icon/whiteArrow.svg"></img>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default HandleTree;
