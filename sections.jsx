/* global React, Icon, Magnetic, Tilt, CountUp, Scramble */
const { useEffect, useRef, useState } = React;

// ============ HERO ============
function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="badge reveal" style={{'--d':'200ms'}}>
              <span className="pulse"></span>
              São Paulo, BR · Open to work
            </div>
            <h1 className="h1">
              <span className="line"><span className="shine">Bryan</span></span>
              <span className="line"><span className="shine">Porto<span style={{color:'var(--accent)'}}>.</span></span></span>
            </h1>
            <p className="sub reveal" style={{'--d':'600ms'}}>
              <b>Full-stack Developer</b> <span className="accent">·</span> React <span className="accent">·</span> TypeScript <span className="accent">·</span> Supabase
            </p>
            <p className="lede reveal" style={{'--d':'750ms'}}>
              Construo sistemas reais do zero ao deploy — frontend, backend, banco de dados e infra. 3 anos de produção com projetos rodando em VPS com Docker e Cloudflare.
            </p>
            <div className="actions reveal" style={{'--d':'900ms'}}>
              <Magnetic strength={0.4}>
                <a className="btn btn-primary" href="#projetos">
                  Ver Projetos
                  <Icon.arrow width="16" height="16" className="arrow"/>
                </a>
              </Magnetic>
              <Magnetic strength={0.3}>
                <a className="btn btn-secondary" href="https://github.com/EoBryann" target="_blank" rel="noreferrer">
                  <Icon.github width="16" height="16"/>
                  GitHub
                </a>
              </Magnetic>
            </div>
          </div>
          <CodeCard/>
        </div>
      </div>
    </section>
  );
}

function CodeCard() {
  return (
    <div className="reveal code-card-wrap" style={{'--d':'400ms', position:'relative'}}>
      <div className="float-chip fc-1">
        <span className="swatch" style={{background:'#3178c6'}}></span>
        TypeScript strict
      </div>
      <div className="float-chip fc-2">
        <Icon.zap width="12" height="12" style={{color:'var(--accent)'}}/>
        11 containers
      </div>
      <div className="float-chip fc-3">
        <span className="swatch" style={{background:'#22c55e'}}></span>
        189 migrations
      </div>

      <Tilt max={6}>
      <div className="code-card">
        <span className="reflect"></span>
        <div className="code-head">
          <div className="dots"><span className="r"/><span className="y"/><span className="g"/></div>
          <div className="code-tab"><span className="ts">TS</span> bryan.ts</div>
        </div>
        <pre className="code-body">
<span className="tk-com">// who am i</span>{'\n'}
<span className="tk-key">const</span> <span className="tk-func">bryan</span> <span className="tk-pun">=</span> {'{'}
{'\n'}  <span className="tk-prop">stack</span><span className="tk-pun">:</span> [<span className="tk-str">"React"</span><span className="tk-pun">,</span> <span className="tk-str">"TypeScript"</span><span className="tk-pun">,</span> <span className="tk-str">"Supabase"</span>]<span className="tk-pun">,</span>
{'\n'}  <span className="tk-prop">infra</span><span className="tk-pun">:</span>  [<span className="tk-str">"Docker"</span><span className="tk-pun">,</span> <span className="tk-str">"Nginx"</span><span className="tk-pun">,</span> <span className="tk-str">"Deno"</span>]<span className="tk-pun">,</span>
{'\n'}  <span className="tk-prop">migrations</span><span className="tk-pun">:</span> <span className="tk-bool">189</span><span className="tk-pun">,</span>
{'\n'}  <span className="tk-prop">edge_functions</span><span className="tk-pun">:</span> <span className="tk-bool">25</span><span className="tk-pun">,</span>
{'\n'}  <span className="tk-prop">containers</span><span className="tk-pun">:</span>  <span className="tk-bool">11</span><span className="tk-pun">,</span>
{'\n'}  <span className="tk-prop">open_to_work</span><span className="tk-pun">:</span> <span className="tk-bool">true</span><span className="tk-pun">,</span>
{'\n'}{'}'}<span className="tk-pun">;</span><span className="cursor"></span>
        </pre>
      </div>
      </Tilt>
    </div>
  );
}

// ============ TICKER ============
function Ticker() {
  const items = ['React 18','TypeScript','Supabase','Docker','PostgreSQL','Deno','N8N','Tailwind','Nginx','Vite','C#','shadcn/ui','pgvector','Evolution API'];
  const all = [...items, ...items];
  return (
    <div className="ticker-wrap">
      <div className="ticker">
        {all.map((t,i)=>(
          <span key={i}>{t}<span className="dot">●</span></span>
        ))}
      </div>
    </div>
  );
}

// ============ ABOUT ============
function About() {
  return (
    <section id="sobre">
      <div className="container">
        <div className="reveal">
          <div className="section-eyebrow">01 / Sobre</div>
          <h2 className="section-title">Dev que entrega <span className="accent">sistemas reais.</span></h2>
        </div>
        <div className="about-grid" style={{marginTop:32}}>
          <div className="avatar-card reveal">
            <div className="av"></div>
            <div className="name">Bryan Porto</div>
            <div className="role">@EoBryann · São Paulo, BR</div>
            <div className="avatar-stats">
              <div className="stat"><div className="n"><CountUp to={3} suffix="+"/></div><div className="l">anos prod</div></div>
              <div className="stat"><div className="n"><CountUp to={189}/></div><div className="l">migrations</div></div>
              <div className="stat"><div className="n"><CountUp to={25}/></div><div className="l">edge fn</div></div>
            </div>
          </div>
          <div>
            <div className="about-bio reveal" style={{'--d':'150ms'}}>
              <p>Sou <b>desenvolvedor full-stack</b> de São Paulo, com 3 anos trabalhando em produtos reais — do banco de dados ao deploy em produção. Gosto de entender o problema antes de escrever a primeira linha.</p>
              <p>Trabalhei no ecossistema <b>DNA Ignis</b> de ponta a ponta: CRM SaaS com 27 páginas, 83 custom hooks e 25 Edge Functions Deno; chatbot de pré-vendas com IA; hub de gestão interno. Tudo rodando em VPS com <b>11 containers Docker</b>, Nginx e Cloudflare CDN.</p>
              <p>Background em <b>C# / .NET</b> com APIs REST e migrações de e-commerce. Hoje focado em TypeScript + React + Supabase — mas confortável em qualquer camada da stack.</p>
            </div>
            <div className="values">
              <div className="value reveal" style={{'--d':'250ms'}}>
                <Icon.code className="ico" width="22" height="22"/>
                <h4>Fullstack de verdade</h4>
                <p>Escrevo SQL, crio API, monto interface. Não fico preso em uma camada só.</p>
              </div>
              <div className="value reveal" style={{'--d':'350ms'}}>
                <Icon.zap className="ico" width="22" height="22"/>
                <h4>Aprendo rápido</h4>
                <p>Fui de C# para TypeScript+Supabase+Docker em produção. Tecnologia nova não me trava.</p>
              </div>
              <div className="value reveal" style={{'--d':'450ms'}}>
                <Icon.shield className="ico" width="22" height="22"/>
                <h4>Código sustentável</h4>
                <p>189 migrations versionadas, TypeScript strict, docs atualizados. Deixo o código melhor do que encontrei.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ STACK ============
function Stack() {
  const stack = [
    { n:'React 18',    i: <Icon.code width="36" height="36"/> },
    { n:'TypeScript',  i: <span style={{fontFamily:'var(--font-mono)',fontSize:22,fontWeight:700}}>TS</span> },
    { n:'Supabase',    i: <Icon.database width="36" height="36"/> },
    { n:'PostgreSQL',  i: <Icon.database width="36" height="36"/> },
    { n:'Docker',      i: <Icon.box width="36" height="36"/> },
    { n:'Deno',        i: <Icon.globe width="36" height="36"/> },
    { n:'Tailwind',    i: <Icon.sparkle width="36" height="36"/> },
    { n:'N8N',         i: <Icon.branch width="36" height="36"/> },
    { n:'Nginx',       i: <Icon.layers width="36" height="36"/> },
    { n:'Vite',        i: <Icon.zap width="36" height="36"/> },
    { n:'Zustand',     i: <Icon.cpu width="36" height="36"/> },
    { n:'C# / .NET',   i: <Icon.code width="36" height="36"/> },
  ];
  return (
    <section id="stack">
      <div className="container">
        <div className="reveal">
          <div className="section-eyebrow">02 / Stack</div>
          <h2 className="section-title">Ferramentas que já usei <span className="accent">em produção.</span></h2>
          <p className="section-sub">Stack construída ao longo de 3 anos de projetos reais — não de cursos. Confortável em qualquer camada, do banco ao deploy.</p>
        </div>
        <div className="stack-grid">
          {stack.map((s,i)=>(
            <div className="stack-item reveal" style={{'--d': `${i*40}ms`}} key={s.n}
              onMouseMove={(e)=>{
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--mx', ((e.clientX-r.left)/r.width*100)+'%');
                e.currentTarget.style.setProperty('--my', ((e.clientY-r.top)/r.height*100)+'%');
              }}
            >
              <div className="ico">{s.i}</div>
              <div className="label"><Scramble text={s.n}/></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ PROJECTS ============
function Projects() {
  const cardHover = (e) => {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', ((e.clientX-r.left)/r.width*100)+'%');
    card.style.setProperty('--my', ((e.clientY-r.top)/r.height*100)+'%');
  };
  return (
    <section id="projetos">
      <div className="container">
        <div className="reveal">
          <div className="section-eyebrow">03 / Projetos</div>
          <h2 className="section-title">Projetos reais, <span className="accent">em produção.</span></h2>
          <p className="section-sub">Do zero ao deploy — construídos, mantidos e evoluídos em ambiente real.</p>
        </div>

        {/* ── Ecossistema Ignis ── */}
        <div className="proj-cat reveal">Ecossistema Ignis · DNA Ignis</div>
        <div className="projects">

          {/* FEATURED: CRM Ignis */}
          <div className="proj-card featured reveal" onMouseMove={cardHover}>
            <span className="glow"></span>
            <div className="proj-content">
              <div className="proj-meta">
                <span className="proj-tag">SaaS · Multi-tenant · Clínicas</span>
                <span className="proj-status"><span className="live"></span>Em produção</span>
              </div>
              <h3 className="proj-title">CRM Ignis <span style={{fontSize:18,color:'var(--accent)',background:'var(--accent-soft)',padding:'2px 10px',borderRadius:6,marginLeft:8}}>V4.9</span></h3>
              <p className="proj-desc">CRM SaaS completo para clínicas de estética, odontologia e saúde. 27 páginas, 83 custom hooks, 25 Edge Functions Deno, 189 migrations SQL. Módulos: Pacientes, Agenda, Prontuário, Financeiro, Fidelização, Indicadores, WhatsApp, Google Calendar e RBAC granular.</p>
              <div className="proj-stack">
                <span>React 18</span><span>TypeScript</span><span>Supabase</span><span>Deno</span><span>Docker</span><span>PWA</span><span>WhatsApp API</span><span>Google Calendar</span>
              </div>
              <a className="proj-link" href="https://crm.dnaignis.com.br" target="_blank" rel="noreferrer">
                Ver em produção
                <Icon.arrow width="14" height="14" className="arrow"/>
              </a>
            </div>
            <div className="proj-visual">
              <div className="mock-dashboard">
                <div className="row" style={{justifyContent:'space-between'}}>
                  <span style={{color:'var(--text)',fontWeight:600}}>CRM Ignis · Dashboard</span>
                  <span className="pill">V4.9 live</span>
                </div>
                <div className="row" style={{gap:6,flexWrap:'wrap'}}>
                  <span style={{padding:'3px 7px',background:'var(--surface)',borderRadius:4}}>Pacientes</span>
                  <span style={{padding:'3px 7px',background:'var(--surface)',borderRadius:4}}>Agenda</span>
                  <span style={{padding:'3px 7px',background:'var(--surface)',borderRadius:4}}>Financeiro</span>
                  <span style={{padding:'3px 7px',background:'var(--surface)',borderRadius:4}}>Prontuário</span>
                </div>
                <div style={{marginTop:8,fontSize:10,color:'var(--text-3)'}}>ATENDIMENTOS · ÚLTIMOS 7 DIAS</div>
                <div className="bars">
                  {[45,72,38,85,60,92,68].map((h,i)=>(
                    <div key={i} style={{height:`${h}%`}}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Pré-Vendas Ignis */}
          <div className="proj-card reveal" onMouseMove={cardHover} style={{'--d':'100ms'}}>
            <span className="glow"></span>
            <div className="proj-meta">
              <span className="proj-tag">Chatbot · IA · WhatsApp</span>
              <span className="proj-status"><span className="live"></span>Em produção</span>
            </div>
            <h3 className="proj-title">Pré-Vendas Ignis</h3>
            <p className="proj-desc">SaaS de pré-vendas com bot de IA para clínicas. Engine de regras configurável, gestão de leads, follow-up automatizado e integração com WhatsApp via Evolution API.</p>
            <div className="proj-stack">
              <span>React 18</span><span>TypeScript</span><span>Supabase</span><span>Docker</span><span>Evolution API</span>
            </div>
            <div className="proj-visual" style={{marginTop:'auto', minHeight:140}}>
              <svg width="100%" height="100%" viewBox="0 0 300 140" style={{padding:20}}>
                <defs>
                  <linearGradient id="grd1" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#ff6b1a" stopOpacity=".2"/>
                    <stop offset="1" stopColor="#ff6b1a" stopOpacity="1"/>
                  </linearGradient>
                </defs>
                <circle cx="40" cy="70" r="14" fill="#1a1a1e" stroke="#ff6b1a" strokeWidth="1.5"/>
                <circle cx="150" cy="30" r="14" fill="#1a1a1e" stroke="rgba(255,255,255,.2)" strokeWidth="1.5"/>
                <circle cx="150" cy="110" r="14" fill="#1a1a1e" stroke="rgba(255,255,255,.2)" strokeWidth="1.5"/>
                <circle cx="260" cy="70" r="14" fill="#1a1a1e" stroke="#22c55e" strokeWidth="1.5"/>
                <path d="M54 70 Q100 70 136 35" stroke="url(#grd1)" strokeWidth="1.5" fill="none"/>
                <path d="M54 70 Q100 70 136 105" stroke="url(#grd1)" strokeWidth="1.5" fill="none"/>
                <path d="M164 30 Q200 30 246 60" stroke="rgba(255,255,255,.15)" strokeWidth="1.5" fill="none"/>
                <path d="M164 110 Q200 110 246 80" stroke="rgba(255,255,255,.15)" strokeWidth="1.5" fill="none"/>
                <text x="40" y="100" fontFamily="var(--font-mono)" fontSize="9" fill="#a1a1aa" textAnchor="middle">lead</text>
                <text x="150" y="14" fontFamily="var(--font-mono)" fontSize="9" fill="#a1a1aa" textAnchor="middle">bot</text>
                <text x="150" y="135" fontFamily="var(--font-mono)" fontSize="9" fill="#a1a1aa" textAnchor="middle">follow-up</text>
                <text x="260" y="100" fontFamily="var(--font-mono)" fontSize="9" fill="#22c55e" textAnchor="middle">agendado</text>
              </svg>
            </div>
            <a className="proj-link" href="https://chatbot.dnaignis.com.br" target="_blank" rel="noreferrer" style={{marginTop:18}}>
              Ver em produção
              <Icon.arrow width="14" height="14" className="arrow"/>
            </a>
          </div>

          {/* Hub Ignis */}
          <div className="proj-card reveal" onMouseMove={cardHover} style={{'--d':'200ms'}}>
            <span className="glow"></span>
            <div className="proj-meta">
              <span className="proj-tag">Gestão · Tooling interno</span>
              <span className="proj-status"><span className="live"></span>Em produção</span>
            </div>
            <h3 className="proj-title">Hub Ignis</h3>
            <p className="proj-desc">Ferramenta interna de gestão de tasks e deploy. Board de tickets por sistema (CRM, Chatbot, Landing), prioridade e controle de ciclo de release.</p>
            <div className="proj-stack">
              <span>React</span><span>TypeScript</span><span>Supabase</span><span>Tailwind</span>
            </div>
            <div className="proj-visual" style={{marginTop:'auto', minHeight:140}}>
              <div style={{padding:20, fontFamily:'var(--font-mono)', fontSize:11, color:'var(--text-2)', display:'flex', flexDirection:'column', gap:8, height:'100%', justifyContent:'center'}}>
                {[
                  {tag:'CRM', label:'fix: constraint bot_rules', status:'done'},
                  {tag:'BOT', label:'feat: auto-loss leads', status:'done'},
                  {tag:'HUB', label:'feat: filtro por sistema', status:'open'},
                  {tag:'CRM', label:'feat: prontuário v2', status:'open'},
                ].map((t,i) => (
                  <div key={i} style={{display:'flex', alignItems:'center', gap:10, padding:'6px 10px', background:'var(--surface-2)', borderRadius:6, border:'1px solid var(--border)'}}>
                    <span style={{padding:'2px 6px', background:'var(--accent-soft)', color:'var(--accent)', borderRadius:4, fontSize:10}}>{t.tag}</span>
                    <span style={{flex:1, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{t.label}</span>
                    <span style={{width:6, height:6, borderRadius:'50%', background: t.status==='done' ? '#22c55e' : '#60a5fa', flexShrink:0}}></span>
                  </div>
                ))}
              </div>
            </div>
            <a className="proj-link" href="https://hub.dnaignis.com.br" target="_blank" rel="noreferrer" style={{marginTop:18}}>
              Ver em produção
              <Icon.arrow width="14" height="14" className="arrow"/>
            </a>
          </div>

        </div>

        {/* ── Projetos externos ── */}
        <div className="proj-cat reveal" style={{'--d':'100ms'}}>Projetos externos</div>
        <div className="projects">

          <div className="proj-card reveal" onMouseMove={cardHover}>
            <span className="glow"></span>
            <div className="proj-meta">
              <span className="proj-tag">Fintech · Crédito · Fullstack</span>
              <span className="proj-status"><span className="live"></span>Em produção</span>
            </div>
            <h3 className="proj-title">Lider Cred Connect</h3>
            <p className="proj-desc">Sistema web para empresa de crédito. Fluxos de aprovação, gestão de operações financeiras e interface construída com foco em UX e confiabilidade de dados.</p>
            <div className="proj-stack">
              <span>TypeScript</span><span>React</span><span>Supabase</span>
            </div>
            <a className="proj-link" href="#" style={{marginTop:'auto'}}>
              Projeto privado
              <Icon.arrow width="14" height="14" className="arrow"/>
            </a>
          </div>

          <div className="proj-card reveal" onMouseMove={cardHover} style={{'--d':'100ms'}}>
            <span className="glow"></span>
            <div className="proj-meta">
              <span className="proj-tag">Fullstack · B2B · REST API</span>
              <span className="proj-status"><span className="live"></span>Em produção</span>
            </div>
            <h3 className="proj-title">GL Plast</h3>
            <p className="proj-desc">Sistema fullstack para indústria de plásticos. Frontend React + TypeScript integrado a backend C# com API REST própria para gestão operacional e relatórios.</p>
            <div className="proj-stack">
              <span>TypeScript</span><span>React</span><span>C#</span><span>.NET</span><span>REST API</span>
            </div>
            <a className="proj-link" href="#" style={{marginTop:'auto'}}>
              Projeto privado
              <Icon.arrow width="14" height="14" className="arrow"/>
            </a>
          </div>

          <div className="proj-card reveal" onMouseMove={cardHover} style={{'--d':'200ms'}}>
            <span className="glow"></span>
            <div className="proj-meta">
              <span className="proj-tag">Loyalty · SaaS · Varejo</span>
              <span className="proj-status"><span className="live"></span>Em produção</span>
            </div>
            <h3 className="proj-title">Apex Loyalty Pro</h3>
            <p className="proj-desc">Plataforma de fidelização para varejo. Engine de pontos, resgate de recompensas e painel de gestão de clientes com histórico e segmentação.</p>
            <div className="proj-stack">
              <span>TypeScript</span><span>React</span><span>Supabase</span>
            </div>
            <a className="proj-link" href="#" style={{marginTop:'auto'}}>
              Projeto privado
              <Icon.arrow width="14" height="14" className="arrow"/>
            </a>
          </div>

          <div className="proj-card reveal" onMouseMove={cardHover} style={{'--d':'300ms'}}>
            <span className="glow"></span>
            <div className="proj-meta">
              <span className="proj-tag">Agência · Web</span>
              <span className="proj-status"><span className="live"></span>Em produção</span>
            </div>
            <h3 className="proj-title">Agência Acsa</h3>
            <p className="proj-desc">Site institucional para agência de marketing. JavaScript puro com foco em performance de carregamento e animações CSS sem dependências.</p>
            <div className="proj-stack">
              <span>JavaScript</span><span>HTML</span><span>CSS</span>
            </div>
            <a className="proj-link" href="https://agenciaacsa.com.br" target="_blank" rel="noreferrer" style={{marginTop:'auto'}}>
              Ver site
              <Icon.arrow width="14" height="14" className="arrow"/>
            </a>
          </div>

        </div>

        {/* ── Open Source / Integrações ── */}
        <div className="proj-cat reveal" style={{'--d':'100ms'}}>Open Source &amp; Integrações</div>
        <div className="projects">

          <div className="proj-card reveal" onMouseMove={cardHover}>
            <span className="glow"></span>
            <div className="proj-meta">
              <span className="proj-tag">E-commerce · API · C#</span>
              <span className="proj-status"><span className="live"></span>Publicado</span>
            </div>
            <h3 className="proj-title">NuvemShop API</h3>
            <p className="proj-desc">Client C# para a API da NuvemShop. Sincronização de produtos, pedidos e clientes com tratamento de rate limit e serialização tipada.</p>
            <div className="proj-stack">
              <span>C#</span><span>.NET</span><span>REST API</span>
            </div>
            <a className="proj-link" href="https://github.com/EoBryann/NuvemShopApi" target="_blank" rel="noreferrer" style={{marginTop:'auto'}}>
              Ver no GitHub
              <Icon.arrow width="14" height="14" className="arrow"/>
            </a>
          </div>

          <div className="proj-card reveal" onMouseMove={cardHover} style={{'--d':'100ms'}}>
            <span className="glow"></span>
            <div className="proj-meta">
              <span className="proj-tag">E-commerce · Migração de dados</span>
              <span className="proj-status"><span className="live"></span>Publicado</span>
            </div>
            <h3 className="proj-title">MigraPrestaShop</h3>
            <p className="proj-desc">CLI C# para migração de dados entre plataformas de e-commerce para PrestaShop. Mapeamento de schema, transformação e importação em lote.</p>
            <div className="proj-stack">
              <span>C#</span><span>.NET</span><span>PrestaShop API</span>
            </div>
            <a className="proj-link" href="https://github.com/EoBryann/MigraPrestaShop" target="_blank" rel="noreferrer" style={{marginTop:'auto'}}>
              Ver no GitHub
              <Icon.arrow width="14" height="14" className="arrow"/>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

// ============ CONTACT ============
function Contact() {
  return (
    <section id="contato">
      <div className="container">
        <div className="contact-card reveal">
          <div>
            <div className="section-eyebrow">04 / Contato</div>
            <h2>Vamos trabalhar <span className="accent">juntos?</span></h2>
            <p>Procuro uma posição pleno onde possa crescer dentro de um produto real. Confortável com remoto ou híbrido em SP. Ativo no GitHub e aberto a conversa.</p>
            <div className="actions">
              <a className="btn btn-primary" href="https://www.linkedin.com/in/bryan-porto-47b451189/" target="_blank" rel="noreferrer">
                <Icon.linkedin width="16" height="16"/>
                LinkedIn
              </a>
              <a className="btn btn-secondary" href="mailto:bryanporto02@gmail.com">
                <Icon.mail width="16" height="16"/>
                Email
              </a>
            </div>
          </div>
          <div className="contact-list">
            <a className="contact-item" href="https://www.linkedin.com/in/bryan-porto-47b451189/" target="_blank" rel="noreferrer">
              <Icon.linkedin width="22" height="22" className="ico"/>
              <div className="meta"><span className="lbl">LinkedIn</span><span className="val">in/bryan-porto</span></div>
              <Icon.arrow width="14" height="14" className="arrow"/>
            </a>
            <a className="contact-item" href="https://github.com/EoBryann" target="_blank" rel="noreferrer">
              <Icon.github width="22" height="22" className="ico"/>
              <div className="meta"><span className="lbl">GitHub</span><span className="val">@EoBryann</span></div>
              <Icon.arrow width="14" height="14" className="arrow"/>
            </a>
            <a className="contact-item" href="mailto:bryanporto02@gmail.com">
              <Icon.mail width="22" height="22" className="ico"/>
              <div className="meta"><span className="lbl">Email</span><span className="val">bryanporto02@gmail.com</span></div>
              <Icon.arrow width="14" height="14" className="arrow"/>
            </a>
            <a className="contact-item" href="https://wa.me/5511955406211" target="_blank" rel="noreferrer">
              <Icon.whatsapp width="22" height="22" className="ico"/>
              <div className="meta"><span className="lbl">WhatsApp</span><span className="val">+55 11 95540-6211</span></div>
              <Icon.arrow width="14" height="14" className="arrow"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
window.About = About;
window.Stack = Stack;
window.Projects = Projects;
window.Contact = Contact;
window.Ticker = Ticker;
