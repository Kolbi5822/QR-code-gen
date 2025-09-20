import { useState } from "react";
import QRCode from "qrcode";
import { cn } from "@/lib/utils";

export const HomeSection = () => {
  const [text, setText] = useState("");
  const [qrUrl, setQrUrl] = useState("");

  const generateQR = async () => {
    try {
      const url = await QRCode.toDataURL(text);
      setQrUrl(url);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <div className="relative containter max-w-4xl mx-auto text-center z-10 flex items-center justify-center">
        <div className="flex flex-col bg-card w-75 rounded-lg px-6 py-3 border border-foreground/50">
          <p className="font-semibold text-foreground">
            Input Your <span className="text-primary">Text or URL</span> Below
          </p>
          <input
            type="text"
            placeholder="text or URL"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border border-foreground/50 rounded-lg mt-5 h-10 px-2 focus:outline-hidden"
          />
          <div className="flex items-center justify-center">
            <div
              className={cn(
                "transition-all duration-500 ease-in-out",
                qrUrl ? "opacity-100 scale-100" : "opacity-0 scale-0"
              )}
            >
              {qrUrl && (
                <img
                  src={qrUrl}
                  alt="Generated QR code"
                  className="mt-5 rounded-lg w-62 h-62"
                />
              )}
            </div>
          </div>
          <button onClick={generateQR} className="cosmic-button mt-5">
            Create QR-code
          </button>
        </div>
      </div>
    </div>
  );
};
