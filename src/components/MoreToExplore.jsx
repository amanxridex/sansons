import React, { useState } from 'react';
import { MORE_TO_EXPLORE_SLIDES } from '../data/jllData';
import { MaterialIcon } from './BrandAssets';

export default function MoreToExplore() {
  const [slideIndex, setSlideIndex] = useState(0);
  const currentSlide = MORE_TO_EXPLORE_SLIDES[slideIndex];

  const handlePrev = () => {
    setSlideIndex(
      (prev) => (prev - 1 + MORE_TO_EXPLORE_SLIDES.length) % MORE_TO_EXPLORE_SLIDES.length
    );
  };

  const handleNext = () => {
    setSlideIndex((prev) => (prev + 1) % MORE_TO_EXPLORE_SLIDES.length);
  };

  return (
    <section aria-label="More to explore" className="bg-[#f9f2ec] pb-14 lg:pb-20">
      <div className="jll-container">
        <div className="border-t border-[#cad1d5] pt-10 lg:pt-14">
          <div className="flex items-center justify-between gap-4 mb-6 lg:mb-8">
            <h2 className="text-[24px] leading-[32px] lg:text-[30px] lg:leading-[38px] tracking-[-0.4px] font-semibold text-[#0e1d23]">
              More to explore
            </h2>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous article"
                className="w-[36px] h-[36px] lg:w-[44px] lg:h-[44px] rounded-full border border-[#cad1d5] bg-white hover:bg-[#eff3f4] inline-flex items-center justify-center text-[#0e1d23] cursor-pointer"
              >
                <MaterialIcon name="chevron_left" size={22} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next article"
                className="w-[36px] h-[36px] lg:w-[44px] lg:h-[44px] rounded-full border border-[#cad1d5] bg-white hover:bg-[#eff3f4] inline-flex items-center justify-center text-[#0e1d23] cursor-pointer"
              >
                <MaterialIcon name="chevron_right" size={22} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-stretch">
            {/* Left Image */}
            <div className="lg:col-span-6 rounded-[12px] overflow-hidden aspect-[16/10] lg:aspect-auto lg:min-h-[380px] bg-[#eff3f4]">
              <img
                src={currentSlide.imageUrl}
                alt={currentSlide.imageAlt}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Right Glacier-100 Editorial Card */}
            <div className="lg:col-span-6 bg-[#eff3f4] rounded-[12px] p-6 lg:p-10 flex flex-col justify-between">
              <div>
                <p className="text-[12px] leading-[16px] font-bold uppercase tracking-[0.8px] text-[#3c535c]">
                  {currentSlide.eyebrow}
                </p>
                <h3 className="mt-2.5 text-[20px] leading-[28px] lg:text-[24px] lg:leading-[32px] font-semibold text-[#0e1d23]">
                  {currentSlide.title}
                </h3>
                <p className="mt-3 text-[15px] lg:text-[16px] leading-[24px] text-[#3c535c]">
                  {currentSlide.description}
                </p>
              </div>

              <div className="mt-8 flex justify-start lg:justify-end">
                <a
                  href={currentSlide.href}
                  className="jll-btn-secondary w-full lg:w-auto px-5 h-[44px] lg:h-[48px] inline-flex items-center justify-center gap-2 text-[15px] font-semibold"
                >
                  <span>{currentSlide.ctaLabel}</span>
                  <MaterialIcon name="arrow_forward" size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {MORE_TO_EXPLORE_SLIDES.map((s, idx) => (
              <button
                key={s.title}
                type="button"
                onClick={() => setSlideIndex(idx)}
                aria-label={`Go to slide ${idx + 1}: ${s.title}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  idx === slideIndex ? 'w-6 bg-[#0e1d23]' : 'w-2 bg-[#cad1d5]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
