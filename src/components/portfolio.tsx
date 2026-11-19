"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Code2,
  Gamepad2,
  Globe2,
  Layers3,
  Menu,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { motion, MotionConfig } from "framer-motion";

type Language = "en" | "ar";

const copy = {
  en: {
    nav: ["About", "Expertise", "Projects", "Contact"],
    badge: "SEO-first digital builder",
    line1: "I turn search",
    line2: "into growth,",
    line3: "and ideas into",
    line4: "digital products.",
    intro: "I'm Ahmed Rashad — an SEO specialist and software developer exploring the intersection of organic growth, useful technology, and immersive game experiences.",
    work: "Explore my work",
    contact: "Let's talk",
    scroll: "SCROLL TO EXPLORE",
    aboutTag: "A little about me",
    aboutTitle: "One mindset. Three creative dimensions.",
    aboutText: "I approach every project with a mix of analytical thinking and creative execution. Search visibility is where I focus professionally, while software and games are where I build and experiment.",
    expertiseTag: "What I do",
    expertiseTitle: "Strategy meets execution.",
    expertiseText: "A focused set of capabilities across search, software, and interactive experiences.",
    projectsTag: "Selected work",
    projectsTitle: "Ideas in motion.",
    projectsText: "A selection of products and experiments. Case studies and verified outcomes will be added as each project is documented.",
    contactTag: "Have a project in mind?",
    contactTitle: "Let's make something meaningful.",
    contactText: "Open to SEO projects, development collaborations, and interesting opportunities.",
    emailNotice: "Email and social links will be connected once contact details are confirmed.",
    footer: "Built with curiosity and intent.",
    seo: "Search Engine Optimization",
    dev: "Software Development",
    games: "Game Development",
    seoDesc: "Technical SEO, content strategy, e-commerce SEO, international SEO, and AI search visibility.",
    devDesc: "Web experiences and application concepts with JavaScript, React, Python, and Firebase.",
    gamesDesc: "Prototypes and worlds built with Godot — horror, strategy, survival, and mobile-first ideas.",
    project1: "Zekry — Social & Memories App",
    project1d: "A concept for keeping close relationships, conversations, and shared memories in one place.",
    project2: "Shaghaf — Story Platform",
    project2d: "A reading-focused web experience for stories and serialized content.",
    project3: "War of the Ages",
    project3d: "A real-time strategy game concept combining era-based units and tactical defense.",
    status: "Concept / In progress",
    available: "Available for select projects",
    focus: "FOCUS",
    organic: "Organic Growth",
    building: "BUILDING",
    products: "Digital Products",
  },
  ar: {
    nav: ["نبذة", "الخبرات", "المشاريع", "تواصل"],
    badge: "أبني التجارب الرقمية بعقلية SEO",
    line1: "أحوّل البحث",
    line2: "إلى نمو،",
    line3: "والأفكار إلى",
    line4: "منتجات رقمية.",
    intro: "أنا أحمد رشاد، متخصص SEO ومطور برمجيات. أعمل عند تقاطع النمو العضوي والتقنيات المفيدة وتجارب الألعاب التفاعلية.",
    work: "استكشف أعمالي",
    contact: "لنتحدث",
    scroll: "مرّر للاستكشاف",
    aboutTag: "نبذة عني",
    aboutTitle: "عقلية واحدة. ثلاثة أبعاد إبداعية.",
    aboutText: "أتعامل مع كل مشروع بمزيج من التفكير التحليلي والتنفيذ الإبداعي. تحسين الظهور في محركات البحث هو تركيزي المهني، بينما أستكشف وأبني في مجالي البرمجيات والألعاب.",
    expertiseTag: "ماذا أقدم",
    expertiseTitle: "الاستراتيجية تلتقي بالتنفيذ.",
    expertiseText: "مجموعة مركزة من المهارات في البحث والبرمجيات والتجارب التفاعلية.",
    projectsTag: "أعمال مختارة",
    projectsTitle: "أفكار تتحول إلى واقع.",
    projectsText: "مجموعة من المنتجات والتجارب. سنضيف دراسات الحالات والنتائج الموثقة عند تجهيز كل مشروع.",
    contactTag: "هل لديك مشروع؟",
    contactTitle: "لنبنِ شيئاً يستحق.",
    contactText: "متاح لمشاريع SEO وتعاونات التطوير والفرص المميزة.",
    emailNotice: "سنضيف البريد وروابط التواصل بعد تأكيد بيانات الاتصال.",
    footer: "صُنع بشغف وفضول.",
    seo: "تحسين محركات البحث",
    dev: "تطوير البرمجيات",
    games: "تطوير الألعاب",
    seoDesc: "السيو التقني، استراتيجية المحتوى، المتاجر الإلكترونية، السيو الدولي والظهور في بحث الذكاء الاصطناعي.",
    devDesc: "تجارب ويب وأفكار تطبيقات باستخدام JavaScript وReact وPython وFirebase.",
    gamesDesc: "نماذج وعوالم باستخدام Godot — الرعب والاستراتيجية والبقاء وأفكار الجوال.",
    project1: "ذكرى — تطبيق اجتماعي وذكريات",
    project1d: "فكرة تطبيق تجمع العلاقات القريبة والمحادثات والذكريات المشتركة في مساحة واحدة.",
    project2: "شغف — منصة قصص",
    project2d: "تجربة ويب للقراءة والقصص والمحتوى المتسلسل.",
    project3: "حرب الأزمنة",
    project3d: "تصور لعبة استراتيجية فورية تمزج وحدات العصور المختلفة بالدفاع التكتيكي.",
    status: "تصور / قيد التطوير",
    available: "متاح لمشاريع مختارة",
    focus: "التركيز",
    organic: "النمو العضوي",
    building: "أعمل على",
    products: "منتجات رقمية",
  },
};

const expertise = [
  {
    icon: Search,
    title: "SEO",
    key: "seo" as const,
    desc: "seoDesc" as const,
    tags: ["Technical SEO", "E-commerce", "AEO / GEO"],
  },
  {
    icon: Code2,
    title: "Development",
    key: "dev" as const,
    desc: "devDesc" as const,
    tags: ["JavaScript", "React", "Python", "Firebase"],
  },
  {
    icon: Gamepad2,
    title: "Game Design",
    key: "games" as const,
    desc: "gamesDesc" as const,
    tags: ["Godot", "3D Worlds", "Game UI"],
  },
];

export function Portfolio() {
  const [lang, setLang] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[lang];
  const navIds = ["about", "expertise", "projects", "contact"];

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-language");
    const browser = navigator.language.toLowerCase();
    const initial: Language =
      stored === "ar" || stored === "en"
        ? stored
        : browser.startsWith("ar")
          ? "ar"
          : "en";
    setLang(initial);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
    window.localStorage.setItem("portfolio-language", lang);
  }, [lang]);

  const changeLanguage = () =>
    setLang((current) => (current === "en" ? "ar" : "en"));

  return (
    <MotionConfig reducedMotion="user">
    <main>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#080b12]/75 backdrop-blur-xl">
        <div className="container flex h-[76px] items-center justify-between">
          <a href="#home" className="flex items-center gap-3" aria-label="Ahmed Rashad home">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-indigo-200/25 bg-indigo-300/10 text-sm font-black tracking-tighter text-indigo-100">
              AR
            </span>
            <span className="text-sm font-extrabold tracking-tight">
              AHMED <span className="text-indigo-200">RASHAD</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {t.nav.map((label, index) => (
              <a
                key={label}
                className="text-sm text-slate-400 transition hover:text-white"
                href={`#${navIds[index]}`}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={changeLanguage}
              className="rounded-full border border-white/10 px-3 py-2 text-xs font-bold text-slate-300 hover:bg-white/5"
              aria-label="Switch language"
            >
              {lang === "en" ? "عربي" : "EN"}
            </button>
            <span className="hidden items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-300/5 px-3 py-2 text-[11px] text-emerald-200 sm:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              {t.available}
            </span>
            <button
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="container grid gap-1 pb-4 md:hidden" aria-label="Mobile navigation">
            {t.nav.map((label, index) => (
              <a
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-sm text-slate-300 hover:bg-white/5"
                key={label}
                href={`#${navIds[index]}`}
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <div id="main-content">
        <section
          id="home"
          className="relative flex min-h-[780px] items-center overflow-hidden pb-20 pt-32 md:min-h-[920px]"
        >
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" />
          <div className="pointer-events-none absolute -right-24 top-36 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[110px]" />
          <div className="container relative grid items-center gap-14 lg:grid-cols-[1.12fr_.88fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="pill mb-8">
                <Sparkles size={14} className="text-indigo-200" />
                {t.badge}
              </span>
              <h1 className="max-w-4xl text-5xl font-black leading-[1.08] tracking-[-.065em] sm:text-6xl lg:text-[76px]">
                {t.line1}
                <br />
                <span className="gradient-text">{t.line2}</span>
                <br />
                {t.line3}
                <br />
                <span className="gradient-text">{t.line4}</span>
              </h1>
              <p className="muted mt-8 max-w-xl text-base leading-8 md:text-lg">
                {t.intro}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a className="primary-button" href="#projects">
                  {t.work}
                  <ArrowUpRight size={17} />
                </a>
                <a className="secondary-button" href="#contact">
                  {t.contact}
                </a>
              </div>
              <div className="mt-16 flex items-center gap-3 text-[10px] font-bold tracking-[.22em] text-slate-500">
                <span className="h-px w-10 bg-slate-600" />
                {t.scroll}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.15 }}
              className="relative mx-auto w-full max-w-[480px]"
            >
              <div className="absolute inset-8 rounded-full bg-indigo-400/20 blur-[90px]" />
              <div className="glass relative aspect-square overflow-hidden rounded-[42px] p-5">
                <div
                  className="absolute inset-0 opacity-60"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 36%, rgba(138,157,255,.28), transparent 42%), linear-gradient(145deg, rgba(255,255,255,.05), transparent 55%)",
                  }}
                />
                <div className="absolute inset-5 rounded-[32px] border border-white/10" />
                <div className="absolute left-9 top-9 flex items-center gap-2 text-[10px] font-bold tracking-[.2em] text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  DIGITAL CRAFT
                </div>
                <div className="absolute inset-0 grid place-items-center">
                  <div className="relative grid h-52 w-52 place-items-center rounded-[58px] border border-indigo-100/30 bg-gradient-to-br from-indigo-200/20 via-indigo-300/5 to-cyan-200/10 shadow-[0_0_100px_rgba(129,145,255,.22)] sm:h-60 sm:w-60">
                    <div className="absolute inset-3 rounded-[48px] border border-white/10" />
                    <span className="text-7xl font-black tracking-[-.12em] text-white drop-shadow-[0_10px_40px_rgba(144,158,255,.35)]">
                      AR
                    </span>
                    <span className="absolute -right-6 top-8 grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-[#111827] text-indigo-100">
                      <Search size={21} />
                    </span>
                    <span className="absolute -bottom-4 -left-6 grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-[#111827] text-cyan-100">
                      <Code2 size={21} />
                    </span>
                    <span className="absolute -right-4 -bottom-7 grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-[#111827] text-violet-100">
                      <Gamepad2 size={21} />
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-9 left-9 right-9 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] tracking-[.2em] text-slate-500">
                      PORTFOLIO / 2026
                    </p>
                    <p className="mt-1 text-sm font-bold">SEO · DEV · GAMES</p>
                  </div>
                  <Globe2 className="text-indigo-200/70" size={20} />
                </div>
              </div>
              <div className="absolute -left-7 top-1/4 hidden rounded-2xl border border-white/10 bg-[#111827]/90 px-4 py-3 shadow-xl sm:block">
                <p className="text-[10px] text-slate-500">{t.focus}</p>
                <p className="mt-1 text-xs font-bold">{t.organic}</p>
              </div>
              <div className="absolute -right-6 bottom-1/4 hidden rounded-2xl border border-white/10 bg-[#111827]/90 px-4 py-3 shadow-xl sm:block">
                <p className="text-[10px] text-slate-500">{t.building}</p>
                <p className="mt-1 text-xs font-bold">{t.products}</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container grid gap-12 md:grid-cols-[.7fr_1.3fr] md:items-start">
            <div>
              <p className="eyebrow">{t.aboutTag}</p>
              <div className="mt-5 h-px w-20 bg-indigo-200/50" />
            </div>
            <div>
              <h2 className="section-title max-w-3xl">{t.aboutTitle}</h2>
              <p className="muted max-w-2xl text-lg leading-9">{t.aboutText}</p>
              <div className="mt-10 grid grid-cols-3 gap-3">
                {[
                  ["01", "SEO"],
                  ["02", "SOFTWARE"],
                  ["03", "GAMES"],
                ].map(([number, label]) => (
                  <div
                    key={number}
                    className="rounded-2xl border border-white/10 bg-white/[.025] p-4"
                  >
                    <p className="text-xs text-indigo-200">{number}</p>
                    <p className="mt-2 text-xs font-extrabold tracking-wider sm:text-sm">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="expertise"
          className="section border-y border-white/5 bg-white/[.015]"
        >
          <div className="container">
            <p className="eyebrow">{t.expertiseTag}</p>
            <h2 className="section-title">{t.expertiseTitle}</h2>
            <p className="muted mb-12 max-w-2xl leading-8">{t.expertiseText}</p>
            <div className="grid gap-4 md:grid-cols-3">
              {expertise.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.08 }}
                    className="card"
                  >
                    <div className="mb-8 grid h-12 w-12 place-items-center rounded-2xl border border-indigo-200/20 bg-indigo-300/10 text-indigo-100">
                      <Icon size={22} />
                    </div>
                    <p className="text-xs font-bold tracking-[.15em] text-indigo-200">
                      {item.title}
                    </p>
                    <h3 className="mt-2 text-xl font-extrabold">{t[item.key]}</h3>
                    <p className="muted mt-4 min-h-[82px] text-sm leading-7">
                      {t[item.desc]}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <p className="eyebrow">{t.projectsTag}</p>
            <h2 className="section-title">{t.projectsTitle}</h2>
            <p className="muted mb-12 max-w-2xl leading-8">{t.projectsText}</p>
            <div className="grid gap-4 lg:grid-cols-3">
              {[
                {
                  title: t.project1,
                  desc: t.project1d,
                  number: "01",
                  icon: Layers3,
                  tags: ["Mobile App", "Product Concept"],
                },
                {
                  title: t.project2,
                  desc: t.project2d,
                  number: "02",
                  icon: Globe2,
                  tags: ["Web Platform", "Content"],
                },
                {
                  title: t.project3,
                  desc: t.project3d,
                  number: "03",
                  icon: Gamepad2,
                  tags: ["Godot", "Strategy Game"],
                },
              ].map((project, index) => {
                const Icon = project.icon;
                return (
                  <motion.article
                    key={project.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="card group relative min-h-[310px] overflow-hidden"
                  >
                    <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-indigo-400/10 blur-3xl transition group-hover:bg-indigo-300/20" />
                    <div className="relative flex items-center justify-between">
                      <span className="text-xs text-slate-500">
                        {project.number} / 03
                      </span>
                      <Icon className="text-indigo-200" size={22} />
                    </div>
                    <h3 className="relative mt-14 text-2xl font-extrabold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="muted relative mt-4 text-sm leading-7">
                      {project.desc}
                    </p>
                    <div className="relative mt-7 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="pill !px-3 !py-1.5 !text-[10px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="relative mt-8 text-[10px] font-bold tracking-widest text-amber-200/80">
                      {t.status.toUpperCase()}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <div className="glass relative overflow-hidden rounded-[32px] px-7 py-16 text-center sm:px-14">
              <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-96 -translate-x-1/2 rounded-full bg-indigo-400/15 blur-[90px]" />
              <p className="eyebrow relative">{t.contactTag}</p>
              <h2 className="section-title gradient-text relative mx-auto max-w-3xl">
                {t.contactTitle}
              </h2>
              <p className="muted relative mx-auto max-w-xl leading-8">
                {t.contactText}
              </p>
              <span className="pill relative mt-8">{t.emailNotice}</span>
            </div>
          </div>
        </section>
      </div>

      <footer className="border-t border-white/5 py-8">
        <div className="container flex flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 Ahmed Rashad. {t.footer}</p>
          <a href="#home" className="flex items-center gap-2 hover:text-white">
            {lang === "ar" ? "العودة للأعلى" : "Back to top"}
            <ArrowUpRight size={14} />
          </a>
        </div>
      </footer>
    </main>
    </MotionConfig>
  );
}
