import Hero from "@/components/sections/Hero";
import ProofStrip from "@/components/sections/ProofStrip";
import Pillars from "@/components/sections/Pillars";
import CaseStudies from "@/components/sections/CaseStudies";
import Engineering from "@/components/sections/Engineering";
import DataLicensing from "@/components/sections/DataLicensing";
import Sourcing from "@/components/sections/Sourcing";
import Trust from "@/components/sections/Trust";

export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <Pillars />
      <CaseStudies />
      <Engineering />
      <DataLicensing />
      <Sourcing />
      <Trust />
    </>
  );
}
