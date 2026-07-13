import Image from "next/image";
import Link from "next/link";
import { site, whatsappUrl } from "@/data/site";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";
import logo from "../../public/brand/logo-horizontal-light.png";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <Image src={logo} alt="Asahi Sushi Bar" className="h-12 w-auto" style={{ width: "auto" }} />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ash">
            {site.tagline} El espíritu del Sol Naciente en el corazón de Leganés.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-paper/80 transition-colors hover:border-sun hover:text-sun"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-paper/80 transition-colors hover:border-sun hover:text-sun"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="eyebrow text-sun">Visítanos</h3>
          <address className="mt-4 not-italic text-sm leading-relaxed text-paper/85">
            {site.address.street}
            <br />
            {site.address.city}
          </address>
          <a
            href={`tel:${site.phone.tel}`}
            className="mt-3 block text-sm text-paper/85 transition-colors hover:text-sun"
          >
            {site.phone.display}
          </a>
          <a
            href={site.address.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm font-medium text-sunrise transition-colors hover:text-sunrise-600"
          >
            Cómo llegar →
          </a>
        </div>

        <div>
          <h3 className="eyebrow text-sun">Horario</h3>
          <ul className="mt-4 space-y-1.5 text-sm">
            {site.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span className="text-ash">{h.day}</span>
                <span className={h.closed ? "text-sunrise" : "text-paper/85"}>{h.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-ash sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} Asahi Sushi Bar · Leganés, Madrid</p>
          <p className="flex items-center gap-4">
            <Link href="/carta" className="transition-colors hover:text-paper">
              Carta
            </Link>
            <span className="text-white/20">·</span>
            <span>Disponemos de información sobre alérgenos</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
