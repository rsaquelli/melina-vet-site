import Image from "next/image";
import Link from "next/link";

const whatsappLink = "https://wa.me/5511999658998";

type VaccineIconName =
  | "shield"
  | "syringe"
  | "lungs"
  | "drop"
  | "mosquito"
  | "cat"
  | "virus"
  | "calendar";

const dogVaccines = [
  {
    title: "Vacina múltipla V8/V10",
    description:
      "Ajuda na prevenção de doenças importantes em cães. O protocolo deve ser definido conforme idade, histórico, ambiente e avaliação veterinária.",
    icon: "shield" as VaccineIconName,
  },
  {
    title: "Antirrábica",
    description:
      "Vacina essencial para cães e gatos, voltada à prevenção da raiva. A revacinação deve seguir orientação veterinária e exigências sanitárias aplicáveis.",
    icon: "syringe" as VaccineIconName,
  },
  {
    title: "Gripe canina / Bronchi",
    description:
      "Indicada em situações específicas para auxiliar na prevenção de doenças respiratórias, especialmente em pets com maior exposição a outros animais.",
    icon: "lungs" as VaccineIconName,
  },
  {
    title: "Giárdia",
    description:
      "Pode ser recomendada conforme rotina, exposição e risco individual do pet. A orientação veterinária é fundamental para definir a necessidade.",
    icon: "drop" as VaccineIconName,
  },
  {
    title: "Leishmaniose",
    description:
      "Pode ser considerada em regiões ou situações de risco, sempre mediante avaliação veterinária e medidas complementares de prevenção.",
    icon: "mosquito" as VaccineIconName,
  },
];

const catVaccines = [
  {
    title: "Vacina múltipla felina V3/V4/V5",
    description:
      "Ajuda na prevenção de doenças relevantes em gatos. A escolha entre V3, V4 ou V5 depende da avaliação veterinária e do perfil do animal.",
    icon: "cat" as VaccineIconName,
  },
  {
    title: "Antirrábica felina",
    description:
      "Vacina importante para a prevenção da raiva em gatos, com reforços definidos conforme orientação veterinária e normas sanitárias.",
    icon: "syringe" as VaccineIconName,
  },
  {
    title: "FeLV",
    description:
      "A vacinação contra FeLV deve ser avaliada conforme teste, estilo de vida, contato com outros gatos e risco de exposição.",
    icon: "virus" as VaccineIconName,
  },
];

function VaccineIcon({
  name,
  className = "h-7 w-7",
}: {
  name: VaccineIconName;
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
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 4.7-2.8 7.9-7 10-4.2-2.1-7-5.3-7-10V6l7-3Z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );

    case "syringe":
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

    case "lungs":
      return (
        <svg {...common}>
          <path d="M12 12V5" />
          <path d="M12 12c-1.8-2.4-4-3.5-6-3.5-1.3 0-2 1-2 2.3V18c0 1.4 1.1 2.5 2.5 2.5 2.3 0 4.5-2.5 5.5-8.5Z" />
          <path d="M12 12c1.8-2.4 4-3.5 6-3.5 1.3 0 2 1 2 2.3V18c0 1.4-1.1 2.5-2.5 2.5-2.3 0-4.5-2.5-5.5-8.5Z" />
        </svg>
      );

    case "drop":
      return (
        <svg {...common}>
          <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />
          <path d="M9.5 15.5A3 3 0 0 0 12 17" />
        </svg>
      );

    case "mosquito":
      return (
        <svg {...common}>
          <path d="M12 8c2.2 0 4 1.8 4 4v2a4 4 0 0 1-8 0v-2c0-2.2 1.8-4 4-4Z" />
          <path d="M12 8V4" />
          <path d="M9.5 5.5 12 8l2.5-2.5" />
          <path d="M8 12H4" />
          <path d="M20 12h-4" />
          <path d="M8.5 16 5 19" />
          <path d="m15.5 16 3.5 3" />
        </svg>
      );

    case "cat":
      return (
        <svg {...common}>
          <path d="M5 9V4l4 3h6l4-3v5" />
          <path d="M5 9c0 6 3 10 7 10s7-4 7-10" />
          <path d="M9 13h.01" />
          <path d="M15 13h.01" />
          <path d="M11 16h2" />
        </svg>
      );

    case "virus":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v3" />
          <path d="M12 19v3" />
          <path d="M2 12h3" />
          <path d="M19 12h3" />
          <path d="m4.9 4.9 2.1 2.1" />
          <path d="m17 17 2.1 2.1" />
          <path d="m19.1 4.9-2.1 2.1" />
          <path d="m7 17-2.1 2.1" />
        </svg>
      );

    case "calendar":
      return (
        <svg {...common}>
          <path d="M7 3v3" />
          <path d="M17 3v3" />
          <path d="M4 8h16" />
          <path d="M5 5h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
          <path d="M9 13l2 2 4-4" />
        </svg>
      );

    default:
      return null;
  }
}

function VaccineCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: VaccineIconName;
}) {
  return (
    <article className="rounded-3xl bg-[#fffaf4] p-6 shadow-sm ring-1 ring-[#c48f7a]/15 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#3b2f2a]/5">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f1e4da] text-[#c48f7a]">
        <VaccineIcon name={icon} />
      </div>

      <h3 className="text-xl font-semibold text-[#3b2f2a]">{title}</h3>

      <p className="mt-3 leading-7 text-[#8a6f63]">{description}</p>
    </article>
  );
}

export default function VaccinesPage() {
  return (
    <main className="min-h-screen bg-[#f7f1e8] text-[#3b2f2a]">
      <section className="relative overflow-hidden px-6 py-8 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(196,143,122,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(122,132,70,0.16),_transparent_34%)]" />

        <div className="relative mx-auto max-w-7xl">
          <header className="flex items-center justify-between gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-[#8a6f63] transition hover:text-[#3b2f2a]"
            >
              ← Voltar para o site
            </Link>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#7a8446] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#7a8446]/20 transition hover:bg-[#68723a]"
            >
              Agendar pelo WhatsApp
            </a>
          </header>

          <div className="grid items-center gap-12 pb-12 pt-16 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c48f7a]">
                Vacinação
              </p>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Entenda a importância das vacinas para cães e gatos
              </h1>

              <p className="mt-6 text-lg leading-8 text-[#8a6f63]">
                A vacinação é uma das principais formas de prevenção em cães e
                gatos. Cada pet deve ter seu protocolo definido de forma
                individualizada, considerando idade, histórico, estilo de vida,
                ambiente, riscos de exposição e avaliação veterinária.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-[#7a8446]/15 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-xl shadow-[#3b2f2a]/10 ring-1 ring-[#c48f7a]/15">
                <Image
                  src="/vacinas.jpg"
                  alt="Principais vacinas para cães e gatos"
                  width={1200}
                  height={700}
                  priority
                  className="h-[320px] w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </div>

            <div className="rounded-3xl bg-white/75 p-6 shadow-sm ring-1 ring-[#c48f7a]/15 lg:col-span-2">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eef0e3] text-[#7a8446]">
                  <VaccineIcon name="calendar" />
                </div>

                <div>
                  <p className="font-semibold text-[#3b2f2a]">
                    Protocolo vacinal é individual
                  </p>

                  <p className="mt-2 leading-7 text-[#8a6f63]">
                    As informações desta página são educativas. A indicação,
                    intervalo entre doses, reforços e necessidade de cada vacina
                    devem ser definidos em consulta com a médica veterinária.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 pt-6 lg:px-8 lg:pt-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c48f7a]">
                Cães
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Vacinas mais comuns para cães
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#8a6f63]">
                A recomendação pode variar conforme idade, rotina, ambiente,
                histórico de saúde e exposição a outros animais.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-[#c48f7a]/15 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-xl shadow-[#3b2f2a]/10 ring-1 ring-[#c48f7a]/15">
                <Image
                  src="/vacina-cao.jpg"
                  alt="Vacinação em cães"
                  width={1200}
                  height={700}
                  className="h-[280px] w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dogVaccines.map((vaccine) => (
              <VaccineCard
                key={vaccine.title}
                title={vaccine.title}
                description={vaccine.description}
                icon={vaccine.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf4] px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c48f7a]">
                Gatos
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Vacinas mais comuns para gatos
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#8a6f63]">
                Em gatos, a avaliação do estilo de vida, testes prévios e
                contato com outros animais é essencial para definir o protocolo
                mais adequado.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-[#c48f7a]/15 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-xl shadow-[#3b2f2a]/10 ring-1 ring-[#c48f7a]/15">
                <Image
                  src="/vacina-gato.jpg"
                  alt="Vacinação em gatos"
                  width={1200}
                  height={700}
                  className="h-[280px] w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {catVaccines.map((vaccine) => (
              <VaccineCard
                key={vaccine.title}
                title={vaccine.title}
                description={vaccine.description}
                icon={vaccine.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-[#7a8446] p-8 text-white shadow-xl shadow-[#7a8446]/20 sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
                Carteirinha Digital
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Controle melhor os reforços e revacinações
              </h2>
            </div>

            <div className="text-lg leading-8 text-white/85">
              <p>
                A carteirinha digital ajuda o tutor a acompanhar o histórico de
                vacinação, datas de aplicação, previsão de revacinação e status
                das vacinas, facilitando a prevenção e a organização dos
                cuidados.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-[#7a8446] transition hover:bg-[#fffaf4]"
                >
                  Falar com a Dra. Melina
                </a>

                <Link
                  href="/"
                  className="inline-flex justify-center rounded-full border border-white/50 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Voltar para o site
                </Link>
              </div>
            </div>
          </div>
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

            <Link href="/" className="hover:text-[#3b2f2a]">
              Site principal
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}