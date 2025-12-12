export default function Section({
  children,
  className = "",
  innerClassName = "",
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <section className={className}>
      <div className={`mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24 ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}
