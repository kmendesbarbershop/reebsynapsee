

## Por que o vídeo de fundo não aparece

O arquivo de vídeo **existe** em `public/videos/videos-showcase.mp4` (735KB) e o caminho no componente está correto (`/videos/videos-showcase.mp4`). O problema é **visual**, não de carregamento — a combinação de opacidade do vídeo + overlay escuro está deixando o vídeo praticamente invisível.

### Diagnóstico

No `ServicesCarousel.tsx`, o card de "Vídeos publicitários" tem três camadas:

1. **Vídeo** — `opacity: 0.55` (já reduz a 55%)
2. **Overlay gradient** — `rgba(10,20,12,0.55)` no topo → `rgba(10,20,12,0.95)` na base (preto quase opaco)
3. **Conteúdo** (ícone, título, texto) — por cima de tudo

Multiplicando: `0.55 × (1 - 0.55 a 0.95)` = o vídeo fica entre 25% e 3% visível. Na prática, vira um borrão escuro indistinguível do fundo do card (`rgba(10, 20, 12, 0.6)`).

### Plano de correção

Ajustar o card "videos" no `src/components/ui/services-carousel.tsx`:

1. **Aumentar opacidade do vídeo** de `0.55` → `1` (vídeo em força total).
2. **Reduzir o overlay gradient** para algo bem mais leve, só o suficiente para o texto continuar legível na parte de baixo:
   - Topo: `transparent`
   - Meio: `rgba(10,20,12,0.25)`
   - Base: `rgba(10,20,12,0.85)` (degradê só na parte do texto)
3. **Remover o `background` sólido do card** quando houver vídeo (ou deixar o vídeo cobrir totalmente sem competir com o fundo escuro). Manter apenas a borda verde.
4. **Garantir reprodução** adicionando `disableRemotePlayback` e mantendo a ordem correta dos atributos (`muted` antes de `autoPlay` no JSX).
5. **Fallback de poster** opcional: capturar 1 frame do MP4 como `poster` para evitar tela preta enquanto carrega (etapa opcional, posso pular se preferir velocidade).

### Resultado esperado

O vídeo passa a aparecer nitidamente como papel de parede do card, com um leve gradiente escuro apenas atrás do título e da descrição para preservar legibilidade. O ícone verde, a tag "IA POWERED" e os textos continuam visíveis e contrastados.

### Arquivos alterados

- `src/components/ui/services-carousel.tsx` (apenas o bloco do card "videos" — overlay e opacidade do vídeo)

