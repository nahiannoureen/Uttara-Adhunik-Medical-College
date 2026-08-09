import Banner from "@/components/Aboutpage/Vision/Banner";
import TabNav from "@/components/Aboutpage/Vision/TabNav";
import Vision from "@/components/Aboutpage/Vision/Vision";
import Admission from "@/components/Aboutpage/Vision/Admission";

export default function Overview() {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* <Header /> */}
      <Banner />
      <TabNav />
      <Vision />
      <Admission />
    </div>
  );
}
