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
        </div>
        <div className="mb-[50px]" id="create-image">
          <div className="bg-[#EFE9FF] p-[30px] rounded-[40px] max-[480px]:p-[20px]">
            <div className="text-center mb-[20px]">
              <h4 className="mb-[14px] max-[991px]:mb-[10px] text-[#181059]">
                Create Image
              </h4>
              <p className="max-w-[991px] mx-auto">
                AI-powered garment visualization on real models Generate
                ultra-realistic model images directly from your sketches, fabric
                swatches, or text prompts. Fitumi’s advanced AI engine renders
                fabric textures, lighting, and garment shapes with photo-level
                precision — saving you time, samples, and shoot costs.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-5 max-[1280px]:grid-cols-2 max-[767px]:grid-cols-1">
              <div className="relative bg-[var(--white)] p-[25px] rounded-[13px] border border-[#EDEAF3] max-[480px]:p-[25px_15px]">
                <div className="max-[991px]:order-2">
                  <div className="rounded-[5px] overflow-hidden mb-4">
                    <video
                      autoPlay
                      muted
                      playsInline
                      loop
                      className="w-full h-[338px] object-cover max-[1301px]:h-[240px] max-[1280px]:h-[340px] max-[991px]:h-[300px] max-[767px]:h-[390px] object-top max-[480px]:h-[240px]"
                      src="https://d1xomwsr4rcahc.cloudfront.net/landing-page/video/Text%20to%20Garment.mp4"
                    ></video>
                  </div>
                  <h4 className="text-[#1F1F20] text-[22px] leading-[30px] font-[700] max-[580px]:text-[20px] max-[580px]:leading-[28px] max-[480px]:text-[18px] max-[480px]:leading-[26px] text-center">
                    Text To Garment
                  </h4>
                </div>
              </div>

              <div className="relative bg-[var(--white)] p-[25px] rounded-[13px] border border-[#EDEAF3] max-[480px]:p-[25px_15px]">
                <div className="max-[991px]:order-2">
                  <div className="rounded-[5px] overflow-hidden mb-4">
                    <video
                      autoPlay
                      muted
                      playsInline
                      loop
                      className="w-full h-[338px] object-cover max-[1301px]:h-[240px] max-[1280px]:h-[340px] max-[991px]:h-[300px] max-[767px]:h-[390px] object-top max-[480px]:h-[240px]"
                      src="https://d1xomwsr4rcahc.cloudfront.net/landing-page/video/Sketch%20to%20Garment.mp4"
                    ></video>
                  </div>
                  <h4 className="text-[#1F1F20] text-[22px] leading-[30px] font-[700] max-[580px]:text-[20px] max-[580px]:leading-[28px] max-[480px]:text-[18px] max-[480px]:leading-[26px] text-center">
                    Sketch To Garment
                  </h4>
                </div>
              </div>
              <div className="relative bg-[var(--white)] p-[25px] rounded-[13px] border border-[#EDEAF3] max-[480px]:p-[25px_15px]">
                <div className="max-[991px]:order-2">
                  <div className="rounded-[5px] overflow-hidden mb-4">
                    <video
                      autoPlay
                      muted
                      playsInline
                      loop
                      className="w-full h-[338px] object-cover max-[1301px]:h-[240px] max-[1280px]:h-[340px] max-[991px]:h-[300px] max-[767px]:h-[390px] object-top max-[480px]:h-[240px]"
                      src="https://d1xomwsr4rcahc.cloudfront.net/landing-page/video/Fabric%20to%20Garment.mp4"
                    ></video>
                  </div>
                  <h4 className="text-[#1F1F20] text-[22px] leading-[30px] font-[700] max-[580px]:text-[20px] max-[580px]:leading-[28px] max-[480px]:text-[18px] max-[480px]:leading-[26px] text-center">
                    Fabric To Garment
                  </h4>
                </div>
              </div>
            </div>
            <div className="text-center mt-5">
              <button className="site_btn mx-auto">Try now for free</button>
            </div>
          </div>
        </div>
        <div className="mb-[50px]" id="edit-tools">
          <div className="bg-[#EFE9FF] p-[30px] rounded-[40px] max-[480px]:p-[20px]">
            <div className="text-center mb-[20px]">
              <h4 className="mb-[14px] max-[991px]:mb-[10px] text-[#181059]">
                Edit Tools: Perfect Every Shot
              </h4>
              <p className="max-w-[991px] mx-auto">
                Even the best AI needs a human touch.
              </p>
              <p className="max-w-[991px] mx-auto">
                Fitumi’s built-in tools help you refine your creation with ease:
              </p>
            </div>
            <div className="grid grid-cols-3 gap-5 max-[1280px]:grid-cols-2 max-[767px]:grid-cols-1">
              <div className="relative bg-[var(--white)] p-[25px] rounded-[13px] border border-[#EDEAF3] max-[480px]:p-[25px_15px]">
                <div className="max-[991px]:order-2">
                  <div className="rounded-[5px] overflow-hidden mb-4">
                    <video
                      autoPlay
                      muted
                      playsInline
                      loop
                      src="https://d1xomwsr4rcahc.cloudfront.net/landing-page/video/Color%20Changer.mp4"
                      className="w-full h-[338px] object-cover max-[1301px]:h-[240px] max-[1280px]:h-[340px] max-[991px]:h-[300px] max-[767px]:h-[390px] object-top max-[480px]:h-[240px]"
                    ></video>
                  </div>
                  <h4 className="text-[#1F1F20] text-[22px] leading-[30px] font-[700] max-[580px]:text-[20px] max-[580px]:leading-[28px] max-[480px]:text-[18px] max-[480px]:leading-[26px] text-center">
                    Color Changer
                  </h4>
                </div>
              </div>

              <div className="relative bg-[var(--white)] p-[25px] rounded-[13px] border border-[#EDEAF3] max-[480px]:p-[25px_15px]">
                <div className="max-[991px]:order-2">
                  <div className="rounded-[5px] overflow-hidden mb-4">
                    <video
                      autoPlay
                      muted
                      playsInline
                      loop
                      src="https://d1xomwsr4rcahc.cloudfront.net/landing-page/video/Fabric%20Changer.mp4"
                      className="w-full h-[338px] object-cover max-[1301px]:h-[240px] max-[1280px]:h-[340px] max-[991px]:h-[300px] max-[767px]:h-[390px] object-top max-[480px]:h-[240px]"
                    ></video>
                  </div>
                  <h4 className="text-[#1F1F20] text-[22px] leading-[30px] font-[700] max-[580px]:text-[20px] max-[580px]:leading-[28px] max-[480px]:text-[18px] max-[480px]:leading-[26px] text-center">
                    Fabric Changer
                  </h4>
                </div>
              </div>
              <div className="relative bg-[var(--white)] p-[25px] rounded-[13px] border border-[#EDEAF3] max-[480px]:p-[25px_15px]">
                <div className="max-[991px]:order-2">
                  <div className="rounded-[5px] overflow-hidden mb-4">
                    <video
                      autoPlay
                      muted
                      playsInline
                      loop
                      className="w-full h-[338px] object-cover max-[1301px]:h-[240px] max-[1280px]:h-[340px] max-[991px]:h-[300px] max-[767px]:h-[390px] object-top max-[480px]:h-[240px]"
                      src="https://d1xomwsr4rcahc.cloudfront.net/landing-page/video/Pose%20Changer.mp4"
                    ></video>
                  </div>
                  <h4 className="text-[#1F1F20] text-[22px] leading-[30px] font-[700] max-[580px]:text-[20px] max-[580px]:leading-[28px] max-[480px]:text-[18px] max-[480px]:leading-[26px] text-center">
                    Model Pose Fixer
                  </h4>
                </div>
              </div>

            </div>
            <div className="text-center mt-5">
              <button className="site_btn mx-auto">Try now for free</button>
            </div>
          </div>
        </div>
        <div className="mb-[50px]" id="ai-background">
          <div className="bg-[#EFE9FF] p-[30px] rounded-[40px] max-[480px]:p-[20px]">
            <div className="text-center mb-[20px]">
              <h4 className="mb-[14px] max-[991px]:mb-[10px] text-[#181059]">
                AI Background
              </h4>
              <p className="max-w-[991px] mx-auto">
                Fitumi’s background tools give you complete control over your
                images — whether you want a clean studio look, a themed runway, or
                a fully customized scene.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-5 max-[1280px]:grid-cols-2 max-[767px]:grid-cols-1">
              <div className="relative bg-[var(--white)] p-[25px] rounded-[13px] border border-[#EDEAF3] max-[480px]:p-[25px_15px]">
                <div className="max-[991px]:order-2">
                  <div className="rounded-[5px] overflow-hidden mb-4">
                    <video
                      autoPlay
                      muted
                      playsInline
                      loop
                      className="w-full h-[338px] object-cover max-[1301px]:h-[240px] max-[1280px]:h-[340px] max-[991px]:h-[300px] max-[767px]:h-[390px] object-top max-[480px]:h-[240px]"
                      src="https://d1xomwsr4rcahc.cloudfront.net/landing-page/video/Remove%20Background.mp4"
                    ></video>
                  </div>
                  <h4 className="text-[#1F1F20] text-[22px] leading-[30px] font-[700] max-[580px]:text-[20px] max-[580px]:leading-[28px] max-[480px]:text-[18px] max-[480px]:leading-[26px] text-center">
                    Remove Background
                  </h4>

                </div>
              </div>
              <div className="relative bg-[var(--white)] p-[25px] rounded-[13px] border border-[#EDEAF3] max-[480px]:p-[25px_15px]">
                <div className="max-[991px]:order-2">
                  <div className="rounded-[5px] overflow-hidden mb-4">
                    <video
                      autoPlay
                      muted
                      playsInline
                      loop
                      src="https://d1xomwsr4rcahc.cloudfront.net/landing-page/video/Create%20Background.mp4"
                      className="w-full h-[338px] object-cover max-[1301px]:h-[240px] max-[1280px]:h-[340px] max-[991px]:h-[300px] max-[767px]:h-[390px] object-top max-[480px]:h-[240px]"
                    ></video>
                  </div>
                  <h4 className="text-[#1F1F20] text-[22px] leading-[30px] font-[700] max-[580px]:text-[20px] max-[580px]:leading-[28px] max-[480px]:text-[18px] max-[480px]:leading-[26px] text-center">
                    Create Background
                  </h4>

                </div>
              </div>
              <div className="relative bg-[var(--white)] p-[25px] rounded-[13px] border border-[#EDEAF3] max-[480px]:p-[25px_15px]">
                <div className="max-[991px]:order-2">
                  <div className="rounded-[5px] overflow-hidden mb-4">
                    <video
                      autoPlay
                      muted
                      playsInline
                      loop
                      src="https://d1xomwsr4rcahc.cloudfront.net/landing-page/video/Change%20Background.mp4"
                      className="w-full h-[338px] object-cover max-[1301px]:h-[240px] max-[1280px]:h-[340px] max-[991px]:h-[300px] max-[767px]:h-[390px] object-top max-[480px]:h-[240px]"
                    ></video>
                  </div>
                  <h4 className="text-[#1F1F20] text-[22px] leading-[30px] font-[700] max-[580px]:text-[20px] max-[580px]:leading-[28px] max-[480px]:text-[18px] max-[480px]:leading-[26px] text-center">
                    Change Background
                  </h4>

                </div>
              </div>
            </div>
            <div className="text-center mt-5">
              <button className="site_btn mx-auto">Try now for free</button>
            </div>
          </div>
        </div>
        <div className="mb-[50px]" id="ai-video">
          <div className="bg-[#EFE9FF] p-[30px] rounded-[40px] max-[480px]:p-[20px]">
            <div className="text-center mb-[20px]">
              <h4 className="mb-[14px] max-[991px]:mb-[10px] text-[#181059]">
                Image to Video
              </h4>
              <p className="max-w-[991px] mx-auto">
                Bring your still images to life. With Fitumi’s Image-to-Video tool, you can transform any garment photo into a high-quality video that feels like a real fashion shoot. Whether it’s for product pages, social media, or investor presentations, Fitumi makes your designs move.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-5 max-[1280px]:grid-cols-2 max-[767px]:grid-cols-1">
              <div className="relative bg-[var(--white)] p-[25px] rounded-[13px] border border-[#EDEAF3] max-[480px]:p-[25px_15px]">
                <div className="max-[991px]:order-2">
                  <div className="rounded-[5px] overflow-hidden mb-4">
                    <video
                      autoPlay
                      muted
                      playsInline
                      loop
                      src="https://d1xomwsr4rcahc.cloudfront.net/landing-page/video/Runway%20video.mp4"
                      className="w-full h-[338px] object-cover max-[1301px]:h-[240px] max-[1280px]:h-[340px] max-[991px]:h-[300px] max-[767px]:h-[390px] object-top max-[480px]:h-[240px]"
                    ></video>
                  </div>
                  <h4 className="text-[#1F1F20] text-center text-[22px] leading-[30px] font-[700] max-[580px]:text-[20px] max-[580px]:leading-[28px] max-[480px]:text-[18px] max-[480px]:leading-[26px]">
                    Runway Video
                  </h4>
                </div>
              </div>
              <div className="relative bg-[var(--white)] p-[25px] rounded-[13px] border border-[#EDEAF3] max-[480px]:p-[25px_15px]">
                <div className="max-[991px]:order-2">
                  <div className="rounded-[5px] overflow-hidden mb-4">
                    <video
                      autoPlay
                      muted
                      playsInline
                      loop
                      src="https://d1xomwsr4rcahc.cloudfront.net/landing-page/video/Studio%20Shot%20with%20Ai.mp4"
                      className="w-full h-[338px] object-cover max-[1301px]:h-[240px] max-[1280px]:h-[340px] max-[991px]:h-[300px] max-[767px]:h-[390px] object-top max-[480px]:h-[240px]"
                    ></video>
                  </div>
                  <h4 className="text-[#1F1F20] text-center text-[22px] leading-[30px] font-[700] max-[580px]:text-[20px] max-[580px]:leading-[28px] max-[480px]:text-[18px] max-[480px]:leading-[26px]">
                    Studio Shot with Ai
                  </h4>
                </div>
              </div>
              <div className="relative bg-[var(--white)] p-[25px] rounded-[13px] border border-[#EDEAF3] max-[480px]:p-[25px_15px]">
                <div className="max-[991px]:order-2">
                  <div className="rounded-[5px] overflow-hidden mb-4">
                    <video
                      autoPlay
                      muted
                      playsInline
                      loop
                      src="https://d1xomwsr4rcahc.cloudfront.net/landing-page/video/360%20Garment%20view.mp4"
                      className="w-full h-[338px] object-cover max-[1301px]:h-[240px] max-[1280px]:h-[340px] max-[991px]:h-[300px] max-[767px]:h-[390px] object-top max-[480px]:h-[240px]"
                    ></video>
                  </div>
                  <h4 className="text-[#1F1F20] text-center text-[22px] leading-[30px] font-[700] max-[580px]:text-[20px] max-[580px]:leading-[28px] max-[480px]:text-[18px] max-[480px]:leading-[26px]">
                    360 Garment view
                  </h4>
                </div>
              </div>
            </div>
            <div className="text-center mt-5">
              <button className="site_btn mx-auto">Try now for free</button>
            </div>
          </div>
        </div>
        <div id='graphic-design'>
          <div className="bg-[#EFE9FF] p-[30px] rounded-[40px] max-[480px]:p-[20px]">
            <div className="flex items-center gap-5">
              <div className=" mb-[20px] w-[70%]">
                <h4 className="mb-[14px] max-[991px]:mb-[10px] text-[#181059]">
                  Graphic Design, The Fitumi Way
                </h4>
                <p className="max-w-[991px] mx-auto">
                  Oh, and here’s the twist — Fitumi isn’t just for garments. Design
                  bold T-shirt graphics, intricate embroidery patterns, striking
                  embossing, and custom stickers. Whether you’re branding,
                  personalizing, or experimenting, our AI makes it effortless and
                  production-ready
                </p>
                <div className="text-center mt-5">
                  <button className="site_btn">Try now for free</button>
                </div>
              </div>
              <div className="relative bg-[var(--white)] p-[25px] rounded-[13px] border border-[#EDEAF3] max-[480px]:p-[25px_15px]">
                <div className="max-[991px]:order-2">
                  <div className="rounded-[5px] overflow-hidden mb-4">
                    <video
                      autoPlay
                      muted
                      playsInline
                      loop
                      src="https://d1xomwsr4rcahc.cloudfront.net/landing-page/video/Graphic%20Design.mp4"
                      className="w-full h-[338px] object-cover max-[1301px]:h-[240px] max-[1280px]:h-[340px] max-[991px]:h-[300px] max-[767px]:h-[390px] object-top max-[480px]:h-[240px]"
                    ></video>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="shadow-4"></div>
      <div className="shadow-5"></div>
    </section>
  );
}
