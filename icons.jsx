/* global React */
// Inline SVG icon set — minimal, technical, brand-coherent

const svg = (path, props = {}) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {path}
  </svg>
);

const Icon = {
  arrow: (p) => svg(<><path d="M7 17 17 7"/><path d="M7 7h10v10"/></>, p),
  whatsapp: (p) => svg(<path d="M3.5 20.5l1.4-4.6a8.5 8.5 0 1 1 3.2 3.2L3.5 20.5zM9 9c0 4 3 7 7 7l1.5-1.5-2-1-1 1c-1.5-.5-2.5-1.5-3-3l1-1-1-2L10 9z"/>, p),
  github: (p) => svg(<path d="M9 19c-4 1.5-4-2-6-2.5M15 22v-3.9a3.4 3.4 0 0 0-.9-2.5c2.9-.3 6-1.4 6-6.4a5 5 0 0 0-1.4-3.5 4.6 4.6 0 0 0-.1-3.4s-1.1-.3-3.6 1.3a12.3 12.3 0 0 0-6.4 0C6.1 1 5 1.3 5 1.3a4.6 4.6 0 0 0-.1 3.4 5 5 0 0 0-1.4 3.5c0 5 3.1 6.1 6 6.4a3.4 3.4 0 0 0-.9 2.5V22"/>, p),
  linkedin: (p) => svg(<><rect x="2" y="2" width="20" height="20" rx="3"/><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 13v4"/></>, p),
  instagram: (p) => svg(<><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></>, p),
  mail: (p) => svg(<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>, p),
  zap: (p) => svg(<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/>, p),
  shield: (p) => svg(<path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3z"/>, p),
  layers: (p) => svg(<><path d="m12 2 10 5-10 5L2 7l10-5z"/><path d="M2 12l10 5 10-5"/><path d="M2 17l10 5 10-5"/></>, p),
  code: (p) => svg(<><path d="m8 6-6 6 6 6"/><path d="m16 6 6 6-6 6"/><path d="m14 4-4 16"/></>, p),
  database: (p) => svg(<><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v6c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 11v6c0 1.7 4 3 9 3s9-1.3 9-3v-6"/></>, p),
  cpu: (p) => svg(<><rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></>, p),
  globe: (p) => svg(<><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></>, p),
  box: (p) => svg(<><path d="M21 16V8l-9-5-9 5v8l9 5 9-5z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/></>, p),
  branch: (p) => svg(<><circle cx="6" cy="3" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M6 5v8a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4V8"/></>, p),
  sparkle: (p) => svg(<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>, p),
};

window.Icon = Icon;
