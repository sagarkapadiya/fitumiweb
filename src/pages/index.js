import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/Banner/Banner";
import OurService from "@/components/OurService/OurService";
import OurServiceSecound from "@/components/OurServiceSecound/OurServiceSecound";
import Generate from "@/components/Generate/Generate";
import Pricing from "@/components/Pricing/Pricing";
import FAQS from "@/components/FAQs/FAQS";
import Future from "@/components/Future/Future";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      {/* section 1 */}
      <Navbar />

      {/* section 2 */}
      <Banner />

      {/* section 3 */}
      <OurService />

      {/* section 4 */}
      <OurServiceSecound />

      {/* section 5 */}
      <Generate />

      {/* section 6 */}
      <Pricing />

      {/* section 7 */}
      <FAQS />

      {/* section 8 */}
      <Future />

      {/* section 8 */}
      <Footer />
    </>
  );
}
