import React, { useState } from 'react';
import { SPOTLIGHT_SLIDES } from '../data/jllData';
import { MaterialIcon } from './BrandAssets';

export default function HeroSpotlight() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentSlide = SPOTLIGHT_SLIDES[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + SPOTLIGHT_SLIDES.length) % SPOTLIGHT_SLIDES.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % SPOTLIGHT_SLIDES.length);
  };

  return (
    <section aria-label="Spotlight stories" className="bg-white">
      {/* DESKTOP HERO (>=1024px) */}
      <div className="hidden lg:block pt-[201px] pb-12">
        <div className="relative h-[620px] w-full overflow-hidden bg-[#0e1d23]">
          <img
            src={currentSlide.imageUrl}
            alt={currentSlide.alt}
            className="w-full h-full object-cover object-center transition-opacity duration-300"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.25) 45%, rgba(0, 0, 0, 0) 75%)',
            }}
          />

          <div className="absolute inset-0">
            <div className="jll-container pt-14">
              <div className="max-w-[700px]">
                <h1 className="text-[48px] leading-[60px] tracking-[-0.8px] font-semibold text-white">
                  {currentSlide.title}
                </h1>
                <a
                  href={currentSlide.href}
                  className="group mt-6 h-[48px] inline-flex items-center gap-2.5 text-[18px] font-semibold text-white hover:opacity-90"
                >
                  <span>{currentSlide.ctaLabel}</span>
                  <MaterialIcon
                    name="arrow_forward"
                    size={22}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Floating 4-tab Spotlight Dock */}
        <div className="jll-container relative z-10 -mt-[116px]">
          <div className="bg-white rounded-[12px] jll-card-shadow border border-[#dce2e5] overflow-hidden">
            <div className="px-6 pt-4 pb-3 border-b border-[#eff3f4]">
              <span className="text-[13px] leading-[18px] font-bold tracking-[0.2px] text-[#3c535c]">
                Spotlight stories
              </span>
            </div>
            <div className="grid grid-cols-4 divide-x divide-[#dce2e5]">
              {SPOTLIGHT_SLIDES.map((slide, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={slide.title}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    aria-pressed={isActive}
                    className={`relative px-6 py-5 text-left transition-colors cursor-pointer min-h-[96px] flex items-start ${
                      isActive ? 'bg-[#eff3f4]' : 'bg-white hover:bg-[#f2f6f7]'
                    }`}
                  >
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-3 bottom-3 w-[4px] bg-[#de0614] rounded-r-[2px]"
                      />
                    )}
                    <span
                      className={`text-[15px] leading-[22px] ${
                        isActive ? 'font-bold text-[#0e1d23]' : 'font-semibold text-[#3c535c]'
                      }`}
                    >
                      {slide.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE HERO (<1024px) */}
      <div className="lg:hidden bg-white pt-[105px] pb-8">
        <div className="jll-container">
          <h1 className="text-[36px] leading-[40px] tracking-[-0.5px] font-semibold text-[#0e1d23]">
            {currentSlide.title}
          </h1>

          <div className="mt-5 flex items-center justify-between gap-4">
            <a
              href={currentSlide.href}
              className="h-[44px] inline-flex items-center gap-2 text-[16px] font-semibold text-[#0e1d23]"
            >
              <span>{currentSlide.ctaLabel}</span>
              <MaterialIcon name="arrow_forward" size={20} />
            </a>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous spotlight story"
                className="w-[44px] h-[44px] rounded-full border border-[#cad1d5] bg-white inline-flex items-center justify-center text-[#0e1d23] active:bg-[#eff3f4]"
              >
                <MaterialIcon name="chevron_left" size={22} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next spotlight story"
                className="w-[44px] h-[44px] rounded-full border border-[#cad1d5] bg-white inline-flex items-center justify-center text-[#0e1d23] active:bg-[#eff3f4]"
              >
                <MaterialIcon name="chevron_right" size={22} />
              </button>
            </div>
          </div>

          <div className="mt-5 rounded-[12px] overflow-hidden aspect-[16/10] bg-[#eff3f4]">
            <img
              src={currentSlide.imageUrl}
              alt={currentSlide.alt}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
