/**
 * Direção visual: Forja Urbana — faixas operacionais assimétricas, contraste carvão/laranja
 * e tipografia editorial que transforma serviços pesados em uma experiência clara e objetiva.
 */
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronRight,
  CircleGauge,
  Clock3,
  Menu,
  ShieldCheck,
  Truck,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

const HERO_IMAGE = "/manus-storage/auto-truck-hero_35a2e086.jpg";
const WORKSHOP_IMAGE = "/manus-storage/auto-truck-workshop_57d204d2.jpg";
const FLEET_IMAGE = "/manus-storage/auto-truck-fleet_189662a4.jpg";
const BRAND_MARK = "/manus-storage/auto-truck-mark_1c174bb6.png";

const serviceItems = [
  {
    id: "01",
    icon: Wrench,
    title: "Mecânica pesada",
    text: "Revisões, correções e manutenção de componentes que sustentam a operação diária da sua frota.",
  },
  {
    id: "02",
    icon: Zap,
    title: "Elétrica & diagnóstico",
    text: "Leitura técnica, análise de falhas e intervenções para devolver previsibilidade ao seu veículo.",
  },
  {
    id: "03",
    icon: CircleGauge,
    title: "Freios & suspensão",
    text: "Inspeção e manutenção de sistemas críticos para rodar com segurança e estabilidade.",
  },
  {
    id: "04",
    icon: Clock3,
    title: "Preventiva de frota",
    text: "Rotinas planejadas para antecipar paradas e proteger o ritmo da sua operação.",
  },
];

const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Método", href: "#metodo" },
  { label: "Oficina", href: "#oficina" },
];

const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="site-shell">
      <header className={`top-nav ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand-lockup" href="#inicio" aria-label="Auto Truck — início">
          <img className="brand-mark" src={BRAND_MARK} alt="" />
          <span className="brand-name">AUTO<br />TRUCK</span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className="nav-cta" href="#contato">
          Solicitar atendimento <ArrowUpRight size={16} strokeWidth={2.4} />
        </a>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <X size={23} /> : <Menu size={24} />}
        </button>
      </header>

      <div id="mobile-navigation" className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-inner">
          <span className="utility-label">Navegação</span>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}<ChevronRight size={20} />
            </a>
          ))}
          <a className="mobile-contact" href="#contato" onClick={() => setMenuOpen(false)}>
            Solicitar atendimento <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      <main>
        <section id="inicio" className="hero-section">
          <img className="hero-image" src={HERO_IMAGE} alt="Caminhão em frente a uma oficina especializada" />
          <div className="hero-overlay" />
          <div className="hero-grid" />
          <div className="hero-rail" aria-hidden="true" />

          <div className="hero-content">
            <motion.p {...reveal} className="eyebrow light-eyebrow">
              <span /> Oficina para veículos pesados
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
            >
              Seu caminhão<br />
              <em>não pode</em> esperar.
            </motion.h1>
            <motion.p {...reveal} transition={{ ...reveal.transition, delay: 0.16 }} className="hero-description">
              Diagnóstico, manutenção e cuidado técnico para manter sua operação em movimento — sem ruído, sem improviso.
            </motion.p>
            <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.24 }} className="hero-actions">
              <a className="primary-cta" href="#contato">
                Falar com a oficina <ArrowUpRight size={19} strokeWidth={2.3} />
              </a>
              <a className="text-cta" href="#servicos">
                Conheça os serviços <ArrowDownRight size={18} />
              </a>
            </motion.div>
          </div>

          <div className="hero-status" aria-label="Informação de atendimento">
            <span className="status-pulse" />
            <div>
              <span className="utility-label">Operação em movimento</span>
              <strong>Atendimento técnico<br />para sua jornada pesada.</strong>
            </div>
          </div>

          <div className="hero-corner-label">AUTO TRUCK / OFICINA ESPECIALIZADA</div>
        </section>

        <section className="service-marquee" aria-label="Especialidades Auto Truck">
          <div className="marquee-track">
            <span>DIAGNÓSTICO TÉCNICO</span><i>✦</i><span>MANUTENÇÃO PREVENTIVA</span><i>✦</i><span>LINHA PESADA</span><i>✦</i><span>OPERAÇÃO DE FROTAS</span><i>✦</i>
            <span aria-hidden="true">DIAGNÓSTICO TÉCNICO</span><i aria-hidden="true">✦</i><span aria-hidden="true">MANUTENÇÃO PREVENTIVA</span><i aria-hidden="true">✦</i>
          </div>
        </section>

        <section id="servicos" className="services-section">
          <div className="section-shell services-intro">
            <motion.div {...reveal}>
              <p className="eyebrow dark-eyebrow"><span /> 01 — Especialidades</p>
              <h2>Oficina que entende<br /><em>o peso da sua rota.</em></h2>
            </motion.div>
            <motion.p {...reveal} transition={{ ...reveal.transition, delay: 0.08 }} className="section-lead">
              A Auto Truck reúne diagnóstico e execução para que cada intervenção tenha um único objetivo: colocar seu caminhão de volta na operação com segurança.
            </motion.p>
          </div>

          <div className="service-list section-shell">
            {serviceItems.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  {...reveal}
                  transition={{ ...reveal.transition, delay: index * 0.06 }}
                  className="service-row"
                  key={service.id}
                >
                  <span className="service-number">{service.id}</span>
                  <span className="service-icon"><Icon size={23} strokeWidth={1.8} /></span>
                  <div className="service-copy">
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                  <span className="service-arrow"><ArrowUpRight size={23} /></span>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="metodo" className="method-section">
          <div className="section-shell method-layout">
            <motion.div {...reveal} className="method-visual">
              <img src={WORKSHOP_IMAGE} alt="Inspeção técnica no conjunto de roda de um caminhão" />
              <div className="image-index"><span>Precisão</span><b>01</b></div>
              <div className="image-caption">ANÁLISE DE COMPONENTES<br />E INTERVENÇÃO TÉCNICA</div>
            </motion.div>

            <div className="method-copy">
              <motion.p {...reveal} className="eyebrow light-eyebrow"><span /> 02 — Método Auto Truck</motion.p>
              <motion.h2 {...reveal} transition={{ ...reveal.transition, delay: 0.07 }}>
                Problema na estrada<br />pede resposta <em>de oficina.</em>
              </motion.h2>
              <motion.p {...reveal} transition={{ ...reveal.transition, delay: 0.12 }} className="method-description">
                Nosso fluxo une escuta, diagnóstico e execução. Você entende o que está sendo feito e por quê, enquanto a equipe cuida do que realmente importa: sua continuidade operacional.
              </motion.p>

              <div className="method-steps">
                {[
                  ["01", "Entender", "Ouvimos o histórico e avaliamos o impacto da falha."],
                  ["02", "Diagnosticar", "Investigamos o sistema antes de definir a intervenção."],
                  ["03", "Resolver", "Executamos com foco em segurança e retorno à operação."],
                ].map(([number, title, description], index) => (
                  <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.16 + index * 0.06 }} className="method-step" key={number}>
                    <span>{number}</span>
                    <div><h3>{title}</h3><p>{description}</p></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="oficina" className="proof-section">
          <div className="section-shell proof-layout">
            <motion.div {...reveal} className="proof-copy">
              <p className="eyebrow dark-eyebrow"><span /> 03 — O compromisso</p>
              <h2>Quando seu caminhão para,<br />sua operação <em>perde ritmo.</em></h2>
              <p>
                É por isso que a Auto Truck trabalha com uma comunicação direta e um processo técnico. A cada visita, nosso foco é reduzir incertezas e devolver confiabilidade à sua rotina.
              </p>
              <a href="#contato" className="text-cta dark-text-cta">Conhecer a Auto Truck <ArrowUpRight size={18} /></a>
            </motion.div>

            <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.08 }} className="proof-panel">
              <div className="panel-orbit" aria-hidden="true" />
              <Truck className="panel-truck" size={62} strokeWidth={1.25} aria-hidden="true" />
              <div className="panel-rule" />
              <div className="proof-item"><ShieldCheck size={24} /><span>Execução com<br /><b>foco em segurança</b></span></div>
              <div className="proof-item"><CircleGauge size={24} /><span>Diagnóstico<br /><b>antes da intervenção</b></span></div>
              <div className="proof-item"><Clock3 size={24} /><span>Planejamento para<br /><b>reduzir paradas</b></span></div>
              <div className="panel-footer"><span>PROCEDIMENTO</span><b>AT / 01</b></div>
            </motion.div>
          </div>
        </section>

        <section id="contato" className="contact-section">
          <img className="contact-image" src={FLEET_IMAGE} alt="Caminhão seguindo por uma rodovia ao amanhecer" />
          <div className="contact-image-overlay" />
          <div className="contact-grid" />
          <div className="section-shell contact-layout">
            <motion.div {...reveal}>
              <p className="eyebrow light-eyebrow"><span /> 04 — Atendimento</p>
              <h2>Vamos colocar<br />sua frota em <em>movimento.</em></h2>
              <p>Entre em contato para agendar uma avaliação ou conversar sobre a necessidade da sua operação.</p>
            </motion.div>
            <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.08 }} className="contact-card">
              <span className="utility-label">Canal de atendimento</span>
              <h3>Fale com uma<br />equipe que entende<br /><em>de linha pesada.</em></h3>
              <a href="mailto:?subject=Solicita%C3%A7%C3%A3o%20de%20atendimento%20-%20Auto%20Truck" className="primary-cta contact-primary">
                Solicitar atendimento <ArrowUpRight size={19} />
              </a>
              <p className="contact-note">WhatsApp, telefone e localização podem ser personalizados com os dados da sua unidade.</p>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-layout">
          <a className="brand-lockup footer-brand" href="#inicio">
            <img className="brand-mark" src={BRAND_MARK} alt="" />
            <span className="brand-name">AUTO<br />TRUCK</span>
          </a>
          <p>Manutenção técnica para veículos pesados.<br />Feita para a sua operação seguir.</p>
          <div className="footer-meta"><span>© 2026 Auto Truck</span><span>Oficina especializada</span></div>
        </div>
      </footer>
    </div>
  );
}
