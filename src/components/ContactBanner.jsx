import React from 'react';
import { CONTACT_BANNER } from '../data/jllData';
import { MaterialIcon } from './BrandAssets';

export default function ContactBanner() {
  return (
    <section aria-label={CONTACT_BANNER.title} className="bg-white py-12 lg:py-20">
      <div className="jll-container">
        <a
          href={CONTACT_BANNER.href}
          className="group relative block w-full aspect-[16/9] rounded-[12px] overflow-hidden bg-[#0e1d23] jll-card-shadow"
        >
          <img
            src={CONTACT_BANNER.imageUrl}
            alt={CONTACT_BANNER.imageAlt}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(292deg, rgba(0, 0, 0, 0) 13.26%, rgba(0, 0, 0, 0.6) 89.81%)',
            }}
          />

          <div className="absolute inset-0 flex items-center justify-center px-6">
            <span className="inline-flex items-center gap-2.5 lg:gap-4 text-[24px] leading-[36px] lg:text-[60px] lg:leading-[72px] tracking-[-0.5px] lg:tracking-[-1.5px] font-light text-white text-center">
              <span>{CONTACT_BANNER.title}</span>
              <MaterialIcon
                name="arrow_forward"
                size={40}
                className="lg:!text-[48px] !text-[24px] transition-transform group-hover:translate-x-1.5"
              />
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
