import Link from "next/link";
type ErrorProps = {
  message: string;
};

export default function ErrorComponent({ message }: ErrorProps) {
  return (
    <>
      <div className="items-center flex-col justify-center" id="common-bg">
        <div className="flex flex-col items-center justify-center h-full shadow-2xl ">
          <img
            draggable="false"
            src="/assets/caneError.svg"
            className="w-[182.065px] h-[188.57px] flex-shrink-0"
          ></img>
          <p
            className="font-noto-sans-thai text-ivory text-[55.156px] font-[700] "
            style={{
              fontStyle: "normal",
              lineHeight: "normal",
            }}
          >
            ERROR
          </p>
          <p className="font-noto-sans-thai text-ivory font-[700] text-[20px]">
            {message}
          </p>
          <Link href="/">
            <button
              className="text-white p-3 rounded-full mt-[13px] font-noto-sans-thai"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.3) -20.73%, rgba(255, 255, 255, 0.3) 100%)",
                backdropFilter: "blur(2px)",
              }}
            >
              <h1 className="opacity-100">กลับสู่หน้าหลัก</h1>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
