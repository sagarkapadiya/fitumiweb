import React from "react";

export default function Generate() {
  return (
    <section className="relative p-[0_0_100px] max-[991px]:p-[0_0_60px]">
      <div className="container">
        <div className="text-center mb-[50px] max-[991px]:mb-[30px]">
          <div className="common_head !mb-[30px] max-[991px]:!mb-[20px]">
            <div className="common_head_inner">
              <img src="/assets/heading_icon.svg" alt="heading-icon" />
              <h6>Generate</h6>
            </div>
          </div>
          <h2 className="mb-[14px] max-[991px]:mb-[10px] text-[#181059]">
            Visualise your ideas in three easy steps
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div>
          <div className="bg-[linear-gradient(180deg,_#E1D3FF_-9.28%,_#F5F0FF_111.81%)] rounded-[18px] border border-[#B193F3] p-[30px] max-[480px]:p-[20px]">
            <div className="grid grid-cols-3 gap-[26px] max-[1080px]:grid-cols-2 max-[767px]:grid-cols-1">
              <div className="bg-[var(--white)] rounded-[8px] p-[24px]">
                <div className="mb-[20px]">
                  <h6 className="mb-[12px] text-[#020817]">
                    Pop Culture & Internet Trends
                  </h6>
                  <div className="grid grid-cols-2 gap-[10px]">
                    <div className="rounded-[8px] overflow-hidden">
                      <img
                        className="w-full"
                        src="/assets/generet-img.jpg"
                        alt="generet-img"
                      />
                    </div>
                    <div className="rounded-[8px] overflow-hidden">
                      <img
                        className="w-full"
                        src="/assets/generet-img.jpg"
                        alt="generet-img"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-[20px]">
                  <h6 className="mb-[12px] text-[#020817]">Black & White</h6>
                  <div className="grid grid-cols-2 gap-[10px]">
                    <div className="rounded-[8px] overflow-hidden">
                      <img
                        className="w-full"
                        src="/assets/generet-img.jpg"
                        alt="generet-img"
                      />
                    </div>
                    <div className="rounded-[8px] overflow-hidden">
                      <img
                        className="w-full"
                        src="/assets/generet-img.jpg"
                        alt="generet-img"
                      />
                    </div>
                  </div>
                </div>
                <div className="">
                  <h6 className="mb-[12px] text-[#020817]">Fall</h6>
                  <div className="grid grid-cols-2 gap-[10px]">
                    <div className="rounded-[8px] overflow-hidden">
                      <img
                        className="w-full"
                        src="/assets/generet-img.jpg"
                        alt="generet-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="text-[#020817] mb-[15px]">Generate Overlay</h5>
                <div className="bg-[var(--white)] p-[12px] rounded-[8px] h-[calc(100%_-_41px)] flex flex-col">
                  <div className="mb-[18px]">
                    <h6 className="text-[#020817] mb-[10px]">Prompt</h6>
                    <div className="bg-[#4D2F8C08] p-[12px] rounded-[8px]">
                      <p className="text-[#4B5563]">
                        Create a bold, modern streetwear typography design with
                        the phrase 'New York' as the main focus. Use a large,
                        all-caps, sans-serif font for 'NEW YORK' at the top,
                        with a white bar slicing through the middle to add
                        visual interest. Below the main text, add 'UNITED
                        STATES' in smaller.
                      </p>
                    </div>
                  </div>
                  <div className="mb-[18px]">
                    <h6 className="text-[#020817] mb-[10px]">
                      Negative Prompt
                    </h6>
                    <div className="bg-[#4D2F8C08] p-[12px] rounded-[8px]">
                      <p className="text-[#4B5563]">
                        Create a bold, modern streetwear typography design with
                        the phrase 'New York' as the main focus. Use a large,
                        all-caps, sans-serif font for 'NEW YORK' at the top,
                        with a white bar slicing through the middle to add
                        visual interest. Below the main text, add 'UNITED
                        STATES' in smaller.
                      </p>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <button className="site_btn w-full justify-center">
                      <img src="/assets/generate-icon.svg" /> Generate
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="text-[#020817] mb-[15px]">Generate Text</h5>
                <div className="h-[calc(100%_-_41px)]">
                  <div className="grid grid-cols-2 gap-[10px]">
                    <div className="rounded-[8px] overflow-hidden">
                      <img
                        className="w-full"
                        src="/assets/tshirt.jpg"
                        alt="tshirt"
                      />
                    </div>
                    <div className="rounded-[8px] overflow-hidden">
                      <img
                        className="w-full"
                        src="/assets/tshirt.jpg"
                        alt="tshirt"
                      />
                    </div>
                    <div className="rounded-[8px] overflow-hidden">
                      <img
                        className="w-full"
                        src="/assets/tshirt.jpg"
                        alt="tshirt"
                      />
                    </div>
                    <div className="rounded-[8px] overflow-hidden">
                      <img
                        className="w-full"
                        src="/assets/tshirt.jpg"
                        alt="tshirt"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div className="shadow-9"></div>
      <div className="shadow-10"></div>
    </section>
  );
}
