/**
 * Direção visual: Auto Truck Premium Detail — hero em vídeo, preto acetinado e Laranja Carga como sinal de ação.
 * Prioridade: impacto visual real, legibilidade e conversão.
 */
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUp,
  ArrowUpRight,
  Building2,
  Camera,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  ClipboardPenLine,
  Clock3,
  Instagram,
  ImagePlus,
  MapPin,
  MapPinned,
  Menu,
  MessageCircle,
  Maximize2,
  Minus,
  Phone,
  Play,
  Plus,
  Share2,
  ShieldCheck,
  Sparkles,
  SprayCan,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import { type FormEvent, useEffect, useRef, useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { trpc } from "@/lib/trpc";

const OFFICIAL_LOGO = "/manus-storage/logo-autotruck-oficial_b7a43251.png";
const DETAIL_IMAGE = "/manus-storage/auto-truck-detailing_2e65779d.jpg";
const CAB_IMAGE = "/manus-storage/auto-truck-cab_477e2cfa.jpg";
const WORKSHOP_GALLERY_IMAGE = "/manus-storage/auto-truck-oficina_dfb7eb07.png";
const WORKSHOP_FACADE_IMAGE = "/manus-storage/auto-truck-fachada-caminhoes-01_0298e7eb.png";
const WORKSHOP_DAFS_IMAGE = "/manus-storage/auto-truck-dafs-box_2094b49d.jpeg";
const WORKSHOP_DUSK_IMAGE = "/manus-storage/auto-truck-fachada-entardecer_27ae29d9.png";
const WORKSHOP_FLEET_IMAGE = "/manus-storage/auto-truck-fachada-frota_a8568e14.png";
const TEAM_WASH_IMAGE = "/manus-storage/auto-truck-equipe-lavagem-01_0a8d6046.jpg";
const TEAM_WASH_DETAIL_IMAGE = "/manus-storage/auto-truck-equipe-lavagem-02_8b1f59c6.jpg";
const TEAM_WORKSHOP_IMAGE = "/manus-storage/auto-truck-equipe-bastidores-03_443c7aea.jpg";
const FLEET_VOLVOS_IMAGE = "/manus-storage/auto-truck-frota-volvos_4159812e.jpg";
const SCANIA_RED_IMAGE = "/manus-storage/auto-truck-scania-vermelha_d1b7fe78.png";
const SCANIA_ORANGE_IMAGE = "/manus-storage/auto-truck-scania-laranja_ff646cbd.jpg";
const VIDEO_MOVIMENTO = "/manus-storage/auto-truck-movimento_5df2b6a9.mp4";
const VIDEO_LAVAGEM = "/manus-storage/auto-truck-lavagem_4b19e78d.mp4";
const VIDEO_ACABAMENTO = "/manus-storage/auto-truck-acabamento_35f061ac.mp4";
const VIDEO_UNIDADE = "/manus-storage/auto-truck-unidade_20b57d12.mp4";
const VIDEO_SCANIA_CHEGADA = "/manus-storage/auto-truck-scania-chegada_ae5bd587.mp4";
const SOUNDTRACK_URL = "/manus-storage/auto-truck-trilha_bafe5a39.mp3";
const WHATSAPP_URL = "https://wa.me/5562992158095?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Auto%20Truck.";
const PHONE_URL = "tel:+5562992158095";
const INSTAGRAM_URL = "https://www.instagram.com/autotruck.estetica_?igsh=MXVkZTF4dmo1d256Zg==";
const JF_EXPRESS_URL = "https://jfexpress-3wipvnwe.manus.space/";
const JF_EXPRESS_LOGO = "/manus-storage/jf-express-logo-oficial_fc1b6b55.png";
const OFFICIAL_ADDRESS = "Rua Maurício Santos Veloso, Quadra 02, Lote 37, Jardim Flor de Liz, Anápolis - GO, 75103-170";
const MAPS_ROUTE_URL = "https://www.google.com/maps/dir/?api=1&destination=Rua%20Mauricio%20Santos%20Veloso%2C%20Quadra%2002%20Lote%2037%2C%20Jardim%20Flor%20de%20Liz%2C%20Anapolis%2C%20GO%2C%2075103-170";
const MAPS_EMBED_URL = "https://www.google.com/maps?q=Rua%20Mauricio%20Santos%20Veloso%2C%20Quadra%2002%20Lote%2037%2C%20Jardim%20Flor%20de%20Liz%2C%20Anapolis%2C%20GO%2C%2075103-170&output=embed";
const WHATSAPP_LOCATION_SHARE_URL = `https://wa.me/?text=${encodeURIComponent(`📍 Auto Truck Estética Para Caminhões\n${OFFICIAL_ADDRESS}\n\nComo chegar: ${MAPS_ROUTE_URL}`)}`;
const IS_STATIC_EXPORT = import.meta.env.VITE_STATIC_EXPORT === "true";
const PORTFOLIO_HREF = IS_STATIC_EXPORT ? "#/portfolio" : "/portfolio";

const teamRecords = [
  {
    source: TEAM_WASH_IMAGE,
    label: "Registro real 01",
    title: "Lavagem em ação.",
    description: "Lavagem detalhada em andamento na cabine e roda do caminhão.",
    alt: "Profissional realizando lavagem detalhada na roda e cabine de um caminhão azul",
  },
  {
    source: TEAM_WORKSHOP_IMAGE,
    label: "Registro real 02",
    title: "Estrutura em operação.",
    description: "Profissional trabalhando em plataforma elevatória em frente à oficina Auto Truck.",
    alt: "Profissional trabalhando em plataforma elevatória em frente à oficina Auto Truck",
  },
  {
    source: TEAM_WASH_DETAIL_IMAGE,
    label: "Registro real 03",
    title: "Processo com precisão.",
    description: "Registro do processo de lavagem detalhada realizado pela equipe Auto Truck.",
    alt: "Registro do processo de lavagem detalhada realizado pela equipe Auto Truck",
  },
];

type GalleryCategory = "servicos" | "unidade" | "bastidores" | "veiculos";
type GalleryBrand = "todas" | "volvo" | "scania" | "daf" | "volkswagen";

const galleryBrandOptions: { id: GalleryBrand; label: string }[] = [
  { id: "todas", label: "Todas as marcas" },
  { id: "volvo", label: "Volvo" },
  { id: "scania", label: "Scania" },
  { id: "daf", label: "DAF" },
  { id: "volkswagen", label: "Volkswagen" },
];

const brandGallery = {
  volvo: { source: FLEET_VOLVOS_IMAGE, alt: "Caminhões Volvo em frente à oficina Auto Truck, com veículo azul em primeiro plano", label: "Arquivo Volvo", title: "Volvo em\ndestaque.", description: "Registros visuais de caminhões Volvo no arquivo da Auto Truck." },
  scania: { source: SCANIA_RED_IMAGE, alt: "Caminhão Scania vermelho registrado ao ar livre", label: "Arquivo Scania", title: "Scania com\npresença.", description: "Registros visuais de caminhões Scania no arquivo da Auto Truck." },
  daf: { source: WORKSHOP_DAFS_IMAGE, alt: "Dois caminhões DAF brancos nos boxes da Auto Truck", label: "Arquivo DAF", title: "DAF na\nestrutura.", description: "Registros visuais de caminhões DAF na unidade Auto Truck." },
  volkswagen: { source: WORKSHOP_FLEET_IMAGE, alt: "Frota em frente à Auto Truck com caminhão Volkswagen à esquerda", label: "Arquivo Volkswagen", title: "Volkswagen\nna frota.", description: "Registro visual de caminhão Volkswagen em frente à unidade Auto Truck." },
};

const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Pré-orçamento", href: "#pre-orcamento" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Vídeos", href: PORTFOLIO_HREF },
  { label: "Galeria", href: "#galeria" },
  { label: "Bastidores", href: "#bastidores" },
  { label: "História", href: "#historia" },
  { label: "Padrão Auto Truck", href: "#padrao" },
];

const services = [
  {
    number: "01",
    title: "Brilho de estrada",
    text: "Lavagens que devolvem presença à carroceria, ao chassi, ao motor e ao cavalo mecânico.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Proteção que preserva",
    text: "Polimento e enceramento para valorizar acabamento, tanque, rodas e superfícies da cabine.",
    icon: SprayCan,
  },
  {
    number: "03",
    title: "Cabine de presença",
    text: "Higienização simples ou completa para renovar o ambiente de quem vive a estrada.",
    icon: ShieldCheck,
  },
];

const steps = [
  ["01", "Avaliação visual", "Entendemos o estado do veículo e o padrão de resultado que você procura."],
  ["02", "Tratamento correto", "Definimos processos e produtos compatíveis com cada superfície e acabamento."],
  ["03", "Entrega que impõe presença", "Seu caminhão volta para a rua com aspecto cuidado em cada detalhe."],
];

const faqs = [
  {
    question: "Como solicitar um orçamento?",
    answer: "Use o pré-orçamento, informe o modelo e a placa do caminhão e escolha o serviço. A solicitação segue pronta para o WhatsApp da Auto Truck.",
  },
  {
    question: "Quais serviços estão disponíveis?",
    answer: "A Auto Truck oferece lavagem externa, do motor, de chassi e do cavalo, higienização de cabine, polimentos de cabine, tanque e roda, além de enceramento de cabine.",
  },
  {
    question: "Onde fica a Auto Truck?",
    answer: "A unidade fica na Rua Maurício Santos Veloso, Quadra 02, Lote 37, Jardim Flor de Liz, em Anápolis, Goiás. A página possui rota direta pelo Google Maps.",
  },
  {
    question: "Em quais dias a oficina atende?",
    answer: "O atendimento é de segunda a sexta-feira, das 08:00 às 18:00. Aos sábados e domingos, a unidade permanece fechada.",
  },
];

const timelineEvents = [
  {
    year: "2015",
    label: "Início formal",
    text: "A AUTO TRUCK ESTETICA LTDA foi aberta em 02 de março de 2015, estabelecendo sua base empresarial em Anápolis, Goiás.",
  },
  {
    year: "2022",
    label: "Cadastro ativo",
    text: "A situação cadastral consta como ativa desde 15 de setembro de 2022 no comprovante oficial apresentado.",
  },
  {
    year: "2025",
    label: "Identidade consolidada",
    text: "O comprovante emitido em fevereiro de 2025 apresenta a Auto Truck Estética como microempresa de serviços de lavagem, lubrificação e polimento automotivo.",
  },
];

const serviceDetails = [
  {
    number: "01",
    title: "Lavagem externa",
    description: "Lavagem dedicada à parte externa do caminhão, para manter a apresentação visual da operação em dia.",
    includes: ["LAVAGEM", "EXTERNA"],
  },
  {
    number: "02",
    title: "Lavagem do motor",
    description: "Lavagem direcionada ao motor, conforme a necessidade de cuidado e apresentação do conjunto.",
    includes: ["LAVAGEM", "MOTOR"],
  },
  {
    number: "03",
    title: "Lavagem de chassi",
    description: "Lavagem voltada ao chassi do caminhão, reforçando o cuidado com as áreas de uso intenso.",
    includes: ["LAVAGEM", "CHASSI"],
  },
  {
    number: "04",
    title: "Lavagem do cavalo",
    description: "Lavagem específica do cavalo mecânico para uma apresentação mais limpa e alinhada à sua rotina de trabalho.",
    includes: ["LAVAGEM", "CAVALO"],
  },
  {
    number: "05",
    title: "Higienização de cabine simples",
    description: "Higienização para renovar o ambiente da cabine e melhorar a experiência de quem vive a estrada todos os dias.",
    includes: ["HIGIENIZAÇÃO", "CABINE"],
  },
  {
    number: "06",
    title: "Higienização de cabine completa",
    description: "Higienização completa de cabine com desmontagem, indicada para um cuidado mais aprofundado do ambiente interno.",
    includes: ["HIGIENIZAÇÃO", "COM DESMONTAGEM"],
  },
  {
    number: "07",
    title: "Polimento de cabine",
    description: "Polimento voltado à cabine para valorizar o brilho e a presença do caminhão.",
    includes: ["POLIMENTO", "CABINE"],
  },
  {
    number: "08",
    title: "Polimento de tanque",
    description: "Polimento realizado por tanque, para elevar o padrão visual de cada componente tratado.",
    includes: ["POLIMENTO", "CADA TANQUE"],
  },
  {
    number: "09",
    title: "Polimento de roda",
    description: "Polimento realizado por roda, com foco em acabamento visual e apresentação do conjunto.",
    includes: ["POLIMENTO", "CADA RODA"],
  },
  {
    number: "10",
    title: "Enceramento de cabine",
    description: "Enceramento de cabine para realçar o acabamento visual após o cuidado estético do caminhão.",
    includes: ["ENCERAMENTO", "CABINE"],
  },
];

const budgetLink = (service: string) =>
  `https://wa.me/5562992158095?text=${encodeURIComponent(`Olá, quero solicitar um orçamento para ${service} na Auto Truck Estética.`)}`;

const businessHours = [
  ["Domingo", "Fechada"],
  ["Segunda-feira", "08:00 — 18:00"],
  ["Terça-feira", "08:00 — 18:00"],
  ["Quarta-feira", "08:00 — 18:00"],
  ["Quinta-feira", "08:00 — 18:00"],
  ["Sexta-feira", "08:00 — 18:00"],
  ["Sábado", "Fechada"],
];

const videoShowcase = [
  {
    id: "movimento",
    number: "01",
    label: "Presença em movimento",
    title: "Brilho que acompanha a estrada.",
    text: "Cabine, rodas e acabamento em uma saída que mostra presença de longe.",
    source: VIDEO_MOVIMENTO,
  },
  {
    id: "lavagem",
    number: "02",
    label: "Lavagem detalhada",
    title: "Cuidado que começa no processo.",
    text: "Jato, espuma e atenção aos pontos que sustentam o visual do caminhão.",
    source: VIDEO_LAVAGEM,
  },
  {
    id: "acabamento",
    number: "03",
    label: "Acabamento premium",
    title: "Reflexo que entrega resultado.",
    text: "O brilho do tanque e a leitura limpa da carroceria em cada ângulo.",
    source: VIDEO_ACABAMENTO,
  },
  {
    id: "unidade",
    number: "04",
    label: "Oficina em operação",
    title: "Estrutura para fazer acontecer.",
    text: "A unidade Auto Truck e os bastidores de uma rotina feita para linha pesada.",
    source: VIDEO_UNIDADE,
  },
  {
    id: "scania-chegada",
    number: "05",
    label: "Chegada em destaque",
    title: "Presença que entra em cena.",
    text: "Scania laranja em movimento diante da estrutura real da Auto Truck.",
    source: VIDEO_SCANIA_CHEGADA,
  },
];

const serviceGalleryVideos = [
  {
    number: "03",
    label: "Lavagem manual",
    title: "Detalhe feito à mão.",
    source: IS_STATIC_EXPORT ? "/manus-storage/auto-truck-plataforma-lavagem-manual-hd.mp4" : "/manus-storage/auto-truck-plataforma-lavagem-manual-4k_d2e75f8c.mp4",
    poster: "/manus-storage/auto-truck-plataforma-lavagem-manual-poster_a05912c4.jpg",
    alt: "Profissional da Auto Truck realizando limpeza manual da plataforma traseira de um caminhão baú",
  },
  {
    number: "04",
    label: "Chegada à unidade",
    title: "Operação que entra em cena.",
    source: IS_STATIC_EXPORT ? "/manus-storage/auto-truck-volkswagen-chegada-unidade-hd.mp4" : "/manus-storage/auto-truck-volkswagen-chegada-unidade-4k_bf8b3423.mp4",
    poster: "/manus-storage/auto-truck-volkswagen-chegada-unidade-poster_f257de97.jpg",
    alt: "Caminhão Volkswagen manobrando na entrada da unidade Auto Truck",
  },
  {
    number: "05",
    label: "Registro de unidade",
    title: "Estrutura pronta para receber.",
    source: IS_STATIC_EXPORT ? "/manus-storage/auto-truck-delivery-finalizacao-hd.mp4" : "/manus-storage/auto-truck-delivery-finalizacao-4k_dfc29a7c.mp4",
    poster: "/manus-storage/auto-truck-delivery-finalizacao-poster_80d8ca20.jpg",
    alt: "Caminhão Volkswagen Delivery com plataforma em registro dentro da oficina",
  },
  {
    number: "06",
    label: "Polimento de roda",
    title: "Cromo tratado no detalhe.",
    source: IS_STATIC_EXPORT ? "/manus-storage/auto-truck-scania-roda-polimento-hd.mp4" : "/manus-storage/auto-truck-scania-roda-polimento-4k_3a536745.mp4",
    poster: "/manus-storage/auto-truck-scania-roda-polimento-poster_75f93dea.jpg",
    alt: "Profissional polindo roda e capas de porca cromadas de um caminhão Scania",
  },
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

function fileToDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Não foi possível ler a imagem selecionada."));
    reader.onload = () => resolve(String(reader.result));
    reader.readAsDataURL(file);
  });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [galleryCategory, setGalleryCategory] = useState<GalleryCategory>("servicos");
  const [galleryBrand, setGalleryBrand] = useState<GalleryBrand>("todas");
  const [preQuoteConfirmation, setPreQuoteConfirmation] = useState<{ customerName: string; whatsappUrl: string; imageIncluded: boolean } | null>(null);
  const [vehicleImage, setVehicleImage] = useState<File | null>(null);
  const [vehicleImagePreview, setVehicleImagePreview] = useState<string | null>(null);
  const [vehicleImageError, setVehicleImageError] = useState<string | null>(null);
  const [activeVideoId, setActiveVideoId] = useState(videoShowcase[0].id);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [activeTeamRecordIndex, setActiveTeamRecordIndex] = useState<number | null>(null);
  const soundtrackRef = useRef<HTMLAudioElement>(null);
  const activeVideo = videoShowcase.find((video) => video.id === activeVideoId) ?? videoShowcase[0];
  const activeTeamRecord = activeTeamRecordIndex === null ? null : teamRecords[activeTeamRecordIndex];
  const activeTeamRecordNumber = activeTeamRecordIndex === null ? 0 : activeTeamRecordIndex + 1;
  const prefersReducedMotion = useReducedMotion();
  const activeBrandGallery = galleryBrand === "todas" ? null : brandGallery[galleryBrand];
  const galleryTransition = prefersReducedMotion ? { duration: 0.01 } : { duration: 0.22, ease: [0.23, 1, 0.32, 1] as const };
  const vehiclePhotoUpload = trpc.vehiclePhoto.upload.useMutation();

  const selectGalleryCategory = (category: GalleryCategory) => {
    setGalleryCategory(category);
    setGalleryBrand("todas");
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 18);
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollableHeight > 0 ? Math.min((window.scrollY / scrollableHeight) * 100, 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => () => soundtrackRef.current?.pause(), []);

  useEffect(() => {
    if (!vehicleImage) {
      setVehicleImagePreview(null);
      return;
    }
    const previewUrl = URL.createObjectURL(vehicleImage);
    setVehicleImagePreview(previewUrl);
    return () => URL.revokeObjectURL(previewUrl);
  }, [vehicleImage]);

  useEffect(() => {
    if (activeTeamRecordIndex === null) return;

    const navigateTeamRecords = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setActiveTeamRecordIndex((current) => current === null ? null : (current + 1) % teamRecords.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveTeamRecordIndex((current) => current === null ? null : (current - 1 + teamRecords.length) % teamRecords.length);
      }
    };

    window.addEventListener("keydown", navigateTeamRecords);
    return () => window.removeEventListener("keydown", navigateTeamRecords);
  }, [activeTeamRecordIndex]);

  const changeTeamRecord = (direction: -1 | 1) => {
    setActiveTeamRecordIndex((current) => current === null ? null : (current + direction + teamRecords.length) % teamRecords.length);
  };

  const selectVehicleImage = (file: File | undefined) => {
    if (!file) return;
    if (!new Set(["image/jpeg", "image/png", "image/webp"]).has(file.type)) {
      setVehicleImageError("Use uma foto em JPG, PNG ou WebP.");
      return;
    }
    if (file.size > 6 * 1024 * 1024) {
      setVehicleImageError("A imagem deve ter no máximo 6 MB.");
      return;
    }
    setVehicleImageError(null);
    setVehicleImage(file);
  };

  const resetPreQuote = () => {
    setPreQuoteConfirmation(null);
    setVehicleImage(null);
    setVehicleImageError(null);
  };

  const handlePreQuote = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const whatsappWindow = window.open("", "_blank");
    if (whatsappWindow) whatsappWindow.opener = null;
    const data = new FormData(event.currentTarget);
    const customerName = String(data.get("customerName") || "Não informado");
    const plate = String(data.get("plate") || "Não informada");
    const model = String(data.get("truckModel") || "Não informado");
    const service = String(data.get("service") || "Não informado");
    let vehicleImageUrl: string | null = null;
    if (!IS_STATIC_EXPORT && vehicleImage) {
      try {
        const dataUrl = await fileToDataUrl(vehicleImage);
        const uploadedImage = await vehiclePhotoUpload.mutateAsync({ dataUrl });
        vehicleImageUrl = `${window.location.origin}${uploadedImage.url}`;
      } catch (error) {
        whatsappWindow?.close();
        setVehicleImageError(error instanceof Error ? error.message : "Não foi possível enviar a imagem. Tente novamente.");
        return;
      }
    }
    const photoInstruction = IS_STATIC_EXPORT
      ? "\n\nSe quiser enviar uma foto do veículo, use o anexo do WhatsApp depois que a conversa abrir."
      : "";
    const message = `Olá, quero solicitar um pré-orçamento na Auto Truck Estética.\n\nCliente: ${customerName}\nPlaca do veículo: ${plate}\nModelo do caminhão: ${model}\nServiço desejado: ${service}${vehicleImageUrl ? `\nImagem do veículo: ${vehicleImageUrl}` : ""}${photoInstruction}`;
    const whatsappUrl = `https://wa.me/5562992158095?text=${encodeURIComponent(message)}`;
    setPreQuoteConfirmation({ customerName, whatsappUrl, imageIncluded: Boolean(vehicleImageUrl) });
    if (whatsappWindow) {
      whatsappWindow.location.href = whatsappUrl;
      return;
    }
    window.location.assign(whatsappUrl);
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
    <div className="luxury-site">
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <div className="reading-progress" aria-hidden="true"><span style={{ width: `${scrollProgress}%` }} /></div>
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

      <main id="conteudo" tabIndex={-1}>
        <section id="inicio" className="luxury-hero">
          <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster={DETAIL_IMAGE} aria-label="Detalhes de acabamento de um caminhão atendido pela Auto Truck">
            <source src={VIDEO_LAVAGEM} type="video/mp4" />
          </video>
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

        <section className="trust-strip" aria-label="Informações rápidas da Auto Truck">
          <div className="page-width trust-strip-grid">
            <div><span>01</span><p><b>Anápolis · GO</b><small>Unidade com rota no Google Maps</small></p></div>
            <div><span>02</span><p><b>Desde 2015</b><small>História formal da Auto Truck Estética</small></p></div>
            <div><span>03</span><p><b>10 serviços</b><small>Estética voltada à linha pesada</small></p></div>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Atendimento direto <ArrowUpRight size={16} /></a>
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

        <section id="servicos-detalhados" className="service-detail-stage">
          <div className="page-width">
            <motion.div {...reveal} className="service-detail-heading">
              <div>
                <p className="eyebrow orange"><span /> Serviços detalhados</p>
                <h2>O cuidado certo para<br /><em>cada parte</em> do seu caminhão.</h2>
              </div>
              <p>Brilho, proteção, cabine e acabamento são pontos de inspeção. Escolha o tratamento desejado e fale diretamente com a nossa equipe.</p>
            </motion.div>

            <div className="service-detail-list">
              {serviceDetails.map((service, index) => (
                <motion.article {...reveal} transition={{ ...reveal.transition, delay: index * 0.06 }} className="service-detail-row" key={service.number}>
                  <div className="detail-number">{service.number}</div>
                  <div className="detail-main">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <div className="detail-includes">
                    <span className="micro-label">Categoria</span>
                    <div>{service.includes.map((item) => <span key={item}>{item}</span>)}</div>
                  </div>
                  <a className="detail-budget" href={budgetLink(service.title)} target="_blank" rel="noreferrer">
                    Orçar este serviço <ArrowUpRight size={18} />
                  </a>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="pre-orcamento" className="prequote-stage">
          <div className="page-width prequote-layout">
            <motion.div {...reveal} className="prequote-copy">
              <p className="eyebrow graphite"><span /> Pré-orçamento</p>
              <h2>Conte o que<br />seu caminhão <em>precisa.</em></h2>
              <p>Selecione o modelo e o serviço desejado. Em seguida, sua solicitação segue pronta para o WhatsApp da Auto Truck.</p>
              <div className="prequote-note"><ClipboardPenLine size={20} /><span><b>Atendimento objetivo</b>Sem formulário longo: sua seleção chega direto à nossa equipe.</span></div>
            </motion.div>

            {preQuoteConfirmation ? (
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease: "easeOut" }} className="prequote-success" role="status" aria-live="polite">
                <div className="success-icon"><CheckCircle2 size={30} strokeWidth={1.75} /></div>
                <span className="micro-label">Solicitação preparada</span>
                <h3>Obrigado,<br /><em>{preQuoteConfirmation.customerName}.</em></h3>
                <p>{IS_STATIC_EXPORT ? "Seu pré-orçamento foi preparado e o WhatsApp da Auto Truck foi aberto. Se desejar, envie uma foto do veículo diretamente pelo anexo da conversa." : `Seu pré-orçamento foi preparado e o WhatsApp da Auto Truck foi aberto para você concluir o atendimento.${preQuoteConfirmation.imageIncluded ? " A imagem do veículo foi incluída na mensagem." : ""}`}</p>
                <a className="success-whatsapp" href={preQuoteConfirmation.whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Abrir WhatsApp novamente <ArrowUpRight size={16} /></a>
                <button type="button" className="success-reset" onClick={resetPreQuote}>Fazer outro pré-orçamento</button>
              </motion.div>
            ) : (
              <motion.form {...reveal} transition={{ ...reveal.transition, delay: 0.08 }} className="prequote-form" onSubmit={handlePreQuote}>
                <div className="form-title"><span className="micro-label">Dados do seu caminhão</span><b>Solicite seu pré-orçamento</b></div>
                <label className="form-field">
                  <span>Seu nome</span>
                  <input name="customerName" required placeholder="Como devemos chamar você?" autoComplete="name" />
                </label>
                <label className="form-field">
                  <span>Placa do veículo</span>
                  <input name="plate" required placeholder="Ex.: ABC1D23 ou ABC-1234" autoCapitalize="characters" autoComplete="off" maxLength={8} />
                </label>
                <label className="form-field">
                  <span>Modelo do caminhão</span>
                  <input name="truckModel" required placeholder="Ex.: Scania R450, Volvo FH, Mercedes Actros" autoComplete="off" />
                </label>
                <label className="form-field">
                  <span>Serviço desejado</span>
                  <select name="service" required defaultValue="">
                    <option value="" disabled>Selecione um serviço</option>
                    {serviceDetails.map((service) => <option key={service.number} value={service.title}>{service.title}</option>)}
                  </select>
                </label>
                {IS_STATIC_EXPORT ? (
                  <div className="prequote-static-note"><MessageCircle size={19} /><p><b>Envio de foto pelo WhatsApp</b>Após abrir a conversa, use o ícone de anexo para enviar as fotos do veículo diretamente à equipe.</p></div>
                ) : (
                  <div className="vehicle-photo-field">
                    <div className="vehicle-photo-heading"><span>Imagem do veículo <small>opcional</small></span><p>Envie uma foto da área que precisa de cuidado ou fotografe agora pelo celular.</p></div>
                    {vehicleImagePreview ? (
                      <div className="vehicle-photo-preview">
                        <img src={vehicleImagePreview} alt="Prévia da imagem do veículo selecionada para o pré-orçamento" />
                        <div><b>{vehicleImage?.name}</b><span>{vehicleImage ? `${Math.ceil(vehicleImage.size / 1024)} KB` : ""}</span></div>
                        <button type="button" onClick={() => { setVehicleImage(null); setVehicleImageError(null); }} aria-label="Remover imagem selecionada"><X size={17} /></button>
                      </div>
                    ) : (
                      <div className="vehicle-photo-actions">
                        <label className="vehicle-photo-action"><ImagePlus size={18} /><span>Selecionar imagem</span><input type="file" accept="image/jpeg,image/png,image/webp" onChange={(event) => selectVehicleImage(event.target.files?.[0])} /></label>
                        <label className="vehicle-photo-action camera-action"><Camera size={18} /><span>Usar câmera</span><input type="file" accept="image/jpeg,image/png,image/webp" capture="environment" onChange={(event) => selectVehicleImage(event.target.files?.[0])} /></label>
                      </div>
                    )}
                    {vehicleImageError && <p className="vehicle-photo-error" role="alert">{vehicleImageError}</p>}
                  </div>
                )}
                <button type="submit" className="prequote-submit" disabled={!IS_STATIC_EXPORT && vehiclePhotoUpload.isPending}>{!IS_STATIC_EXPORT && vehiclePhotoUpload.isPending ? <><span className="submit-spinner" /> Enviando imagem...</> : <><MessageCircle size={19} /> Enviar para o WhatsApp <ArrowUpRight size={17} /></>}</button>
                <p className="form-privacy">{IS_STATIC_EXPORT ? "Versão estática: as fotos são enviadas pelo próprio WhatsApp, sem armazenamento pelo site." : "A imagem é armazenada com segurança e o link segue junto ao seu pedido no WhatsApp."}</p>
              </motion.form>
            )}
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

        <section id="videos" className="video-stage">
          <audio ref={soundtrackRef} loop preload="metadata">
            <source src={SOUNDTRACK_URL} type="audio/mpeg" />
          </audio>
          <div className="page-width video-layout">
            <motion.div {...reveal} className="video-intro">
              <p className="eyebrow orange"><span /> Vídeos em alta definição</p>
              <h2>O padrão aparece<br />em <em>movimento.</em></h2>
              <p>Selecione uma cena para ver a Auto Truck em ação: lavagem, acabamento, estrutura e caminhões prontos para a estrada.</p>

              <div className="video-selector" role="tablist" aria-label="Cenas em vídeo da Auto Truck">
                {videoShowcase.map((video) => (
                  <button
                    key={video.id}
                    type="button"
                    role="tab"
                    aria-selected={activeVideo.id === video.id}
                    className={activeVideo.id === video.id ? "active" : ""}
                    onClick={() => setActiveVideoId(video.id)}
                  >
                    <span>{video.number}</span>
                    <b>{video.label}</b>
                    <ArrowUpRight size={16} />
                  </button>
                ))}
              </div>

              <button type="button" className={`soundtrack-control ${soundEnabled ? "is-playing" : ""}`} onClick={toggleSoundtrack} aria-pressed={soundEnabled}>
                {soundEnabled ? <Volume2 size={19} /> : <VolumeX size={19} />}
                <span><small>Trilha original da Auto Truck</small>{soundEnabled ? "Pausar trilha sonora" : "Ativar trilha sonora"}</span>
                <i>{soundEnabled ? "ON" : "OFF"}</i>
              </button>
              <a className="video-portfolio-link" href={PORTFOLIO_HREF}>Abrir portfólio completo <ArrowUpRight size={17} /></a>
            </motion.div>

            <motion.div key={activeVideo.id} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.38, ease: "easeOut" }} className="video-frame">
              <video autoPlay muted loop playsInline controls preload="metadata" aria-label={activeVideo.title}>
                <source src={activeVideo.source} type="video/mp4" />
                Seu navegador não suporta reprodução de vídeo.
              </video>
              <div className="video-frame-shade" />
              <div className="video-frame-meta"><span className="micro-label">Cena {activeVideo.number} · {activeVideo.label}</span><i>4K / HD</i></div>
              <div className="video-frame-caption"><h3>{activeVideo.title}</h3><p>{activeVideo.text}</p></div>
            </motion.div>
          </div>
        </section>

        <section id="historia" className="company-story">
          <div className="story-dust" aria-hidden="true" />
          <div className="page-width story-grid">
            <motion.div {...reveal} className="story-main">
              <p className="eyebrow orange"><span /> 03 — A empresa</p>
              <h2>Feita para quem<br />vive <em>na estrada.</em></h2>
              <p className="body-copy">
                Desde 2015, a Auto Truck Estética atende em Anápolis, Goiás, com serviços de lavagem, lubrificação e polimento automotivo. O foco é direto: entregar cuidado visual para caminhões que sustentam a operação todos os dias.
              </p>
              <div className="story-origin">
                <span className="origin-year">DESDE<br /><b>2015</b></span>
                <span className="origin-rule" />
                <p>Um padrão de cuidado pensado para a máquina que carrega a força do seu trabalho.</p>
              </div>
              <a className="story-partner-link" href={JF_EXPRESS_URL} target="_blank" rel="noreferrer" aria-label="Visitar o site oficial da JF Express, abre em nova guia" title="Visitar o site oficial da JF Express">
                <span className="story-partner-logo"><img src={JF_EXPRESS_LOGO} alt="JF Express Transportadora" /></span>
                <span className="story-partner-copy"><small>Conexão parceira · clique no logo</small><b>JF Express</b><em>Visitar o site oficial da transportadora</em></span>
                <ArrowUpRight className="story-partner-arrow" size={18} />
              </a>
            </motion.div>

            <motion.aside {...reveal} transition={{ ...reveal.transition, delay: 0.08 }} className="story-facts" aria-label="Dados institucionais da Auto Truck Estética">
              <span className="micro-label">Dados institucionais</span>
              <div className="fact-row"><Building2 size={19} /><span><b>Auto Truck Estética LTDA</b><small>CNPJ 21.956.358/0001-62 · ME</small></span></div>
              <div className="fact-row"><MapPin size={19} /><span><b>Anápolis · Goiás</b><small>Jardim Flor de Liz · CEP 75103-170</small></span></div>
              <div className="fact-rule" />
              <p>Serviços de lavagem, lubrificação e polimento para veículos automotores, com atendimento voltado à linha pesada.</p>
              <span className="fact-source">DADOS DO COMPROVANTE CNPJ · 03.02.2025</span>
            </motion.aside>
          </div>
        </section>

        <section className="timeline-stage">
          <div className="page-width">
            <motion.div {...reveal} className="timeline-heading">
              <p className="eyebrow graphite"><span /> Linha do tempo</p>
              <h2>Uma história em<br /><em>movimento.</em></h2>
              <p>Marcos institucionais registrados no comprovante de inscrição e de situação cadastral da empresa.</p>
            </motion.div>
            <div className="company-timeline">
              <div className="timeline-route" aria-hidden="true" />
              {timelineEvents.map((event, index) => (
                <motion.article {...reveal} transition={{ ...reveal.transition, delay: index * 0.08 }} className="timeline-entry" key={event.year}>
                  <div className="timeline-year"><span>{event.year}</span><b>0{index + 1}</b></div>
                  <div className="timeline-station" aria-hidden="true"><i /></div>
                  <div className="timeline-detail"><span className="micro-label">{event.label}</span><p>{event.text}</p></div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="padrao" className="process-section">
          <div className="page-width process-grid">
            <div className="process-copy">
              <motion.p {...reveal} className="eyebrow graphite"><span /> 04 — Padrão Auto Truck</motion.p>
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

        <section id="galeria" className="gallery-stage">
          <div className="page-width gallery-layout">
            <motion.div {...reveal} className="gallery-heading">
              <p className="eyebrow graphite"><span /> Galeria Auto Truck</p>
              <h2>Onde o cuidado<br />ganha <em>estrutura.</em></h2>
              <p>Fotos e vídeos reais que aproximam você do padrão de cuidado, da estrutura e da rotina da Auto Truck Estética.</p>
              <div className="gallery-heading-rule" />
              <span className="gallery-microcopy">{activeBrandGallery ? `ARQUIVO POR MARCA · ${activeBrandGallery.label.toUpperCase()}` : galleryCategory === "servicos" ? "PROCESSOS DE ESTÉTICA · FOTOS E VÍDEOS" : galleryCategory === "unidade" ? "ARQUIVO REAL DA UNIDADE · FOTOS 02—05" : galleryCategory === "bastidores" ? "ARQUIVO DE BASTIDORES · CATEGORIA 03" : "VEÍCULOS ATENDIDOS · ARQUIVO 04"}</span>
              <div className="gallery-categories" role="tablist" aria-label="Categorias da galeria">
                <button type="button" role="tab" aria-selected={galleryCategory === "servicos" && !activeBrandGallery} className={galleryCategory === "servicos" && !activeBrandGallery ? "active" : ""} onClick={() => selectGalleryCategory("servicos")}>Serviços <span>01</span></button>
                <button type="button" role="tab" aria-selected={galleryCategory === "unidade" && !activeBrandGallery} className={galleryCategory === "unidade" && !activeBrandGallery ? "active" : ""} onClick={() => selectGalleryCategory("unidade")}>Unidade <span>02</span></button>
                <button type="button" role="tab" aria-selected={galleryCategory === "bastidores" && !activeBrandGallery} className={galleryCategory === "bastidores" && !activeBrandGallery ? "active" : ""} onClick={() => selectGalleryCategory("bastidores")}>Equipe & bastidores <span>03</span></button>
                <button type="button" role="tab" aria-selected={galleryCategory === "veiculos" && !activeBrandGallery} className={galleryCategory === "veiculos" && !activeBrandGallery ? "active" : ""} onClick={() => selectGalleryCategory("veiculos")}>Veículos <span>04</span></button>
              </div>
              <div className="gallery-brand-filter" aria-label="Buscar registros por marca de caminhão">
                <span className="micro-label">Buscar no arquivo por marca</span>
                <div>{galleryBrandOptions.map((brand) => <button type="button" key={brand.id} className={galleryBrand === brand.id ? "active" : ""} aria-pressed={galleryBrand === brand.id} onClick={() => setGalleryBrand(brand.id)}>{brand.label}</button>)}</div>
              </div>
              <a className="gallery-route" href={MAPS_ROUTE_URL} target="_blank" rel="noreferrer">
                <MapPinned size={17} /> Traçar rota no Google Maps <ArrowUpRight size={16} />
              </a>
            </motion.div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={activeBrandGallery ? `marca-${galleryBrand}` : galleryCategory} className="gallery-content-transition" initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -10 }} transition={galleryTransition}>
            {activeBrandGallery ? (
              <figure className="workshop-gallery-card brand-gallery-card">
                <img src={activeBrandGallery.source} alt={activeBrandGallery.alt} />
                <div className="gallery-photo-tint" />
                <figcaption><span className="micro-label">{activeBrandGallery.label}</span><strong>{activeBrandGallery.title.split("\n").map((line, index) => <span key={line}>{index > 0 && <br />}{line}</span>)}</strong><p>{activeBrandGallery.description}</p></figcaption>
              </figure>
            ) : galleryCategory === "servicos" ? (
              <div className="service-process-archive">
                <figure className="workshop-gallery-card process-polish-card">
                  <img src={DETAIL_IMAGE} alt="Mão enluvada trabalhando a lateral de uma cabine, com reflexo de luz no acabamento" />
                  <div className="gallery-photo-tint" /><div className="gallery-photo-number">01</div>
                  <figcaption><span className="micro-label">Acabamento manual</span><strong>Detalhe externo<br />em evidência.</strong></figcaption>
                </figure>
                <figure className="workshop-gallery-card process-cabin-card">
                  <img src={CAB_IMAGE} alt="Cabine limpa e organizada vista pela porta aberta" />
                  <div className="gallery-photo-tint" />
                  <figcaption><span className="micro-label">Cuidado interno</span><strong>Cabine preparada<br />para a estrada.</strong><p>Registro de uma cabine limpa e organizada; o processo completo de higienização pode ser orçado com a equipe.</p></figcaption>
                </figure>
                <div className="service-video-strip" aria-label="Vídeos reais de serviços da Auto Truck">
                  {serviceGalleryVideos.map((video) => (
                    <figure className="service-video-card" key={video.number}>
                      <video autoPlay muted loop playsInline preload="metadata" poster={video.poster} aria-label={video.alt}>
                        <source src={video.source} type="video/mp4" />
                      </video>
                      <div className="service-video-shade" />
                      <span className="service-video-number">{video.number}</span>
                      <span className="service-video-play" aria-hidden="true"><Play size={13} fill="currentColor" /></span>
                      <figcaption><small>{video.label}</small><strong>{video.title}</strong></figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            ) : galleryCategory === "unidade" ? (
              <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.08 }} className="workshop-photo-archive">
                <figure className="workshop-gallery-card workshop-photo-main">
                  <img src={WORKSHOP_FACADE_IMAGE} alt="Fachada da Auto Truck com dois caminhões estacionados diante dos boxes da oficina" />
                  <div className="gallery-photo-tint" />
                  <div className="gallery-photo-number">02</div>
                  <figcaption><span className="micro-label">Fachada em operação</span><strong>É aqui que o<br />cuidado começa.</strong></figcaption>
                </figure>
                <figure className="workshop-gallery-card workshop-photo-dafs">
                  <img src={WORKSHOP_DAFS_IMAGE} alt="Dois caminhões DAF brancos posicionados nos boxes da oficina Auto Truck" />
                  <div className="gallery-photo-tint" />
                  <figcaption><span className="micro-label">Box de serviço</span><strong>Estrutura<br />em atividade.</strong></figcaption>
                </figure>
                <figure className="workshop-gallery-card workshop-photo-dusk">
                  <img src={WORKSHOP_DUSK_IMAGE} alt="Caminhões estacionados diante da fachada Auto Truck ao entardecer" />
                  <div className="gallery-photo-tint" />
                  <figcaption><span className="micro-label">Fim de expediente</span><strong>Presença no<br />pátio.</strong></figcaption>
                </figure>
                <figure className="workshop-gallery-card workshop-photo-fleet">
                  <img src={WORKSHOP_FLEET_IMAGE} alt="Frota de caminhões estacionada em frente à Auto Truck" />
                  <div className="gallery-photo-tint" />
                  <figcaption><span className="micro-label">Frota atendida</span><strong>Mais espaço<br />para sua operação.</strong></figcaption>
                </figure>
              </motion.div>
            ) : galleryCategory === "veiculos" ? (
              <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.08 }} className="vehicle-gallery-archive">
                <figure className="workshop-gallery-card vehicle-gallery-lead">
                  <img src={FLEET_VOLVOS_IMAGE} alt="Frota de caminhões Volvo atendidos pela Auto Truck, com veículo azul em primeiro plano" />
                  <div className="gallery-photo-tint" />
                  <div className="gallery-photo-number">04</div>
                  <figcaption><span className="micro-label">Registro real de frota</span><strong>Presença que<br />se reconhece.</strong></figcaption>
                </figure>
                <div className="vehicle-gallery-rail">
                  <figure className="vehicle-gallery-card">
                    <img src={SCANIA_RED_IMAGE} alt="Scania vermelha registrada ao ar livre" />
                    <div className="gallery-photo-tint" />
                    <figcaption><span>Scania em destaque</span><b>01</b></figcaption>
                  </figure>
                  <figure className="vehicle-gallery-card">
                    <img src={SCANIA_ORANGE_IMAGE} alt="Scania laranja com implemento registrada ao ar livre" />
                    <div className="gallery-photo-tint" />
                    <figcaption><span>Registro de operação</span><b>02</b></figcaption>
                  </figure>
                </div>
              </motion.div>
            ) : (
              <motion.article {...reveal} transition={{ ...reveal.transition, delay: 0.08 }} className="backstage-gallery-card">
                <div className="backstage-symbol"><Camera size={37} strokeWidth={1.4} /><span>03</span></div>
                <div><span className="micro-label">Equipe em ação e bastidores</span><h3>Registros reais<br />da nossa <em>equipe.</em></h3><p>Veja o cuidado da equipe em processos de lavagem e os bastidores que fazem a oficina acontecer.</p></div>
                <a className="backstage-link" href="#bastidores">Explorar bastidores reais <ArrowDownRight size={16} /></a>
              </motion.article>
            )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <section id="bastidores" className="team-stage">
          <div className="page-width team-heading">
            <motion.div {...reveal}>
              <p className="eyebrow orange"><span /> Bastidores reais</p>
              <h2>Processo real.<br /><em>Padrão visível.</em></h2>
              <div className="team-brand-chip"><img src={OFFICIAL_LOGO} alt="Auto Truck Estética Para Caminhões" /><span>Equipe em operação</span></div>
            </motion.div>
            <motion.p {...reveal} transition={{ ...reveal.transition, delay: 0.08 }}>Registros reais da rotina da Auto Truck: profissionais em ação, equipamentos em operação e o padrão de atenção que acompanha cada caminhão.</motion.p>
          </div>
          <div className="page-width team-media-grid">
            {teamRecords.map((record, index) => (
              <motion.figure
                {...reveal}
                transition={{ ...reveal.transition, delay: index * 0.06 }}
                className={`team-photo ${index === 0 ? "team-photo-primary" : index === 1 ? "team-photo-workshop" : "team-photo-detail"}`}
                key={record.source}
              >
                <img src={record.source} alt={record.alt} />
                <div className="team-photo-shade" />
                <span className="team-photo-expand"><Maximize2 size={15} /> Ver detalhes</span>
                <figcaption><span className="micro-label">{record.label}</span><b>{record.title.replace(" ", "\n")}</b></figcaption>
                <button type="button" className="team-photo-action" onClick={() => setActiveTeamRecordIndex(index)} aria-label={`Ampliar foto: ${record.title}`} />
              </motion.figure>
            ))}
            <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.16 }} className="team-manifesto">
              <span className="micro-label">Auto Truck por dentro</span>
              <p>Cada etapa começa na rotina. É ali que o cuidado técnico, o equipamento certo e a atenção ao acabamento se encontram.</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Falar com a equipe <ArrowUpRight size={16} /></a>
            </motion.div>
          </div>
        </section>

        <Dialog open={activeTeamRecordIndex !== null} onOpenChange={(open) => { if (!open) setActiveTeamRecordIndex(null); }}>
          <DialogContent showCloseButton={false} className="team-lightbox" aria-describedby="team-lightbox-description">
            {activeTeamRecord && (
              <>
                <div className="team-lightbox-topline"><span>{activeTeamRecord.label}</span><span>{String(activeTeamRecordNumber).padStart(2, "0")} / {String(teamRecords.length).padStart(2, "0")}</span></div>
                <DialogTitle className="team-lightbox-title">{activeTeamRecord.title}</DialogTitle>
                <DialogDescription id="team-lightbox-description" className="team-lightbox-description">{activeTeamRecord.description}</DialogDescription>
                <img className="team-lightbox-image" src={activeTeamRecord.source} alt={activeTeamRecord.alt} />
                <div className="team-lightbox-controls">
                  <button type="button" onClick={() => changeTeamRecord(-1)} aria-label="Ver registro anterior"><ChevronLeft size={20} /> Anterior</button>
                  <button type="button" onClick={() => changeTeamRecord(1)} aria-label="Ver próximo registro">Próximo <ChevronRight size={20} /></button>
                </div>
                <DialogClose asChild><button type="button" className="team-lightbox-close" aria-label="Fechar visualização ampliada"><X size={19} /></button></DialogClose>
              </>
            )}
          </DialogContent>
        </Dialog>

        <section id="duvidas" className="faq-stage">
          <div className="page-width faq-layout">
            <motion.div {...reveal} className="faq-intro">
              <p className="eyebrow orange"><span /> Atendimento sem ruído</p>
              <h2>Perguntas<br /><em>diretas.</em></h2>
              <p>As informações principais para você planejar o cuidado do seu caminhão sem perder tempo na estrada.</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="faq-whatsapp"><MessageCircle size={17} /> Ainda tem dúvida? Fale no WhatsApp <ArrowUpRight size={16} /></a>
            </motion.div>
            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <motion.article {...reveal} transition={{ ...reveal.transition, delay: index * 0.05 }} className={`faq-item ${isOpen ? "is-open" : ""}`} key={faq.question}>
                    <button type="button" aria-expanded={isOpen} aria-controls={`faq-answer-${index}`} onClick={() => setOpenFaq(isOpen ? -1 : index)}>
                      <span className="faq-number">0{index + 1}</span><b>{faq.question}</b>{isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </button>
                    {isOpen && <motion.div id={`faq-answer-${index}`} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} transition={{ duration: 0.24, ease: "easeOut" }}><p>{faq.answer}</p></motion.div>}
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contato" className="contact-stage">
          <div className="contact-shimmer" aria-hidden="true" />
          <div className="page-width contact-grid">
            <motion.div {...reveal}>
              <p className="eyebrow orange"><span /> 05 — Atendimento</p>
              <h2>Seu próximo<br /><em>melhor ângulo</em><br />começa aqui.</h2>
              <p className="contact-copy">Entre em contato, conte o que seu caminhão precisa e agende seu atendimento com a Auto Truck.</p>
            </motion.div>
            <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.08 }} className="contact-panel">
              <div className="contact-brand-plate"><img src={OFFICIAL_LOGO} alt="Auto Truck Estética Para Caminhões" /><span>Atendimento direto</span></div>
              <span className="micro-label">Auto Truck Estética Para Caminhões</span>
              <a className="phone-number" href={PHONE_URL}>(62) 99215-8095</a>
              <p>Atendimento direto para você cuidar do visual do seu caminhão com quem entende de linha pesada.</p>
              <a className="button-primary full" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <MessageCircle size={19} /> Chamar no WhatsApp
              </a>
              <a className="phone-link" href={PHONE_URL}><Phone size={16} /> Prefere ligar? Fale agora</a>
              <a className="instagram-link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Instagram size={16} /> Ver trabalhos no Instagram <ArrowUpRight size={14} /></a>
              <a className="contact-route" href={MAPS_ROUTE_URL} target="_blank" rel="noreferrer"><MapPinned size={16} /> Traçar rota até a oficina</a>
            </motion.div>
          </div>

          <div className="page-width location-info-grid">
            <motion.div {...reveal} className="hours-panel">
              <div className="hours-panel-heading"><Clock3 size={21} /><div><span className="micro-label">Horário de atendimento</span><b>Quando você pode nos encontrar.</b></div></div>
              <div className="hours-list">
                {businessHours.map(([day, time]) => (
                  <div className={`hours-row ${time === "Fechada" ? "is-closed" : ""}`} key={day}><span>{day}</span><b>{time}</b></div>
                ))}
              </div>
              <a className="location-share" href={WHATSAPP_LOCATION_SHARE_URL} target="_blank" rel="noreferrer">
                <Share2 size={17} /> Compartilhar localização no WhatsApp <ArrowUpRight size={15} />
              </a>
            </motion.div>

            <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.07 }} className="contact-map-panel">
              <div className="map-panel-topline"><span className="micro-label">Encontre a Auto Truck</span><span>ANÁPOLIS · GO</span></div>
              <iframe className="location-map" src={MAPS_EMBED_URL} title="Mapa da Auto Truck Estética em Anápolis" referrerPolicy="no-referrer-when-downgrade" />
              <div className="map-panel-address"><MapPinned size={18} /><span>{OFFICIAL_ADDRESS}</span></div>
            </motion.div>
          </div>
        </section>
      </main>

      <div className="floating-contact-actions" aria-label="Atalhos de atendimento">
        <a className="instagram-float" href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Abrir Instagram oficial da Auto Truck" title="Instagram da Auto Truck">
          <Instagram size={22} />
          <span className="sr-only">Instagram da Auto Truck</span>
        </a>
        <a className="budget-float" href="#pre-orcamento" aria-label="Abrir formulário de pré-orçamento">
          <MessageCircle size={22} />
          <span><small>Atendimento rápido</small>Fazer pré-orçamento</span>
        </a>
      </div>
      <button type="button" className={`back-to-top ${scrolled ? "is-visible" : ""}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Voltar ao início">
        <ArrowUp size={18} />
      </button>

      <footer className="premium-footer">
        <div className="page-width footer-grid">
          <BrandLogo footer />
          <p>Estética para caminhões com presença, cuidado técnico e acabamento premium.</p>
          <div className="footer-details"><a className="footer-instagram" href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Instagram size={14} /> Instagram · @autotruck.estetica_</a><span>Anápolis, Goiás</span><span>© 2026 Auto Truck</span></div>
        </div>
      </footer>
    </div>
  );
}
