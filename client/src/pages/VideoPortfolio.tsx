/**
 * Direção visual: Auto Truck Motion Archive — cinema industrial, superfícies de asfalto e laranja de sinalização.
 * Esta página organiza o conteúdo audiovisual da marca com foco em seleção, ritmo e controle explícito do visitante.
 */
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Instagram, MessageCircle, Play, Search, Volume2, VolumeX, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const OFFICIAL_LOGO = "/manus-storage/logo-autotruck-oficial_b7a43251.png";
const SOUNDTRACK_URL = "/manus-storage/auto-truck-trilha_bafe5a39.mp3";
const SCANIA_SPOTLIGHT_IMAGE = "/manus-storage/auto-truck-scania-vermelha_d1b7fe78.png";
const WHATSAPP_URL = "https://wa.me/5562992158095?text=Olá%2C%20quero%20saber%20mais%20sobre%20os%20serviços%20da%20Auto%20Truck.";
const INSTAGRAM_URL = "https://www.instagram.com/autotruck.estetica_?igsh=MXVkZTF4dmo1d256Zg==";

const portfolioVideos = [
  {
    id: "movimento",
    number: "01",
    label: "Presença em movimento",
    title: "Brilho que acompanha a estrada.",
    description: "Cabine, rodas e acabamento em uma saída que mostra presença de longe.",
    source: "/manus-storage/auto-truck-movimento_5df2b6a9.mp4",
    poster: "/manus-storage/auto-truck-detail-hero_17aee8f4.jpg",
    category: "polimento",
    model: "volvo-fh",
    searchTerms: ["volvo", "fh", "volvo fh", "polimento", "acabamento", "cabine", "rodas", "brilho"],
  },
  {
    id: "lavagem",
    number: "02",
    label: "Lavagem detalhada",
    title: "Cuidado que começa no processo.",
    description: "Jato, espuma e atenção aos pontos que sustentam o visual do caminhão.",
    source: "/manus-storage/auto-truck-lavagem_4b19e78d.mp4",
    poster: "/manus-storage/auto-truck-equipe-lavagem-01_0a8d6046.jpg",
    category: "lavagem",
    model: "outros",
    searchTerms: ["lavagem", "lavagem detalhada", "espuma", "jato", "roda", "caminhão", "outros caminhões"],
  },
  {
    id: "acabamento",
    number: "03",
    label: "Acabamento premium",
    title: "Reflexo que entrega resultado.",
    description: "O brilho do tanque e a leitura limpa da carroceria em cada ângulo.",
    source: "/manus-storage/auto-truck-acabamento_35f061ac.mp4",
    poster: "/manus-storage/auto-truck-service-gallery_a9b6edf3.jpg",
    category: "polimento",
    model: "outros",
    searchTerms: ["polimento", "acabamento", "tanque", "brilho", "reflexo", "outros caminhões"],
  },
  {
    id: "unidade",
    number: "04",
    label: "Oficina em operação",
    title: "Estrutura para fazer acontecer.",
    description: "A unidade Auto Truck e os bastidores de uma rotina feita para linha pesada.",
    source: "/manus-storage/auto-truck-unidade_20b57d12.mp4",
    poster: "/manus-storage/auto-truck-oficina_dfb7eb07.png",
    category: "lavagem",
    model: "outros",
    searchTerms: ["lavagem", "oficina", "unidade", "bastidores", "caminhão", "outros caminhões"],
  },
  {
    id: "scania-chegada",
    number: "05",
    label: "Chegada em destaque",
    title: "Presença que entra em cena.",
    description: "Scania laranja em movimento diante da fachada e da estrutura real da Auto Truck.",
    source: "/manus-storage/auto-truck-scania-chegada_ae5bd587.mp4",
    poster: "/manus-storage/auto-truck-scania-chegada-poster_e9dde57a.jpg",
    category: "destaques",
    model: "scania",
    searchTerms: ["scania", "laranja", "chegada", "fachada", "estrutura", "destaque", "caminhão"],
  },
  {
    id: "volvo-noturno",
    number: "06",
    label: "Volvo após o expediente",
    title: "Reflexo que sustenta presença.",
    description: "Volvo 540 verde em registro noturno, com brilho e estrutura da oficina em evidência.",
    source: "/manus-storage/auto-truck-volvo-noturno_99303350.mp4",
    poster: "/manus-storage/auto-truck-volvo-noturno-poster_5c3e15ad.jpg",
    category: "destaques",
    model: "volvo",
    searchTerms: ["volvo", "540", "verde", "noturno", "brilho", "pintura", "destaque", "acabamento"],
  },
  {
    id: "volvo-daf-finalizados",
    number: "07",
    label: "Veículos finalizados",
    title: "Resultado que ocupa o pátio.",
    description: "Volvo branco e DAF cinza em uma leitura ampla de acabamento e presença na unidade.",
    source: "/manus-storage/auto-truck-volvo-daf-finalizados_05f70fef.mp4",
    poster: "/manus-storage/auto-truck-volvo-daf-poster_5ab0f5f0.jpg",
    category: "destaques",
    model: "multimarca",
    searchTerms: ["volvo", "daf", "multimarca", "finalizados", "pátio", "brilho", "acabamento", "resultado"],
  },
  {
    id: "bastidores-daf",
    number: "08",
    label: "Bastidores em ação",
    title: "Equipe, estrutura e cuidado.",
    description: "Registro vertical da oficina com caminhões DAF e profissional em movimento durante a rotina de cuidado.",
    source: "/manus-storage/auto-truck-bastidores-daf_260a967f.mp4",
    poster: "/manus-storage/auto-truck-bastidores-daf-poster_90345d2f.jpg",
    category: "lavagem",
    model: "daf",
    searchTerms: ["daf", "bastidores", "equipe", "lavagem", "mangueira", "oficina", "processo", "rotina"],
  },
  {
    id: "volvo-fh-guareschi",
    number: "09",
    label: "Volvo FH em movimento",
    title: "Brilho que acompanha o conjunto.",
    description: "Registro de um Volvo FH Guareschi com conjunto bi-trem, destacando pintura preta, rodas limpas e presença na estrada.",
    source: "/manus-storage/auto-truck-volvo-fh-guareschi_c2cd16f3.mp4",
    poster: "/manus-storage/auto-truck-volvo-fh-guareschi-poster_ecdb93b4.jpg",
    category: "destaques",
    model: "volvo-fh",
    searchTerms: ["volvo", "fh", "globetrotter", "guareschi", "bi-trem", "librelato", "preto", "rodas", "brilho", "movimento", "destaque"],
  },
  {
    id: "scania-dupla",
    number: "10",
    label: "Scania em conjunto",
    title: "Duas presenças, um padrão visual.",
    description: "Duas Scanias, azul e preta, em registro diurno com limpeza e apresentação em evidência.",
    source: "/manus-storage/auto-truck-scania-dupla_dbe56cc3.mp4",
    poster: "/manus-storage/auto-truck-scania-dupla-poster_e31a3afa.jpg",
    category: "destaques",
    model: "scania",
    searchTerms: ["scania", "azul", "preta", "dupla", "limpeza", "brilho", "resultado", "destaque"],
  },
  {
    id: "scania-laranja-brilho",
    number: "11",
    label: "Scania laranja",
    title: "Cor, cromo e presença.",
    description: "Scania laranja em registro de brilho de pintura e detalhes cromados.",
    source: "/manus-storage/auto-truck-scania-laranja-brilho_8f71ae96.mp4",
    poster: "/manus-storage/auto-truck-scania-laranja-brilho-poster_c1414a2a.jpg",
    category: "destaques",
    model: "scania",
    searchTerms: ["scania", "laranja", "cromo", "pintura", "brilho", "acabamento", "destaque"],
  },
  {
    id: "daf-fachada",
    number: "12",
    label: "DAF na fachada",
    title: "Estrutura que recebe a operação.",
    description: "DAF cinza diante da fachada Auto Truck, com outro caminhão no box ao fundo.",
    source: "/manus-storage/auto-truck-daf-fachada_6524db39.mp4",
    poster: "/manus-storage/auto-truck-daf-fachada-poster_302f589c.jpg",
    category: "destaques",
    model: "daf",
    searchTerms: ["daf", "fachada", "oficina", "box", "estrutura", "cinza", "unidade"],
  },
  {
    id: "volvo-lavagem-espuma",
    number: "13",
    label: "Lavagem com espuma",
    title: "Espuma que revela o cuidado.",
    description: "Volvo FH em lavagem externa com espuma densa aplicada sobre a cabine e a grade frontal.",
    source: "/manus-storage/auto-truck-volvo-lavagem-espuma_c67a2a80.mp4",
    poster: "/manus-storage/auto-truck-volvo-lavagem-espuma-poster_c7c914ac.jpg",
    category: "lavagem",
    model: "volvo-fh",
    searchTerms: ["volvo", "fh", "lavagem", "espuma", "snow foam", "grade", "cabine", "processo"],
  },
  {
    id: "unidade-noturna",
    number: "14",
    label: "Unidade à noite",
    title: "A oficina também tem presença noturna.",
    description: "Registro noturno da entrada da Auto Truck, com caminhões DAF e Volvo no box iluminado.",
    source: "/manus-storage/auto-truck-unidade-noturna_669f2582.mp4",
    poster: "/manus-storage/auto-truck-unidade-noturna-poster_2da60a0f.jpg",
    category: "destaques",
    model: "multimarca",
    searchTerms: ["oficina", "noturno", "daf", "volvo", "unidade", "box", "estrutura", "bastidores"],
  },
  {
    id: "volvo-polimento",
    number: "15",
    label: "Polimento técnico",
    title: "Brilho construído no detalhe.",
    description: "Volvo FH 540 azul em polimento de cabine com politriz rotativa e boina de acabamento.",
    source: "/manus-storage/auto-truck-volvo-polimento_86e635a4.mp4",
    poster: "/manus-storage/auto-truck-volvo-polimento-poster_aadcd7b5.jpg",
    category: "polimento",
    model: "volvo-fh",
    searchTerms: ["volvo", "fh", "540", "azul", "polimento", "politriz", "boina", "cabine", "processo"],
  },
  {
    id: "daf-xf530",
    number: "16",
    label: "DAF XF 530",
    title: "Reflexo que ocupa o enquadramento.",
    description: "DAF XF 530 azul e preto em registro de brilho de pintura, faróis e grade frontal.",
    source: "/manus-storage/auto-truck-daf-xf530_40a937f6.mp4",
    poster: "/manus-storage/auto-truck-daf-xf530-poster_ec7fd7f9.jpg",
    category: "destaques",
    model: "daf",
    searchTerms: ["daf", "xf", "530", "azul", "preto", "brilho", "grade", "farol", "acabamento"],
  },
  {
    id: "volvo-fh-rosa",
    number: "17",
    label: "Volvo FH rosa",
    title: "Acabamento que assume identidade.",
    description: "Volvo FH 540 rosa em registro de lataria brilhante e acabamento visual em evidência.",
    source: "/manus-storage/auto-truck-volvo-fh-rosa_72b7d654.mp4",
    poster: "/manus-storage/auto-truck-volvo-fh-rosa-poster_1f110230.jpg",
    category: "destaques",
    model: "volvo-fh",
    searchTerms: ["volvo", "fh", "540", "rosa", "brilho", "lataria", "acabamento", "destaque"],
  },
  {
    id: "scania-personalizada",
    number: "18",
    label: "Scania personalizada",
    title: "Personalização que amplia a presença.",
    description: "Scania com semirreboque Randon envelopado, destacando uma identidade visual de grande impacto.",
    source: "/manus-storage/auto-truck-scania-personalizada_3a151743.mp4",
    poster: "/manus-storage/auto-truck-scania-personalizada-poster_6093bf6b.jpg",
    category: "destaques",
    model: "scania",
    searchTerms: ["scania", "randon", "envelopamento", "personalização", "baú", "identidade visual", "destaque"],
  },
  {
    id: "pintura-projeto-especial",
    number: "19",
    label: "Pintura de projeto especial",
    title: "Cor construída em camadas.",
    description: "Aplicação de tinta vermelha e etapas de montagem em um projeto especial de veículo pesado.",
    source: "/manus-storage/auto-truck-restauracao-pintura-especial_9079133a.mp4",
    poster: "/manus-storage/auto-truck-restauracao-pintura-especial-poster_3d5224ca.jpg",
    category: "destaques",
    model: "outros",
    searchTerms: ["pintura", "vermelho", "projeto especial", "restauração", "montagem", "guindaste", "veículo pesado"],
  },
  {
    id: "daf-xf-polimento",
    number: "20",
    label: "DAF XF em polimento",
    title: "Polimento guiado pelo reflexo.",
    description: "DAF XF branco em polimento de cabine, com mascaramento de áreas e trabalho com politriz rotativa.",
    source: "/manus-storage/auto-truck-daf-xf-polimento_88ca8fdd.mp4",
    poster: "/manus-storage/auto-truck-daf-xf-polimento-poster_3f283f33.jpg",
    category: "polimento",
    model: "daf",
    searchTerms: ["daf", "xf", "polimento", "politriz", "mascaramento", "fita", "cabine", "brilho", "processo"],
  },
];

const portfolioDisplayVideos = [...portfolioVideos].sort((first, second) => {
  const processPriority = ["daf-xf-polimento", "volvo-lavagem-espuma", "pintura-projeto-especial", "volvo-polimento", "lavagem", "acabamento"];
  const firstRank = processPriority.indexOf(first.id);
  const secondRank = processPriority.indexOf(second.id);
  return (firstRank < 0 ? 99 : firstRank) - (secondRank < 0 ? 99 : secondRank);
});

const serviceFilters = [
  { id: "todos", label: "Todos", count: "20" },
  { id: "lavagem", label: "Lavagem", count: "04" },
  { id: "polimento", label: "Polimento", count: "04" },
  { id: "destaques", label: "Destaques", count: "12" },
  { id: "higienizacao", label: "Higienização", count: "EM BREVE" },
] as const;

const modelFilters = [
  { id: "todos", label: "Todos os modelos", count: "20" },
  { id: "volvo-fh", label: "Volvo FH", count: "05" },
  { id: "volvo", label: "Volvo", count: "01" },
  { id: "scania", label: "Scania", count: "04" },
  { id: "daf", label: "DAF", count: "04" },
  { id: "multimarca", label: "Multimarca", count: "02" },
  { id: "outros", label: "Outros caminhões", count: "04" },
] as const;

export default function VideoPortfolio() {
  const [activeId, setActiveId] = useState(portfolioDisplayVideos[0].id);
  const [activeCategory, setActiveCategory] = useState<(typeof serviceFilters)[number]["id"]>("todos");
  const [activeModel, setActiveModel] = useState<(typeof modelFilters)[number]["id"]>("todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [soundEnabled, setSoundEnabled] = useState(false);
  const soundtrackRef = useRef<HTMLAudioElement>(null);
  const featuredRef = useRef<HTMLElement>(null);
  const normalizedQuery = searchQuery.trim().toLocaleLowerCase("pt-BR");
  const filteredVideos = portfolioDisplayVideos.filter((video) => {
    const matchesService = activeCategory === "todos" || video.category === activeCategory;
    const matchesModel = activeModel === "todos" || video.model === activeModel;
    const searchableContent = [video.label, video.title, video.description, video.category, video.model, ...video.searchTerms].join(" ").toLocaleLowerCase("pt-BR");
    const matchesSearch = !normalizedQuery || searchableContent.includes(normalizedQuery);
    return matchesService && matchesModel && matchesSearch;
  });
  const activeVideo = filteredVideos.find((video) => video.id === activeId) ?? filteredVideos[0] ?? portfolioDisplayVideos.find((video) => video.id === activeId) ?? portfolioDisplayVideos[0];

  useEffect(() => () => soundtrackRef.current?.pause(), []);

  const selectVideo = (id: string) => {
    setActiveId(id);
    window.setTimeout(() => featuredRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
  };

  const selectCategory = (category: (typeof serviceFilters)[number]["id"]) => {
    setActiveCategory(category);
    const firstVideo = portfolioDisplayVideos.find((video) => (category === "todos" || video.category === category) && (activeModel === "todos" || video.model === activeModel));
    if (firstVideo) setActiveId(firstVideo.id);
  };

  const selectModel = (model: (typeof modelFilters)[number]["id"]) => {
    setActiveModel(model);
    const firstVideo = portfolioDisplayVideos.find((video) => (activeCategory === "todos" || video.category === activeCategory) && (model === "todos" || video.model === model));
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
        <video className="portfolio-hero-process" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
          <source src="/manus-storage/auto-truck-daf-xf-polimento_88ca8fdd.mp4" type="video/mp4" />
        </video>
        <div className="portfolio-hero-process-tint" aria-hidden="true" />
        <div className="portfolio-hero-grid" aria-hidden="true" />
        <div className="portfolio-hero-line" aria-hidden="true" />
        <div className="portfolio-width portfolio-hero-content">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="portfolio-kicker"><span /> Auto Truck · vídeos de processo</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.58, delay: 0.05 }}>
            O processo em<br /><em>movimento.</em>
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.14 }} className="portfolio-hero-bottom">
            <p>Um arquivo de cenas da Auto Truck: resultado, cuidado, estrutura e caminhões preparados para voltar à estrada.</p>
            <div><b>20</b><span>vídeos<br />selecionados</span></div>
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
            <video autoPlay muted loop playsInline controls preload="metadata" poster={activeVideo.poster} aria-label={activeVideo.title}>
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
            <a className="portfolio-instagram" href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Instagram size={17} /> Acompanhar no Instagram <ArrowUpRight size={15} /></a>
          </aside>
        </div>
      </section>

      <section className="portfolio-grid-section">
        <div className="portfolio-width">
          <div className="portfolio-section-heading"><div><span className="portfolio-detail-label">Arquivo audiovisual</span><h2>Escolha por<br /><em>serviço e modelo.</em></h2></div><p>Combine o tipo de cuidado ao modelo de caminhão e encontre com mais rapidez o conteúdo mais próximo da sua operação.</p></div>
          <div className="portfolio-service-filters" role="tablist" aria-label="Filtrar vídeos por serviço">
            {serviceFilters.map((filter) => (
              <button key={filter.id} type="button" role="tab" aria-selected={activeCategory === filter.id} className={activeCategory === filter.id ? "active" : ""} onClick={() => selectCategory(filter.id)}>
                <span>{filter.label}</span><b>{filter.count}</b>
              </button>
            ))}
          </div>
          <label className="portfolio-search" aria-label="Buscar vídeos por marca, modelo ou serviço">
            <Search size={18} />
            <input value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Buscar por marca, modelo ou serviço" />
            {searchQuery && <button type="button" onClick={() => setSearchQuery("")} aria-label="Limpar busca"><X size={16} /></button>}
          </label>
          <div className="portfolio-model-filter-wrap">
            <span className="portfolio-detail-label">Modelo do caminhão</span>
            <div className="portfolio-model-filters" role="tablist" aria-label="Filtrar vídeos por modelo de caminhão">
              {modelFilters.map((filter) => (
                <button key={filter.id} type="button" role="tab" aria-selected={activeModel === filter.id} className={activeModel === filter.id ? "active" : ""} onClick={() => selectModel(filter.id)}>
                  <span>{filter.label}</span><b>{filter.count}</b>
                </button>
              ))}
            </div>
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
                  <video muted loop playsInline preload="metadata" poster={video.poster} aria-hidden="true">
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
              <span className="portfolio-detail-label">{normalizedQuery ? "Busca sem resultados" : activeCategory === "higienizacao" ? "Higienização de cabine" : "Combinação sem vídeos"}</span>
              <h3>{normalizedQuery ? <>Nenhum vídeo para<br /><em>“{searchQuery.trim()}”.</em></> : activeCategory === "higienizacao" ? <>Os próximos bastidores<br />entram aqui.</> : <>Ainda não há registros<br />para este filtro.</>}</h3>
              <p>{normalizedQuery ? "Tente outra marca, modelo ou termo de serviço. A busca também funciona junto com os filtros atuais." : activeCategory === "higienizacao" ? "Esta categoria está pronta para receber vídeos reais de higienização simples e completa de cabine." : "Experimente ajustar o serviço ou o modelo de caminhão para ver os vídeos disponíveis."}</p>
              <button type="button" onClick={() => { setActiveCategory("todos"); setActiveModel("todos"); setSearchQuery(""); setActiveId(portfolioVideos[0].id); }}>Ver todos os vídeos <ArrowUpRight size={16} /></button>
            </motion.div>
          )}
        </div>
      </section>

      <section className="portfolio-photo-spotlight">
        <div className="portfolio-width photo-spotlight-layout">
          <div className="photo-spotlight-copy">
            <span className="portfolio-detail-label">Caminhão em destaque</span>
            <h2>Presença que<br /><em>se transforma.</em></h2>
            <p>Registro real de uma Scania vermelha, incluído no portfólio para valorizar brilho, pintura e presença da linha pesada.</p>
            <span className="photo-spotlight-note">IMAGEM FORNECIDA PELA AUTO TRUCK · DESTAQUE 01</span>
          </div>
          <figure className="scania-spotlight-card">
            <img src={SCANIA_SPOTLIGHT_IMAGE} alt="Caminhão Scania vermelho em registro fornecido para o portfólio" />
            <div className="scania-spotlight-shade" />
            <figcaption><span>01</span><b>Scania<br />em destaque</b></figcaption>
          </figure>
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
