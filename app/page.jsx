"use client";

import { useEffect, useState } from "react";

const photoCards = [
  "/photos/1.jpeg",
  "/photos/2.jpeg",
  "/photos/3.jpeg",
  "/photos/4.jpeg",
  "/photos/5.jpeg",
  "/photos/6.jpeg",
  "/photos/7.jpeg",
  "/photos/8.jpeg",
  "/photos/9.jpeg",
 "/photos/10.jpeg",
];

const PIX_KEY = "clubenacoes@outlook.com";
const PIX_QR_CODE_IMAGE = "/qrcode.jpeg";

const plans = [
  {
    name: "Secretario",
    price: "R$ 30",
    desc: "Um primeiro passo para ajudar a manter o clube ativo e acessível para todos.",
    features: [
      "Apoio mensal ao clube",
      "Participação como Sócio Nações",
      "Recebimento das novidades do clube",
    ],
    highlight: false,
    icon: "✍",
  },
  {
    name: "Ministro",
    price: "R$ 50",
    desc: "Você passa a contribuir de forma mais direta no crescimento e estrutura do clube.",
    features: [
      "Tudo do plano Secretário",
      "Apoio ampliado aos projetos",
      "Participação em ações especiais",
    ],
    highlight: false,
    icon: "★",
  },
  {
    name: "Embaixador",
    price: "R$ 100",
    desc: "Você se torna parte essencial da missão, ajudando a proporcionar experiências que transformam vidas.",
    features: [
      "Tudo do plano Ministro",
      "Reconhecimento especial",
      "Maior impacto direto nos projetos",
    ],
    highlight: true,
    icon: "♛",
  },
];

const features = [
  {
    icon: "✦",
    title: "Uniformes",
    desc: "Você ajuda a garantir que cada desbravador tenha seu uniforme, representando o clube com identidade, organização e orgulho.",
  },
  {
    icon: "⬢",
    title: "Fanfarra",
    desc: "Você ajuda a fortalecer nossa fanfarra, com manutenção dos instrumentos, estrutura e crescimento do grupo, levando som, presença e impacto por onde o clube passa.",
  },
];

const supportItems = [
  "Viagem para o Campori",
  "Estrutura e logística do clube",
  "Alimentação e preparação",
  "Uniformes para os desbravadores",
  "Experiências que fortalecem fé e propósito",
];

function SectionTitle({ eyebrow, title, subtitle, center = true }) {
  return (
    <div className={center ? "text-center" : ""}>
      <div className="mb-8 flex w-full justify-center md:mb-10">
        <div className="section-line h-px w-[42%] max-w-[320px]" />
      </div>

      {eyebrow ? (
        <p className="font-sans text-xs uppercase tracking-[0.34em] text-violet-300 md:text-sm">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="mx-auto mt-4 max-w-5xl text-balance font-display text-4xl uppercase leading-[0.95] tracking-[0.04em] text-zinc-50 md:text-6xl lg:text-7xl">
        {title}
      </h2>

      {subtitle ? (
        <p className="mx-auto mt-6 max-w-4xl text-pretty font-sans text-base leading-7 text-zinc-300 md:text-xl md:leading-9">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function HeroActions() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <a
        href="#planos"
        className="inline-flex w-full items-center justify-center rounded-2xl bg-amber-300 px-7 py-4 text-center font-sans text-base font-semibold text-black transition duration-200 hover:-translate-y-0.5 hover:bg-amber-200 sm:min-w-[220px] sm:w-auto"
      >
        Quero ser Sócio
      </a>

      <a
        href="#planos"
        className="inline-flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 text-center font-sans text-base font-semibold text-zinc-50 transition duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05] sm:min-w-[220px] sm:w-auto"
      >
        Ver planos
      </a>
    </div>
  );
}

function DonationModal({
  selectedPlan,
  isThankYouOpen,
  copiedPix,
  onClose,
  onCopyPix,
  onConfirmDonation,
}) {
  if (!selectedPlan && !isThankYouOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
      <button
        type="button"
        aria-label="Fechar modal"
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-xl overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,18,26,0.98),rgba(8,8,13,0.98))] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.55)] sm:p-6 md:p-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xl text-zinc-200 transition hover:bg-white/[0.08]"
        >
          ×
        </button>

        {isThankYouOpen ? (
          <div className="text-center">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-amber-300">
              Contribuição recebida
            </p>
            <h3 className="mt-4 font-display text-3xl uppercase tracking-[0.05em] text-zinc-50 sm:text-4xl md:text-5xl">
              Obrigado por apoiar o Clube Nações
            </h3>
            <p className="mx-auto mt-5 max-w-md font-sans text-base leading-8 text-zinc-300 md:text-lg">
              Sua oferta fortalece projetos, atividades e a continuidade da
              missão do clube. Sua participação faz diferença de verdade.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-amber-300 px-7 py-4 text-center font-sans text-base font-semibold text-black transition hover:bg-amber-200 sm:min-w-[220px] sm:w-auto"
            >
              Fechar
            </button>
          </div>
        ) : (
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-violet-300">
              Plano selecionado
            </p>
            <h3 className="mt-4 font-display text-3xl uppercase tracking-[0.05em] text-zinc-50 sm:text-4xl md:text-5xl">
              {selectedPlan?.name} {selectedPlan?.price}
            </h3>
            <p className="mt-5 font-sans text-base leading-8 text-zinc-300 md:text-lg">
              Faça a contribuição via Pix usando o QR Code ou a chave abaixo.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-[220px_1fr] md:items-start">
              <div className="mx-auto flex aspect-square w-full max-w-[220px] items-center justify-center rounded-[26px] border border-white/10 bg-white p-4 text-center">
                {PIX_QR_CODE_IMAGE ? (
                  <img
                    src={PIX_QR_CODE_IMAGE}
                    alt="QR Code para contribuição via Pix"
                    className="aspect-square w-full rounded-[18px] object-contain"
                  />
                ) : (
                  <div>
                    <p className="font-sans text-xs uppercase tracking-[0.24em] text-zinc-500">
                      QR Code Pix
                    </p>
                    <p className="mt-3 font-sans text-sm leading-6 text-zinc-700">
                      Adicione seu QR Code em
                      <br />
                      <span className="font-semibold">public/pix-qrcode.png</span>
                    </p>
                  </div>
                )}
              </div>

              <div>
                <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                  <p className="font-sans text-xs uppercase tracking-[0.24em] text-zinc-400">
                    Chave Pix
                  </p>
                  <p className="mt-3 break-all font-sans text-lg font-semibold text-zinc-50">
                    {PIX_KEY}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onCopyPix}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 text-center font-sans text-base font-semibold text-zinc-50 transition hover:bg-white/[0.06]"
                >
                  {copiedPix ? "Chave Pix copiada" : "Copiar chave Pix"}
                </button>

                <button
                  type="button"
                  onClick={onConfirmDonation}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-amber-300 px-6 py-4 text-center font-sans text-base font-semibold text-black transition hover:bg-amber-200"
                >
                  Já doei
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Page() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const [copiedPix, setCopiedPix] = useState(false);

  useEffect(() => {
    if (!selectedPlan && !isThankYouOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isThankYouOpen, selectedPlan]);

  function openDonationModal(plan) {
    setSelectedPlan(plan);
    setIsThankYouOpen(false);
    setCopiedPix(false);
  }

  function closeDonationModal() {
    setSelectedPlan(null);
    setIsThankYouOpen(false);
    setCopiedPix(false);
  }

  async function copyPixKey() {
    try {
      await navigator.clipboard.writeText(PIX_KEY);
      setCopiedPix(true);
    } catch {
      setCopiedPix(false);
    }
  }

  function confirmDonation() {
    setIsThankYouOpen(true);
    setCopiedPix(false);
  }

  return (
    <>
      <main className="min-h-screen overflow-x-hidden bg-[#050507] text-zinc-50">
        <div className="hero-noise pointer-events-none fixed inset-0 opacity-60" />

        <section className="relative px-5 pb-16 pt-16 md:px-6 md:pb-24 md:pt-24">
          <div className="hero-glow absolute inset-x-0 top-0 h-[480px]" />

          <div className="relative mx-auto max-w-6xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
              <span className="font-sans text-[11px] uppercase tracking-[0.28em] text-violet-300 sm:text-sm">
                SÓCIO DBV • CLUBE NAÇÕES
              </span>
            </div>

            <div className="mx-auto mb-10 mt-10 w-[170px] sm:w-[190px] md:w-[220px]">
              <img
                src="/logo-nacoes.png"
                alt="Logo Clube Nações"
                className="w-full object-contain drop-shadow-[0_0_26px_rgba(255,214,10,0.18)]"
              />
            </div>

            <h1 className="mx-auto max-w-5xl text-balance font-display text-4xl uppercase leading-[0.92] tracking-[0.06em] sm:text-6xl md:text-8xl">
              Seja parte do Clube Nações
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-pretty font-sans text-lg leading-8 text-zinc-300 md:text-2xl md:leading-10">
              Mais do que uma contribuição, você passa a fazer parte de um
              projeto que forma caráter, desenvolve jovens e impacta vidas de
              verdade.
            </p>

            <HeroActions />
          </div>
        </section>

        <section className="px-5 pb-6 md:px-6 md:pb-10">
          <div className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(14,14,22,0.96),rgba(8,8,13,0.98))] px-6 py-10 text-center shadow-[0_24px_60px_rgba(0,0,0,0.28)] md:px-10 md:py-14">
            <p className="font-display text-3xl uppercase leading-[1.05] tracking-[0.04em] text-zinc-50 md:text-5xl">
              Não é só um clube.
            </p>
            <p className="mx-auto mt-6 max-w-2xl whitespace-pre-line font-sans text-lg leading-8 text-zinc-300 md:text-2xl md:leading-10">
              {"É um lugar onde jovens aprendem disciplina,\ndescobrem propósito\ne constroem quem vão se tornar."}
            </p>
          </div>
        </section>

        <section className="px-5 pb-8 md:px-6 md:pb-14">
        <div className="mx-auto max-w-7xl overflow-hidden">
          <div className="mb-8 text-center md:mb-10">
            <p className="font-sans text-xs uppercase tracking-[0.32em] text-violet-300 md:text-sm">
              Momentos do Clube
            </p>
            <h2 className="mx-auto mt-4 max-w-4xl font-display text-3xl uppercase leading-[0.95] tracking-[0.04em] text-zinc-50 sm:text-4xl md:text-6xl">
              Uma missão que segue em movimento
            </h2>
          </div>

          <div className="photo-marquee">
            <div className="photo-marquee-track">
              {[...photoCards, ...photoCards].map((card, index) => (
                <article
                  key={`${card}-${index}`}
                  className="group relative w-[280px] shrink-0 overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(16,16,24,0.98),rgba(8,8,13,0.98))] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.35)] md:w-[340px]"
                >
                  <div className="relative overflow-hidden rounded-[22px]">
                    <img
                      src={card}
                      alt="Foto do Clube Nações"
                      className="h-[360px] w-full object-cover transition duration-500 group-hover:scale-[1.03] md:h-[420px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
        </section>

        <section className="px-5 py-10 md:px-6 md:py-16">
          <div className="mx-auto max-w-5xl text-center">
            <SectionTitle
              eyebrow="Realidade"
              title="Existe algo que nem todo mundo percebe"
              subtitle="Cada uniforme que um desbravador veste, cada barraca montada em um acampamento, cada viagem realizada... tudo isso só acontece porque alguém decidiu apoiar."
            />

            <p className="mx-auto mt-8 max-w-4xl text-pretty font-sans text-lg leading-8 text-zinc-300 md:text-2xl md:leading-10">
              O Clube Nações continua avançando porque existem pessoas que
              acreditam nessa missão.
            </p>
          </div>
        </section>

        <section className="px-5 py-6 md:px-6 md:py-10">
          <div className="mx-auto max-w-4xl rounded-[30px] border border-amber-300/20 bg-[linear-gradient(180deg,rgba(255,214,10,0.08),rgba(10,10,18,0.98))] px-6 py-10 text-center md:px-10 md:py-12">
            <p className="font-display text-2xl uppercase leading-[1.02] tracking-[0.05em] text-amber-300 sm:text-3xl md:text-5xl">
              E é aqui que você entra.
            </p>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-lg leading-8 text-zinc-100 md:text-2xl md:leading-10">
              Com a sua contribuição, você passa a fazer parte de cada uma
              dessas histórias.
            </p>
          </div>
        </section>

        <section className="px-5 py-12 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Missão"
            title="Você não está apenas ajudando. Você está criando histórias."
            subtitle="Sua contribuição alcança experiências reais, momentos decisivos e oportunidades que podem mudar a trajetória de um jovem."
          />

          <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-7">
            {features.map((item) => (
              <article
                key={item.title}
                className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(12,12,18,0.98),rgba(8,8,13,0.98))] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] md:p-10"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/15 text-2xl text-violet-300">
                  {item.icon}
                </div>

                <h3 className="text-balance font-sans text-2xl font-semibold leading-tight text-zinc-50 md:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-5 font-sans text-base leading-8 text-zinc-300 md:text-lg">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
        </section>

        <section className="px-5 py-10 md:px-6 md:py-18">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(14,14,22,0.96),rgba(8,8,13,0.98))]">
            <div className="grid gap-px bg-white/10 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative overflow-hidden bg-black">
                  <img
                    src="/photos/campori2.jpg"
                    alt="Momento especial do Clube Nações no Campori"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent" />
              </div>

              <div className="p-8 md:p-12">
                <p className="font-sans text-xs uppercase tracking-[0.3em] text-violet-300">
                  Campori
                </p>
                <h2 className="mt-4 font-display text-3xl uppercase leading-[0.95] tracking-[0.05em] text-zinc-50 sm:text-4xl md:text-6xl">
                  Existe um momento que marca todos os desbravadores.
                </h2>
                <p className="mt-6 font-sans text-base leading-8 text-zinc-300 md:text-lg">
                  O Campori.
                </p>
                <p className="mt-4 font-sans text-base leading-8 text-zinc-300 md:text-lg">
                  Um evento que acontece apenas a cada 6 anos, reunindo
                  milhares de jovens de toda a América do Sul.
                </p>
                <p className="mt-4 font-sans text-base leading-8 text-zinc-300 md:text-lg">
                  Uma experiência de fé, superação, amizade e propósito.
                </p>
                <p className="mt-4 font-sans text-base leading-8 text-zinc-100 md:text-lg">
                  O Clube Nações carrega um orgulho: já participamos de todas
                  as edições.
                </p>
                <p className="mt-4 font-sans text-base leading-8 text-zinc-100 md:text-lg">
                  E este ano, queremos ir novamente. Mas dessa vez, com ainda
                  mais jovens. Com ainda mais histórias sendo escritas.
                </p>
                <p className="mt-6 font-sans text-base leading-8 text-zinc-300 md:text-lg">
                  Sua contribuição ajuda diretamente nisso: viagem, estrutura,
                  alimentação, uniformes e toda a preparação.
                </p>
                <a
                  href="https://camporidsa.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 font-sans text-sm font-semibold text-zinc-50 transition hover:border-white/20 hover:bg-white/[0.06]"
                >
                  Saiba mais sobre o Campori
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-6 md:px-6 md:py-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-display text-3xl uppercase leading-[1.02] tracking-[0.05em] text-zinc-50 md:text-6xl">
              Tem experiências que marcam uma fase.
            </p>
            <p className="mt-3 font-display text-3xl uppercase leading-[1.02] tracking-[0.05em] text-amber-300 md:text-6xl">
              Outras marcam uma vida inteira.
            </p>
          </div>
        </section>

        <section id="planos" className="px-5 py-14 scroll-mt-20 md:px-6 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Planos"
              title="Agora a pergunta não é se isso é importante."
              subtitle="A pergunta é: você quer fazer parte disso?"
            />

            <p className="mx-auto mt-10 max-w-4xl text-center font-display text-2xl uppercase leading-[1.02] tracking-[0.05em] text-zinc-50 sm:text-3xl md:text-5xl">
              Escolha como você quer impactar essa missão.
            </p>

            <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-7">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className={`relative rounded-[30px] border p-8 md:p-9 ${
                    plan.highlight
                      ? "border-amber-300/40 bg-[linear-gradient(180deg,rgba(255,214,10,0.08),rgba(11,11,18,0.98))] shadow-[0_0_0_1px_rgba(255,214,10,0.08)]"
                      : "border-white/10 bg-[linear-gradient(180deg,rgba(10,10,18,0.98),rgba(8,8,13,0.98))] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                  }`}
                >
                  {plan.highlight ? (
                    <div className="absolute right-5 top-5 rounded-full bg-amber-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-black">
                      Destaque
                    </div>
                  ) : null}

                  <div
                    className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl text-2xl ${
                      plan.highlight
                        ? "bg-amber-300/10 text-amber-300"
                        : "bg-violet-500/15 text-violet-300"
                    }`}
                  >
                    {plan.icon}
                  </div>

                  <h3 className="font-display text-3xl uppercase tracking-[0.05em] text-zinc-50 sm:text-4xl">
                    {plan.name}
                  </h3>

                  <div className="mt-4 flex flex-wrap items-end gap-2">
                    <div
                      className={`font-display text-5xl uppercase leading-none sm:text-6xl ${
                        plan.highlight ? "text-amber-300" : "text-zinc-50"
                      }`}
                    >
                      {plan.price}
                    </div>
                    <div className="mb-2 font-sans text-lg text-zinc-400">
                      / mês
                    </div>
                  </div>

                  <p className="mt-6 font-sans text-base leading-8 text-zinc-300 md:min-h-[96px] md:text-lg">
                    {plan.desc}
                  </p>

                  <div className="mt-7 space-y-4">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div className="mt-1.5 text-sm text-violet-300">✓</div>
                        <div className="font-sans text-base leading-7 text-zinc-100">
                          {feature}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => openDonationModal(plan)}
                    className={`mt-9 inline-flex w-full items-center justify-center rounded-2xl py-4 text-center font-sans text-base font-semibold transition duration-200 hover:-translate-y-0.5 ${
                      plan.highlight
                        ? "bg-amber-300 text-black hover:bg-amber-200"
                        : "border border-white/10 bg-white/[0.03] text-zinc-50 hover:border-white/20 hover:bg-white/[0.05]"
                    }`}
                  >
                    Quero fazer parte
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-20 pt-8 md:px-6 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Impacto"
            title="O Clube Nações não é feito só de atividades."
            subtitle="É feito de pessoas. De histórias. De vidas sendo transformadas."
          />

          <div className="mt-14 rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,10,18,0.98),rgba(8,8,13,0.98))] p-8 md:p-12">
            <h3 className="text-center font-sans text-3xl font-semibold leading-tight text-zinc-50 md:text-5xl">
              Sua contribuição ajuda diretamente nisso:
            </h3>

            <div className="mx-auto mt-10 max-w-2xl space-y-5">
              {supportItems.map((item) => (
                <div key={item} className="flex items-start gap-4 text-lg md:text-xl">
                  <span className="text-violet-300">✓</span>
                  <span className="font-sans leading-8 text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03]">
            <div className="grid gap-px bg-white/10 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="relative min-h-[320px] overflow-hidden bg-black">
                <img
                  src="/photos/clube-grupo.jpeg"
                  alt="Grupo completo do Clube Nações reunido"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent" />
              </div>

              <div className="flex items-center bg-[linear-gradient(180deg,rgba(10,10,18,0.98),rgba(8,8,13,0.98))] p-8 md:p-10">
                <div>
                  <p className="font-sans text-xs uppercase tracking-[0.3em] text-violet-300">
                    Clube Nações
                  </p>
                  <h3 className="mt-4 font-display text-3xl uppercase tracking-[0.05em] text-zinc-50 sm:text-4xl md:text-5xl">
                    E agora, você pode fazer parte disso também.
                  </h3>
                  <p className="mt-5 font-sans text-base leading-8 text-zinc-300 md:text-lg">
                    O que mantém essa missão viva não são apenas atividades,
                    mas pessoas que decidem acreditar, contribuir e caminhar
                    junto com o clube.
                  </p>
                  <a
                    href="#planos"
                    className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-amber-300 px-7 py-4 text-center font-sans text-base font-semibold text-black transition hover:bg-amber-200 sm:min-w-[220px] sm:w-auto"
                  >
                    Quero fazer parte
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
      </main>

      <DonationModal
        selectedPlan={selectedPlan}
        isThankYouOpen={isThankYouOpen}
        copiedPix={copiedPix}
        onClose={closeDonationModal}
        onCopyPix={copyPixKey}
        onConfirmDonation={confirmDonation}
      />
    </>
  );
}
