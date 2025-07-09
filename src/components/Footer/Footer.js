import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#4D2F8C] bg-[url(/assets/footer-bg.png)] bg-no-repeat bg-cover">
      {/* <div className="container"> */}
      <div className="flex border-b border-[#FFFFFF1A] max-[991px]:flex-col">
        <div className="p-[130px_80px] h-full w-[40%] max-[1300px]:p-[80px_50px] max-[1300px]:w-[30%] max-[991px]:w-full max-[580px]:p-[50px_20px]">
          <div className="max-w-[280px] ml-auto max-[991px]:ml-0">
            <img src="/assets/logo.svg" />
            <h6 className="text-[var(--white)] mt-[20px] !font-[400]">
              World’s leading vocal generator and transformer.
            </h6>
          </div>
        </div>
        <div className="w-[calc(100%_-_40%)] border-l border-[#FFFFFF1A] max-[1300px]:w-[calc(100%_-_30%)] max-[991px]:w-full max-[991px]:border-l-0 max-[991px]:border-t">
          <div className="!p-[40px] border-b border-[#FFFFFF1A] max-[580px]:!p-[40px_20px]">
            <div className="flex gap-[180px] max-[1300px]:gap-[100px] max-[991px]:justify-between max-[991px]:gap-[40px] max-[580px]:flex-wrap">
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
                  <li className="mb-[20px]">
                    <a
                      href="/"
                      className="text-[#FFFFFFCC] text-[16px] leading-[24px]"
                    >
                      Affilliates
                    </a>
                  </li>
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
            </div>
          </div>
          <div className="p-[24px_0]">
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
          </div>
        </div>
      </div>
      <div className="p-[16px] text-center">
        <p className="text-[#FFFFFF66]">
          © Copyright ABCD. All rights reserved
        </p>
      </div>
      {/* </div> */}
    </footer>
  );
}
