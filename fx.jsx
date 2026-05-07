/* global React */
const { useEffect, useRef, useState } = React;

// Particle field — connected dots
function ParticleField() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    let w, h, particles, raf;
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      w = canvas.width = window.innerWidth * devicePixelRatio;
      h = canvas.height = window.innerHeight * devicePixelRatio;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      const count = Math.min(80, Math.floor((w*h) / (devicePixelRatio*devicePixelRatio*22000)));
      particles = Array.from({length: count}, () => ({
        x: Math.random()*w, y: Math.random()*h,
        vx: (Math.random()-.5)*0.3*devicePixelRatio,
        vy: (Math.random()-.5)*0.3*devicePixelRatio,
        r: (Math.random()*1.5 + 0.5)*devicePixelRatio,
      }));
    };

    const tick = () => {
      ctx.clearRect(0,0,w,h);
      const mxp = mouse.x * devicePixelRatio;
      const myp = mouse.y * devicePixelRatio;
      for (const p of particles) {
        // Attract slightly toward mouse
        const dx = mxp - p.x, dy = myp - p.y;
        const d2 = dx*dx + dy*dy;
        if (d2 < (180*devicePixelRatio)**2 && d2 > 1) {
          const f = 0.0008;
          p.vx += dx * f;
          p.vy += dy * f;
        }
        p.vx *= 0.985; p.vy *= 0.985;
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx.fillStyle = 'rgba(255,255,255,0.45)';
        ctx.fill();
      }
      // Lines
      for (let i=0;i<particles.length;i++){
        for (let j=i+1;j<particles.length;j++){
          const a = particles[i], b = particles[j];
          const dx = a.x-b.x, dy = a.y-b.y;
          const d = Math.sqrt(dx*dx+dy*dy);
          const max = 130*devicePixelRatio;
          if (d < max) {
            const o = 1 - d/max;
            ctx.strokeStyle = `rgba(255,107,26,${o*0.25})`;
            ctx.lineWidth = devicePixelRatio*0.6;
            ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };

    resize();
    tick();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);
  return <canvas ref={ref} className="particles"/>;
}

// Magnetic button wrapper
function Magnetic({ children, strength = 0.35 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width/2);
      const y = e.clientY - (r.top + r.height/2);
      el.style.setProperty('--mx', (x*strength)+'px');
      el.style.setProperty('--my', (y*strength)+'px');
    };
    const onLeave = () => {
      el.style.setProperty('--mx','0px');
      el.style.setProperty('--my','0px');
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [strength]);
  return React.cloneElement(children, { ref });
}

// 3D tilt wrapper
function Tilt({ children, max = 8 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      const rx = (0.5 - y) * max;
      const ry = (x - 0.5) * max;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
        el.style.setProperty('--mx', (x*100)+'%');
        el.style.setProperty('--my', (y*100)+'%');
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      el.style.transform = 'rotateX(0) rotateY(0)';
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [max]);
  return React.cloneElement(children, { ref });
}

// Animated counter
function CountUp({ to, duration = 1600, suffix = '' }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver((es) => {
      es.forEach(e => {
        if (e.isIntersecting) {
          const start = performance.now();
          const tick = (t) => {
            const p = Math.min(1, (t-start)/duration);
            const eased = 1 - Math.pow(1-p, 3);
            setVal(Math.round(to*eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return <span ref={ref} className="count-up">{val}{suffix}</span>;
}

// Text scramble
function Scramble({ text, trigger = 'hover' }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(text);
  useEffect(() => {
    const el = ref.current;
    const chars = '!<>-_\\/[]{}—=+*^?#________';
    let frame, current = 0;
    const queue = [];

    const run = () => {
      const old = display;
      const newText = text;
      const length = Math.max(old.length, newText.length);
      queue.length = 0;
      for (let i=0; i<length; i++){
        const from = old[i] || '';
        const t = newText[i] || '';
        const start = Math.floor(Math.random()*40);
        const end = start + Math.floor(Math.random()*40);
        queue.push({ from, to: t, start, end, char: '' });
      }
      current = 0;
      const update = () => {
        let output = '';
        let complete = 0;
        for (let i=0; i<queue.length; i++){
          const { from, to, start, end } = queue[i];
          let c = queue[i].char;
          if (current >= end) { complete++; output += to; }
          else if (current >= start) {
            if (!c || Math.random() < 0.28) {
              c = chars[Math.floor(Math.random()*chars.length)];
              queue[i].char = c;
            }
            output += c;
          } else { output += from; }
        }
        setDisplay(output);
        if (complete === queue.length) return;
        current++;
        frame = requestAnimationFrame(update);
      };
      cancelAnimationFrame(frame);
      update();
    };

    const onEnter = () => run();
    if (trigger === 'hover') {
      el.addEventListener('mouseenter', onEnter);
      return () => { el.removeEventListener('mouseenter', onEnter); cancelAnimationFrame(frame); };
    }
    return () => cancelAnimationFrame(frame);
  }, [text, trigger]);
  return <span ref={ref} className="scramble">{display}</span>;
}

// Custom cursor
function CustomCursor() {
  useEffect(() => {
    const c = document.createElement('div');
    c.className = 'custom-cursor';
    const d = document.createElement('div');
    d.className = 'custom-cursor-dot';
    document.body.appendChild(c);
    document.body.appendChild(d);

    let cx = 0, cy = 0, dx = 0, dy = 0, mx = 0, my = 0;
    const move = (e) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener('mousemove', move);

    const tick = () => {
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      dx += (mx - dx) * 0.5;
      dy += (my - dy) * 0.5;
      c.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
      d.style.transform = `translate(${dx}px,${dy}px) translate(-50%,-50%)`;
      requestAnimationFrame(tick);
    };
    tick();

    const overEnter = (e) => {
      if (e.target.closest('a,button,.btn,.proj-card,.stack-item,.contact-item')) c.classList.add('hover');
    };
    const overLeave = (e) => {
      if (e.target.closest('a,button,.btn,.proj-card,.stack-item,.contact-item')) c.classList.remove('hover');
    };
    document.addEventListener('mouseover', overEnter);
    document.addEventListener('mouseout', overLeave);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', overEnter);
      document.removeEventListener('mouseout', overLeave);
      c.remove(); d.remove();
    };
  }, []);
  return null;
}

window.ParticleField = ParticleField;
window.Magnetic = Magnetic;
window.Tilt = Tilt;
window.CountUp = CountUp;
window.Scramble = Scramble;
window.CustomCursor = CustomCursor;
