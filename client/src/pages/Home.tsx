/**
 * Direção visual: Auto Truck Premium Detail — superfícies pretas acetinadas, laranja de alto contraste
 * e composição editorial inspirada em acabamento automotivo. Prioridade: sofisticação, clareza e conversão.
 */
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronRight,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  SprayCan,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const OFFICIAL_LOGO = "/manus-storage/logo-autotruck-oficial_b7a43251.png";
const HERO_IMAGE = "/manus-storage/auto-truck-detail-hero_17aee8f4.jpg";
const DETAIL_IMAGE = "/manus-storage/auto-truck-detailing_2e65779d.jpg";
const CAB_IMAGE = "/manus-storage/auto-truck-cab_477e2cfa.jpg";
const WHATSAPP_URL = "https://wa.me/5562992158095?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Auto%20Truck.";
const PHONE_URL = "tel:+5562992158095";

const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Padrão Auto Truck", href: "#padrao" },
];

const services = [
  {
    number: "01",
    title: "Lavagem detalhada",
    text: "Cuidado completo por fora, com atenção às áreas que fazem seu caminhão se destacar na estrada.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Polimento técnico",
    text: "Refinamento de pintura para recuperar profundidade, brilho e leitura perfeita das linhas da carroceria.",
    icon: SprayCan,
  },
  {
    number: "03",
    title: "Higienização interna",
    text: "Cabine renovada para quem passa horas transformando cada rota em resultado.",
    icon: ShieldCheck,
  },
];

const steps = [
  ["01", "Avaliação visual", "Entendemos o estado do veículo e o padrão de resultado que você procura."],
  ["02", "Tratamento correto", "Definimos processos e produtos compatíveis com cada superfície e acabamento."],
  ["03", "Entrega que impõe presença", "Seu caminhão volta para a rua com aspecto cuidado em cada detalhe."],
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

function BrandLogo({ footer = false }: { footer?: boolean }) {
  return (
    <a className={`brand-logo ${footer ? "footer-logo" : ""}`} href="#inicio" aria-label="Auto Truck — início">
      <img src={OFFICIAL_LOGO} alt="Auto Truck — Estética Para Caminhões" />
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="luxury-site">
      <header className={`premium-nav ${scrolled ? "is-scrolled" : ""}`}>
        <BrandLogo />
        <nav className="desktop-links" aria-label="Navegação principal">
          {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <a className="nav-action" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          <MessageCircle size={17} /> Falar no WhatsApp
        </a>
        <button
          type="button"
          className="mobile-trigger"
          onClick={() => setMenuOpen((current) => !current)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={25} />}
        </button>
      </header>

      <aside id="mobile-menu" className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <div className="mobile-menu-content">
          <span className="micro-label">Navegação</span>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}<ChevronRight size={23} />
            </a>
          ))}
          <a className="mobile-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
            <MessageCircle size={19} /> Atendimento via WhatsApp
          </a>
        </div>
      </aside>

      <main>
        <section id="inicio" className="luxury-hero">
          <img className="hero-photo" src={HERO_IMAGE} alt="Caminhão branco com acabamento impecável em estúdio de estética automotiva" />
          <div className="hero-tint" />
          <div className="hero-fine-grid" />
          <div className="hero-orange-line" aria-hidden="true" />
          <div className="hero-content page-width">
            <motion.p {...reveal} className="eyebrow orange"><span /> Estética para caminhões</motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.68, delay: 0.06, ease: "easeOut" }}
            >
              Presença que<br />
              <em>se nota</em> de longe.
            </motion.h1>
            <motion.p {...reveal} transition={{ ...reveal.transition, delay: 0.14 }} className="hero-copy">
              Estética premium para caminhões que carregam sua marca, sua rotina e o orgulho pelo que você construiu.
            </motion.p>
            <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.2 }} className="hero-buttons">
              <a className="button-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Agendar atendimento <ArrowUpRight size={19} />
              </a>
              <a className="button-quiet" href="#servicos">
                Ver especialidades <ArrowDownRight size={18} />
              </a>
            </motion.div>
          </div>
          <div className="hero-floating-note">
            <span className="note-dot" />
            <div><span className="micro-label">Padrão Auto Truck</span><b>Brilho, proteção<br />e personalidade.</b></div>
          </div>
          <div className="hero-side-caption">AUTO TRUCK / ESTÉTICA PARA CAMINHÕES / GOIÂNIA</div>
        </section>

        <section className="signature-band" aria-label="Assinatura Auto Truck">
          <div className="signature-track">
            <span>ESTÉTICA DE LINHA PESADA</span><i>✦</i><span>ACABAMENTO QUE IMPÕE PRESENÇA</span><i>✦</i><span>DETALHE QUE VALORIZA SUA MÁQUINA</span><i>✦</i>
            <span aria-hidden="true">ESTÉTICA DE LINHA PESADA</span><i aria-hidden="true">✦</i><span aria-hidden="true">ACABAMENTO QUE IMPÕE PRESENÇA</span>
          </div>
        </section>

        <section id="servicos" className="services-stage">
          <div className="page-width services-head">
            <motion.div {...reveal}>
              <p className="eyebrow graphite"><span /> 01 — Especialidades</p>
              <h2>Seu caminhão<br />merece <em>ser visto.</em></h2>
            </motion.div>
            <motion.p {...reveal} transition={{ ...reveal.transition, delay: 0.08 }} className="intro-copy">
              Processos feitos para recuperar presença, proteger acabamentos e devolver ao veículo a imagem que sua operação merece.
            </motion.p>
          </div>

          <div className="page-width service-cards">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article {...reveal} transition={{ ...reveal.transition, delay: index * 0.07 }} className="service-card" key={service.number}>
                  <div className="card-top"><span>{service.number}</span><Icon size={23} strokeWidth={1.7} /></div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span className="card-arrow"><ArrowUpRight size={19} /></span>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="experiencia" className="detail-experience">
          <div className="page-width experience-grid">
            <motion.div {...reveal} className="experience-shot">
              <img src={DETAIL_IMAGE} alt="Aplicação cuidadosa de acabamento na pintura de um caminhão" />
              <div className="shot-glow" />
              <div className="shot-index"><span>Detalhe</span><b>01</b></div>
              <p>REFLEXO CONTROLADO<br />ACABAMENTO PRECISO</p>
            </motion.div>
            <div className="experience-copy">
              <motion.p {...reveal} className="eyebrow orange"><span /> 02 — A experiência</motion.p>
              <motion.h2 {...reveal} transition={{ ...reveal.transition, delay: 0.06 }}>
                Cuidado técnico.<br /><em>Visual impecável.</em>
              </motion.h2>
              <motion.p {...reveal} transition={{ ...reveal.transition, delay: 0.11 }} className="body-copy">
                Da pintura à cabine, cada superfície recebe o processo adequado para entregar reflexo, conservação e leitura impecável da carroceria.
              </motion.p>
              <motion.a {...reveal} transition={{ ...reveal.transition, delay: 0.16 }} className="inline-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Conversar sobre seu caminhão <ArrowUpRight size={18} />
              </motion.a>
            </div>
          </div>
        </section>

        <section id="padrao" className="process-section">
          <div className="page-width process-grid">
            <div className="process-copy">
              <motion.p {...reveal} className="eyebrow graphite"><span /> 03 — Padrão Auto Truck</motion.p>
              <motion.h2 {...reveal} transition={{ ...reveal.transition, delay: 0.05 }}>
                Não é só brilho.<br />É <em>presença.</em></motion.h2>
              <motion.p {...reveal} transition={{ ...reveal.transition, delay: 0.1 }} className="body-copy dark-copy">
                Seu caminhão representa sua empresa antes mesmo de entrar em operação. O nosso padrão é simples: acabamento correto, proteção e resultado visível.
              </motion.p>
            </div>
            <div className="process-list">
              {steps.map(([number, title, text], index) => (
                <motion.article {...reveal} transition={{ ...reveal.transition, delay: 0.1 + index * 0.07 }} className="process-row" key={number}>
                  <span className="process-number">{number}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                  <ChevronRight size={20} />
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="cabin-section">
          <div className="cabin-photo-wrap">
            <img src={CAB_IMAGE} alt="Interior de cabine de caminhão limpo e cuidadosamente detalhado" />
            <div className="cabin-overlay" />
          </div>
          <div className="cabin-card">
            <span className="micro-label">Cabine renovada</span>
            <h2>O conforto também<br /><em>faz parte da jornada.</em></h2>
              <p>Higienização interna e cuidado para devolver conforto ao espaço onde o motorista vive a estrada.</p>
          </div>
        </section>

        <section id="contato" className="contact-stage">
          <div className="contact-shimmer" aria-hidden="true" />
          <div className="page-width contact-grid">
            <motion.div {...reveal}>
              <p className="eyebrow orange"><span /> 04 — Atendimento</p>
              <h2>Seu próximo<br /><em>melhor ângulo</em><br />começa aqui.</h2>
              <p className="contact-copy">Entre em contato, conte o que seu caminhão precisa e agende seu atendimento com a Auto Truck.</p>
            </motion.div>
            <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.08 }} className="contact-panel">
              <span className="micro-label">Auto Truck Estética Para Caminhões</span>
              <a className="phone-number" href={PHONE_URL}>(62) 99215-8095</a>
              <p>Atendimento direto para você cuidar do visual do seu caminhão com quem entende de linha pesada.</p>
              <a className="button-primary full" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <MessageCircle size={19} /> Chamar no WhatsApp
              </a>
              <a className="phone-link" href={PHONE_URL}><Phone size={16} /> Prefere ligar? Fale agora</a>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="premium-footer">
        <div className="page-width footer-grid">
          <BrandLogo footer />
          <p>Estética para caminhões com presença, cuidado técnico e acabamento premium.</p>
          <div className="footer-details"><span>Goiânia, Goiás</span><span>© 2026 Auto Truck</span></div>
        </div>
      </footer>
    </div>
  );
}
