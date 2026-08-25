/**
 * Direção visual: Auto Truck Motion Archive — cinema industrial, superfícies de asfalto e laranja de sinalização.
 * Esta página organiza o conteúdo audiovisual da marca com foco em seleção, ritmo e controle explícito do visitante.
 */
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, MessageCircle, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const OFFICIAL_LOGO = "/manus-storage/logo-autotruck-oficial_b7a43251.png";
const SOUNDTRACK_URL = "/manus-storage/auto-truck-trilha_bafe5a39.mp3";
const WHATSAPP_URL = "https://wa.me/5562992158095?text=Olá%2C%20quero%20saber%20mais%20sobre%20os%20serviços%20da%20Auto%20Truck.";

const portfolioVideos = [
  {
    id: "movimento",
    number: "01",
    label: "Presença em movimento",
    title: "Brilho que acompanha a estrada.",
    description: "Cabine, rodas e acabamento em uma saída que mostra presença de longe.",
    source: "/manus-storage/auto-truck-movimento_5df2b6a9.mp4",
    category: "polimento",
  },
  {
    id: "lavagem",
    number: "02",
    label: "Lavagem detalhada",
    title: "Cuidado que começa no processo.",
    description: "Jato, espuma e atenção aos pontos que sustentam o visual do caminhão.",
    source: "/manus-storage/auto-truck-lavagem_4b19e78d.mp4",
    category: "lavagem",
  },
  {
    id: "acabamento",
    number: "03",
    label: "Acabamento premium",
    title: "Reflexo que entrega resultado.",
    description: "O brilho do tanque e a leitura limpa da carroceria em cada ângulo.",
    source: "/manus-storage/auto-truck-acabamento_35f061ac.mp4",
    category: "polimento",
  },
  {
    id: "unidade",
    number: "04",
    label: "Oficina em operação",
    title: "Estrutura para fazer acontecer.",
    description: "A unidade Auto Truck e os bastidores de uma rotina feita para linha pesada.",
    source: "/manus-storage/auto-truck-unidade_20b57d12.mp4",
    category: "lavagem",
  },
];

const serviceFilters = [
  { id: "todos", label: "Todos", count: "04" },
  { id: "lavagem", label: "Lavagem", count: "02" },
  { id: "polimento", label: "Polimento", count: "02" },
  { id: "higienizacao", label: "Higienização", count: "EM BREVE" },
] as const;

export default function VideoPortfolio() {
  const [activeId, setActiveId] = useState(portfolioVideos[0].id);
  const [activeCategory, setActiveCategory] = useState<(typeof serviceFilters)[number]["id"]>("todos");
  const [soundEnabled, setSoundEnabled] = useState(false);
  const soundtrackRef = useRef<HTMLAudioElement>(null);
  const featuredRef = useRef<HTMLElement>(null);
  const filteredVideos = activeCategory === "todos" ? portfolioVideos : portfolioVideos.filter((video) => video.category === activeCategory);
  const activeVideo = filteredVideos.find((video) => video.id === activeId) ?? filteredVideos[0] ?? portfolioVideos.find((video) => video.id === activeId) ?? portfolioVideos[0];

  useEffect(() => () => soundtrackRef.current?.pause(), []);

  const selectVideo = (id: string) => {
    setActiveId(id);
    window.setTimeout(() => featuredRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
  };

  const selectCategory = (category: (typeof serviceFilters)[number]["id"]) => {
    setActiveCategory(category);
    const firstVideo = category === "todos" ? portfolioVideos[0] : portfolioVideos.find((video) => video.category === category);
    if (firstVideo) setActiveId(firstVideo.id);
  };

  const toggleSoundtrack = () => {
    const soundtrack = soundtrackRef.current;
    if (!soundtrack) return;

    if (soundEnabled) {
      soundtrack.pause();
      setSoundEnabled(false);
      return;
    }

    soundtrack.volume = 0.28;
    soundtrack.play().then(() => setSoundEnabled(true)).catch(() => setSoundEnabled(false));
  };

  return (
    <main className="portfolio-page">
      <audio ref={soundtrackRef} loop preload="metadata">
        <source src={SOUNDTRACK_URL} type="audio/mpeg" />
      </audio>

      <header className="portfolio-nav">
        <a href="/" className="portfolio-brand" aria-label="Voltar para a Auto Truck">
          <img src={OFFICIAL_LOGO} alt="Auto Truck Estética Para Caminhões" />
          <span>Arquivo de vídeos</span>
        </a>
        <a href="/" className="portfolio-back"><ArrowLeft size={17} /> Voltar ao site</a>
      </header>

      <section className="portfolio-hero">
        <div className="portfolio-hero-grid" aria-hidden="true" />
        <div className="portfolio-hero-line" aria-hidden="true" />
        <div className="portfolio-width portfolio-hero-content">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="portfolio-kicker"><span /> Auto Truck · vídeos de processo</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.58, delay: 0.05 }}>
            O processo em<br /><em>movimento.</em>
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.14 }} className="portfolio-hero-bottom">
            <p>Um arquivo de cenas da Auto Truck: resultado, cuidado, estrutura e caminhões preparados para voltar à estrada.</p>
            <div><b>04</b><span>vídeos<br />selecionados</span></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.18 }} className="portfolio-hero-plate">
            <img src={OFFICIAL_LOGO} alt="" />
            <span>Anápolis · GO</span>
            <b>Estética para caminhões</b>
          </motion.div>
        </div>
      </section>

      <section ref={featuredRef} className="portfolio-feature">
        <div className="portfolio-width feature-grid">
          <motion.div key={activeVideo.id} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, ease: "easeOut" }} className="feature-player">
            <video autoPlay muted loop playsInline controls preload="metadata" aria-label={activeVideo.title}>
              <source src={activeVideo.source} type="video/mp4" />
              Seu navegador não suporta reprodução de vídeo.
            </video>
            <div className="feature-player-shade" />
            <div className="feature-player-index"><span>{activeVideo.number}</span><b>{activeVideo.label}</b></div>
            <div className="feature-player-copy"><h2>{activeVideo.title}</h2><p>{activeVideo.description}</p></div>
          </motion.div>

          <aside className="portfolio-controls">
            <span className="portfolio-detail-label">Destaque atual</span>
            <p>Escolha uma cena abaixo para trocar o vídeo de destaque. A reprodução permanece silenciosa para você assistir com tranquilidade.</p>
            <button type="button" className={`portfolio-audio ${soundEnabled ? "is-playing" : ""}`} onClick={toggleSoundtrack} aria-pressed={soundEnabled}>
              {soundEnabled ? <Volume2 size={19} /> : <VolumeX size={19} />}
              <span><small>Trilha original</small>{soundEnabled ? "Pausar trilha sonora" : "Ativar trilha sonora"}</span>
              <i>{soundEnabled ? "ON" : "OFF"}</i>
            </button>
            <a className="portfolio-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Falar com a Auto Truck <ArrowUpRight size={16} /></a>
          </aside>
        </div>
      </section>

      <section className="portfolio-grid-section">
        <div className="portfolio-width">
          <div className="portfolio-section-heading"><div><span className="portfolio-detail-label">Arquivo audiovisual</span><h2>Escolha por<br /><em>serviço.</em></h2></div><p>Filtre os registros por lavagem, polimento ou higienização e encontre o tipo de cuidado que deseja ver.</p></div>
          <div className="portfolio-service-filters" role="tablist" aria-label="Filtrar vídeos por serviço">
            {serviceFilters.map((filter) => (
              <button key={filter.id} type="button" role="tab" aria-selected={activeCategory === filter.id} className={activeCategory === filter.id ? "active" : ""} onClick={() => selectCategory(filter.id)}>
                <span>{filter.label}</span><b>{filter.count}</b>
              </button>
            ))}
          </div>
          {filteredVideos.length > 0 ? (
            <div className="portfolio-video-grid" role="list">
              {filteredVideos.map((video) => (
                <motion.button
                  key={video.id}
                  type="button"
                  role="listitem"
                  className={`portfolio-card ${activeVideo.id === video.id ? "active" : ""}`}
                  onClick={() => selectVideo(video.id)}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <video muted loop playsInline preload="metadata" aria-hidden="true">
                    <source src={video.source} type="video/mp4" />
                  </video>
                  <div className="portfolio-card-shade" />
                  <div className="portfolio-card-head"><span>{video.number}</span><Play size={16} fill="currentColor" /></div>
                  <div className="portfolio-card-copy"><small>{video.label}</small><strong>{video.title}</strong></div>
                </motion.button>
              ))}
            </div>
          ) : (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="portfolio-empty-state">
              <span className="portfolio-detail-label">Higienização de cabine</span>
              <h3>Os próximos bastidores<br />entram aqui.</h3>
              <p>Esta categoria está pronta para receber vídeos reais de higienização simples e completa de cabine.</p>
              <button type="button" onClick={() => selectCategory("todos")}>Ver todos os vídeos <ArrowUpRight size={16} /></button>
            </motion.div>
          )}
        </div>
      </section>

      <section className="portfolio-contact">
        <div className="portfolio-width portfolio-contact-inner">
          <div><span className="portfolio-detail-label">Quer este padrão no seu caminhão?</span><h2>Seu próximo<br /><em>registro</em> pode ser aqui.</h2></div>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp · (62) 99215-8095 <ArrowUpRight size={19} /></a>
        </div>
      </section>
    </main>
  );
}
