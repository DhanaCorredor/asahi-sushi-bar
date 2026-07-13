import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { site, whatsappUrl } from "@/data/site";
import { menu, signatureDishes } from "@/data/menu";
import {
  ArrowIcon,
  BagIcon,
  ClockIcon,
  InstagramIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "@/components/icons";
import nosotrosPhoto from "../../public/img/nosotros.webp";

const foodCats = menu.filter((c) => c.group === "comida");

// Fotos de la galería (recortes limpios de platos)
const galleryPhotos = [9, 10, 11, 13, 14, 23, 27, 28];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Destacados */}
      <section id="destacados" className="scroll-mt-20 bg-sumi py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Lo imprescindible" title="Nuestros clásicos" jp="名物">
              Una selección de la casa. Pescado fresco, cortes precisos y esa
              chispa urbana que nos define.
            </SectionHeading>
            <Link
              href="/carta"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-sun transition-colors hover:text-sunrise"
            >
              Ver carta completa
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {signatureDishes.map((dish) => (
              <article
                key={dish.name}
                className="group flex flex-col rounded-2xl border border-white/10 bg-sumi-800 p-6 transition-colors hover:border-sun/40"
              >
                <span className="eyebrow text-sunrise">{dish.category}</span>
                <h3 className="display mt-3 text-xl text-paper">{dish.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-paper/60">
                  {dish.desc}
                </p>
                <span className="mt-5 font-display text-lg font-extrabold text-sun">
                  {dish.price}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="scroll-mt-20 border-y border-white/10 bg-sumi-800 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="El corazón de la marca" title="El Sol Naciente" jp="朝日">
              Asahi significa <em className="text-paper not-italic">sol naciente</em>. Nacimos
              para traer un nuevo amanecer a la escena gastronómica: fusionamos
              la tradición japonesa con energía urbana contemporánea.
            </SectionHeading>
            <p className="mt-5 max-w-xl leading-relaxed text-paper/70 text-pretty">
              Creemos en la belleza de lo esencial —el <span className="text-sun">wabi-sabi</span>—
              y en la audacia de romper moldes. Cada pieza es una experiencia
              visual y gastronómica pensada para paladares exigentes.
            </p>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2rem] opacity-40 blur-2xl"
              style={{ background: "radial-gradient(circle, rgba(230,74,65,0.4), transparent 70%)" }}
            />
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <Image
                src={nosotrosPhoto}
                alt="Crab Asahi: cangrejo de concha blanda flambeado, elaborado en Asahi Sushi Bar"
                fill
                placeholder="blur"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vistazo a la carta */}
      <section className="bg-sumi py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading eyebrow="La carta" title="Un vistazo al menú" align="center">
            Desde nigiris y makis hasta tartares, temaki y coctelería. Todo
            elaborado al momento.
          </SectionHeading>

          <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-3">
            {foodCats.map((c) => (
              <Link
                key={c.id}
                href={`/carta#${c.id}`}
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-paper/80 transition-colors hover:border-sun hover:text-sun"
              >
                {c.title}
                {c.jp && <span className="font-jp text-xs text-ash group-hover:text-sun">{c.jp}</span>}
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/carta"
              className="group inline-flex items-center gap-2 rounded-full bg-sunrise px-8 py-4 text-sm font-semibold text-paper transition-colors hover:bg-sunrise-600"
            >
              Ver la carta completa
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="border-t border-white/10 bg-sumi py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Directo de la barra" title="Galería" jp="ギャラリー">
              Cortes precisos, pescado fresco y presentaciones que entran por
              los ojos.
            </SectionHeading>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:border-sun hover:text-sun"
            >
              <InstagramIcon className="h-4 w-4" />
              Síguenos en Instagram
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {galleryPhotos.map((n) => (
              <div
                key={n}
                className="group relative aspect-square overflow-hidden rounded-xl border border-white/10"
              >
                <Image
                  src={`/img/ig/${n}.webp`}
                  alt="Plato de sushi de Asahi Sushi Bar"
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="scroll-mt-20 border-t border-white/10 bg-sumi-800 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Visítanos" title="Te esperamos" jp="ようこそ">
              En pleno Leganés. Ven a descubrir el sabor del Sol Naciente.
            </SectionHeading>

            <ul className="mt-8 space-y-5">
              <li className="flex gap-4">
                <PinIcon className="mt-0.5 h-6 w-6 shrink-0 text-sunrise" />
                <div>
                  <p className="font-semibold text-paper">{site.address.street}</p>
                  <p className="text-sm text-paper/60">{site.address.city}</p>
                  <a
                    href={site.address.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm font-medium text-sun hover:text-sunrise"
                  >
                    Cómo llegar →
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <PhoneIcon className="mt-0.5 h-6 w-6 shrink-0 text-sunrise" />
                <div>
                  <a href={`tel:${site.phone.tel}`} className="font-semibold text-paper hover:text-sun">
                    {site.phone.display}
                  </a>
                  <p className="text-sm text-paper/60">Reservas y pedidos</p>
                </div>
              </li>
              <li className="flex gap-4">
                <ClockIcon className="mt-0.5 h-6 w-6 shrink-0 text-sunrise" />
                <div className="w-full max-w-xs">
                  <p className="font-semibold text-paper">Horario</p>
                  <ul className="mt-2 space-y-1 text-sm">
                    {site.hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-4">
                        <span className="text-paper/60">{h.day}</span>
                        <span className={h.closed ? "text-sunrise" : "text-paper/85"}>{h.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={site.ubereats}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-uber px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-uber-600"
              >
                <BagIcon className="h-4 w-4" />
                Pedir en Uber Eats
              </a>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-sunrise px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-sunrise-600"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Reservar
              </a>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:border-sun hover:text-sun"
              >
                <InstagramIcon className="h-4 w-4" />
                {site.instagram.handle}
              </a>
            </div>
          </div>

          <div className="min-h-[22rem] overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Ubicación de Asahi Sushi Bar en Leganés"
              src={site.address.embed}
              className="h-full min-h-[22rem] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ filter: "grayscale(0.3) contrast(1.05)" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
