import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQS() {
  return (
    <section className="relative p-[0_0_130px] max-[991px]:p-[0_0_80px] max-[480px]:p-[0_0_60px]">
      <div className="container">
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
          <p>All you need to know about Lalals.</p>
        </div>
        <div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              className="p-[32px_0] max-[991px]:p-[20px_0]"
              value="item-1"
            >
              <AccordionTrigger className="hover:no-underline border-0 p-0 text-[20px] leading-[30px] max-[991px]:text-[18px] max-[991px]:leading-[26px] max-[480px]:text-[16px] max-[480px]:leading-[20px]">
                Lorem Ipsum is simply dummy{" "}
              </AccordionTrigger>
              <AccordionContent
                className={`text-[#06001399] mt-[16px] mb-0 pb-0`}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="p-[32px_0] max-[991px]:p-[20px_0]"
              value="item-2"
            >
              <AccordionTrigger className="hover:no-underline border-0 p-0 text-[20px] leading-[30px] max-[991px]:text-[18px] max-[991px]:leading-[26px] max-[480px]:text-[16px] max-[480px]:leading-[20px]">
                Lorem Ipsum is simply dummy
              </AccordionTrigger>
              <AccordionContent
                className={`text-[#06001399] mt-[16px] mb-0 pb-0`}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="p-[32px_0] max-[991px]:p-[20px_0]"
              value="item-3"
            >
              <AccordionTrigger className="hover:no-underline border-0 p-0 text-[20px] leading-[30px] max-[991px]:text-[18px] max-[991px]:leading-[26px] max-[480px]:text-[16px] max-[480px]:leading-[20px]">
                Lorem Ipsum is simply dummy Lorem Ipsum
              </AccordionTrigger>
              <AccordionContent
                className={`text-[#06001399] mt-[16px] mb-0 pb-0`}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="p-[32px_0] max-[991px]:p-[20px_0]"
              value="item-4"
            >
              <AccordionTrigger className="hover:no-underline border-0 p-0 text-[20px] leading-[30px] max-[991px]:text-[18px] max-[991px]:leading-[26px] max-[480px]:text-[16px] max-[480px]:leading-[20px]">
                Lorem Ipsum is simply
              </AccordionTrigger>
              <AccordionContent
                className={`text-[#06001399] mt-[16px] mb-0 pb-0`}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="p-[32px_0] max-[991px]:p-[20px_0]"
              value="item-5"
            >
              <AccordionTrigger className="hover:no-underline border-0 p-0 text-[20px] leading-[30px] max-[991px]:text-[18px] max-[991px]:leading-[26px] max-[480px]:text-[16px] max-[480px]:leading-[20px]">
                Lorem Ipsum is simply dummy simply dummy
              </AccordionTrigger>
              <AccordionContent
                className={`text-[#06001399] mt-[16px] mb-0 pb-0`}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="p-[32px_0] max-[991px]:p-[20px_0]"
              value="item-6"
            >
              <AccordionTrigger className="hover:no-underline border-0 p-0 text-[20px] leading-[30px] max-[991px]:text-[18px] max-[991px]:leading-[26px] max-[480px]:text-[16px] max-[480px]:leading-[20px]">
                Lorem Ipsum is simply dummy
              </AccordionTrigger>
              <AccordionContent
                className={`text-[#06001399] mt-[16px] mb-0 pb-0`}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="p-[32px_0] max-[991px]:p-[20px_0]"
              value="item-7"
            >
              <AccordionTrigger className="hover:no-underline border-0 p-0 text-[20px] leading-[30px] max-[991px]:text-[18px] max-[991px]:leading-[26px] max-[480px]:text-[16px] max-[480px]:leading-[20px]">
                Lorem Ipsum is simply dummy simply
              </AccordionTrigger>
              <AccordionContent
                className={`text-[#06001399] mt-[16px] mb-0 pb-0`}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
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
