import { toPng } from "html-to-image";
import { receivedDataType } from "@/type/treeType";
import Make_png from "./Make_png";
import { createRoot } from "react-dom/client";

export default async function save_png(data: receivedDataType) {
  // Create a temporary container
  const container = document.createElement("div");
  container.style.position = "absolute";
  container.style.left = "-9999px";
  container.style.top = "0";
  document.body.appendChild(container);

  try {
    // Render the component into the container
    const root = createRoot(container);

    // Wrap in a promise to wait for render
    await new Promise<void>((resolve) => {
      root.render(<Make_png {...data} />);
      // Give it time to render
      setTimeout(resolve, 100);
    });

    // Convert to PNG
    const dataUrl = await toPng(container.firstChild as HTMLElement, {
      quality: 1,
      pixelRatio: 2,
      cacheBust: true,
      backgroundColor: "#012e34",
    });

    // Download the image
    const link = document.createElement("a");
    link.download = `${data.name || "tree"}.png`;
    link.href = dataUrl;
    link.click();

    // Cleanup
    root.unmount();
  } catch (error) {
    console.error("Error exporting image:", error);
  } finally {
    // Remove the temporary container
    document.body.removeChild(container);
  }
}
