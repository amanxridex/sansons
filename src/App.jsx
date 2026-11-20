import React, { useState } from 'react';
import Header from './components/Header';
import HeroSpotlight from './components/HeroSpotlight';
import ExploreBrighterWay from './components/ExploreBrighterWay';
import FeaturedEditorialList from './components/FeaturedEditorialList';
import MoreToExplore from './components/MoreToExplore';
import ContactBanner from './components/ContactBanner';
import Footer from './components/Footer';
import { CookieConsentModal, FeedbackWidget } from './components/CookieAndFeedback';

export default function App() {
  const [countryOpen, setCountryOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#0e1d23]">
      <Header countryOpen={countryOpen} setCountryOpen={setCountryOpen} />

      <main id="main-content">
        <HeroSpotlight />
        <ExploreBrighterWay />
        <FeaturedEditorialList />
        <MoreToExplore />
        <ContactBanner />
      </main>

      <Footer onOpenCountry={() => setCountryOpen(true)} />
      <FeedbackWidget />
      <CookieConsentModal />
    </div>
  );
}
