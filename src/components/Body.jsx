import React from "react";
import EmailIcon from "./svgs/Email";
import WhatsappIcon from "./svgs/WhatsApp";

function Body() {
  return (
    <section className="relative w-screen h-screen bg-black overflow-hidden">

      <div
        className="absolute inset-0 animate-pulse [animation-duration:10s] bg-repeat bg-center  bg-cover z-0 opacity-10 "
        style={{ backgroundImage: "url('/Images/thundor.png')" }}
      />

      <div
        className="absolute inset-0  bg-repeat  bg-cover z-0 opacity-10 "
        style={{ backgroundImage: "url('/Images/thundor.png')" }}
      />

      <div
        className="absolute inset-0   bg-center bg-repeat  bg-cover z-0 opacity-5"
        style={{ backgroundImage: "url('/Images/face.png')" }}
      />

      <img
        src="/Images/thundor.png"
        alt="space bg"
        className="absolute inset-0 w-full h-full object-contain opacity-30 z-0 pointer-events-none"
      />

      <div className="flex text-white flex-col text-3xl gap-4 items-center justify-center h-full z-[9999]">
        <div className="w-full text-center">
          <span className="tracking-wide ">Let’s Connect...</span>
        </div>

        <div className="w-full z-[9999] h-fit flex items-center gap-4 justify-center">
          <a
            href="nikdevcloud@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(0,123,255,0.8)]"
          >
            <EmailIcon color="white" height="40px" width="40px" />
          </a>
          <a
            href="https://wa.me/+9177477815466"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(37,211,102,0.8)]"
          >
            <WhatsappIcon color="white" height="40px" width="40px" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-16 w-full px-6 z-10 text-center">
        <h1 className="text-9xl  font-bold text-gray-100 tracking-widest">
          BUILT FOR THE FUTURE
        </h1>
        <p className="mt-2 text-sm text-gray-400 uppercase">Don’t hesitate</p>
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs font-mono text-gray-500 uppercase tracking-widest z-10">
        <div>
          quality assessment: <span className="text-green-400">active</span>
        </div>
        <div>
          all systems: <span className="text-green-400">online</span>
        </div>
      </div>
    </section>
  );
}

export default Body;
