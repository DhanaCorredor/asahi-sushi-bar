import type { Metadata } from "next";
import Link from "next/link";
import CartaNav from "@/components/CartaNav";
import DishRow from "@/components/DishRow";
import { menu, foodCategories, drinkCategories } from "@/data/menu";
import { whatsappUrl } from "@/data/site";
import { WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Carta",
  description:
    "Carta completa de Asahi Sushi Bar: nigiris, makis, sashimi, tartares, temaki, combos, cervezas japonesas, vinos y coctelería. Leganés, Madrid.",
};

export default function CartaPage() {
  const navCats = menu.map((c) => ({ id: c.id, title: c.title }));

  return (
    <>
      {/* Cabecera */}
      <header className="relative overflow-hidden bg-sumi pt-28 pb-14 sm:pt-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 -top-20 h-[32rem] w-[32rem] rounded-full opacity-60 blur-[110px]"
          style={{
            background:
              "radial-gradient(circle, rgba(230,74,65,0.5) 0%, rgba(253,184,19,0.15) 45%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <span className="eyebrow flex items-center gap-3 text-sun">
            <span className="font-jp text-base tracking-normal">お品書き</span>
            <span className="h-px w-8 bg-sun/60" />
            Menú
          </span>
          <h1 className="display mt-4 text-5xl text-paper sm:text-7xl">La Carta</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/70 text-pretty">
            Elaboración al momento con pescado fresco. Precios en euros (IVA
            incluido). Disponemos de información sobre alérgenos: si tienes
            alguna alergia o intolerancia, consúltanos.
          </p>
        </div>
      </header>

      <CartaNav categories={navCats} />

      {/* Comida */}
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="mb-10 flex items-center gap-4">
          <h2 className="eyebrow text-sunrise">Cocina</h2>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid gap-x-16 gap-y-14 lg:grid-cols-2">
          {foodCategories.map((cat) => (
            <section
              key={cat.id}
              id={cat.id}
              className="scroll-mt-32 break-inside-avoid"
            >
              <div className="flex items-baseline gap-3 border-b border-white/10 pb-3">
                <h3 className="display text-2xl text-paper sm:text-3xl">{cat.title}</h3>
                {cat.jp && <span className="font-jp text-lg text-sun">{cat.jp}</span>}
                {cat.note && (
                  <span className="ml-auto text-xs font-medium uppercase tracking-wider text-ash">
                    {cat.note}
                  </span>
                )}
              </div>
              <ul className="divide-y divide-white/5">
                {cat.items.map((item) => (
                  <DishRow key={item.name} item={item} />
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Bebidas */}
        <div className="mb-10 mt-20 flex items-center gap-4">
          <h2 className="eyebrow text-sunrise">Bebidas</h2>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid gap-x-16 gap-y-14 lg:grid-cols-2">
          {drinkCategories.map((cat) => (
            <section
              key={cat.id}
              id={cat.id}
              className="scroll-mt-32 break-inside-avoid"
            >
              <div className="flex items-baseline gap-3 border-b border-white/10 pb-3">
                <h3 className="display text-2xl text-paper sm:text-3xl">{cat.title}</h3>
                {cat.note && (
                  <span className="ml-auto text-xs font-medium uppercase tracking-wider text-ash">
                    {cat.note}
                  </span>
                )}
              </div>
              <ul className="divide-y divide-white/5">
                {cat.items.map((item) => (
                  <DishRow key={item.name} item={item} />
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="mt-14 rounded-xl border border-white/10 bg-sumi-800 p-5 text-sm text-paper/60">
          Disponemos también de refrescos, cafés e infusiones, y sake por copa.
          Consulta a nuestro equipo. Alérgenos disponibles bajo petición.
        </p>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center gap-5 rounded-2xl border border-white/10 bg-gradient-to-br from-sumi-800 to-sumi p-10 text-center">
          <h2 className="display text-2xl text-paper sm:text-3xl">¿Listo para pedir?</h2>
          <p className="max-w-md text-sm text-paper/65">
            Reserva tu mesa o haz tu pedido directamente por WhatsApp.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-sunrise px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-sunrise-600"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Reservar por WhatsApp
            </a>
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:border-sun hover:text-sun"
            >
              Ver ubicación y horario
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
