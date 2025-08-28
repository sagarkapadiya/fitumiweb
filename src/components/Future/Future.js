import React from "react";

export default function Future() {
  return (
    <section className="p-[0_0_100px] max-[991px]:p-[0_0_60px] max-[480px]:p-[0_0_40px]">
      <div className="container">
        <div className="bg-[url(/assets/futured-bg.png)] p-[60px] rounded-[25px] bg-cover bg-center max-[991px]:p-[30px]">
          <div className="max-w-[1080px] m-[0_auto] text-center">
            <h2 className="mb-[15px]">Ready to Transform Your Design Process?</h2>
            <p className="mb-[50px] text-[18px] leading-[28px] text-[#2F2B3CCC] max-[991px]:mb-[30px] max-[767px]:text-[16px] max-[767px]:leading-[24px] max-[580px]:text-[14px] max-[580px]:leading-[20px]">
              Join thousands of designers who've already revolutionized their workflows
            </p>
            <button className="site_btn mx-auto">
              Try now for free <img src="/assets/right-arrow.svg" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
