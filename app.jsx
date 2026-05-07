/* global React, ReactDOM, Icon, Hero, About, Experience, Stack, Projects, Contact, Ticker, ParticleField, CustomCursor, TweaksPanel, useTweaks, TweakSection, TweakColor, TweakToggle, TweakSlider */
const { useEffect, useState, useRef } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#ff6b1a",
  "particles": true,
  "customCursor": true,
  "tickerSpeed": 36,
  "noiseGrain": true
}/*EDITMODE-END*/;

function Nav() {
  return (
    <nav className="nav">
      <a href="#top" className="brand">bp<span className="dot">.</span></a>
      <ul>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#experiencia">Experiência</a></li>
        <li><a href="#stack">Stack</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
      <a href="#contato" className="cta">Contratar <Icon.arrow width="13" height="13"/></a>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container foot">
        <div className="copy">© 2026 Bryan Porto · feito com <b>café</b> e <b>typescript</b></div>
        <div className="socials">
          <a href="https://github.com/EoBryann" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon.github width="18" height="18"/></a>
          <a href="https://www.linkedin.com/in/bryan-porto-47b451189/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon.linkedin width="18" height="18"/></a>
          <a href="https://www.instagram.com/bryan_tz0/" target="_blank" rel="noreferrer" aria-label="Instagram"><Icon.instagram width="18" height="18"/></a>
          <a href="https://wa.me/5511955406211" target="_blank" rel="noreferrer" aria-label="WhatsApp"><Icon.whatsapp width="18" height="18"/></a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', tweaks.accent);
    const hex = tweaks.accent.replace('#','');
    const r = parseInt(hex.substring(0,2),16);
    const g = parseInt(hex.substring(2,4),16);
    const b = parseInt(hex.substring(4,6),16);
    document.documentElement.style.setProperty('--accent-2', `rgb(${Math.min(255,r+25)},${Math.min(255,g+30)},${Math.min(255,b+35)})`);
    document.documentElement.style.setProperty('--accent-soft', `rgba(${r},${g},${b},0.12)`);
    document.documentElement.style.setProperty('--accent-glow', `rgba(${r},${g},${b},0.35)`);
    document.querySelector('.grain').style.display = tweaks.noiseGrain ? '' : 'none';
    document.querySelectorAll('.ticker').forEach(t => t.style.animationDuration = `${tweaks.tickerSpeed}s`);
  }, [tweaks]);

  // Spotlight cursor
  useEffect(() => {
    const sp = document.getElementById('spotlight');
    const onMove = (e) => {
      sp.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // Scroll progress
  useEffect(() => {
    const fill = document.getElementById('scroll-fill');
    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      fill.style.width = pct + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Reveal on scroll
  useEffect(() => {
    const run = () => {
      const els = document.querySelectorAll('.reveal');
      els.forEach(el => el.classList.add('in'));
      const io = new IntersectionObserver((entries)=>{
        entries.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      }, { threshold: 0.04, rootMargin: '0px 0px 100px 0px' });
      els.forEach(el => io.observe(el));
      return io;
    };
    let io;
    const t = setTimeout(() => { io = run(); }, 50);
    return () => { clearTimeout(t); io && io.disconnect(); };
  }, []);

  return (
    <>
      {tweaks.particles && <ParticleField/>}
      {tweaks.customCursor && <CustomCursor/>}
      <Nav/>
      <main id="top">
        <Hero/>
        <About/>
        <Experience/>
        <Stack/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Cor de destaque">
          <TweakColor value={tweaks.accent} onChange={(v) => setTweak('accent', v)}
            options={['#ff6b1a','#22c55e','#60a5fa','#c084fc','#f472b6','#fbbf24']}
          />
        </TweakSection>
        <TweakSection label="Animações">
          <TweakSlider value={tweaks.tickerSpeed} onChange={(v) => setTweak('tickerSpeed', v)} label="Velocidade do ticker (s)" min={10} max={80} step={2}/>
          <TweakToggle value={tweaks.particles} onChange={(v) => setTweak('particles', v)} label="Particle field"/>
          <TweakToggle value={tweaks.customCursor} onChange={(v) => setTweak('customCursor', v)} label="Cursor custom"/>
          <TweakToggle value={tweaks.noiseGrain} onChange={(v) => setTweak('noiseGrain', v)} label="Grão de filme"/>
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
