import React, { useEffect, useRef, useState } from 'react';
import {
  COPYRIGHT_TEXT,
  FOOTER_BLURB,
  FOOTER_SECTIONS,
  LEGAL_LINKS,
  jllUrl,
} from '../data/jllData';
import {
  FacebookIcon,
  IndiaFlag,
  InstagramIcon,
  JllLogoFull,
  JllLogoShort,
  LinkedInIcon,
  MaterialIcon,
  XIcon,
} from './BrandAssets';

const SOCIAL_ITEMS = [
  { label: 'Facebook', href: 'https://www.facebook.com/jll', Icon: FacebookIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/jll', Icon: LinkedInIcon },
  { label: 'X', href: 'https://twitter.com/jll', Icon: XIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/jll/', Icon: InstagramIcon },
];

export default function Footer({ onOpenCountry }) {
  const [legalOpen, setLegalOpen] = useState(false);
  const [openAccordions, setOpenAccordions] = useState({});
  const legalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (legalRef.current && !legalRef.current.contains(e.target)) {
        setLegalOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleAccordion = (key) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const mobileAccordionGroups = [
    ...FOOTER_SECTIONS,
    { title: 'Legal', links: LEGAL_LINKS },
  ];

  return (
    <footer className="bg-[#eff3f4] text-[#0e1d23] pt-12 pb-28 lg:pt-16 lg:pb-14 border-t border-[#dce2e5]">
      <div className="jll-container">
        {/* Top Row: Brand Logo + Scroll-to-Top */}
        <div className="flex items-center justify-between gap-4 pb-8 lg:pb-12">
          <a href={jllUrl('/en-in/')} aria-label="SANSONS Home" className="hidden lg:inline-flex">
            <JllLogoFull height={32} />
          </a>
          <a href={jllUrl('/en-in/')} aria-label="SANSONS Home" className="lg:hidden inline-flex">
            <JllLogoShort height={32} />
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-[44px] h-[44px] lg:w-[48px] lg:h-[48px] rounded-[6px] border border-[#cad1d5] bg-white hover:bg-[#dce2e5]/50 inline-flex items-center justify-center text-[#0e1d23] transition-colors cursor-pointer"
          >
            <MaterialIcon name="arrow_upward" size={22} />
          </button>
        </div>

        {/* DESKTOP 4-COLUMN GRID (>=1024px) */}
        <div className="hidden lg:grid grid-cols-12 gap-10 pb-14 border-b border-[#cad1d5]">
          {/* Col 1: Blurb + Subscribe + Social */}
          <div className="col-span-4 pr-6">
            <p className="text-[15px] leading-[24px] text-[#3c535c]">{FOOTER_BLURB}</p>

            <a
              href={jllUrl('/en-in/stay-up-to-date')}
              className="mt-6 h-[48px] px-5 rounded-[6px] border border-[#0e1d23] bg-transparent hover:bg-[#0e1d23] hover:text-white inline-flex items-center gap-2 text-[15px] font-semibold text-[#0e1d23] transition-colors"
            >
              <span>Subscribe now</span>
              <MaterialIcon name="arrow_forward" size={18} />
            </a>

            <div className="mt-8 flex items-center gap-3">
              {SOCIAL_ITEMS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`SANSONS on ${label}`}
                  className="w-10 h-10 rounded-full bg-white/80 hover:bg-white border border-[#dce2e5] inline-flex items-center justify-center text-[#0e1d23] transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Cols 2-4: Footer Link Sections */}
          <div className="col-span-8 grid grid-cols-3 gap-8">
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.title}>
                <h3 className="text-[14px] leading-[20px] font-bold uppercase tracking-[0.6px] text-[#0e1d23] mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-1.5 text-[15px] leading-[22px] text-[#3c535c] hover:text-[#0e1d23] hover:underline"
                      >
                        <span>{link.label}</span>
                        {link.external && (
                          <MaterialIcon name="open_in_new" size={14} className="shrink-0" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP BOTTOM BAR (>=1024px) */}
        <div className="hidden lg:flex items-center justify-between gap-6 pt-8">
          <div className="flex items-center gap-8">
            <div ref={legalRef} className="relative">
              <button
                type="button"
                onClick={() => setLegalOpen((prev) => !prev)}
                aria-expanded={legalOpen}
                className="h-[44px] px-4 rounded-[6px] bg-white border border-[#cad1d5] hover:bg-[#f2f6f7] inline-flex items-center gap-2 text-[14px] font-semibold text-[#0e1d23] cursor-pointer"
              >
                <span>Legal</span>
                <MaterialIcon
                  name={legalOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                  size={18}
                />
              </button>

              {legalOpen && (
                <div
                  role="menu"
                  aria-label="Legal links"
                  className="absolute bottom-[52px] left-0 w-[250px] bg-white rounded-[12px] border border-[#dce2e5] jll-card-shadow py-2 max-h-[340px] overflow-y-auto z-30"
                >
                  {LEGAL_LINKS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      role="menuitem"
                      className="block px-4 py-2.5 text-[14px] font-medium text-[#0e1d23] hover:bg-[#eff3f4]"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <p className="text-[14px] text-[#3c535c]">{COPYRIGHT_TEXT}</p>
          </div>

          <button
            type="button"
            onClick={onOpenCountry}
            aria-label="Change country or region (Current: India)"
            className="h-[44px] px-4 rounded-[6px] bg-white border border-[#cad1d5] hover:bg-[#f2f6f7] inline-flex items-center gap-2.5 text-[14px] font-semibold text-[#0e1d23] cursor-pointer"
          >
            <IndiaFlag className="w-5 h-3.5 rounded-[2px] border border-[#dce2e5]" />
            <span>India</span>
            <MaterialIcon name="keyboard_arrow_down" size={18} />
          </button>
        </div>

        {/* MOBILE STACKED FOOTER (<1024px) */}
        <div className="lg:hidden">
          <p className="text-[15px] leading-[24px] text-[#3c535c] mb-6">{FOOTER_BLURB}</p>

          <div className="border-t border-[#cad1d5]">
            {mobileAccordionGroups.map((group) => {
              const isOpen = Boolean(openAccordions[group.title]);
              return (
                <div key={group.title} className="border-b border-[#cad1d5]">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(group.title)}
                    aria-expanded={isOpen}
                    className="w-full h-[60px] flex items-center justify-between text-left text-[16px] font-semibold text-[#0e1d23]"
                  >
                    <span>{group.title}</span>
                    <MaterialIcon
                      name={isOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                      size={22}
                      className="text-[#3c535c]"
                    />
                  </button>

                  {isOpen && (
                    <ul className="pb-5 pt-1 space-y-3">
                      {group.links.map((link) => (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            target={link.external ? '_blank' : undefined}
                            rel={link.external ? 'noopener noreferrer' : undefined}
                            className="inline-flex items-center gap-1.5 text-[15px] text-[#3c535c] hover:text-[#0e1d23]"
                          >
                            <span>{link.label}</span>
                            {link.external && <MaterialIcon name="open_in_new" size={14} />}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>

          <a
            href={jllUrl('/en-in/stay-up-to-date')}
            className="mt-6 w-full h-[48px] rounded-[6px] border border-[#0e1d23] bg-transparent hover:bg-[#0e1d23] hover:text-white inline-flex items-center justify-center gap-2 text-[15px] font-semibold text-[#0e1d23] transition-colors"
          >
            <span>Subscribe now</span>
            <MaterialIcon name="arrow_forward" size={18} />
          </a>

          <div className="mt-8 flex items-center justify-center gap-4">
            {SOCIAL_ITEMS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`JLL on ${label}`}
                className="w-10 h-10 rounded-full bg-white border border-[#dce2e5] inline-flex items-center justify-center text-[#0e1d23]"
              >
                <Icon />
              </a>
            ))}
          </div>

          <p className="mt-6 text-center text-[13px] text-[#3c535c]">{COPYRIGHT_TEXT}</p>

          <div className="mt-5 flex justify-center">
            <button
              type="button"
              onClick={onOpenCountry}
              aria-label="Change country or region (Current: India)"
              className="h-[44px] px-5 rounded-[6px] bg-white border border-[#cad1d5] inline-flex items-center gap-2.5 text-[14px] font-semibold text-[#0e1d23]"
            >
              <IndiaFlag className="w-5 h-3.5 rounded-[2px] border border-[#dce2e5]" />
              <span>India</span>
              <MaterialIcon name="keyboard_arrow_down" size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
