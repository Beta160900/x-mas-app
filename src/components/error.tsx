import CaneError from "@/vector/assets/caneError";
import Link from "next/link";
type ErrorProps = {
  message: string;
};

export default function ErrorComponent({ message }: ErrorProps) {
  return (
    <>
      <div className="items-center flex-col justify-center" id="common-bg">
        <div className="flex flex-col items-center justify-center h-full shadow-2xl ">
          <CaneError />
          <p
            className="font-noto-sans-thai text-ivory text-[55.156px] font-bold "
            style={{
              fontStyle: "normal",
              lineHeight: "normal",
            }}
          >
            ERROR
          </p>
          <p className="font-noto-sans-thai text-ivory font-bold text-[20px]">
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
