import * as React from "react";
import { ChevronLeft, ChevronRight, Video, Music, Layout, BarChart2 } from "lucide-react";

const services = [
  {
    id: "videos",
    icon: Video,
    tag: "IA POWERED",
    title: "Vídeos publicitários com IA",
    description:
      "Conteúdo visual produzido com inteligência artificial — mais rápido, mais criativo e feito para converter.",
  },
  {
    id: "jingles",
    icon: Music,
    tag: null,
    title: "Jingles estratégicos e memoráveis",
    description:
      "Áudio que gruda na cabeça do seu cliente e faz sua marca ser lembrada na hora certa.",
  },
  {
    id: "landing",
    icon: Layout,
    tag: null,
    title: "Landing pages de alta conversão",
    description:
      "Páginas construídas com foco em uma única missão: transformar visitante em comprador.",
  },
  {
    id: "campanhas",
    icon: BarChart2,
    tag: "IA POWERED",
    title: "Campanhas de tráfego pago otimizadas",
    description:
      "Anúncios no Meta e Google com segmentação inteligente e otimização contínua.",
  },
];

export const ServicesCarousel: React.FC = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const checkScroll = React.useCallback(() => {
    const el = scrollRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
      const idx = Math.round(el.scrollLeft / 320);
      setActiveIndex(Math.min(Math.max(idx, 0), services.length - 1));
    }
  }, []);

  React.useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      checkScroll();
      el.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      return () => {
        el.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (el) {
      el.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  const arrowStyle = (enabled: boolean): React.CSSProperties => ({
    background: enabled ? "rgba(74,222,128,0.1)" : "rgba(255,255,255,0.03)",
    border: `1px solid ${enabled ? "rgba(74,222,128,0.4)" : "rgba(255,255,255,0.08)"}`,
    color: enabled ? "#4ade80" : "#444",
    borderRadius: "50%",
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: enabled ? "pointer" : "not-allowed",
    transition: "all 0.2s",
  });

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Header with arrows */}
      <div className="flex items-center justify-between gap-4 mb-8 px-4">
        <p className="text-muted-custom text-base sm:text-lg max-w-2xl text-left">
          Na Reeb Synapse, criamos um ecossistema que transforma atenção em venda.
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Anterior"
            style={arrowStyle(canScrollLeft)}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Próximo"
            style={arrowStyle(canScrollRight)}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Scrollable cards */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-4 px-4 snap-x snap-mandatory scroll-smooth"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style>{`
          .services-scroll::-webkit-scrollbar { display: none; }
        `}</style>
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="snap-start shrink-0 relative flex flex-col gap-3 text-left"
              style={{
                width: 300,
                minHeight: 220,
                padding: 24,
                borderRadius: 16,
                background: "rgba(10, 20, 12, 0.6)",
                border: "1px solid rgba(74,222,128,0.15)",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(74,222,128,0.5)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(74,222,128,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(74,222,128,0.15)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {service.tag && (
                <span
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    padding: "4px 8px",
                    borderRadius: 999,
                    color: "#4ade80",
                    border: "1px solid rgba(74, 222, 128, 0.4)",
                    background: "rgba(74, 222, 128, 0.08)",
                  }}
                >
                  {service.tag}
                </span>
              )}

              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "rgba(74,222,128,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon size={24} style={{ color: "#4ade80" }} />
              </div>

              <h3 className="font-semibold text-lg text-foreground">
                {service.title}
              </h3>

              <p className="text-muted-custom text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Scroll indicator dots */}
      <div className="flex justify-center gap-2 mt-6">
        {services.map((_, i) => (
          <span
            key={i}
            style={{
              width: i === activeIndex ? 24 : 8,
              height: 8,
              borderRadius: 999,
              background: i === activeIndex ? "#4ade80" : "rgba(255,255,255,0.15)",
              transition: "all 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesCarousel;