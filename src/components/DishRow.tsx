import type { MenuItem } from "@/data/menu";

/** Fila de plato con líder de puntos y precio, estilo carta impresa. */
export default function DishRow({ item }: { item: MenuItem }) {
  return (
    <li className="py-3">
      <div className="flex items-baseline text-paper">
        <span className="font-display text-base font-bold uppercase tracking-wide">
          {item.name}
        </span>
        {item.unit && (
          <span className="ml-2 text-xs font-medium text-ash">{item.unit}</span>
        )}
        <span className="leader" aria-hidden />
        {item.prices ? (
          <span className="flex shrink-0 gap-3">
            {item.prices.map((p) => (
              <span key={p.label} className="whitespace-nowrap text-sm font-semibold text-sun">
                <span className="text-ash">{p.label} </span>
                {p.price}
              </span>
            ))}
          </span>
        ) : (
          <span className="shrink-0 whitespace-nowrap font-display text-base font-bold text-sun">
            {item.price}
          </span>
        )}
      </div>
      {(item.desc || item.region) && (
        <p className="mt-1 max-w-xl text-sm leading-relaxed text-paper/55">
          {item.desc}
          {item.desc && item.region ? " · " : ""}
          {item.region && <span className="italic">{item.region}</span>}
        </p>
      )}
    </li>
  );
}
