import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  COUNTRY_REGIONS,
  EXPLORE_BRIGHTER_WAY,
  EXPLORE_MENU_LINKS,
  MEGA_MENUS,
  MORE_TO_EXPLORE_SLIDES,
  PRIMARY_NAV_ITEMS,
  SPOTLIGHT_SLIDES,
  jllUrl,
} from '../data/jllData';
import { IndiaFlag, JllLogoFull, JllLogoShort, MaterialIcon } from './BrandAssets';

function CountryCodeBadge({ code }) {
  if (code === 'in') {
    return <IndiaFlag className="w-5 h-3.5 rounded-[2px] shrink-0 border border-[#dce2e5]" />;
  }
  return (
    <span className="inline-flex items-center justify-center w-6 h-4 rounded-[2px] bg-[#eff3f4] border border-[#dce2e5] text-[10px] font-semibold uppercase tracking-wider text-[#3c535c] shrink-0">
      {code}
    </span>
  );
}

function buildSearchIndex() {
  const entries = [];

  SPOTLIGHT_SLIDES.forEach((s) => {
    entries.push({ category: 'Spotlight', title: s.title, href: s.href });
  });

  EXPLORE_BRIGHTER_WAY.panels.forEach((panel) => {
    panel.tiles.forEach((t) => {
      entries.push({ category: panel.title, title: t.title, href: t.href });
    });
  });

  MORE_TO_EXPLORE_SLIDES.forEach((m) => {
    entries.push({ category: m.eyebrow, title: m.title, href: m.href });
  });

  Object.entries(MEGA_MENUS).forEach(([navName, data]) => {
    if (data.columns) {
      data.columns.forEach((col) => {
        col.links.forEach((link) => {
          entries.push({ category: `${navName} · ${col.title}`, title: link.label, href: link.href });
        });
      });
    }
    if (data.items) {
      data.items.forEach((item) => {
        entries.push({ category: navName, title: item.title, href: item.href });
      });
    }
    if (data.links) {
      data.links.forEach((link) => {
        entries.push({ category: navName, title: link.label, href: link.href });
      });
    }
  });

  return entries;
}

export default function Header({ countryOpen, setCountryOpen }) {
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const [activeRegionTab, setActiveRegionTab] = useState('asiapacific');
  const [headerHidden, setHeaderHidden] = useState(false);

  const lastScrollYRef = useRef(0);
  const desktopSearchInputRef = useRef(null);
  const mobileSearchInputRef = useRef(null);
  const headerRef = useRef(null);

  const searchIndex = useMemo(() => buildSearchIndex(), []);

  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) {
      return [
        { category: 'Popular', title: 'Global Capability Centres in India', href: SPOTLIGHT_SLIDES[0].href },
        { category: 'Popular', title: 'Global Real Estate Perspective', href: SPOTLIGHT_SLIDES[1].href },
        { category: 'Popular', title: 'SANSONS Falcon AI', href: jllUrl('/en-in/services/technology/artificial-intelligence') },
        { category: 'Popular', title: 'Commercial properties for lease', href: 'https://property.jll.co.in/' },
      ];
    }
    return searchIndex
      .filter(
        (item) =>
          item.title.toLowerCase().includes(q) || item.category.toLowerCase().includes(q)
      )
      .slice(0, 8);
  }, [searchIndex, searchQuery]);

  const anyOverlayOpen = Boolean(
    activeMegaMenu || exploreOpen || searchOpen || countryOpen || mobileMenuOpen
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (anyOverlayOpen) {
        setHeaderHidden(false);
        lastScrollYRef.current = currentY;
        return;
      }

      const delta = currentY - lastScrollYRef.current;
      if (currentY <= 40) {
        setHeaderHidden(false);
      } else if (delta > 6 && currentY > 140) {
        setHeaderHidden(true);
      } else if (delta < -6) {
        setHeaderHidden(false);
      }
      lastScrollYRef.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [anyOverlayOpen]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveMegaMenu(null);
        setExploreOpen(false);
        setSearchOpen(false);
        setCountryOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [setCountryOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setActiveMegaMenu(null);
        setExploreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => {
        if (window.innerWidth >= 1024) {
          desktopSearchInputRef.current?.focus();
        } else {
          mobileSearchInputRef.current?.focus();
        }
      }, 50);
    }
  }, [searchOpen]);

  useEffect(() => {
    document.body.style.overflow =
      mobileMenuOpen || countryOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen, countryOpen]);

  const closeAllOverlays = () => {
    setActiveMegaMenu(null);
    setExploreOpen(false);
    setSearchOpen(false);
    setCountryOpen(false);
    setMobileMenuOpen(false);
    setMobileSubmenu(null);
  };

  const toggleMegaMenu = (item) => {
    setExploreOpen(false);
    setSearchOpen(false);
    setCountryOpen(false);
    setActiveMegaMenu((prev) => (prev === item ? null : item));
  };

  const toggleExplore = () => {
    setActiveMegaMenu(null);
    setSearchOpen(false);
    setCountryOpen(false);
    setExploreOpen((prev) => !prev);
  };

  const toggleSearch = () => {
    setActiveMegaMenu(null);
    setExploreOpen(false);
    setCountryOpen(false);
    setMobileMenuOpen(false);
    setSearchOpen((prev) => !prev);
  };

  const openCountrySelector = () => {
    setActiveMegaMenu(null);
    setExploreOpen(false);
    setSearchOpen(false);
    setMobileMenuOpen(false);
    setCountryOpen((prev) => !prev);
  };

  const currentMegaData = activeMegaMenu ? MEGA_MENUS[activeMegaMenu] : null;
  const mobileMegaData = mobileSubmenu ? MEGA_MENUS[mobileSubmenu] : null;

  return (
    <div ref={headerRef}>
      {/* DESKTOP FIXED HEADROOM HEADER (>=1024px) */}
      <header
        aria-label="Global Header"
        className={`hidden lg:block fixed left-0 right-0 z-40 bg-white border-b border-[#dce2e5] transition-[top] duration-300 ease-out ${
          headerHidden ? '-top-[201px]' : 'top-0'
        }`}
      >
        <div className="jll-container">
          {/* Top Utility Tier (~128px) */}
          <div className="h-[128px] flex items-center justify-between gap-6">
            <a
              href={jllUrl('/en-in/')}
              aria-label="SANSONS India Home"
              className="inline-flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#40a4c8] rounded"
            >
              <JllLogoFull height={36} />
            </a>

            <div className="flex items-center gap-3 relative">
              {/* Country Selector Trigger (156x48) */}
              <button
                type="button"
                onClick={openCountrySelector}
                aria-expanded={countryOpen}
                aria-label="Country Selector - India"
                className="w-[156px] h-[48px] px-4 rounded-[6px] inline-flex items-center justify-between gap-2 text-[14px] font-semibold text-[#0e1d23] hover:bg-[#eff3f4] transition-colors cursor-pointer"
              >
                <span className="inline-flex items-center gap-2.5">
                  <IndiaFlag className="w-5 h-3.5 rounded-[2px] border border-[#dce2e5] shrink-0" />
                  <span>India</span>
                </span>
                <MaterialIcon
                  name={countryOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                  size={20}
                  className="text-[#0e1d23]"
                />
              </button>

              {/* Search Trigger (48x48) */}
              <button
                type="button"
                onClick={toggleSearch}
                aria-expanded={searchOpen}
                aria-label="Search"
                className={`w-[48px] h-[48px] rounded-[6px] inline-flex items-center justify-center transition-colors cursor-pointer ${
                  searchOpen
                    ? 'bg-[#0e1d23] text-white'
                    : 'text-[#0e1d23] hover:bg-[#eff3f4]'
                }`}
              >
                <MaterialIcon name={searchOpen ? 'close' : 'search'} size={22} />
              </button>

              {/* Contact Us Link (128x48) */}
              <a
                href={jllUrl('/en-in/contact')}
                className="w-[128px] h-[48px] px-4 rounded-[6px] border border-[#cad1d5] bg-white hover:bg-[#eff3f4] inline-flex items-center justify-center text-[15px] font-semibold text-[#0e1d23] transition-colors whitespace-nowrap"
              >
                Contact us
              </a>

              {/* Explore Popover Trigger (48x48) */}
              <button
                type="button"
                onClick={toggleExplore}
                aria-expanded={exploreOpen}
                aria-label="Open explore menu"
                className={`w-[48px] h-[48px] rounded-[6px] inline-flex items-center justify-center transition-colors cursor-pointer ${
                  exploreOpen
                    ? 'bg-[#eff3f4] text-[#0e1d23]'
                    : 'text-[#0e1d23] hover:bg-[#eff3f4]'
                }`}
              >
                <MaterialIcon name={exploreOpen ? 'close' : 'apps'} size={22} />
              </button>

              {/* Desktop Explore Menu Popover */}
              {exploreOpen && (
                <div
                  role="dialog"
                  aria-label="Explore SANSONS"
                  className="absolute right-0 top-[58px] w-[264px] bg-white rounded-[12px] border border-[#dce2e5] jll-card-shadow py-2 z-50"
                >
                  <ul className="divide-y divide-[#eff3f4]">
                    {EXPLORE_MENU_LINKS.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          target={item.external ? '_blank' : undefined}
                          rel={item.external ? 'noopener noreferrer' : undefined}
                          className="flex items-center justify-between px-5 py-3.5 text-[15px] font-semibold text-[#0e1d23] hover:bg-[#f2f6f7] transition-colors"
                        >
                          <span>{item.label}</span>
                          {item.external ? (
                            <MaterialIcon name="open_in_new" size={18} className="text-[#3c535c]" />
                          ) : (
                            <MaterialIcon name="arrow_forward" size={18} className="text-[#3c535c]" />
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Primary Navigation Tier (~72px) */}
          <nav aria-label="Primary Navigation" className="h-[72px] flex items-center">
            <ul className="flex items-center gap-8">
              {PRIMARY_NAV_ITEMS.map((item) => {
                const isActive = activeMegaMenu === item;
                return (
                  <li key={item}>
                    <button
                      type="button"
                      onClick={() => toggleMegaMenu(item)}
                      aria-expanded={isActive}
                      className={`relative h-[72px] px-1 inline-flex items-center gap-1.5 text-[16px] font-semibold transition-colors cursor-pointer ${
                        isActive ? 'text-[#de0614]' : 'text-[#0e1d23] hover:text-[#16799b]'
                      }`}
                    >
                      <span>{item}</span>
                      <MaterialIcon
                        name={isActive ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                        size={18}
                        className={isActive ? 'text-[#de0614]' : 'text-[#3c535c]'}
                      />
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#de0614]" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* DESKTOP MEGA MENU PANEL */}
        {currentMegaData && (
          <div className="absolute left-0 right-0 top-[201px] bg-white border-b border-[#dce2e5] jll-card-shadow z-50">
            <div className="jll-container py-10 relative">
              <button
                type="button"
                onClick={() => setActiveMegaMenu(null)}
                aria-label="Close menu"
                className="absolute right-[88px] top-6 w-10 h-10 rounded-full hover:bg-[#eff3f4] inline-flex items-center justify-center text-[#0e1d23] cursor-pointer"
              >
                <MaterialIcon name="close" size={22} />
              </button>

              {currentMegaData.type === 'columns' && (
                <div
                  className={`grid gap-0 ${
                    currentMegaData.columns.length === 4
                      ? 'grid-cols-4'
                      : 'grid-cols-2 max-w-[780px]'
                  }`}
                >
                  {currentMegaData.columns.map((col, idx) => (
                    <div
                      key={col.title}
                      className={`pr-8 ${
                        idx > 0 ? 'pl-8 border-l border-[#dce2e5]' : ''
                      }`}
                    >
                      <div className="flex items-start gap-2.5 mb-2">
                        <span className="w-[3px] h-5 bg-[#de0614] rounded-full mt-1 shrink-0" />
                        {col.titleHref ? (
                          <a
                            href={col.titleHref}
                            className="text-[18px] leading-[24px] font-bold text-[#0e1d23] hover:text-[#16799b] hover:underline"
                          >
                            {col.title}
                          </a>
                        ) : (
                          <h3 className="text-[18px] leading-[24px] font-bold text-[#0e1d23]">
                            {col.title}
                          </h3>
                        )}
                      </div>
                      {col.description && (
                        <p className="text-[14px] leading-[20px] text-[#3c535c] mb-5 pl-3">
                          {col.description}
                        </p>
                      )}
                      <ul className="space-y-3 pl-3">
                        {col.links.map((link) => (
                          <li key={link.label}>
                            <a
                              href={link.href}
                              className="group inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#0e1d23] hover:text-[#16799b]"
                            >
                              <span className="group-hover:underline">{link.label}</span>
                              <MaterialIcon
                                name="arrow_forward"
                                size={16}
                                className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#16799b]"
                              />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {currentMegaData.type === 'tech' && (
                <div className="grid grid-cols-12 gap-8 pr-10">
                  <div className="col-span-8 pr-6 border-r border-[#dce2e5]">
                    <div className="flex items-center gap-2.5 mb-6">
                      <span className="w-[3px] h-5 bg-[#de0614] rounded-full" />
                      <h3 className="text-[18px] font-bold text-[#0e1d23]">
                        {currentMegaData.mainTitle}
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                      {currentMegaData.items.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          className="group block p-3 -m-3 rounded-[8px] hover:bg-[#f2f6f7] transition-colors"
                        >
                          <div className="flex items-center justify-between text-[16px] font-bold text-[#0e1d23] group-hover:text-[#16799b] mb-1">
                            <span>{item.title}</span>
                            <MaterialIcon name="arrow_forward" size={16} />
                          </div>
                          <p className="text-[13px] leading-[19px] text-[#3c535c] line-clamp-3">
                            {item.description}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="col-span-4 pl-2">
                    <div className="flex items-center gap-2.5 mb-5">
                      <span className="w-[3px] h-5 bg-[#de0614] rounded-full" />
                      <h3 className="text-[18px] font-bold text-[#0e1d23]">
                        {currentMegaData.innovations.sectionTitle}
                      </h3>
                    </div>
                    <a
                      href={currentMegaData.innovations.href}
                      className="block p-5 rounded-[12px] bg-[#eff3f4] hover:bg-[#e7f4f9] transition-colors"
                    >
                      <div className="flex items-center justify-between font-bold text-[16px] text-[#0e1d23] mb-2">
                        <span>{currentMegaData.innovations.title}</span>
                        <MaterialIcon name="arrow_forward" size={18} />
                      </div>
                      <p className="text-[14px] leading-[20px] text-[#3c535c]">
                        {currentMegaData.innovations.description}
                      </p>
                    </a>
                  </div>
                </div>
              )}

              {currentMegaData.type === 'listGrid' && (
                <div className="pr-12">
                  <div className="flex items-center gap-2.5 mb-6">
                    <span className="w-[3px] h-5 bg-[#de0614] rounded-full" />
                    <h3 className="text-[18px] font-bold text-[#0e1d23]">{activeMegaMenu}</h3>
                  </div>
                  <ul className="grid grid-cols-3 gap-x-10 gap-y-4">
                    {currentMegaData.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="group inline-flex items-center gap-2 text-[15px] font-semibold text-[#0e1d23] hover:text-[#16799b]"
                        >
                          <span className="group-hover:underline">{link.label}</span>
                          <MaterialIcon
                            name="arrow_forward"
                            size={16}
                            className="opacity-0 group-hover:opacity-100 transition-opacity text-[#16799b]"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Mega Menu Footer Summary */}
              <div className="mt-8 pt-6 border-t border-[#dce2e5] flex items-center justify-between gap-6">
                <p className="text-[14px] text-[#3c535c] max-w-[640px]">
                  {currentMegaData.footerText}
                </p>
                {currentMegaData.footerLinks.length > 0 && (
                  <div className="flex items-center gap-5 shrink-0 flex-wrap justify-end">
                    {currentMegaData.footerLinks.map((fl) => (
                      <a
                        key={fl.label}
                        href={fl.href}
                        className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0a6484] hover:underline"
                      >
                        <span>{fl.label}</span>
                        <MaterialIcon name="arrow_forward" size={16} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* DESKTOP INLINE SEARCH DRAWER */}
        {searchOpen && (
          <div className="absolute left-0 right-0 top-[128px] bg-white border-t border-b border-[#dce2e5] jll-card-shadow z-50">
            <div className="jll-container py-8">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (searchQuery.trim()) {
                    window.location.href = jllUrl(
                      `/en-in/search?query=${encodeURIComponent(searchQuery.trim())}`
                    );
                  }
                }}
                className="flex items-center gap-3 pb-4 border-b-2 border-[#0e1d23]"
              >
                <MaterialIcon name="search" size={24} className="text-[#3c535c]" />
                <input
                  ref={desktopSearchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="What are you looking for?"
                  className="w-full text-[22px] leading-[28px] font-light text-[#0e1d23] placeholder:text-[#919da2] focus:outline-none bg-transparent"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                    className="p-2 text-[#3c535c] hover:text-[#0e1d23] cursor-pointer"
                  >
                    <MaterialIcon name="close" size={20} />
                  </button>
                )}
                <button
                  type="submit"
                  className="jll-btn-secondary h-11 px-5 text-[15px] font-semibold inline-flex items-center gap-2 shrink-0 cursor-pointer"
                >
                  <span>Search</span>
                  <MaterialIcon name="arrow_forward" size={18} />
                </button>
              </form>

              <div className="mt-6">
                <p className="text-[12px] font-bold uppercase tracking-wider text-[#3c535c] mb-3">
                  {searchQuery.trim() ? 'Matching pages & insights' : 'Popular topics'}
                </p>
                {searchResults.length === 0 ? (
                  <p className="text-[15px] text-[#3c535c]">
                    No quick matches found for “{searchQuery}”. Press Search to view full site results.
                  </p>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    {searchResults.map((res) => (
                      <a
                        key={`${res.category}-${res.title}`}
                        href={res.href}
                        className="flex items-center justify-between gap-3 p-3 rounded-[8px] bg-[#f2f6f7] hover:bg-[#e7f4f9] transition-colors"
                      >
                        <div>
                          <span className="block text-[11px] font-bold uppercase tracking-wider text-[#0a6484]">
                            {res.category}
                          </span>
                          <span className="text-[15px] font-semibold text-[#0e1d23]">
                            {res.title}
                          </span>
                        </div>
                        <MaterialIcon name="arrow_forward" size={18} className="text-[#0e1d23] shrink-0" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* DESKTOP BACKDROP SCRIM FOR MEGA MENU / SEARCH */}
      {(activeMegaMenu || searchOpen) && (
        <div
          onClick={closeAllOverlays}
          className="hidden lg:block fixed inset-0 bg-black/30 z-30"
          aria-hidden="true"
        />
      )}

      {/* MOBILE TOP FIXED BAR (<1024px) */}
      <header
        aria-label="Mobile Header"
        className={`lg:hidden fixed left-0 right-0 z-40 h-[85px] bg-white border-b border-[#eff3f4] px-8 flex items-center justify-between transition-[top] duration-300 ease-out ${
          headerHidden ? '-top-[85px]' : 'top-0'
        }`}
      >
        <a
          href={jllUrl('/en-in/')}
          aria-label="JLL India Home"
          className="inline-flex items-center"
        >
          <JllLogoShort height={44} />
        </a>
      </header>

      {/* MOBILE MENU DRAWER (<1024px) */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="lg:hidden fixed inset-0 bottom-[73px] z-50 bg-white overflow-y-auto"
        >
          <div className="h-[85px] px-8 flex items-center justify-between border-b border-[#dce2e5]">
            <a href={jllUrl('/en-in/')} aria-label="SANSONS Home">
              <JllLogoShort height={40} />
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setMobileSubmenu(null);
              }}
              aria-label="Close mobile menu"
              className="w-10 h-10 rounded-full hover:bg-[#eff3f4] inline-flex items-center justify-center text-[#0e1d23]"
            >
              <MaterialIcon name="close" size={24} />
            </button>
          </div>

          {!mobileSubmenu ? (
            <div className="px-8 py-6">
              <ul className="divide-y divide-[#dce2e5]">
                {PRIMARY_NAV_ITEMS.map((item) => (
                  <li key={item}>
                    <button
                      type="button"
                      onClick={() => setMobileSubmenu(item)}
                      className="w-full py-4 flex items-center justify-between text-[18px] font-semibold text-[#0e1d23]"
                    >
                      <span>{item}</span>
                      <MaterialIcon name="keyboard_arrow_right" size={22} className="text-[#3c535c]" />
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-[#dce2e5] space-y-3">
                {EXPLORE_MENU_LINKS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center justify-between py-2 text-[16px] font-semibold text-[#3c535c]"
                  >
                    <span>{item.label}</span>
                    <MaterialIcon
                      name={item.external ? 'open_in_new' : 'arrow_forward'}
                      size={18}
                    />
                  </a>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-[#dce2e5] space-y-3">
                <a
                  href={jllUrl('/en-in/contact')}
                  className="w-full h-[48px] rounded-[6px] bg-[#0e1d23] text-white font-semibold text-[16px] inline-flex items-center justify-center"
                >
                  Contact us
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setCountryOpen(true);
                  }}
                  className="w-full h-[48px] px-4 rounded-[6px] border border-[#cad1d5] bg-white inline-flex items-center justify-between text-[15px] font-semibold text-[#0e1d23]"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <IndiaFlag className="w-5 h-3.5 rounded-[2px] border border-[#dce2e5]" />
                    <span>India</span>
                  </span>
                  <MaterialIcon name="keyboard_arrow_down" size={20} />
                </button>
              </div>
            </div>
          ) : (
            <div className="px-8 py-6">
              <button
                type="button"
                onClick={() => setMobileSubmenu(null)}
                className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#0a6484] mb-5"
              >
                <MaterialIcon name="arrow_back" size={18} />
                <span>Back</span>
              </button>

              <div className="flex items-center gap-2.5 mb-5">
                <span className="w-[3px] h-6 bg-[#de0614] rounded-full" />
                <h2 className="text-[22px] font-bold text-[#0e1d23]">{mobileSubmenu}</h2>
              </div>

              {mobileMegaData?.columns && (
                <div className="space-y-6">
                  {mobileMegaData.columns.map((col) => (
                    <div key={col.title} className="pb-5 border-b border-[#eff3f4]">
                      {col.titleHref ? (
                        <a
                          href={col.titleHref}
                          className="block text-[17px] font-bold text-[#0e1d23] mb-1.5"
                        >
                          {col.title}
                        </a>
                      ) : (
                        <h3 className="text-[17px] font-bold text-[#0e1d23] mb-1.5">{col.title}</h3>
                      )}
                      {col.description && (
                        <p className="text-[14px] text-[#3c535c] mb-3">{col.description}</p>
                      )}
                      <ul className="space-y-2.5">
                        {col.links.map((l) => (
                          <li key={l.label}>
                            <a
                              href={l.href}
                              className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#0a6484]"
                            >
                              <span>{l.label}</span>
                              <MaterialIcon name="arrow_forward" size={16} />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {mobileMegaData?.items && (
                <div className="space-y-5">
                  {mobileMegaData.items.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="block pb-4 border-b border-[#eff3f4]"
                    >
                      <div className="text-[16px] font-bold text-[#0e1d23] mb-1">{item.title}</div>
                      <p className="text-[13px] text-[#3c535c]">{item.description}</p>
                    </a>
                  ))}
                  {mobileMegaData.innovations && (
                    <a
                      href={mobileMegaData.innovations.href}
                      className="block p-4 rounded-[8px] bg-[#eff3f4]"
                    >
                      <div className="text-[12px] font-bold uppercase text-[#de0614] mb-1">
                        {mobileMegaData.innovations.sectionTitle}
                      </div>
                      <div className="text-[16px] font-bold text-[#0e1d23] mb-1">
                        {mobileMegaData.innovations.title}
                      </div>
                      <p className="text-[13px] text-[#3c535c]">
                        {mobileMegaData.innovations.description}
                      </p>
                    </a>
                  )}
                </div>
              )}

              {mobileMegaData?.links && (
                <ul className="space-y-3.5">
                  {mobileMegaData.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="flex items-center justify-between text-[16px] font-semibold text-[#0e1d23] py-1"
                      >
                        <span>{l.label}</span>
                        <MaterialIcon name="arrow_forward" size={18} className="text-[#3c535c]" />
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              {mobileMegaData?.footerLinks?.length > 0 && (
                <div className="mt-6 pt-5 border-t border-[#dce2e5] flex flex-col gap-3">
                  {mobileMegaData.footerLinks.map((fl) => (
                    <a
                      key={fl.label}
                      href={fl.href}
                      className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#0a6484]"
                    >
                      <span>{fl.label}</span>
                      <MaterialIcon name="arrow_forward" size={16} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* MOBILE FULLSCREEN SEARCH OVERLAY (<1024px) */}
      {searchOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Search"
          className="lg:hidden fixed inset-0 bottom-[73px] z-50 bg-white overflow-y-auto px-8 py-6"
        >
          <div className="flex items-center justify-between mb-6">
            <JllLogoShort height={36} />
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              aria-label="Close search"
              className="w-10 h-10 rounded-full hover:bg-[#eff3f4] inline-flex items-center justify-center"
            >
              <MaterialIcon name="close" size={24} />
            </button>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (searchQuery.trim()) {
                window.location.href = jllUrl(
                  `/en-in/search?query=${encodeURIComponent(searchQuery.trim())}`
                );
              }
            }}
            className="flex items-center gap-2 pb-3 border-b-2 border-[#0e1d23]"
          >
            <MaterialIcon name="search" size={22} className="text-[#3c535c]" />
            <input
              ref={mobileSearchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="What are you looking for?"
              className="w-full text-[18px] text-[#0e1d23] placeholder:text-[#919da2] focus:outline-none"
            />
          </form>

          <div className="mt-6 space-y-2.5">
            {searchResults.map((res) => (
              <a
                key={`${res.category}-${res.title}`}
                href={res.href}
                className="flex items-center justify-between p-3.5 rounded-[8px] bg-[#eff3f4]"
              >
                <div>
                  <span className="block text-[11px] font-bold uppercase text-[#0a6484]">
                    {res.category}
                  </span>
                  <span className="text-[15px] font-semibold text-[#0e1d23]">{res.title}</span>
                </div>
                <MaterialIcon name="arrow_forward" size={18} />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* MOBILE BOTTOM FIXED ACTION BAR (<1024px) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#dce2e5] px-8 py-3">
        <div className="grid grid-cols-2 gap-3">
          {mobileMenuOpen && mobileSubmenu ? (
            <button
              type="button"
              onClick={() => setMobileSubmenu(null)}
              className="h-[48px] px-4 rounded-[6px] border border-[#cad1d5] bg-white inline-flex items-center justify-center gap-2 text-[15px] font-semibold text-[#0e1d23]"
            >
              <MaterialIcon name="arrow_back" size={20} />
              <span>Back</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setMobileSubmenu(null);
                setSearchOpen((prev) => !prev);
              }}
              className={`h-[48px] px-4 rounded-[6px] border inline-flex items-center justify-center gap-2 text-[15px] font-semibold ${
                searchOpen
                  ? 'border-[#0e1d23] bg-[#0e1d23] text-white'
                  : 'border-[#cad1d5] bg-white text-[#0e1d23]'
              }`}
            >
              <MaterialIcon name={searchOpen ? 'close' : 'search'} size={20} />
              <span>{searchOpen ? 'Close' : 'Search'}</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => {
              setSearchOpen(false);
              setCountryOpen(false);
              if (mobileMenuOpen) {
                setMobileMenuOpen(false);
                setMobileSubmenu(null);
              } else {
                setMobileMenuOpen(true);
              }
            }}
            className={`h-[48px] px-4 rounded-[6px] border inline-flex items-center justify-center gap-2 text-[15px] font-semibold ${
              mobileMenuOpen
                ? 'border-[#0e1d23] bg-[#0e1d23] text-white'
                : 'border-[#cad1d5] bg-white text-[#0e1d23]'
            }`}
          >
            <MaterialIcon name={mobileMenuOpen ? 'close' : 'menu'} size={20} />
            <span>{mobileMenuOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>
      </div>

      {/* COUNTRY SELECTOR MODAL OVERLAY (Shared Desktop + Mobile) */}
      {countryOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Select location"
          className="fixed inset-0 z-50 bg-black/40 flex items-start justify-center lg:pt-16 overflow-y-auto"
          onClick={() => setCountryOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full lg:max-w-[960px] min-h-screen lg:min-h-0 bg-white lg:rounded-[12px] jll-card-shadow p-6 lg:p-10"
          >
            <div className="flex items-center justify-between pb-5 border-b border-[#dce2e5]">
              <div>
                <p className="text-[12px] font-bold uppercase tracking-wider text-[#3c535c] mb-1">
                  Global Locations
                </p>
                <h2 className="text-[24px] leading-[32px] font-semibold text-[#0e1d23]">
                  Select your region or country
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setCountryOpen(false)}
                aria-label="Close country selector"
                className="w-10 h-10 rounded-full hover:bg-[#eff3f4] inline-flex items-center justify-center text-[#0e1d23] cursor-pointer"
              >
                <MaterialIcon name="close" size={24} />
              </button>
            </div>

            {/* Region Tabs */}
            <div className="flex items-center gap-2 border-b border-[#dce2e5] mt-4">
              {COUNTRY_REGIONS.map((region) => (
                <button
                  key={region.id}
                  type="button"
                  onClick={() => setActiveRegionTab(region.id)}
                  className={`px-4 py-3 text-[15px] font-semibold border-b-2 transition-colors cursor-pointer ${
                    activeRegionTab === region.id
                      ? 'border-[#de0614] text-[#0e1d23]'
                      : 'border-transparent text-[#3c535c] hover:text-[#0e1d23]'
                  }`}
                >
                  {region.title}
                </button>
              ))}
            </div>

            <div className="py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[60vh] overflow-y-auto">
              {(COUNTRY_REGIONS.find((r) => r.id === activeRegionTab)?.countries || []).map(
                (country) => (
                  <a
                    key={country.title}
                    href={country.url}
                    className={`flex items-center justify-between px-4 py-3 rounded-[8px] border transition-colors ${
                      country.active
                        ? 'border-[#40a4c8] bg-[#e7f4f9] font-bold text-[#0e1d23]'
                        : 'border-[#dce2e5] hover:bg-[#eff3f4] text-[#0e1d23]'
                    }`}
                  >
                    <span className="inline-flex items-center gap-3">
                      <CountryCodeBadge code={country.code} />
                      <span className="text-[15px]">{country.title}</span>
                    </span>
                    {country.active && (
                      <MaterialIcon name="check" size={18} className="text-[#0a6484]" />
                    )}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
