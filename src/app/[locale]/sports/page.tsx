import React from 'react';
import {
  SportsSection,
  HowItWorksSection,
  MethodologySection,
  SafetySection,
} from '@/components';
export default function LessonsPage() {
  return (
    <div>
      <SportsSection />
      <HowItWorksSection />
      {/* <MethodologySection /> */} {/* // todo Temporarily removed */}
      <SafetySection />
    </div>
  );
}
