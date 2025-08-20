import React from "react";

export default function Banner() {
  return (
    <section className="p-[60px_0_100px] relative max-[991px]:p-[60px_0_80px] max-[480px]:p-[40px_0_60px]">
      <div className="container">
        <div className="flex gap-[30px] max-[991px]:flex-col">
          <div className=" w-[470px] m-[0_auto] max-[1280px]:w-[450px] max-[991px]:w-full">
            <div className="text mb-[40px] max-[1280px]:mb-[20px]">
              <div className="common_head !mb-0">
                <div className="common_head_inner">
                  <img src="/assets/heading_icon.svg" alt="heading-icon" />
                  <h6>New: Our AI integration just landed</h6>
                </div>
              </div>
            </div>
            <h1 className="mb-[12px]">Create Your Own Fashion Show</h1>
            <p className="text-[#4a5565] text-justify text-base">
              Design like a pro with Fitumi, you have every tool you need to
              build your collection— generate custom garments, edit with
              precision, visualize in photorealistic settings, and bring your
              fashion ideas to life through AI. From sketch to runway, Fitumi
              makes it real.
            </p>
            <div
              className={` mt-[20px]`}
            >
              <button className="site_btn">Get started for free</button>
              {/* <button className="border_btn">Contact Sales</button> */}
            </div>
          </div>
          <div className="w-[calc(100%_-_530px)] max-[1280px]:w-[calc(100%_-_470px)] max-[991px]:w-full">
            <div className="relative">
              {/* <img
                src="/assets/laptop.png"
                className="w-full drop-shadow-[0_80px_60px_#00000049]"
                alt="laptop"
              /> */}
              <video
                autoPlay
                muted
                playsInline
                loop
                className="w-full h-full rounded-[15px]"
                src="/assets/Hero_Video.mp4"
              ></video>
              {/* <img
              className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] max-[991px]:w-[200px] max-[991px]:h-[200px] max-[767px]:w-[150px] max-[767px]:h-[150px] max-[480px]:w-[100px] max-[480px]:h-[100px]"
              src="/assets/play-icon.png"
              alt="play-icon"
            /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-1"></div>
      <div className="shadow-2"></div>
      <div className="shadow-3"></div>
    </section>
  );
}
