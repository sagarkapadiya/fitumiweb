import React from "react";

export default function Banner() {
  return (
    <section className="p-[90px_0_140px] relative max-[991px]:p-[60px_0_90px] max-[480px]:p-[40px_0_60px] bg-[url(/assets/banner-bg.png)] bg-no-repeat bg-[length:80%] bg-[position:center_130px] max-[1440px]:bg-[position:center_190px] max-[1280px]:bg-[position:center_250px] max-[991px]:bg-[length:100%] max-[767px]:bg-[position:center_350px] max-[420px]:bg-none">
      <div className="container">
        <div className="text-center max-w-[850px] m-[0_auto]">
          <div className="common_head !mb-[30px]">
            <div className="common_head_inner">
              <img src="/assets/heading_icon.svg" alt="heading-icon" />
              <h6>New: Our AI integration just landed</h6>
            </div>
          </div>
          <h1 className="mb-[12px]">
            Turn your drawings into images in seconds
          </h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div
            className={`inline-flex items-center gap-[15px] justify-center relative p-[25px_35px] mt-[15px] before:content" " before:absolute before:top-0 before:left-0 before:bg-[url(/assets/quit-icon.svg)] before:bg-no-repeat before:bg-size-[40px] before:w-[40px] before:h-[40px]`}
          >
            <button className="site_btn">Schedule a Demo</button>
            <button className="border_btn">Contact Sales</button>
          </div>
        </div>
        <div className="max-w-[1080px] m-[0_auto] p-[50px_0]">
          <div className="relative">
            <iframe className="w-full h-[470px]"
              src="https://www.youtube.com/embed/GALb0vIAUco"
              title="1. How NewArc.ai Works - Sketch to Image AI Design Generator - NewArc.ai Tutorial"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen></iframe>
            {/* <img
              className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] max-[991px]:w-[200px] max-[991px]:h-[200px] max-[767px]:w-[150px] max-[767px]:h-[150px] max-[480px]:w-[100px] max-[480px]:h-[100px]"
              src="/assets/play-icon.png"
              alt="play-icon"
            /> */}
            <div className="absolute bottom-[80px] left-0 max-[991px]:hidden">
              <div className="flex gap-[10px] items-end justify-end mb-[30px] mr-[70px]">
                <img src="/assets/arrow-1.svg" alt="arrow" />
                <h4 className="font-caveat !text-[26px] !leading-[24px] !font-[700] mb-[20px]">
                  Awsome <br /> Feature
                </h4>
              </div>
              <div className="w-[320px] bg-[#FFFFFF80] rounded-[15px] backdrop-blur-2xl p-[40px_20px] shadow-[-14.34px_43.2px_52.87px_0px_#514E782E]"></div>
            </div>
            <div className="absolute top-[-80px] right-[20px] max-[991px]:hidden">
              <div className="flex gap-[10px] items-start mb-[30px]">
                <img src="/assets/arrow-2.svg" alt="arrow" />
                <h4 className="font-caveat !text-[26px] !leading-[24px] !font-[700] mt-[-20px]">
                  Awsome Product <br /> Feature
                </h4>
              </div>
              <div className="w-[245px] h-[315px] bg-[#FFFFFF80] rounded-[15px] backdrop-blur-2xl p-[40px_20px] shadow-[-14.34px_43.2px_52.87px_0px_#514E782E]"></div>
            </div>
            <div className="absolute top-[-60px] letf-[20px] max-[991px]:hidden">
              <div className="flex gap-[10px] items-start">
                <h4 className="font-caveat !text-[26px] !leading-[24px] !font-[700] mt-[-40px]">
                  Awsome <br /> Feature
                </h4>
                <img src="/assets/arrow-3.svg" alt="arrow" />
              </div>
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
