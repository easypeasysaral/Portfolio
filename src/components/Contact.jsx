const links = [
  { label: 'Email', value: 'tsaraljain@gmail.com', href: 'mailto:tsaraljain@gmail.com' },
  { label: 'Phone', value: '+91 79991 47820', href: 'tel:+917999147820' },
  { label: 'LinkedIn', value: 'linkedin.com/in/jainsaral', href: 'https://linkedin.com/in/jainsaral' },
  { label: 'GitHub', value: 'github.com/easypeasysaral', href: 'https://github.com/easypeasysaral' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-[90px] border-t border-[var(--border)]">
      <div className="max-w-[1120px] mx-auto px-6 grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <div className="font-mono text-[12.5px] tracking-[0.14em] uppercase text-[var(--accent)] flex items-center gap-2.5 mb-3.5">
            <span className="w-[18px] h-px bg-[var(--accent)]" />
            contact
          </div>
          <h2 className="font-mono text-[24px] md:text-[30px] leading-[1.25]">
            Open to AI/ML internships
            <br />
            and software engineering roles.
          </h2>
          <p className="text-[var(--text-dim)] mt-4 text-[15px] leading-[1.7] max-w-[48ch]">
            Whether it's a model that needs shipping or a backend that needs building — I'd like to hear about it.
          </p>
        </div>
        <div className="flex flex-col gap-3.5">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="flex items-center justify-between px-[18px] py-4 border border-[var(--border)] rounded-[11px] bg-[var(--panel)] no-underline transition-all hover:border-[var(--accent)] hover:translate-x-1"
            >
              <div>
                <div className="font-mono text-[11px] text-[var(--text-faint)] uppercase tracking-[0.08em]">{l.label}</div>
                <div className="text-[14.5px] mt-0.5 text-[var(--text)]">{l.value}</div>
              </div>
              <span className="text-[var(--accent)] font-mono">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
