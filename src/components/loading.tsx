export default function Loader() {
  return (
    <div className="items-center flex-col justify-center" id="common-bg">
      <div className="fixed inset-0 flex items-center justify-center overflow-hidden z-50">
        <div className="flex space-x-4">
          <img
            src="/assets/gold_b.svg"
            className="w-12 h-12 animate-bounce"
            alt="ball"
          />
          <img
            src="/assets/white_b.svg"
            className="w-12 h-12 animate-bounce [animation-delay:-0.2s]"
            alt="ball"
          />
          <img
            src="/assets/red_b.svg"
            className="w-12 h-12 animate-bounce [animation-delay:-0.4s]"
            alt="ball"
          />
        </div>
      </div>
    </div>
  );
}
