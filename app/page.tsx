"use client";

import { useState } from "react";

type Copy = {
  nav: string[];
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  primary: string;
  secondary: string;
  proof: string[];
  workLabel: string;
  workTitle: string;
  workText: string;
  serviceLabel: string;
  serviceTitle: string;
  contactLabel: string;
  contactTitle: string;
  contactText: string;
};

const copy: Record<"en" | "ar", Copy> = {
  en: {
    nav: ["About", "Expertise", "Work", "Contact"],
    eyebrow: "SEO Specialist · Software & Game Developer",
    title: <>I build visibility<br />that <em>performs.</em></>,
    intro: "I combine technical SEO, software engineering, and game design to turn ambitious digital ideas into measurable experiences.",
    primary: "Explore my work",
    secondary: "Let’s work together",
    proof: ["Technical SEO", "Software", "Game Design"],
    workLabel: "Selected work",
    workTitle: "A portfolio built around outcomes, not just aesthetics.",
    workText: "Each project will grow into a documented case study: the problem, the strategic decisions, the execution, and the measurable result.",
    serviceLabel: "What I do",
    serviceTitle: "Strategy meets execution.",
    contactLabel: "Start a conversation",
    contactTitle: "Have a meaningful project in mind?",
    contactText: "The contact experience will be connected securely to Ahmed’s business email before launch.",
  },
  ar: {
    nav: ["عني", "الخبرات", "الأعمال", "تواصل"],
    eyebrow: "متخصص SEO · مطور برمجيات وألعاب",
    title: <>أبني حضورًا رقميًا<br />يحقق <em>نتائج.</em></>,
    intro: "أجمع بين الـSEO التقني، وهندسة البرمجيات، وتصميم الألعاب لتحويل الأفكار الرقمية الطموحة إلى تجارب قابلة للقياس.",
    primary: "استكشف أعمالي",
    secondary: "لنبدأ معًا",
    proof: ["SEO تقني", "برمجيات", "تصميم ألعاب"],
    workLabel: "أعمال مختارة",
    workTitle: "بورتفوليو مبني على النتائج، لا على المظهر فقط.",
    workText: "كل مشروع سيتحول إلى دراسة حالة موثقة: التحدي، والقرارات الاستراتيجية، والتنفيذ، والنتيجة القابلة للقياس.",
    serviceLabel: "ما أقدمه",
    serviceTitle: "استراتيجية تُترجم إلى تنفيذ.",
    contactLabel: "ابدأ محادثة",
    contactTitle: "لديك مشروع مهم في ذهنك؟",
    contactText: "سيُربط نموذج التواصل بشكل آمن ببريد أحمد المهني قبل الإطلاق.",
  },
};

const disciplines = [
  ["01", "Technical SEO", "Audits, site architecture, Core Web Vitals, structured data, and scalable organic growth."],
  ["02", "Software Development", "Useful, fast, and maintainable web products designed around real business outcomes."],
  ["03", "Game Development", "Systems, interaction, and memorable worlds built with a product-minded perspective."],
];

export default function Home() {
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const text = copy[language];
  const isArabic = language === "ar";

  return (
    <main dir={isArabic ? "rtl" : "ltr"} className={isArabic ? "arabic" : ""}>
      <div className="grain" aria-hidden="true" />
      <section className="hero" id="top">
        <header className="nav wrap">
          <a href="#top" className="brand" aria-label="Ahmed Rashad home">AR<span>.</span></a>
          <nav aria-label="Primary navigation">
            {text.nav.map((item, index) => <a key={item} href={["#about", "#expertise", "#work", "#contact"][index]}>{item}</a>)}
          </nav>
          <button className="language" onClick={() => setLanguage(isArabic ? "en" : "ar")} aria-label="Switch language">
            {isArabic ? "EN" : "عربي"}
          </button>
        </header>

        <div className="hero-content wrap">
          <p className="eyebrow"><span />{text.eyebrow}</p>
          <h1>{text.title}</h1>
          <p className="intro">{text.intro}</p>
          <div className="actions">
            <a className="button button-primary" href="#work">{text.primary} <b>↘</b></a>
            <a className="button button-quiet" href="#contact">{text.secondary}</a>
          </div>
        </div>
        <div className="orb" aria-hidden="true"><i /><i /><i /></div>
        <div className="hero-foot wrap">
          <p>© 2026 Ahmed Rashad</p>
          <div>{text.proof.map((item) => <span key={item}>{item}</span>)}</div>
          <a href="#about" aria-label="Scroll to about section">Scroll <b>↓</b></a>
        </div>
      </section>

      <section className="statement wrap" id="about">
        <p className="section-kicker">{text.serviceLabel}</p>
        <h2>{text.serviceTitle}</h2>
        <p>From discoverability to interaction, I work across the full digital journey. The goal is simple: create digital products people can find, understand, and enjoy using.</p>
      </section>

      <section className="disciplines wrap" id="expertise">
        {disciplines.map(([number, title, description]) => <article key={number}>
          <p>{number}</p><div><h3>{title}</h3><p>{description}</p></div><span>↗</span>
        </article>)}
      </section>

      <section className="work" id="work">
        <div className="wrap work-heading">
          <p className="section-kicker">{text.workLabel}</p>
          <h2>{text.workTitle}</h2>
          <p>{text.workText}</p>
        </div>
        <div className="project-grid wrap">
          <article className="project project-large"><div className="project-visual visual-seo"><span>SEARCH / SYSTEMS / GROWTH</span><strong>SEO</strong></div><p>Technical SEO</p><h3>Growth systems with a technical foundation.</h3></article>
          <article className="project"><div className="project-visual visual-app"><span>PRODUCT / CODE / EXPERIENCE</span><strong>01</strong></div><p>Software Development</p><h3>Tools that make complex work feel simple.</h3></article>
          <article className="project"><div className="project-visual visual-game"><span>PLAY / SYSTEMS / WORLDS</span><strong>△</strong></div><p>Game Development</p><h3>Interactive ideas with character.</h3></article>
        </div>
      </section>

      <section className="contact wrap" id="contact">
        <p className="section-kicker">{text.contactLabel}</p>
        <h2>{text.contactTitle}</h2>
        <p>{text.contactText}</p>
        <a href="mailto:hello@example.com" className="contact-link">hello@example.com <span>↗</span></a>
      </section>

      <footer className="wrap"><a href="#top" className="brand">AR<span>.</span></a><p>Built with clarity and intent.</p><p>© 2026</p></footer>
    </main>
  );
}
