'use client';

import { memo } from 'react';
import { LogoCarousel } from './logo-carroussel';
import { StatsSection } from './stats-section';
import { Herosection } from './Herosection';
import { AboutSection } from './about-section';
import { FeaturesSection } from './features-section';
import { BlogSection } from './blog-section';
import { ContactSection } from './contact-section';
import { TeamSection } from './team-section';
import { ValuesSection } from './values-section';
import { VisionSection } from './vision-section';

interface LandingPageProps {
  resources: any[];
  language: 'fr' | 'en';
  t: any;
  onNavigateToJournals?: () => void;
  onNavigateToResources?: () => void;
  onSearchSelect?: (searchTerm: string) => void;
}

const LandingPageBackup = memo(function LandingPageBackup({ resources, language, t, onNavigateToJournals, onNavigateToResources,onSearchSelect }: LandingPageProps) {

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      <Herosection
        onNavigateToJournals={onNavigateToJournals}
        onSearchSelect={onSearchSelect}
        language={language}
      />
    
      
     
      <BlogSection language={language} />
       <VisionSection language={language} />
     
      <LogoCarousel language={language} />
      <StatsSection language={language} />
      <AboutSection language={language} />
      <FeaturesSection 
        onNavigateToResources={onNavigateToResources}
        onNavigateToJournals={onNavigateToJournals}
        language={language}
      />
       <ValuesSection language={language} />
      <ContactSection language={language} />
      <TeamSection language={language} />
      

      {/* <VisionSection 
        visionTitle={translatedContent.visionTitle}
        visionTexts={translatedContent.visionTexts}
        countries={countries}
        resources={resources}
      />

      <TestimonialsSection />

      <ScientistsSection quotes={landingContent.quotes} />
      
      <LandingStyles /> */}
    </div>
  );
});

export default LandingPageBackup;