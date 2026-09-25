export function PageHero({
  kicker,
  title,
  description,
  mark,
}: {
  kicker: string;
  title: React.ReactNode;
  description: string;
  mark?: string;
}) {
  return (
    <section className="page-hero shell">
      <span className="eyebrow">
        {kicker}
      </span>
      <h1 className="display">{title}</h1>
      <p className="lede">{description}</p>
      {mark && (
        <div className="page-hero-mark" aria-hidden="true">
          {mark}
        </div>
      )}
    </section>
  );
}

