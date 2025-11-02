import { auth, googleProvider } from "@/utils/firebase";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import G_icon from "@/vector/assets/icon/g-icon";
import Loader from "./loading";

export function Landing() {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async () => {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const idToken = await user.getIdToken();
      console.log(idToken);

      const response = await fetch("/api/user/check", {
        headers: { authorization: idToken },
      }); //default GET
      const data = await response.json();
      if (data.check === false) throw new Error("invilid token");
      return data;
    },
    onSuccess: (data) => {
      if (data.id !== null) router.push(`/create/${data.id}`);
      else router.push(`/create/new`);
    },
    onError: (err) => {
      console.error("Sign-in failed:", err);
    },
  });
  //if (loading) return <Loader />;
  if (mutation.isPending) return <Loader></Loader>;
  return (
    <button
      onClick={() => {
        mutation.mutate();
      }}
      style={{
        background:
          "linear-gradient(260deg, rgba(201, 84, 51, 1) 0%, rgba(201, 51, 60, 1) 50%, rgba(144, 30, 37, 1) 100%)",
        textShadow: "0 0.899px 1.617px rgba(0, 0, 0, 0.25)",
        fontSize: "15px",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "normal",
        width: "270px",
      }}
      className="font-inter p-2 rounded-full font-bold text-xl text-white text-shadow-xl hover:shadow-2xl shadow-black transition-all"
    >
      <span className="flex items-center justify-center">
        {/**
         * <img
          draggable="false"
          src="/assets/icon/g-icon.svg"
          alt="Google Icon"
          className="p-2"
        />
        <G_icon className="mr-2" />
         */}
        <G_icon className="m-2" />

        <span className="text-[15px]">SIGN IN WITH GOOGLE</span>
      </span>
    </button>
  );
}

export default Landing;
