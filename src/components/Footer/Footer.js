import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#4D2F8C] bg-[url(/assets/footer-bg.png)] bg-no-repeat bg-cover overflow-x-hidden">
      <div className="container">
        <div className="grid grid-cols-4 max-[767px]:grid-cols-2 gap-[26px] py-14">
          <div className="h-full">
            <div className="max-w-[350px] ml-auto">
              <img src="/assets/logo.svg" />
              <h6 className="text-[var(--white)] mt-[20px] !font-[400]">
                World’s leading vocal generator and transformer.
              </h6>
            </div>
          </div>
          <div>
            <h5 className="text-[20px] leading-[30px] text-[var(--white)] mb-[20px]">
              Company
            </h5>
            <ul>
              <li className="mb-[20px]">
                <a
                  href="/"
                  className="text-[#FFFFFFCC] text-[16px] leading-[24px]"
                >
                  Home
                </a>
              </li>
              <li className="mb-[20px]">
                <a
                  href="/"
                  className="text-[#FFFFFFCC] text-[16px] leading-[24px]"
                >
                  About
                </a>
              </li>
              <li className="mb-[20px]">
                <a
                  href="/"
                  className="text-[#FFFFFFCC] text-[16px] leading-[24px]"
                >
                  Support
                </a>
              </li>
              {/* <li className="mb-[20px]">
                    <a
                      href="/"
                      className="text-[#FFFFFFCC] text-[16px] leading-[24px]"
                    >
                      Affilliates
                    </a>
                  </li> */}
            </ul>
          </div>
          <div>
            <h5 className="text-[20px] leading-[30px] text-[var(--white)] mb-[20px]">
              Legal
            </h5>
            <ul>
              <li className="mb-[20px]">
                <a
                  href="/"
                  className="text-[#FFFFFFCC] text-[16px] leading-[24px]"
                >
                  Terms
                </a>
              </li>
              <li className="mb-[20px]">
                <a
                  href="/"
                  className="text-[#FFFFFFCC] text-[16px] leading-[24px]"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="mb-[20px]">
                <a
                  href="/"
                  className="text-[#FFFFFFCC] text-[16px] leading-[24px]"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-[20px] leading-[30px] text-[var(--white)] mb-[20px]">
              Social Media
            </h5>
            <ul>
              <li className="mb-[20px]">
                <a
                  href="/"
                  className="text-[#FFFFFFCC] text-[16px] leading-[24px] flex items-center gap-[8px]"
                >
                  <img src="/assets/twitter.svg" alt="twitter" />
                  Twitter
                </a>
              </li>
              <li className="mb-[20px]">
                <a
                  href="/"
                  className="text-[#FFFFFFCC] text-[16px] leading-[24px] flex items-center gap-[8px]"
                >
                  <img src="/assets/instagram.svg" alt="instagram" />
                  Instagram
                </a>
              </li>
              <li className="mb-[20px]">
                <a
                  href="/"
                  className="text-[#FFFFFFCC] text-[16px] leading-[24px] flex items-center gap-[8px]"
                >
                  <img src="/assets/youtube.svg" alt="youtube" />
                  Youtube
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="p-[24px_0]">
            <ul className="flex justify-center gap-[50px] max-[580px]:flex-wrap max-[580px]:gap-[20px_30px]">
              <li>
                <img src="/assets/visa-icon.svg" />
              </li>
              <li>
                <img src="/assets/paypal-icon.svg" />
              </li>
              <li>
                <img src="/assets/gpay-icon.svg" />
              </li>
              <li>
                <img src="/assets/applepay-icon.svg" />
              </li>
              <li>
                <img src="/assets/meta-icon.svg" />
              </li>
              <li>
                <img src="/assets/express-icon.svg" />
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
