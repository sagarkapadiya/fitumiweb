import React from "react";

export default function OurService() {
  return (
    <section className="p-[0_0_70px] relative">
      <div className="container">
        <div className="text-center mb-[50px] max-[991px]:mb-[30px]">
          <div className="common_head !mb-[30px] max-[991px]:!mb-[20px]">
            <div className="common_head_inner">
              <img src="/assets/heading_icon.svg" alt="heading-icon" />
              <h6>Services</h6>
            </div>
          </div>
          <h2 className="mb-[14px] max-[991px]:mb-[10px] text-[#181059]">
            Our Service
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="bg-[#EFE9FF] p-[48px] rounded-[55px] max-[1280px]:p-[30px] max-[767px]:rounded-[30px] max-[480px]:p-[20px]">
          <div className="relative bg-[#4D2F8C] rounded-[55px] p-[1px_3px] mb-[40px] max-[767px]:rounded-[30px]">
            <div className="relative bg-[var(--white)] p-[25px] rounded-[55px] max-[767px]:rounded-[30px] max-[480px]:p-[25px_15px]">
              <div className="grid grid-cols-2 gap-[45px] items-center max-[991px]:grid-cols-1 max-[767px]:gap-[25px]">
                <div className="max-[991px]:order-2">
                  <h4 className="text-[#181059]">AI-Powered T-Shirt Design</h4>
                  <p className="m-[15px_0_30px] text-[#06001399] max-[480px]:m-[10px_0_20px]">
                    Transform the way you create T-shirts with Fitumi’s advanced
                    AI design tools. Whether you need bold text graphics, unique
                    images, or custom stickers, our platform streamlines the
                    entire process—no design experience required.
                  </p>
                  <button className="site_btn">
                    Get Started{" "}
                    <img src="/assets/btn-arrow.svg" alt="btn-arrow" />
                  </button>
                </div>
                <div className="rounded-[55px] overflow-hidden max-[767px]:rounded-[30px]">
                  <img
                    className="w-full"
                    src="/assets/service-img.jpg"
                    alt="service-img"
                  />
                </div>
              </div>
            </div>
            <div className="bg-[#D8CAFF] rounded-[14px] p-[6px_12px] absolute top-[-14px] left-[80px] max-[767px]:left-[30px]">
              <h6 className="!text-[12px] !leading-[18px] !font-[700] text-[#181059]">
                New
              </h6>
            </div>
          </div>
          <div className="relative bg-[#4D2F8C] rounded-[55px] p-[1px_3px] max-[767px]:rounded-[30px]">
            <div className="relative bg-[var(--white)] p-[25px] rounded-[55px] max-[767px]:rounded-[30px] max-[480px]:p-[25px_15px]">
              <div className="grid grid-cols-2 gap-[45px] items-center max-[991px]:grid-cols-1 max-[767px]:gap-[25px]">
                <div className="rounded-[55px] overflow-hidden max-[767px]:rounded-[30px]">
                  <img
                    className="w-full"
                    src="/assets/service-img.jpg"
                    alt="service-img"
                  />
                </div>
                <div className="">
                  <h4 className="text-[#181059]">AI-Powered T-Shirt Design</h4>
                  <p className="m-[15px_0_30px] text-[#06001399] max-[480px]:m-[10px_0_20px]">
                    Transform the way you create T-shirts with Fitumi’s advanced
                    AI design tools. Whether you need bold text graphics, unique
                    images, or custom stickers, our platform streamlines the
                    entire process—no design experience required.
                  </p>
                  <button className="site_btn">
                    Get Started{" "}
                    <img src="/assets/btn-arrow.svg" alt="btn-arrow" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#D8CAFF] rounded-[14px] p-[6px_12px] absolute top-[-14px] right-[80px] max-[767px]:right-[30px]">
              <h6 className="!text-[12px] !leading-[18px] !font-[700] text-[#181059]">
                New
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-4"></div>
      <div className="shadow-5"></div>
    </section>
  );
}
