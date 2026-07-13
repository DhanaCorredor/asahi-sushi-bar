export default function SectionHeading({
  eyebrow,
  title,
  jp,
  children,
  align = "left",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  jp?: string;
  children?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const titleColor = tone === "dark" ? "text-sumi" : "text-paper";
  const bodyColor = tone === "dark" ? "text-sumi/70" : "text-paper/70";
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <span className="eyebrow text-sunrise">{eyebrow}</span>}
      <h2 className={`display mt-3 text-3xl sm:text-4xl md:text-5xl ${titleColor}`}>
        {title}
        {jp && (
          <span className="ml-3 align-middle font-jp text-lg font-normal text-sun sm:text-xl">
            {jp}
          </span>
        )}
      </h2>
      {children && (
        <p className={`mt-4 text-base leading-relaxed text-pretty ${bodyColor}`}>{children}</p>
      )}
    </div>
  );
}
