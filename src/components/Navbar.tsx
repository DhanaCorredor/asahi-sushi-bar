"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { whatsappUrl } from "@/data/site";
import logo from "../../public/brand/logo-horizontal-light.png";

const links = [
  { href: "/#destacados", label: "Destacados" },
  { href: "/carta", label: "Carta" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-sumi/95 backdrop-blur-md border-b border-white/10"
          : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="relative z-10 flex items-center" onClick={() => setOpen(false)} aria-label="Asahi Sushi Bar — inicio">
          <Image
            src={logo}
            alt="Asahi Sushi Bar"
            priority
            className="h-9 w-auto sm:h-10"
            style={{ width: "auto" }}
          />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium tracking-wide text-paper/85 transition-colors hover:text-sun"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-sunrise px-5 py-2 text-sm font-semibold text-paper transition-colors hover:bg-sunrise-600"
            >
              Reservar
            </a>
          </li>
        </ul>

        {/* Botón móvil */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative z-10 flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-paper transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-6 bg-paper transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-paper transition-all duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Menú móvil desplegable */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 border-t border-white/10 bg-sumi px-5 pb-6 pt-4">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-lg font-medium text-paper/90"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-3">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-sunrise px-5 py-3 text-center font-semibold text-paper"
            >
              Reservar por WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
