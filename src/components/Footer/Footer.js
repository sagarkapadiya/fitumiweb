import PrivacyPolicy from "@/pages/privacypolicy/PrivacyPolicy";
import React, { useState } from "react";
import Link from 'next/link';

export default function Footer() {

  const [showPolicy, setShowPolicy] = useState(false);


  return (
    <footer className="bg-[#4D2F8C] bg-[url(/assets/footer-bg.png)] bg-no-repeat bg-cover overflow-x-hidden">
      <div className="container">
        <div className="grid grid-cols-4 max-[767px]:grid-cols-2 gap-[26px] py-14">
          <div className="h-full">
            <a href="/" className="block max-w-[150px] w-full">
              <img src="/assets/logo.png" />
            </a>
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
            </ul>
          </div>
          <div>
            <h5 className="text-[20px] leading-[30px] text-[var(--white)] mb-[20px]">
              Legal
            </h5>
            <ul>
              <li className="mb-[20px]">
                <Link href="/privacypolicy/PrivacyPolicy" legacyBehavior>
                  <a
                    className="text-[#FFFFFFCC] text-[16px] leading-[24px]"
                  >
                    Terms or use
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-[20px] leading-[30px] text-[var(--white)] mb-[20px]">
              Social Media
            </h5>
            <ul className="flex items-center gap-3">
              {/* <li className="mb-[20px]">
                <a
                  href="/"
                  className="text-[#FFFFFFCC] text-[16px] leading-[24px] flex items-center gap-[8px]"
                >
                  <img src="/assets/twitter.svg" alt="twitter" />
                  Twitter
                </a>
              </li> */}
              <li className="mb-[20px]">
                <a
                  href="https://www.facebook.com/fitumiai?rdid=7SYyE3K9L7fa3G7v&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17BZVd72m7%2F#"
                  target="_blank"
                  className="text-[#FFFFFFCC] text-[16px] leading-[24px] flex items-center gap-[8px]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </a>
              </li>
              <li className="mb-[20px]">
                <a
                  href="https://www.instagram.com/fitumiai/?igsh=MWpma3J0dTJ0eTdiaQ%3D%3D#"
                  target="_blank"
                  className="text-[#FFFFFFCC] text-[16px] leading-[24px] flex items-center gap-[8px]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                </a>
              </li>
              <li className="mb-[20px]">
                <a
                  href="https://www.linkedin.com/company/fitumiai/"
                  target="_blank"
                  className="text-[#FFFFFFCC] text-[16px] leading-[24px] flex items-center gap-[8px]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
              </li>
              <li className="mb-[20px]">
                <a
                  href="https://www.tiktok.com/@fitumiai?_t=ZS-8z95kZXIynQ&_r=1"
                  target="_blank"
                  className="text-[#FFFFFFCC] text-[16px] leading-[24px] flex items-center gap-[8px]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                  </svg>
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
