"use client";

import { useParams } from "next/navigation";
import Background from "@/components/Background";
import CopyLinkBar from "@/components/CopyLinkBar";
import Tree from "@/components/Tree";
import Loader from "@/components/loading";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { elementType } from "@/type/treeType";
import ErrorComponent from "@/components/error";
import WhiteArrow from "@/vector/assets/icon/whiteArrow";

const CreatorView = () => {
  const { id } = useParams<{ id: string }>();
  const [isFacadeOpen, setFacadeOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams(); //id?page=1,2,3 auto rerender when change param
  const page = searchParams.get("page"); //"1","2","3"
  useEffect(() => {
    if (!page) router.replace(`/create/${id}?page=1`);
  }, [page, id, router]);
  const pageNumber = page ? Number(page) : 1; //null->1,"1"->1,"2"->2

  //automatic fetch when receivedData==null

  const {
    data: receivedData,
    status,
    error,
  } = useQuery({
    queryKey: ["treeData", id],
    queryFn: async () => {
      if (!id) throw new Error("no id input");
      const res = await fetch(
        `/api/tree/getElement?id=${encodeURIComponent(id)}`
      ); //default GET Method
      if (!res.ok)
        throw new Error(`Request failed: ${res.status} ${res.statusText}`);
      const dataJson = await res.json();
      if (!dataJson.getElement) throw new Error("fail to fetch tree element");
      return dataJson.data;
    },
    enabled: !!id,
  });

  const maxPage = receivedData?.elements?.length
    ? Math.max(...receivedData.elements.map((e: elementType) => e.page))
    : 1;
  const pageElements: elementType[] =
    receivedData?.elements?.filter((e: elementType) => e.page === pageNumber) ||
    [];
  function nextPg() {
    if (pageNumber < maxPage)
      router.push(`/create/${id}?page=${pageNumber + 1}`);
  }
  function prevPg() {
    if (pageNumber > 1) router.push(`/create/${id}?page=${pageNumber - 1}`);
  }

  if (status === "error")
    return <ErrorComponent message={(error as Error)?.message} />;

  if (!receivedData || status === "pending") return <Loader />;
  return (
    //ใช้facadeOpenชั่วคราว

    <>
      <div className="common-bg">
        <Background var={receivedData.background} />
        {/* title zone */}
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
        {/* tree zone */}
        <Tree
          treeData={pageElements}
          displayMessage={true}
          onFacadeChange={setFacadeOpen}
        />
        {/* link bar zone */}
        <CopyLinkBar id={id} FacadeOpen={isFacadeOpen} />
        {/* button <> zone */}
        <div className={`${isFacadeOpen ? "hidden" : ""}`}>
          <div className="w-auto h-full left-0 flex flex-col justify-center z-50 absolute px-5 items-center">
            <button
              onClick={prevPg}
              className={`outline-none ${
                pageNumber === 1 ? "invisible" : "visible"
              }`}
            >
              {/**
               * <img
                draggable="false"
                src="/assets/icon/whiteArrow.svg"
                alt="Previous"
              />
               */}
              <WhiteArrow />
            </button>
          </div>

          <div className="w-auto h-full right-0 flex flex-col justify-center z-50 absolute px-5 items-center">
            <button
              onClick={nextPg}
              className={`scale-x-[-1] outline-none ${
                pageNumber === maxPage ? "invisible" : "visible"
              }`}
            >
              {/**
               * <img
                draggable="false"
                src="/assets/icon/whiteArrow.svg"
                alt="Next"
              />
               */}
              <WhiteArrow />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatorView;
