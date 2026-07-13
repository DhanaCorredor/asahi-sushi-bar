import Image from "next/image";
import Link from "next/link";
import { site, whatsappUrl } from "@/data/site";
import { ArrowIcon, WhatsAppIcon } from "@/components/icons";
import logo from "../../public/brand/logo-horizontal-light.png";
import heroPhoto from "../../public/img/hero.webp";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-sumi">
      {/* Foto de fondo a pantalla completa */}
      <Image
        src={heroPhoto}
        alt="Roll de salmón flambeado sobre pizarra negra en Asahi Sushi Bar"
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Degradados para legibilidad (más oscuro a la izquierda y abajo) */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-sumi via-sumi/85 to-sumi/25"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-sumi via-sumi/10 to-sumi/40"
      />
      {/* Resplandor cálido del sol naciente, arriba a la derecha */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 h-[36rem] w-[36rem] rounded-full opacity-50 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(230,74,65,0.45) 0%, rgba(253,184,19,0.15) 45%, transparent 70%)",
        }}
      />

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
            className="h-auto w-[min(84vw,32rem)] drop-shadow-2xl"
          />
        </div>

        <h1 className="display mt-8 max-w-3xl text-4xl text-paper text-balance drop-shadow-lg sm:text-6xl md:text-7xl">
          El sol nace en <span className="text-sunrise">cada bocado</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/85 text-pretty drop-shadow sm:text-lg">
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
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/20 px-7 py-3.5 text-sm font-semibold text-paper backdrop-blur-sm transition-colors hover:border-sun hover:text-sun"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Reservar
          </a>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div aria-hidden className="absolute inset-x-0 bottom-6 flex justify-center">
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/30 p-1.5">
          <span className="h-1.5 w-1 animate-bounce rounded-full bg-sun" />
        </span>
      </div>
    </section>
  );
}
