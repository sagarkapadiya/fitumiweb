import { useState, useEffect } from "react";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (isActive) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isActive]);

  return (
    <header className="navbar p-[10px_0] bg-[var(--purple)] sticky top-0 z-10">
      <div className="container">
        <div className="flex items-center justify-between gap-[20px]">
          <div className="">
            <a href="/">
              <img
                className="h-full object-cover w-[110px]"
                src="/assets/logo.png"
                alt="logo"
              />
            </a>
          </div>
          <div
            className={`relative transition duration-75 ease-in-out p-[8px_20px] border border-[#FFFFFF14] rounded-[50px] bg-[#FFFFFF05] max-[991px]:fixed max-[991px]:border-0 max-[991px]:bg-[#EFE9FF] max-[991px]:!rounded-none max-[991px]:top-0 max-[991px]:left-[-100%] max-[991px]:p-[30px] max-[991px]:h-[100vh] max-[991px]:max-w-[400px] max-[991px]:w-full max-[991px]:flex max-[991px]:items-center max-[991px]:justify-center ${isActive ? "!left-0" : ""
              }`}
          >
            <ul className="flex justify-center gap-[23px] max-[991px]:flex-col max-[991px]:items-center">
              <li>
                <a
                  href="#create-image"
                  className="text-[var(--white)] text-[14px] leading-[20px] font-[400] max-[991px]:text-[var(--black)] max-[991px]:text-[18px] max-[991px]:leaading-[26px] max-[991px]:font-[500]"
                >
                  Design
                </a>
              </li>
              <li>
                <a
                  href="#edit-tools"
                  className="text-[var(--white)] text-[14px] leading-[20px] font-[400] max-[991px]:text-[var(--black)] max-[991px]:text-[18px] max-[991px]:leaading-[26px] max-[991px]:font-[500]"
                >
                  Edit Tools
                </a>
              </li>
              <li>
                <a
                  href="#ai-background"
                  className="text-[var(--white)] text-[14px] leading-[20px] font-[400] max-[991px]:text-[var(--black)] max-[991px]:text-[18px] max-[991px]:leaading-[26px] max-[991px]:font-[500]"
                >
                  Background
                </a>
              </li>
              <li>
                <a
                  href="#ai-video"
                  className="text-[var(--white)] text-[14px] leading-[20px] font-[400] max-[991px]:text-[var(--black)] max-[991px]:text-[18px] max-[991px]:leaading-[26px] max-[991px]:font-[500]"
                >
                  Video
                </a>
              </li>
              <li>
                <a
                  href="#graphic-design"
                  className="text-[var(--white)] text-[14px] leading-[20px] font-[400] max-[991px]:text-[var(--black)] max-[991px]:text-[18px] max-[991px]:leaading-[26px] max-[991px]:font-[500]"
                >
                  Graphic Design
                </a>
              </li>
              <li>
                <a
                  href="#pricing-section"
                  className="text-[var(--white)] text-[14px] leading-[20px] font-[400] max-[991px]:text-[var(--black)] max-[991px]:text-[18px] max-[991px]:leaading-[26px] max-[991px]:font-[500]"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#faq-section"
                  className="text-[var(--white)] text-[14px] leading-[20px] font-[400] max-[991px]:text-[var(--black)] max-[991px]:text-[18px] max-[991px]:leaading-[26px] max-[991px]:font-[500]"
                >
                  FAQ
                </a>
              </li>
            </ul>
            <button
              onClick={() => setIsActive(false)}
              className={`absolute top-[20px] right-[20px] hidden max-[991px]:block`}
            >
              <img src="/assets/close-icon.svg" className="w-[20px] h-[20px]" />
            </button>
          </div>
          <div className="hidden max-[991px]:flex ml-auto" onClick={toggleMenu}>
            <button>
              <img src="/assets/menu-icon.svg" className="max-[991px]:w-[20px] max-[991px]:h-[20px]" />
            </button>
          </div>
          <div className="flex items-center gap-[24px] max-[480px]:gap-[15px]">
            <a
              href={"/"}
              className="text-[var(--white)] text-[14px] leading-[20px] font-[500]"
            >
              Login
            </a>
            <a href={"/"} className="site_btn">
              Start free trial
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
