import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/Banner/Banner";
import OurService from "@/components/OurService/OurService";
import OurServiceSecound from "@/components/OurServiceSecound/OurServiceSecound";
import Generate from "@/components/Generate/Generate";
import Pricing from "@/components/Pricing/Pricing";
import FAQS from "@/components/FAQs/FAQS";
import Future from "@/components/Future/Future";
import Footer from "@/components/Footer/Footer";
import Benefit from "@/components/Benefit/Benefit";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="overflow-hidden">
        {/* section 1 */}

        {/* section 2 */}
        <Banner />

        {/* section 3 */}
        <div id="features-section">
          <OurService />
        </div>

        {/* section 4 */}
        {/* <OurServiceSecound /> */}

        {/* section 5 */}
        {/* <div id="generate-section">
          <Generate />
        </div> */}

        {/* section 6 */}
        <section id='pricing-section'>
          <Pricing />
        </section>

        <Benefit />
        
        {/* section 7 */}
        <div id="faq-section">
          <FAQS />
        </div>

        {/* section 8 */}
        <Future />


        {/* section 8 */}
        <Footer />
      </div>
    </>
  );
}
