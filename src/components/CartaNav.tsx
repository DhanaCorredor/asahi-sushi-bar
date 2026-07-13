"use client";

import { useEffect, useState } from "react";

type NavCat = { id: string; title: string };

export default function CartaNav({ categories }: { categories: NavCat[] }) {
  const [active, setActive] = useState(categories[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    categories.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [categories]);

  return (
    <div className="sticky top-16 z-40 border-y border-white/10 bg-sumi/95 backdrop-blur-md">
      <nav className="mx-auto max-w-6xl px-3 sm:px-8">
        <ul className="flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((c) => (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                className={`inline-block whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  active === c.id
                    ? "bg-sunrise text-paper"
                    : "text-paper/65 hover:bg-white/5 hover:text-paper"
                }`}
              >
                {c.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
