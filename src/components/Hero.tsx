import Image from "next/image";
import Link from "next/link";
import { site, whatsappUrl } from "@/data/site";
import { ArrowIcon, WhatsAppIcon } from "@/components/icons";
import logo from "../../public/brand/logo-horizontal-light.png";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-sumi">
      {/* Resplandor del sol naciente */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-24 h-[42rem] w-[42rem] rounded-full opacity-70 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(230,74,65,0.55) 0%, rgba(253,184,19,0.18) 45%, transparent 70%)",
        }}
      />
      {/* Rayos sutiles inferiores */}
      <div aria-hidden className="rays pointer-events-none absolute inset-x-0 bottom-0 h-72 opacity-60" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start px-5 pt-28 pb-24 sm:px-8 md:pt-32">
        <span className="eyebrow flex items-center gap-3 text-sun">
          <span className="font-jp text-base tracking-normal">{site.kanji}</span>
          <span className="h-px w-8 bg-sun/60" />
          {site.city}
        </span>

        <div className="mt-8 w-full max-w-2xl">
          <Image
            src={logo}
            alt="Asahi Sushi Bar"
            priority
            className="h-auto w-[min(84vw,32rem)]"
          />
        </div>

        <h1 className="display mt-8 max-w-3xl text-4xl text-paper text-balance sm:text-6xl md:text-7xl">
          El sol nace en <span className="text-sunrise">cada bocado</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 text-pretty sm:text-lg">
          Sushi vibrante y urbano que rompe moldes. Tradición japonesa con
          audacia contemporánea en el corazón de Leganés.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link
            href="/carta"
            className="group inline-flex items-center gap-2 rounded-full bg-sunrise px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-sunrise-600"
          >
            Ver la carta
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:border-sun hover:text-sun"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Reservar
          </a>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div aria-hidden className="absolute inset-x-0 bottom-6 flex justify-center">
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/25 p-1.5">
          <span className="h-1.5 w-1 animate-bounce rounded-full bg-sun" />
        </span>
      </div>
    </section>
  );
}
