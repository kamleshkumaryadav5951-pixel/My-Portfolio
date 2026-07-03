import Footer from "../components/footer";
import HeroSection from "./_components/hero-section";
import LetsConnectSection from "./_components/lets-connect-section";
import MyLatestProjectSection from "./_components/my-latest-project-section";
import QuoteSection from "./_components/quote-section";
import TechStackSection from "./_components/tech-stack-section";
import CertificatesSection from "./_components/certificates-section";
import ShapeGrid from "../components/ShapeGrid";

export const metadata = {
  title: "Home - Portfolio",
  description: "Kamlesh Yadav Portfolio",
};

export default function Home() {
  return (
    <>
      <div className="shapegrid-wrapper">
        <ShapeGrid 
          speed={0.5} 
          squareSize={40}
          direction='diagonal'
          borderColor='#a293ff'
          hoverFillColor='#00f0ff'
          shape='hexagon'
          hoverTrailAmount={5}
        />
      </div>
      
      <div className="dk-safe-layout relative z-10">
        <HeroSection />
      <TechStackSection />
      <CertificatesSection />
      <MyLatestProjectSection />
      <LetsConnectSection />
      <QuoteSection />
      <Footer />
      </div>
    </>
  );
}
