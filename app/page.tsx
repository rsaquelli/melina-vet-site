import Image from "next/image";

const whatsappLink = "https://wa.me/5511999658998";
const appLink = "https://app.melinavet.com.br";

const menuItems = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Carteirinha Digital", href: "#carteirinha" },
  { label: "Contato", href: "#contato" },
];

type IconName =
  | "consulta"
  | "vacinacao"
  | "filhotes"
  | "cirurgia"
  | "documentos"
  | "hotel"
  | "orientacao"
  | "acolhimento"
  | "prevencao"
  | "experiencia";

const heroHighlights = [
  {
    title: "Consultas",
    description: "Avaliação clínica e acompanhamento.",
    icon: "consulta" as IconName,
  },
  {
    title: "Vacinação",
    description: "Prevenção, reforços e orientação.",
    icon: "vacinacao" as IconName,
  },
  {
    title: "Filhotes",
    description: "Cuidado especial nos primeiros meses.",
    icon: "filhotes" as IconName,
  },
];

const services = [
  {
    title: "Consultas veterinárias",
    description:
      "Avaliação clínica cuidadosa para diagnóstico, orientação e acompanhamento da saúde de cães e gatos.",
    icon: "consulta" as IconName,
  },
  {
    title: "Vacinação",
    description:
      "Protocolos de vacinação para filhotes e adultos, com orientação sobre reforços, prevenção e calendário vacinal.",
    icon: "vacinacao" as IconName,
  },
  {
    title: "Atendimento especializado para filhotes",
    description:
      "Cuidado nos primeiros meses de vida, com foco em saúde, adaptação, prevenção e orientação aos tutores.",
    icon: "filhotes" as IconName,
  },
  {
    title: "Cirurgias e procedimentos",
    description:
      "Orientação e realização de procedimentos veterinários com responsabilidade técnica, cuidado e acompanhamento.",
    icon: "cirurgia" as IconName,
  },
  {
    title: "Atestados e laudos para transporte e viagens",
    description:
      "Orientação e emissão de documentos veterinários conforme a necessidade do tutor e as exigências aplicáveis.",
    icon: "documentos" as IconName,
  },
  {
    title: "Hotelzinho domiciliar",
    description:
      "Hospedagem em ambiente domiciliar, com acompanhamento veterinário e atenção próxima durante a estadia.",
    icon: "hotel" as IconName,
  },
  {
    title: "Orientação para tutores",
    description:
      "Informações claras sobre alimentação, vacinação, comportamento, prevenção, rotina e bem-estar dos pets.",
    icon: "orientacao" as IconName,
  },
];

const differentials = [
  {
    title: "Atendimento humanizado",
    description:
      "Escuta atenta, cuidado individualizado e orientação clara para cada tutor e pet.",
    icon: "acolhimento" as IconName,
  },
  {
    title: "Foco em prevenção",
    description:
      "Acompanhamento preventivo, vacinação, rotina de cuidados e atenção às fases da vida do pet.",
    icon: "prevencao" as IconName,
  },
  {
    title: "Experiência com filhotes",
    description:
      "Apoio especializado nos primeiros meses, fase essencial para saúde, adaptação e desenvolvimento.",
    icon: "experiencia" as IconName,
  },
];

function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: IconName;
  className?: string;
}) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "consulta":
      return (
        <svg {...common}>
          <path d="M9 3h6" />
          <path d="M10 3v4.5a2 2 0 0 1-.59 1.41L5.82 12.5a3 3 0 0 0 4.24 4.24l3.59-3.59A2 2 0 0 1 15.06 12H19a2 2 0 0 0 2-2V7a4 4 0 0 0-4-4h-1" />
          <path d="M14 5h2" />
          <path d="M15 4v2" />
        </svg>
      );

    case "vacinacao":
      return (
        <svg {...common}>
          <path d="M14.5 5.5 18.5 9.5" />
          <path d="M12.5 7.5 16.5 11.5" />
          <path d="M4 20l6.5-6.5" />
          <path d="M10 8l6 6" />
          <path d="M8.5 9.5 5 13" />
          <path d="m16.5 3.5 4 4-2 2-4-4z" />
        </svg>
      );

    case "filhotes":
      return (
        <svg {...common}>
          <circle cx="7" cy="8" r="1.6" />
          <circle cx="12" cy="6.5" r="1.6" />
          <circle cx="17" cy="8" r="1.6" />
          <path d="M9.5 17.5c.8 1.2 2 2 2.5 2s1.7-.8 2.5-2c.5-.8 1.5-1.5 1.5-3a4 4 0 0 0-8 0c0 1.5 1 2.2 1.5 3Z" />
        </svg>
      );

    case "cirurgia":
      return (
        <svg {...common}>
          <path d="M4 20 20 4" />
          <path d="M14.5 5.5 18.5 9.5" />
          <path d="M6 14l4 4" />
          <path d="M4.5 12.5c-1-1-1-2.6 0-3.5l1-1 4 4-1 1c-1 .9-2.6.9-3.5 0z" />
        </svg>
      );

    case "documentos":
      return (
        <svg {...common}>
          <path d="M8 3h6l4 4v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
          <path d="M14 3v5h5" />
          <path d="M9 13h6" />
          <path d="M9 17h4" />
        </svg>
      );

    case "hotel":
      return (
        <svg {...common}>
          <path d="M3 11.5 12 4l9 7.5" />
          <path d="M5.5 10.5V20h13V10.5" />
          <path d="M9 20v-5h6v5" />
        </svg>
      );

    case "orientacao":
      return (
        <svg {...common}>
          <path d="M21 12a8 8 0 0 1-8 8 8.6 8.6 0 0 1-3-.5L4 21l1.5-5A8 8 0 1 1 21 12Z" />
          <path d="M9.5 10.5h5" />
          <path d="M9.5 14h3.5" />
        </svg>
      );

    case "acolhimento":
      return (
        <svg {...common}>
          <path d="M12 20s-6.5-4.2-8.5-8A5.1 5.1 0 0 1 12 6a5.1 5.1 0 0 1 8.5 6c-2 3.8-8.5 8-8.5 8Z" />
        </svg>
      );

    case "prevencao":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 4.7-2.8 7.9-7 10-4.2-2.1-7-5.3-7-10V6l7-3Z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );

    case "experiencia":
      return (
        <svg {...common}>
          <path d="M12 3l2.2 4.5 5 .7-3.6 3.6.9 5-4.5-2.4-4.5 2.4.9-5L4.8 8.2l5-.7Z" />
        </svg>
      );

    default:
      return null;
  }
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f1e8] text-[#3b2f2a]">
      <section id="inicio" className="relative overflow-hidden bg-[#f7f1e8]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(196,143,122,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(122,132,70,0.16),_transparent_34%)]" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-6 lg:px-8">
          <a href="#inicio" className="flex items-center gap-5">
            <Image
              src="/logo-melina.png"
              alt="Logo Dra. Melina"
              width={220}
              height={110}
              priority
              className="h-auto w-24 sm:w-28 lg:w-32"
            />

            <div className="hidden border-l border-[#c48f7a]/25 pl-5 sm:block">
              <p className="font-[var(--font-playfair)] text-2xl leading-tight text-[#3b2f2a] lg:text-[2rem]">
                Dra. Melina Prudente Correa
              </p>

              <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.32em] text-[#8a6f63]">
                Médica Veterinária
              </p>

              <p className="mt-2 text-sm text-[#8a6f63]">CRMV-SP 2827-9</p>
            </div>
          </a>

          <nav className="hidden items-center rounded-full border border-[#c48f7a]/20 bg-white/55 px-2 py-2 shadow-sm backdrop-blur lg:flex">
  {menuItems.map((item) => (
    <a
      key={item.href}
      href={item.href}
      className="rounded-full px-4 py-2 text-sm font-medium text-[#8a6f63] transition duration-200 hover:bg-[#f7f1e8] hover:text-[#3b2f2a]"
    >
      {item.label}
    </a>
  ))}
</nav>

          <a
  href={appLink}
  className="rounded-full border border-[#c48f7a]/35 bg-white/55 px-4 py-2 text-xs font-medium text-[#8a6f63] transition hover:border-[#c48f7a] hover:bg-white hover:text-[#3b2f2a] sm:px-5 sm:py-2.5 sm:text-sm"
>
  Acesso restrito
</a>
        </header>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-8 lg:grid-cols-[1fr_0.95fr] lg:px-8 lg:pb-24 lg:pt-10">
          <div className="max-w-3xl">
            <h1 className="text-[2.35rem] font-semibold leading-tight tracking-tight text-[#3b2f2a] sm:text-5xl lg:text-6xl">
              Cuidado veterinário com experiência, carinho e atenção em cada
              detalhe.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#8a6f63]">
              Atendimento personalizado para cães e gatos, com orientação clara
              aos tutores e acompanhamento próximo para cada fase da vida do
              pet.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#7a8446] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#7a8446]/20 transition hover:bg-[#68723a]"
              >
                Agendar pelo WhatsApp
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center rounded-full bg-white/85 px-7 py-3.5 text-base font-semibold text-[#3b2f2a] shadow-sm ring-1 ring-[#c48f7a]/20 transition hover:bg-white"
              >
                Conhecer serviços
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
              {heroHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl bg-white/70 p-5 shadow-sm ring-1 ring-[#c48f7a]/15 backdrop-blur"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f1e4da] text-[#c48f7a]">
                    <Icon name={item.icon} className="h-6 w-6" />
                  </div>

                  <p className="text-sm font-semibold text-[#7a8446]">
                    {item.title}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#8a6f63]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:ml-auto lg:max-w-[520px]">
            <div className="absolute -inset-5 rounded-[2.75rem] bg-[#c48f7a]/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2.25rem] bg-[#fffaf4] p-4 shadow-2xl shadow-[#3b2f2a]/10 ring-1 ring-[#c48f7a]/20">
              <div className="overflow-hidden rounded-[1.75rem]">
                <Image
  src="/dra-melina-hero.jpg"
  alt="Dra. Melina, médica veterinária"
  width={900}
  height={1050}
  priority
  className="h-[420px] w-full object-cover object-[62%_center] sm:h-[500px] lg:h-[560px]"
/>
              </div>

              <div className="mt-4 rounded-[1.5rem] bg-white p-5 shadow-sm ring-1 ring-[#c48f7a]/15">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-[#7a8446]">
                      Dra. Melina Prudente Correa
                    </p>

                    <p className="mt-1 text-2xl font-semibold text-[#3b2f2a]">
                      Médica Veterinária
                    </p>
                  </div>

                  <p className="rounded-full bg-[#f7f1e8] px-4 py-2 text-sm font-medium text-[#8a6f63]">
                    CRMV-SP 2827-9
                  </p>
                </div>

                <p className="mt-4 text-sm leading-6 text-[#8a6f63]">
                  Atendimento próximo, responsável e humanizado para cães e
                  gatos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="bg-[#fffaf4] px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-[#c48f7a]/15 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-xl shadow-[#3b2f2a]/8 ring-1 ring-[#c48f7a]/15">
              <Image
  src="/dra-melina.jpg"
  alt="Dra. Melina"
  width={800}
  height={1000}
  className="h-[360px] w-full rounded-[1.5rem] object-cover object-[62%_center] sm:h-[420px] lg:h-[480px]"
/>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c48f7a]">
              Sobre
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Sobre a Dra. Melina
            </h2>

            <div className="mt-8 space-y-5 text-lg leading-8 text-[#8a6f63]">
              <p>
                A Dra. Melina Prudente Correa atua com cuidado veterinário
                voltado à saúde, prevenção e bem-estar de cães e gatos,
                oferecendo atendimento personalizado e orientação responsável
                aos tutores.
              </p>

              <p>
                Com experiência clínica e olhar atento às necessidades de cada
                pet, seu trabalho une conhecimento técnico, acolhimento e
                acompanhamento próximo, especialmente em fases importantes como
                os primeiros meses de vida, vacinação, consultas preventivas e
                cuidados contínuos.
              </p>

              <p className="font-medium text-[#3b2f2a]">
                Médica Veterinária — CRMV-SP 2827-9
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c48f7a]">
              Serviços
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Cuidado veterinário em diferentes fases da vida do pet
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#8a6f63]">
              Atendimento clínico, prevenção, documentação veterinária,
              acompanhamento de filhotes e orientação clara para tutores.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl bg-[#fffaf4] p-6 shadow-sm ring-1 ring-[#c48f7a]/15 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#3b2f2a]/5"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f1e4da] text-[#c48f7a]">
                  <Icon name={service.icon} className="h-7 w-7" />
                </div>

                <h3 className="text-xl font-semibold text-[#3b2f2a]">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-[#8a6f63]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf4] px-6 py-20 lg:px-8">
  <div className="mx-auto max-w-7xl">
    <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c48f7a]">
          Diferenciais
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Atendimento próximo, técnico e acolhedor
        </h2>

        <p className="mt-6 text-lg leading-8 text-[#8a6f63]">
          Cada pet tem sua história, sua rotina e suas necessidades. Por isso,
          o atendimento da Dra. Melina valoriza a escuta, a orientação cuidadosa
          e o acompanhamento responsável em cada fase da vida.
        </p>
      </div>

      <div className="relative mx-auto w-full max-w-xl">
        <div className="absolute -inset-4 rounded-[2.5rem] bg-[#c48f7a]/15 blur-2xl" />

        <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-xl shadow-[#3b2f2a]/10 ring-1 ring-[#c48f7a]/15">
          <Image
            src="/diferenciais-pet.jpg"
            alt="Pet em ambiente acolhedor"
            width={1200}
            height={800}
            className="h-[240px] w-full rounded-[1.5rem] object-cover sm:h-[280px] lg:h-[320px]"
          />
        </div>
      </div>
    </div>

    <div className="mt-12 grid gap-5 md:grid-cols-3">
      {differentials.map((item) => (
        <article
          key={item.title}
          className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[#7a8446]/10 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#3b2f2a]/5"
        >
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef0e3] text-[#7a8446]">
            <Icon name={item.icon} className="h-7 w-7" />
          </div>

          <p className="text-xl font-semibold text-[#3b2f2a]">
            {item.title}
          </p>

          <p className="mt-3 leading-7 text-[#8a6f63]">
            {item.description}
          </p>
        </article>
      ))}
    </div>
  </div>
</section>

      <section id="carteirinha" className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-[#7a8446] p-8 text-white shadow-xl shadow-[#7a8446]/20 sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
                Carteirinha Digital
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Histórico de vacinação sempre à mão
              </h2>
            </div>

            <div className="text-lg leading-8 text-white/85">
              <p>
                Os tutores recebem uma carteirinha digital com histórico de
                vacinação, datas de aplicação, previsão de revacinação e status
                das vacinas, facilitando o acompanhamento preventivo do pet.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-[#7a8446] transition hover:bg-[#fffaf4]"
                >
                  Falar sobre vacinação
                </a>

                <a
                  href="/vacinas"
                  className="inline-flex justify-center rounded-full border border-white/50 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Entenda a importância das vacinas
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="bg-[#fffaf4] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c48f7a]">
            Contato
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Fale com a Dra. Melina pelo WhatsApp
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#8a6f63]">
            Para agendar atendimento, tirar dúvidas sobre vacinação, cuidados
            com filhotes, documentação para viagens ou hotelzinho domiciliar,
            entre em contato pelo WhatsApp.
          </p>

          <div className="mt-8">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#7a8446] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#7a8446]/20 transition hover:bg-[#68723a]"
            >
              Agendar pelo WhatsApp
            </a>
          </div>

          <p className="mt-5 text-sm text-[#8a6f63]">
            WhatsApp: 11 99965-8998
          </p>
        </div>
      </section>

      <footer className="px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-[#c48f7a]/20 pt-8 text-sm text-[#8a6f63] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-medium text-[#3b2f2a]">
              Dra. Melina Prudente Correa
            </p>
            <p>Médica Veterinária — CRMV-SP 2827-9</p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3b2f2a]"
            >
              WhatsApp
            </a>

            <a href={appLink} className="hover:text-[#3b2f2a]">
              Acesso restrito
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}