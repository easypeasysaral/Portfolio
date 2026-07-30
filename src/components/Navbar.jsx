const links = [
  ['about', 'about'],
  ['skills', 'skills'],
  ['projects', 'projects'],
  ['timeline', 'experience'],
  ['activity', 'activity'],
  ['contact', 'contact'],
]

export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--bg)_72%,transparent)]">
      <div className="max-w-[1120px] mx-auto px-6 py-3.5 flex items-center justify-between">
        <div className="font-mono font-bold text-[15px] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent)]" />
          EasyPeasySaral<span className="text-[var(--text-faint)]"></span>
        </div>

        <ul className="hidden md:flex gap-6 font-mono text-[13px] list-none m-0 p-0">
          {links.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className="text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors no-underline">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="w-[42px] h-6 rounded-full border border-[var(--border-strong)] bg-[var(--panel-2)] relative cursor-pointer flex-none"
        >
          <span
            className="absolute top-[2px] w-[18px] h-[18px] rounded-full bg-[var(--accent)] flex items-center justify-center text-[10px] transition-transform duration-250"
            style={{ transform: theme === 'light' ? 'translateX(18px)' : 'translateX(2px)' }}
          >
            {theme === 'light' ? '☀️' : '🌙'}
          </span>
        </button>
      </div>
    </nav>
  )
}
