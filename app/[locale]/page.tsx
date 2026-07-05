import Hero from '@/components/homepage/Hero';
import TrustBadges from '@/components/homepage/TrustBadges';
import Services from '@/components/homepage/Services';
import ManageSection from '@/components/homepage/ManageSection';
import PricingPackages from '@/components/homepage/PricingPackages';
import PromoteSection from '@/components/homepage/PromoteSection';
import ResearchSection from '@/components/homepage/ResearchSection';
import OwnerPortalSection from '@/components/homepage/OwnerPortalSection';
import WhyChooseUs from '@/components/homepage/WhyChooseUs';
import ComparisonTable from '@/components/homepage/ComparisonTable';
import FinalCTA from '@/components/homepage/FinalCTA';

/**
 * Page story: hero → proof strip → the five owner services →
 * each service in nav order (Manage + its packages, Promote, Research) →
 * owner portal → why us → final CTA.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <Services />
      <ManageSection />
      <PricingPackages />
      <PromoteSection />
      <ResearchSection />
      <OwnerPortalSection />
      <WhyChooseUs />
      <ComparisonTable />
      <FinalCTA />
    </>
  );
}
