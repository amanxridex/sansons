import React, { useState } from 'react';
import { EXPLORE_BRIGHTER_WAY } from '../data/jllData';
import { MaterialIcon } from './BrandAssets';

export default function ExploreBrighterWay() {
  const [activePanelId, setActivePanelId] = useState(null);
  const [tileIndex, setTileIndex] = useState(0);

  const activePanel = EXPLORE_BRIGHTER_WAY.panels.find((p) => p.id === activePanelId) || null;
  const activeTile = activePanel ? activePanel.tiles[tileIndex] || activePanel.tiles[0] : null;

  const handleSelectPanel = (panelId) => {
    if (activePanelId === panelId) {
      setActivePanelId(null);
    } else {
      setActivePanelId(panelId);
      setTileIndex(0);
    }
  };

  const handlePrevTile = () => {
    if (!activePanel) return;
    setTileIndex((prev) => (prev - 1 + activePanel.tiles.length) % activePanel.tiles.length);
  };

  const handleNextTile = () => {
    if (!activePanel) return;
    setTileIndex((prev) => (prev + 1) % activePanel.tiles.length);
  };

  return (
    <section aria-label={EXPLORE_BRIGHTER_WAY.title} className="bg-white py-12 lg:py-16">
      <div className="jll-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Intro */}
          <div className="lg:col-span-5">
            <h2 className="text-[24px] leading-[32px] lg:text-[30px] lg:leading-[38px] tracking-[-0.4px] font-semibold text-[#0e1d23]">
              {EXPLORE_BRIGHTER_WAY.title}
            </h2>
            <p className="mt-3 text-[16px] leading-[24px] text-[#3c535c]">
              {EXPLORE_BRIGHTER_WAY.description}
            </p>
          </div>

          {/* Right Switcher Buttons (2x2 Desktop, Stacked Mobile) */}
          <div className="lg:col-span-7 grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
            {EXPLORE_BRIGHTER_WAY.panels.map((panel) => {
              const isOpen = activePanelId === panel.id;
              return (
                <button
                  key={panel.id}
                  type="button"
                  onClick={() => handleSelectPanel(panel.id)}
                  aria-expanded={isOpen}
                  className={`h-[48px] lg:h-[64px] px-5 rounded-[8px] border flex items-center justify-between gap-3 text-left transition-colors cursor-pointer ${
                    isOpen
                      ? 'border-[#40a4c8] bg-[#e7f4f9] text-[#0e1d23]'
                      : 'border-[#cad1d5] bg-[#eff3f4] hover:bg-[#dce2e5]/60 text-[#0e1d23]'
                  }`}
                >
                  <span className="text-[15px] lg:text-[16px] leading-[22px] font-semibold">
                    {panel.title}
                  </span>
                  <MaterialIcon
                    name={isOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                    size={22}
                    className={isOpen ? 'text-[#0a6484] shrink-0' : 'text-[#3c535c] shrink-0'}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Expanded Interactive Panel */}
        {activePanel && activeTile && (
          <div className="mt-8 rounded-[12px] border border-[#40a4c8] bg-white overflow-hidden jll-card-shadow">
            {/* Panel Header */}
            <div className="px-6 lg:px-8 py-5 border-b border-[#dce2e5] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white">
              <div>
                <h3 className="text-[20px] lg:text-[24px] leading-[28px] lg:leading-[32px] font-semibold text-[#0e1d23]">
                  {activePanel.title}
                </h3>
                <p className="mt-1 text-[14px] lg:text-[15px] leading-[22px] text-[#3c535c]">
                  {activePanel.description}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                <button
                  type="button"
                  onClick={handlePrevTile}
                  aria-label="Previous item"
                  className="w-[40px] h-[40px] rounded-full border border-[#cad1d5] bg-white hover:bg-[#eff3f4] inline-flex items-center justify-center text-[#0e1d23] cursor-pointer"
                >
                  <MaterialIcon name="chevron_left" size={22} />
                </button>
                <button
                  type="button"
                  onClick={handleNextTile}
                  aria-label="Next item"
                  className="w-[40px] h-[40px] rounded-full border border-[#cad1d5] bg-white hover:bg-[#eff3f4] inline-flex items-center justify-center text-[#0e1d23] cursor-pointer"
                >
                  <MaterialIcon name="chevron_right" size={22} />
                </button>
                <button
                  type="button"
                  onClick={() => setActivePanelId(null)}
                  aria-label="Close panel"
                  className="ml-1 w-[40px] h-[40px] rounded-full hover:bg-[#eff3f4] inline-flex items-center justify-center text-[#3c535c] cursor-pointer"
                >
                  <MaterialIcon name="close" size={20} />
                </button>
              </div>
            </div>

            {/* Warm Sand Carousel Area */}
            <div className="bg-[#f9f2ec] p-6 lg:p-8">
              <div className="flex flex-col-reverse lg:flex-row items-stretch gap-6 lg:gap-8">
                {/* White Info Card */}
                <div className="lg:w-[44%] bg-white rounded-[12px] p-6 lg:p-8 jll-card-shadow flex flex-col justify-between">
                  <div>
                    <span className="inline-block text-[12px] leading-[16px] font-bold uppercase tracking-[0.8px] text-[#3c535c]">
                      {activeTile.eyebrow}
                    </span>
                    <h4 className="mt-2 text-[20px] lg:text-[24px] leading-[28px] lg:leading-[32px] font-semibold text-[#0e1d23]">
                      {activeTile.title}
                    </h4>
                    <p className="mt-3 text-[15px] leading-[22px] text-[#3c535c]">
                      {activeTile.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 flex items-center justify-between gap-4">
                    <a
                      href={activeTile.href}
                      className="jll-btn-secondary w-full lg:w-auto px-5 h-[44px] inline-flex items-center justify-center gap-2 text-[15px] font-semibold"
                    >
                      <span>{activeTile.ariaLabel}</span>
                      <MaterialIcon name="arrow_forward" size={18} />
                    </a>
                  </div>
                </div>

                {/* Image Tile */}
                <div className="lg:w-[56%] rounded-[12px] overflow-hidden aspect-[16/10] bg-[#eff3f4]">
                  <img
                    src={activeTile.imageUrl}
                    alt={activeTile.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Subtle Tile Dots Indicator */}
              <div className="mt-5 flex items-center justify-center gap-2">
                {activePanel.tiles.map((t, idx) => (
                  <button
                    key={t.title}
                    type="button"
                    onClick={() => setTileIndex(idx)}
                    aria-label={`View slide ${idx + 1}: ${t.title}`}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      idx === tileIndex ? 'w-6 bg-[#0e1d23]' : 'w-2 bg-[#cad1d5]'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
