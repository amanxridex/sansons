import React, { useState } from 'react';
import { jllUrl } from '../data/jllData';
import { JllLogoShort, MaterialIcon } from './BrandAssets';

export function CookieConsentModal() {
  const [visible, setVisible] = useState(() => {
    try {
      return !window.localStorage.getItem('sansons_cookie_consent');
    } catch {
      return true;
    }
  });
  const [showCustomise, setShowCustomise] = useState(false);
  const [prefs, setPrefs] = useState({
    performance: true,
    functional: true,
    targeting: false,
  });

  const saveAndClose = (mode) => {
    try {
      window.localStorage.setItem(
        'sansons_cookie_consent',
        JSON.stringify({ mode, prefs, savedAt: Date.now() })
      );
    } catch {
      // Ignore storage failures
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cookie consent"
      className="fixed inset-0 z-50 bg-black/50 flex items-end lg:items-center justify-center p-0 lg:p-6"
    >
      <div className="w-full lg:max-w-[640px] bg-white rounded-t-[16px] lg:rounded-[12px] jll-card-shadow p-6 lg:p-8 max-h-[88vh] overflow-y-auto">
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#dce2e5]">
          <JllLogoShort height={28} />
          <span className="text-[12px] font-bold uppercase tracking-wider text-[#3c535c]">
            Your Privacy Choices
          </span>
        </div>

        {!showCustomise ? (
          <>
            <h2 className="mt-5 text-[20px] leading-[28px] font-semibold text-[#0e1d23]">
              We value your privacy
            </h2>
            <p className="mt-2.5 text-[14px] leading-[22px] text-[#3c535c]">
              We use cookies to enhance your browsing experience, serve personalized content, and
              analyze our traffic. By clicking &ldquo;Accept All Cookies&rdquo;, you consent to our use
              of cookies. View our{' '}
              <a
                href={jllUrl('/en-in/cookie-statement')}
                className="text-[#0a6484] underline font-semibold"
              >
                Cookie Statement
              </a>{' '}
              and{' '}
              <a
                href={jllUrl('/en-in/privacy-statement')}
                className="text-[#0a6484] underline font-semibold"
              >
                Privacy Statement
              </a>
              .
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowCustomise(true)}
                className="h-[44px] px-5 rounded-[6px] border border-[#cad1d5] bg-white hover:bg-[#eff3f4] text-[14px] font-semibold text-[#0e1d23] cursor-pointer"
              >
                Customise Settings
              </button>
              <button
                type="button"
                onClick={() => saveAndClose('reject_all')}
                className="h-[44px] px-5 rounded-[6px] border border-[#0e1d23] bg-white hover:bg-[#eff3f4] text-[14px] font-semibold text-[#0e1d23] cursor-pointer"
              >
                Reject All
              </button>
              <button
                type="button"
                onClick={() => saveAndClose('accept_all')}
                className="h-[44px] px-5 rounded-[6px] bg-[#0e1d23] hover:bg-[#1f3640] text-[14px] font-semibold text-white cursor-pointer"
              >
                Accept All Cookies
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="mt-5 flex items-center justify-between">
              <h2 className="text-[20px] leading-[28px] font-semibold text-[#0e1d23]">
                Manage Consent Preferences
              </h2>
              <button
                type="button"
                onClick={() => setShowCustomise(false)}
                className="text-[13px] font-semibold text-[#0a6484] hover:underline cursor-pointer"
              >
                Back
              </button>
            </div>

            <div className="mt-4 divide-y divide-[#dce2e5]">
              <div className="py-3.5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[15px] font-semibold text-[#0e1d23]">
                    Strictly Necessary Cookies
                  </p>
                  <p className="text-[13px] text-[#3c535c]">
                    Always active for core site security and navigation.
                  </p>
                </div>
                <span className="text-[12px] font-bold uppercase text-[#0a6484] shrink-0">
                  Always Active
                </span>
              </div>

              {[
                {
                  key: 'performance',
                  title: 'Performance Cookies',
                  desc: 'Help us measure traffic and improve site responsiveness.',
                },
                {
                  key: 'functional',
                  title: 'Functional Cookies',
                  desc: 'Remember your region selection and UI preferences.',
                },
                {
                  key: 'targeting',
                  title: 'Targeting Cookies',
                  desc: 'Support tailored real estate insights across platforms.',
                },
              ].map((item) => (
                <div key={item.key} className="py-3.5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[15px] font-semibold text-[#0e1d23]">{item.title}</p>
                    <p className="text-[13px] text-[#3c535c]">{item.desc}</p>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={prefs[item.key]}
                    onClick={() =>
                      setPrefs((prev) => ({ ...prev, [item.key]: !prev[item.key] }))
                    }
                    className={`w-11 h-6 rounded-full transition-colors p-0.5 shrink-0 cursor-pointer ${
                      prefs[item.key] ? 'bg-[#16799b]' : 'bg-[#cad1d5]'
                    }`}
                  >
                    <span
                      className={`block w-5 h-5 rounded-full bg-white shadow transition-transform ${
                        prefs[item.key] ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row justify-end gap-3">
              <button
                type="button"
                onClick={() => saveAndClose('custom')}
                className="h-[44px] px-5 rounded-[6px] bg-[#0e1d23] hover:bg-[#1f3640] text-[14px] font-semibold text-white cursor-pointer"
              >
                Confirm My Choices
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export function FeedbackWidget() {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setOpen(false);
    setSubmitted(false);
    setRating(0);
    setComment('');
  };

  return (
    <>
      {/* Fixed Left-Edge Vertical Teal Tab (Desktop >=1024px) */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Share your feedback"
        className="hidden lg:flex fixed left-0 top-1/2 -translate-y-1/2 z-30 bg-[#16799b] hover:bg-[#0a6484] text-white px-2.5 py-4 rounded-r-[4px] jll-card-shadow items-center justify-center transition-colors cursor-pointer"
      >
        <span className="jll-feedback-tab text-[14px] font-semibold tracking-[0.2px] leading-none">
          Share your feedback
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Website feedback"
          onClick={resetAndClose}
          className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[440px] bg-white rounded-[12px] jll-card-shadow p-6"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#dce2e5]">
              <h2 className="text-[20px] font-semibold text-[#0e1d23]">Share your feedback</h2>
              <button
                type="button"
                onClick={resetAndClose}
                aria-label="Close feedback"
                className="w-9 h-9 rounded-full hover:bg-[#eff3f4] inline-flex items-center justify-center cursor-pointer"
              >
                <MaterialIcon name="close" size={20} />
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center">
                <MaterialIcon name="check_circle" size={44} className="text-[#16799b] mx-auto" />
                <h3 className="mt-3 text-[18px] font-semibold text-[#0e1d23]">
                  Thank you for your feedback
                </h3>
                <p className="mt-1.5 text-[14px] text-[#3c535c]">
                  Your input helps us improve the SANSONS India experience.
                </p>
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="mt-6 h-[42px] px-6 rounded-[6px] bg-[#0e1d23] text-white text-[14px] font-semibold cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-5 space-y-5">
                <div>
                  <p className="text-[14px] font-semibold text-[#0e1d23] mb-2">
                    How would you rate your experience today?
                  </p>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setRating(num)}
                        className={`w-10 h-10 rounded-[6px] border text-[15px] font-semibold cursor-pointer ${
                          rating === num
                            ? 'border-[#16799b] bg-[#16799b] text-white'
                            : 'border-[#cad1d5] bg-white text-[#0e1d23] hover:bg-[#eff3f4]'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="jll-feedback-text"
                    className="block text-[14px] font-semibold text-[#0e1d23] mb-2"
                  >
                    Tell us more (optional)
                  </label>
                  <textarea
                    id="jll-feedback-text"
                    rows={4}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Share thoughts about navigation, content, or design..."
                    className="w-full rounded-[8px] border border-[#cad1d5] p-3 text-[14px] text-[#0e1d23] focus:outline-none focus:border-[#40a4c8]"
                  />
                </div>

                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={resetAndClose}
                    className="h-[42px] px-4 rounded-[6px] border border-[#cad1d5] text-[14px] font-semibold text-[#0e1d23] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="h-[42px] px-5 rounded-[6px] bg-[#16799b] hover:bg-[#0a6484] text-[14px] font-semibold text-white cursor-pointer"
                  >
                    Submit feedback
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
