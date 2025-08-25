import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQS() {
  return (
    <section className="relative p-[0_0_80px] max-[991px]:p-[0_0_80px] max-[480px]:p-[0_0_60px]">
      <div className="max-w-[1000px] w-full px-4 mx-auto">
        <div className="text-center mb-[50px] max-[991px]:mb-[30px]">
          <div className="common_head !mb-[30px] max-[991px]:!mb-[20px]">
            <div className="common_head_inner">
              <img src="/assets/heading_icon.svg" alt="heading-icon" />
              <h6>FAQs</h6>
            </div>
          </div>
          <h2 className="mb-[14px] max-[991px]:mb-[10px] text-[#181059]">
            Frequently Asked Questions
          </h2>
          <p>All you need to know about Fitumi.</p>
        </div>
        <div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              className="p-[25px_0] max-[991px]:p-[20px_0]"
              value="item-1"
            >
              <AccordionTrigger className="hover:no-underline border-0 p-0 text-[18px] leading-[30px] max-[991px]:text-[18px] max-[991px]:leading-[26px] max-[480px]:text-[16px] max-[480px]:leading-[20px]">
                Can I cancel my subscription anytime?
              </AccordionTrigger>
              <AccordionContent
                className={`text-[#06001399] mt-[16px] mb-0 pb-0 text-base`}
              >
                Yes, you’re free to cancel your subscription whenever you like. You’ll continue to have access until the end of your billing cycle, and there are no penalties or fees for canceling.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="p-[25px_0] max-[991px]:p-[20px_0]"
              value="item-2"
            >
              <AccordionTrigger className="hover:no-underline border-0 p-0 text-[18px] leading-[30px] max-[991px]:text-[18px] max-[991px]:leading-[26px] max-[480px]:text-[16px] max-[480px]:leading-[20px]">
                Can I purchase extra credits if I run out?
              </AccordionTrigger>
              <AccordionContent
                className={`text-[#06001399] mt-[16px] mb-0 pb-0 text-base`}
              >
                Definitely! You can restart your plan at any time and instantly get new credits. We offer three subscription tiers with varying limits, so you can select the one that fits your usage.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="p-[25px_0] max-[991px]:p-[20px_0]"
              value="item-3"
            >
              <AccordionTrigger className="hover:no-underline border-0 p-0 text-[18px] leading-[30px] max-[991px]:text-[18px] max-[991px]:leading-[26px] max-[480px]:text-[16px] max-[480px]:leading-[20px]">
                Who holds the rights to the renders created on Fitumi?
              </AccordionTrigger>
              <AccordionContent
                className={`text-[#06001399] mt-[16px] mb-0 pb-0 text-base`}
              >
                The renders you create with your original sketches are fully owned by you. If you're using your own designs, you retain full copyright. Please be mindful that using third-party images or sketches could violate copyright laws if the original work is recognizable in your renders.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="p-[25px_0] max-[991px]:p-[20px_0]"
              value="item-4"
            >
              <AccordionTrigger className="hover:no-underline border-0 p-0 text-[18px] leading-[30px] max-[991px]:text-[18px] max-[991px]:leading-[26px] max-[480px]:text-[16px] max-[480px]:leading-[20px]">
                Do I need any special expertise to use Fitumi?
              </AccordionTrigger>
              <AccordionContent
                className={`text-[#06001399] mt-[16px] mb-0 pb-0 text-base`}
              >
                No, Fitumi is designed to be user-friendly and accessible to all, regardless of technical skills. Whether you’re a designer, manufacturer, or brand owner, the platform is intuitive and easy to use.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="p-[25px_0] max-[991px]:p-[20px_0]"
              value="item-5"
            >
              <AccordionTrigger className="hover:no-underline border-0 p-0 text-[18px] leading-[30px] max-[991px]:text-[18px] max-[991px]:leading-[26px] max-[480px]:text-[16px] max-[480px]:leading-[20px]">
                What happens to my designs if I cancel my subscription?
              </AccordionTrigger>
              <AccordionContent
                className={`text-[#06001399] mt-[16px] mb-0 pb-0 text-base`}
              >
                Your designs will remain accessible until the end of your paid period. After that, access will be restricted and you may lose your designs. It’s a good idea to download any important designs before your subscription expires.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="p-[25px_0] max-[991px]:p-[20px_0]"
              value="item-6"
            >
              <AccordionTrigger className="hover:no-underline border-0 p-0 text-[18px] leading-[30px] max-[991px]:text-[18px] max-[991px]:leading-[26px] max-[480px]:text-[16px] max-[480px]:leading-[20px]">
                Can I upload my own fabric designs to Fitumi?
              </AccordionTrigger>
              <AccordionContent
                className={`text-[#06001399] mt-[16px] mb-0 pb-0 text-base`}
              >
                Yes! Fitumi’s Fabric Changer tool lets you upload custom fabric images, allowing you to apply them to your designs for a realistic preview. This feature is perfect for experimenting with different materials and textures.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="p-[25px_0] max-[991px]:p-[20px_0]"
              value="item-7"
            >
              <AccordionTrigger className="hover:no-underline border-0 p-0 text-[18px] leading-[30px] max-[991px]:text-[18px] max-[991px]:leading-[26px] max-[480px]:text-[16px] max-[480px]:leading-[20px]">
                How does Fitumi help save on photoshoot expenses?
              </AccordionTrigger>
              <AccordionContent
                className={`text-[#06001399] mt-[16px] mb-0 pb-0 text-base`}
              >
                With tools like Sketch to Photo, fabric changer and  background changer Fitumi enables you to create realistic, high-quality images of your designs without needing to produce physical samples or hire professional photographers. This helps cut down on costly photoshoots.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="p-[25px_0] max-[991px]:p-[20px_0]"
              value="item-8"
            >
              <AccordionTrigger className="hover:no-underline border-0 p-0 text-[18px] leading-[30px] max-[991px]:text-[18px] max-[991px]:leading-[26px] max-[480px]:text-[16px] max-[480px]:leading-[20px]">
                Is there a free trial available for Fitumi?
              </AccordionTrigger>
              <AccordionContent
                className={`text-[#06001399] mt-[16px] mb-0 pb-0 text-base`}
              >
                Yes, we offer a free trial so you can explore Fitumi’s features risk-free. It allows you to try out our tools and services before committing to a paid subscription.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="p-[25px_0] max-[991px]:p-[20px_0]"
              value="item-9"
            >
              <AccordionTrigger className="hover:no-underline border-0 p-0 text-[18px] leading-[30px] max-[991px]:text-[18px] max-[991px]:leading-[26px] max-[480px]:text-[16px] max-[480px]:leading-[20px]">
                Can I change my subscription plan later on?
              </AccordionTrigger>
              <AccordionContent
                className={`text-[#06001399] mt-[16px] mb-0 pb-0 text-base`}
              >
                Yes, you can adjust your subscription at any time. Whether you want to upgrade for more features or downgrade to a more basic plan, the changes will take effect at the start of your next billing cycle.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="p-[25px_0] max-[991px]:p-[20px_0]"
              value="item-10"
            >
              <AccordionTrigger className="hover:no-underline border-0 p-0 text-[18px] leading-[30px] max-[991px]:text-[18px] max-[991px]:leading-[26px] max-[480px]:text-[16px] max-[480px]:leading-[20px]">
                Does Fitumi only serve fashion designers?
              </AccordionTrigger>
              <AccordionContent
                className={`text-[#06001399] mt-[16px] mb-0 pb-0 text-base`}
              >
                No, Fitumi is designed for a variety of professionals, including designers, manufacturers, brands, and even fabric printing companies. Our tools are flexible enough to serve the needs of the entire fashion and textile industry.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="p-[25px_0] max-[991px]:p-[20px_0]"
              value="item-11"
            >
              <AccordionTrigger className="hover:no-underline border-0 p-0 text-[18px] leading-[30px] max-[991px]:text-[18px] max-[991px]:leading-[26px] max-[480px]:text-[16px] max-[480px]:leading-[20px]">
                What kind of support does Fitumi offer to its users?
              </AccordionTrigger>
              <AccordionContent
                className={`text-[#06001399] mt-[16px] mb-0 pb-0 text-base`}
              >
                We currently support our customers through contact form. Our team is here to ensure you get the most out of Fitumi’s tools.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="p-[25px_0] max-[991px]:p-[20px_0]"
              value="item-12"
            >
              <AccordionTrigger className="hover:no-underline border-0 p-0 text-[18px] leading-[30px] max-[991px]:text-[18px] max-[991px]:leading-[26px] max-[480px]:text-[16px] max-[480px]:leading-[20px]">
                What happens when I hit my credit limit for the month?
              </AccordionTrigger>
              <AccordionContent
                className={`text-[#06001399] mt-[16px] mb-0 pb-0 text-base`}
              >
                If you reach your monthly credit limit, you can buy additional credits or upgrade to a plan with a higher credit limit. This ensures you can keep working without disruption.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="shadow-13"></div>
      <div className="shadow-14"></div>
    </section>
  );
}
