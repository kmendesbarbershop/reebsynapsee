import * as React from "react";
import { Video, Music, Layout, BarChart2 } from "lucide-react";

const services = [
  {
    id: "videos",
    icon: Video,
    tag: "IA POWERED",
    title: "Vídeos publicitários com IA",
    description:
      "Conteúdo visual produzido com inteligência artificial — mais rápido, mais criativo e feito para converter.",
    video: "/videos/videos-showcase.mp4",
  },
  {
    id: "jingles",
    icon: Music,
    tag: null,
    title: "Jingles estratégicos e memoráveis",
    description:
      "Áudio que gruda na cabeça do seu cliente e faz sua marca ser lembrada na hora certa.",
    video: "/videos/jingles-showcase.mp4",
  },
  {
    id: "landing",
    icon: Layout,
    tag: null,
    title: "Landing pages de alta conversão",
    description:
      "Páginas construídas com foco em uma única missão: transformar visitante em comprador.",
    video: "/videos/landing-showcase.mp4",
  },
  {
    id: "campanhas",
    icon: BarChart2,
    tag: "IA POWERED",
    title: "Campanhas de tráfego pago otimizadas",
    description:
      "Anúncios no Meta e Google com segmentação inteligente e otimização contínua.",
    video: "/videos/campanhas-showcase.mp4",
  },
];

export const ServicesCarousel: React.FC = () => {
  // Duplicate the list so the translateX(-50%) loop is seamless
  const loop = [...services, ...services];
  const [expandedVideos, setExpandedVideos] = React.useState(false);

  // Ensure videos play on mobile (iOS/Android) where autoplay can be blocked
  React.useEffect(() => {
    const tryPlayAll = () => {
      document.querySelectorAll("video").forEach((video) => {
        video.muted = true;
        video.setAttribute("playsinline", "");
        video.setAttribute("webkit-playsinline", "");
        video.setAttribute("muted", "");
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            const resume = () => {
              document.querySelectorAll("video").forEach((v) => {
                v.play().catch(() => {});
              });
            };
            document.addEventListener("touchstart", resume, { once: true });
            document.addEventListener("click", resume, { once: true });
          });
        }
      });
    };
    tryPlayAll();
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="mb-8 px-4">
        <p className="text-muted-custom text-base sm:text-lg max-w-2xl text-left">
          Na Reeb Synapse, criamos um ecossistema que transforma atenção em venda.
        </p>
      </div>

      <div
        className="services-marquee relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <style>{`
          @keyframes services-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .services-marquee-track {
            animation: services-marquee 40s linear infinite;
            width: max-content;
          }
          .services-marquee:hover .services-marquee-track {
            animation-play-state: paused;
          }
          @media (prefers-reduced-motion: reduce) {
            .services-marquee-track { animation: none; }
          }
        `}</style>

        <div className="services-marquee-track flex gap-5 py-2">
          {loop.map((service, idx) => {
            const Icon = service.icon;
            const isVideosCard = service.id === "videos";
            const isExpanded = isVideosCard && expandedVideos;
            return (
              <div
                key={`${service.id}-${idx}`}
                aria-hidden={idx >= services.length ? true : undefined}
                className="shrink-0 relative flex flex-col gap-3 text-left overflow-hidden"
                onClick={isVideosCard ? () => setExpandedVideos((v) => !v) : undefined}
                role={isVideosCard ? "button" : undefined}
                tabIndex={isVideosCard ? 0 : undefined}
                onKeyDown={
                  isVideosCard
                    ? (e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setExpandedVideos((v) => !v);
                        }
                      }
                    : undefined
                }
                style={{
                  width: 300,
                  minHeight: 220,
                  padding: 24,
                  borderRadius: 16,
                  background: service.video ? "transparent" : "rgba(10, 20, 12, 0.6)",
                  border: `1px solid ${isExpanded ? "rgba(74,222,128,0.6)" : "rgba(74,222,128,0.15)"}`,
                  boxShadow: isExpanded ? "0 0 20px rgba(0,200,100,0.3)" : "none",
                  cursor: isVideosCard ? "pointer" : "default",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  if (isExpanded) return;
                  e.currentTarget.style.borderColor = "rgba(74,222,128,0.5)";
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(74,222,128,0.1)";
                }}
                onMouseLeave={(e) => {
                  if (isExpanded) return;
                  e.currentTarget.style.borderColor = "rgba(74,222,128,0.15)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {service.video && (
                  <>
                    <video
                      src={service.video}
                      muted
                      autoPlay
                      loop
                      playsInline
                      preload="auto"
                      disableRemotePlayback
                      aria-hidden
                      {...({ "webkit-playsinline": "", "x5-playsinline": "" } as Record<string, string>)}
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                      style={{ zIndex: 0, opacity: 1 }}
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        zIndex: 1,
                        background:
                          service.id === "jingles" || service.id === "landing" || service.id === "campanhas"
                            ? "rgba(0,0,0,0.60)"
                            : "linear-gradient(180deg, transparent 0%, rgba(10,20,12,0.25) 45%, rgba(10,20,12,0.85) 100%)",
                      }}
                    />
                  </>
                )}
                <div className="relative flex flex-col gap-3" style={{ zIndex: 2 }}>
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

                {isVideosCard ? (
                  <div
                    style={{
                      maxHeight: isExpanded ? 200 : 0,
                      opacity: isExpanded ? 1 : 0,
                      transform: isExpanded ? "translateY(0)" : "translateY(8px)",
                      overflow: "hidden",
                      transition:
                        "max-height 300ms ease, opacity 300ms ease, transform 300ms ease",
                    }}
                  >
                    <p className="text-muted-custom text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ) : (
                  <p className="text-muted-custom text-sm leading-relaxed">
                    {service.description}
                  </p>
                )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;
