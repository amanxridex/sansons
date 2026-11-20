import React from 'react';
import { FEATURE_CARDS } from '../data/jllData';
import { MaterialIcon } from './BrandAssets';

export default function FeaturedEditorialList() {
  return (
    <section aria-label="Featured capabilities" className="bg-[#f9f2ec] pt-12 pb-12 lg:pt-20 lg:pb-16">
      <div className="jll-container">
        <div className="space-y-10 lg:space-y-24">
          {FEATURE_CARDS.map((card, index) => {
            const isImageRight = card.desktopLayout === 'image-right';
            const isLast = index === FEATURE_CARDS.length - 1;

            return (
              <article
                key={card.id}
                className={`flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-[112px] items-center ${
                  !isLast ? 'pb-10 border-b border-[#dce2e5] lg:pb-0 lg:border-b-0' : ''
                }`}
              >
                {/* Image Column: always first on mobile; left/right alternates on desktop */}
                <div
                  className={`w-full order-1 ${
                    isImageRight ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="rounded-[8px] overflow-hidden aspect-[4/3] jll-card-shadow bg-[#eff3f4]">
                    <img
                      src={card.imageUrl}
                      alt={card.imageAlt}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                {/* Text Column: second on mobile; opposite image on desktop */}
                <div
                  className={`w-full order-2 ${
                    isImageRight ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className={card.mobileAlignRight ? 'text-right lg:text-left' : 'text-left'}>
                    <p className="text-[12px] leading-[16px] font-bold uppercase tracking-[0.8px] text-[#3c535c]">
                      {card.eyebrow}
                    </p>

                    <h2 className="mt-2.5 text-[24px] leading-[32px] lg:text-[30px] lg:leading-[36px] tracking-[-0.4px] font-semibold text-[#0e1d23]">
                      {card.titleParts.map((part, i) => (
                        <span
                          key={i}
                          className={part.highlight ? 'text-[#de0614]' : undefined}
                        >
                          {part.text}
                        </span>
                      ))}
                    </h2>

                    <p className="mt-3 text-[16px] leading-[24px] text-[#3c535c]">
                      {card.description}
                    </p>
                  </div>

                  <div
                    className={`mt-6 flex justify-start ${
                      isImageRight ? 'lg:justify-end' : 'lg:justify-start'
                    }`}
                  >
                    <a
                      href={card.href}
                      className="jll-btn-secondary px-5 h-[44px] lg:h-[48px] inline-flex items-center justify-center gap-2 text-[15px] font-semibold"
                    >
                      <span>{card.ctaLabel}</span>
                      <MaterialIcon name="arrow_forward" size={18} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
