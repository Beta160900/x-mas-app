"use client";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <>
      <div
        onClick={() => router.push("/")}
        style={{
          background: "rgba(0, 28, 29, 1)",
          height: "6vh",
        }}
        className="flex min-h-[40px] p-3 items-center z-[6969]"
      >
        <img
          draggable="false"
          src="/logo.svg"
          className="h-[3vh] min-h-[20px] max-h-[23px] pl-[10px]"
        ></img>
      </div>
    </>
  );
};

export default Header;
