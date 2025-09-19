"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  return (
    <SiteThemeProvider theme={{
      styleVariant: 'futuristicAndOutOfBox',
      colorTemplate: 1,
      textAnimation: 'none'
    }}>
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="/images/logo.svg"
          logoAlt="Your Brand"
          buttonText="Contact"
          className=""
          buttonClassName=""
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <BillboardHero
          title="Welcome to Your Brand"
          subtitle="Delivering innovative solutions with grace and efficiency"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="About Us"
          descriptions={["We provide top-notch SaaS solutions.", "Trusted by leading firms in the industry."]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy"
          steps={[
            {title: "Step 1", description: "Register for an account", image: "/images/placeholder1.avif", position: "left", isCenter: false},
            {title: "Step 2", description: "Verify your identity", image: "/images/placeholder2.avif", position: "center", isCenter: true},
            {title: "Step 3", description: "Make your first purchase", image: "/images/placeholder3.avif", position: "right", isCenter: false},
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <PatternTokenomics
          title="Tokenomics Overview"
          description="Insight into our token distribution and utility."
          kpiItems={[
            { value: "50%", description: "Circulating Supply", icon: null },
            { value: "20%", description: "Team & Advisors", icon: null },
            { value: "30%", description: "Marketing & Partnerships", icon: null }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasisBackgroundGradient
          logoSrc="/images/logo.svg"
          logoAlt="Your Brand"
          logoText="Your Brand"
          items={[
            { label: "Privacy Policy", onClick: () => alert("Privacy Clicked") },
            { label: "Terms of Service", onClick: () => alert("Terms Clicked") },
            { label: "Contact", onClick: () => alert("Contact Clicked") }
          ]}
          className=""
          containerClassName=""
        />
      </div>
    </SiteThemeProvider>
  );
}