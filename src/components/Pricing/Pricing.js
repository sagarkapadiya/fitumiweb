import React from "react";

export default function Pricing() {
  return (
    <section id="pricing-section" className="relative p-[0_0_80px] max-[991px]:p-[0_0_80px] max-[480px]:p-[0_0_60px]">
      <div className="container">
        <div className="text-center mb-[50px] max-[991px]:mb-[30px]">
          <div className="common_head !mb-[30px] max-[991px]:!mb-[20px]">
            <div className="common_head_inner">
              <img src="/assets/heading_icon.svg" alt="heading-icon" />
              <h6>Pricing</h6>
            </div>
          </div>
          <h2 className="mb-[14px] max-[991px]:mb-[10px] text-[#181059]">
            Pay once, use forever, upgrade for free
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[30px] mt-[90px] mb-[60px] max-[991px]:grid-cols-2 max-[580px]:grid-cols-1 max-[767px]:mb-[40px] max-[580px]:mt-[50px]">
          <div
            className={`bg-[var(--white)] p-[30px] max-[767px]:p-[20px] shadow-[0px_16px_48px_0px_#24262914] border relative border-transparent hover:shadow-[0px_16px_48px_0px_#4D2F8C29] hover:border-[#4D2F8C] rounded-[18px] before:content" " before:absolute before:top-0 before:right-0 before:w-[130px] before:h-[140px] before:bg-[url(/assets/pricing-round.png)] before:bg-no-repeat before:bg-size-[cover]`}
          >
            <div className="rounded-[6px] inline-block mb-[32px] bg-[#4D2F8C1F] p-[5px_12px]">
              <h6 className="text-[#4D2F8C]">Professional</h6>
            </div>
            <h2 className="text-[#060013] flex items-center gap-[5px] mb-[18px]">
              <span className="text-[#A5ABB6] !text-[28px] !leading-[38px]">
                $
              </span>{" "}
              56
            </h2>
            <p className="mb-[24px]">
              Lorem Ipsum is simply dummy text of the printing industry.
            </p>
            <button className="purple-btn w-full justify-center mb-[48px] max-[767px]:mb-[30px]">
              <img src="/assets/buy-icon.svg" />
              Buy now
            </button>
            <ul>
              <li className="flex items-center gap-[12px] mb-[12px]">
                <img src="/assets/list-icon.svg" alt="list-icon" />
                <h5 className="!font-[400]">Single user license</h5>
              </li>
              <li className="flex items-center gap-[12px] mb-[12px]">
                <img src="/assets/list-icon.svg" alt="list-icon" />
                <h5 className="!font-[400]">Lifetime updates</h5>
              </li>
              <li className="flex items-center gap-[12px] mb-[12px]">
                <img src="/assets/list-icon.svg" alt="list-icon" />
                <h5 className="!font-[400]">5,000+ icons</h5>
              </li>
              <li className="flex items-center gap-[12px] mb-[12px]">
                <img src="/assets/list-icon.svg" alt="list-icon" />
                <h5 className="!font-[400]">6 unique styles</h5>
              </li>
              <li className="flex items-center gap-[12px] mb-[12px]">
                <img src="/assets/list-icon.svg" alt="list-icon" />
                <h5 className="!font-[400]">Live stroke & corners</h5>
              </li>
              <li className="flex items-center gap-[12px] mb-[12px]">
                <img src="/assets/list-icon.svg" alt="list-icon" />
                <h5 className="!font-[400]">Powered by variants</h5>
              </li>
              <li className="flex items-center gap-[12px] mb-[12px]">
                <img src="/assets/list-icon.svg" alt="list-icon" />
                <h5 className="!font-[400]">IconJar & SVG library</h5>
              </li>
              <li className="flex items-center gap-[12px]">
                <img src="/assets/list-icon.svg" alt="list-icon" />
                <h5 className="!font-[400]">Unlimited projects</h5>
              </li>
            </ul>
          </div>
          <div
            className={`bg-[var(--white)] p-[30px] max-[767px]:p-[20px] max-[580px]:mt-[20px] border relative shadow-[0px_16px_48px_0px_#4D2F8C29] border-[#4D2F8C] rounded-[18px] before:content" " before:absolute before:top-0 before:right-0 before:w-[130px] before:h-[140px] before:bg-[url(/assets/pricing-round1.png)] before:bg-no-repeat before:bg-size-[cover]`}
          >
            <img
              className="absolute top-[-35px] left-[50%] transform -translate-x-1/2"
              src="/assets/best-value.png"
              alt="best-value"
            />
            <div className="rounded-[6px] inline-block mb-[32px] bg-[#4D2F8C1F] p-[5px_12px]">
              <h6 className="text-[#4D2F8C]">Team</h6>
            </div>
            <h2 className="text-[#060013] flex items-center gap-[5px] mb-[18px]">
              <span className="text-[#A5ABB6] !text-[28px] !leading-[38px]">
                $
              </span>{" "}
              112
            </h2>
            <p className="mb-[24px]">
              Lorem Ipsum is simply dummy text of the printing industry.
            </p>
            <button className="purple-btn w-full justify-center mb-[48px] max-[767px]:mb-[30px]">
              <img src="/assets/buy-icon.svg" />
              Buy now
            </button>
            <ul>
              <li className="flex items-center gap-[12px] mb-[12px]">
                <img src="/assets/list-icon.svg" alt="list-icon" />
                <h5 className="!font-[400]">Up to 6 users license</h5>
              </li>
              <li className="flex items-center gap-[12px] mb-[12px]">
                <img src="/assets/list-icon.svg" alt="list-icon" />
                <h5 className="!font-[400]">Lifetime updates</h5>
              </li>
              <li className="flex items-center gap-[12px] mb-[12px]">
                <img src="/assets/list-icon.svg" alt="list-icon" />
                <h5 className="!font-[400]">5,000+ icons</h5>
              </li>
              <li className="flex items-center gap-[12px] mb-[12px]">
                <img src="/assets/list-icon.svg" alt="list-icon" />
                <h5 className="!font-[400]">6 unique styles</h5>
              </li>
              <li className="flex items-center gap-[12px] mb-[12px]">
                <img src="/assets/list-icon.svg" alt="list-icon" />
                <h5 className="!font-[400]">Live stroke & corners</h5>
              </li>
              <li className="flex items-center gap-[12px] mb-[12px]">
                <img src="/assets/list-icon.svg" alt="list-icon" />
                <h5 className="!font-[400]">Powered by variants</h5>
              </li>
              <li className="flex items-center gap-[12px] mb-[12px]">
                <img src="/assets/list-icon.svg" alt="list-icon" />
                <h5 className="!font-[400]">IconJar & SVG library</h5>
              </li>
              <li className="flex items-center gap-[12px]">
                <img src="/assets/list-icon.svg" alt="list-icon" />
                <h5 className="!font-[400]">Unlimited projects</h5>
              </li>
            </ul>
          </div>
          <div
            className={`bg-[var(--white)] p-[30px] max-[767px]:p-[20px] shadow-[0px_16px_48px_0px_#24262914] border relative border-transparent hover:shadow-[0px_16px_48px_0px_#4D2F8C29] hover:border-[#4D2F8C] rounded-[18px] before:content" " before:absolute before:top-0 before:right-0 before:w-[130px] before:h-[140px] before:bg-[url(/assets/pricing-round2.png)] before:bg-no-repeat before:bg-size-[cover]`}
          >
            <div className="rounded-[6px] inline-block mb-[32px] bg-[#4D2F8C1F] p-[5px_12px]">
              <h6 className="text-[#4D2F8C]">Enterprise</h6>
            </div>
            <h2 className="text-[#060013] flex items-center gap-[5px] mb-[18px]">
              <span className="text-[#A5ABB6] !text-[28px] !leading-[38px]">
                $
              </span>{" "}
              224
            </h2>
            <p className="mb-[24px]">
              Lorem Ipsum is simply dummy text of the printing industry.
            </p>
            <button className="purple-btn w-full justify-center mb-[48px] max-[767px]:mb-[30px]">
              <img src="/assets/buy-icon.svg" />
              Buy now
            </button>
            <ul>
              <li className="flex items-center gap-[12px] mb-[12px]">
                <img src="/assets/list-icon.svg" alt="list-icon" />
                <h5 className="!font-[400]">Unlimited library users</h5>
              </li>
              <li className="flex items-center gap-[12px] mb-[12px]">
                <img src="/assets/list-icon.svg" alt="list-icon" />
                <h5 className="!font-[400]">Lifetime updates</h5>
              </li>
              <li className="flex items-center gap-[12px] mb-[12px]">
                <img src="/assets/list-icon.svg" alt="list-icon" />
                <h5 className="!font-[400]">5,000+ icons</h5>
              </li>
              <li className="flex items-center gap-[12px] mb-[12px]">
                <img src="/assets/list-icon.svg" alt="list-icon" />
                <h5 className="!font-[400]">6 unique styles</h5>
              </li>
              <li className="flex items-center gap-[12px] mb-[12px]">
                <img src="/assets/list-icon.svg" alt="list-icon" />
                <h5 className="!font-[400]">Live stroke & corners</h5>
              </li>
              <li className="flex items-center gap-[12px] mb-[12px]">
                <img src="/assets/list-icon.svg" alt="list-icon" />
                <h5 className="!font-[400]">Powered by variants</h5>
              </li>
              <li className="flex items-center gap-[12px] mb-[12px]">
                <img src="/assets/list-icon.svg" alt="list-icon" />
                <h5 className="!font-[400]">IconJar & SVG library</h5>
              </li>
              <li className="flex items-center gap-[12px]">
                <img src="/assets/list-icon.svg" alt="list-icon" />
                <h5 className="!font-[400]">Unlimited projects</h5>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center">          
          <div className="relative inline-block">
            {/* <button className="p-[18px_27px] inline-flex items-center gap-[12px] border border-[#e6e6e6] shadow-[0px_1px_10px_0px_#1F222914] rounded-[48px] max-[580px]:p-[10px_22px]">
              <img src="/assets/demo-icon.svg" alt="demo-icon" />
              Try free demo
            </button>            */}
          </div>
        </div>
      </div>
       <div className="shadow-11"></div>
      <div className="shadow-12"></div>
    </section>
  );
}
// pricing-round
