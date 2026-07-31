import * as React from "react";
import { Video, Music, Layout, BarChart2 } from "lucide-react";

const services = [
  {
    id: "videos",
    icon: Video,
    tag: "IA POWERED",
    title: "Vídeos publicitários com IA",
    description:
      "Vídeos que prendem atenção nos primeiros 3 segundos e conduzem até a decisão de compra.",
    video: "https://res.cloudinary.com/dtos5kljq/video/upload/v1777320878/copy_C7664BD2-BFBC-48F0-8712-9FDBD1171685_m3y1lb.mov",
  },
  {
    id: "jingles",
    icon: Music,
    tag: null,
    title: "Jingles estratégicos e memoráveis",
    description:
      "Músicas que ficam na cabeça do seu cliente — e na hora de decidir, ele lembra de você.",
    video: "https://res.cloudinary.com/dtos5kljq/video/upload/v1777320861/freepik_quero-um-vdeo-animado-_kling_720p_16-9_24fps_33315_eryosd.mp4",
  },
  {
    id: "landing",
    icon: Layout,
    tag: null,
    title: "Landing pages de alta conversão",
    description: "Páginas feitas pra vender, não só pra existir.",
    video: "https://res.cloudinary.com/dtos5kljq/video/upload/v1777320861/copy_0EF91E3E-BD87-4AFB-B695-34DBA9B75DE2_a3ifdg.mov",
  },
  {
    id: "campanhas",
    icon: BarChart2,
    tag: "IA POWERED",
    title: "Campanhas de tráfego pago otimizadas",
    description:
      "Tráfego qualificado, direcionado pra quem já tá pronto pra comprar — não pra qualquer clique.",
    video: "https://res.cloudinary.com/dtos5kljq/video/upload/v1777320861/freepik_quero-um-video-animado-de_2865515716_doknwb.mp4",
  },
];

export const ServicesCarousel: React.FC = () => {
  // Duplicate the list so the translateX(-50%) loop is seamless
  const loop = [...services, ...services];

  const [isMobile, setIsMobile] = React.useState<boolean>(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Ensure videos play on mobile (iOS/Android) where autoplay can be blocked
  React.useEffect(() => {
    // On mobile, pause + hide all videos to relieve GPU/CPU
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      document.querySelectorAll("video").forEach((v) => {
        try {
          v.pause();
        } catch {}
        v.style.display = "none";
      });
      return;
    }

    const tryPlayAll = () => {
      document.querySelectorAll("video").forEach((video) => {
        video.muted = true;
        video.setAttribute("playsinline", "");
        video.setAttribute("webkit-playsinline", "");
        video.setAttribute("muted", "");
        video.style.display = "block";
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
  }, [isMobile]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="mb-8 px-4">
        <p className="text-muted-custom text-base sm:text-lg max-w-2xl text-left">
          Cada peça faz parte de um sistema — não são ações isoladas.
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
            return (
              <div
                key={`${service.id}-${idx}`}
                aria-hidden={idx >= services.length ? true : undefined}
                className="shrink-0 flex flex-col gap-3 text-left"
                style={{
                  width: 300,
                  minHeight: 220,
                  padding: 24,
                  borderRadius: 16,
                  background: service.video
                    ? isMobile
                      ? "rgba(5,16,31,0.95)"
                      : "transparent"
                    : "rgba(26, 26, 46, 0.6)",
                  border: "1px solid rgba(182,255,0,0.15)",
                  boxShadow: "none",
                  backdropFilter: isMobile ? "none" : undefined,
                  WebkitBackdropFilter: isMobile ? "none" : undefined,
                  cursor: "default",
                  transition: "all 0.3s",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  if (isMobile) return;
                  e.currentTarget.style.borderColor = "rgba(182,255,0,0.5)";
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(182,255,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  if (isMobile) return;
                  e.currentTarget.style.borderColor = "rgba(182,255,0,0.15)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {service.video && !isMobile && (
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
                      className="pointer-events-none"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: 0,
                        opacity: 1,
                      }}
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none"
                      style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 1,
                        background:
                          service.id === "jingles" || service.id === "landing" || service.id === "campanhas"
                            ? "rgba(0,0,0,0.60)"
                            : "linear-gradient(180deg, transparent 0%, rgba(26,26,46,0.25) 45%, rgba(26,26,46,0.85) 100%)",
                      }}
                    />
                  </>
                )}
                <div
                  className="flex flex-col gap-3"
                  style={{
                    position: "relative",
                    zIndex: 10,
                    pointerEvents: "auto",
                    opacity: 1,
                    visibility: "visible",
                  }}
                >
                {service.tag && (
                  <span
                    style={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      zIndex: 10,
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      padding: "4px 8px",
                      borderRadius: 999,
                      color: "#B6FF00",
                      border: "1px solid rgba(182, 255, 0, 0.4)",
                      background: "rgba(182, 255, 0, 0.08)",
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
                    background: "rgba(182,255,0,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={24} style={{ color: "#B6FF00" }} />
                </div>

                <h3 className="font-semibold text-lg text-foreground">
                  {service.title}
                </h3>

                <p className="text-muted-custom text-sm leading-relaxed">
                  {service.description}
                </p>
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
