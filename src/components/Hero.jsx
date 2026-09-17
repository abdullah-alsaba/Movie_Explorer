export default function Hero({ onExplore }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-canvas py-12 sm:py-16 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-[radial-gradient(ellipse_at_top,rgba(220,20,60,0.18),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(#2a2a32_1px,transparent_1px)] bg-size-[24px_24px] opacity-25" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-canvas to-transparent" />
      </div>

      <div className="container-app">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="text-center lg:col-span-7 lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/90 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent shadow-sm mb-5">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span>Unlimited Entertainment Database</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
              Discover Movies <br className="hidden sm:inline" />
              <span className="bg-linear-to-r from-white via-ink to-accent bg-clip-text text-transparent">
                You'll Love
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm sm:text-base lg:text-lg text-muted leading-relaxed mx-auto lg:mx-0">
              Explore movies and shows from around the world, search for your favorites, and
              discover something worth watching.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                type="button"
                onClick={onExplore}
                className="btn btn-primary w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base font-semibold shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5 transition-all"
              >
                <span>Explore Movies</span>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={onExplore}
                className="btn btn-secondary w-full sm:w-auto px-6 py-3.5 text-sm sm:text-base font-medium"
              >
                Search Directory
              </button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-4 border-t border-border pt-6 max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="text-lg sm:text-2xl font-bold text-white">50,000+</p>
                <p className="text-[11px] sm:text-xs text-muted mt-0.5">Shows & Series</p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-bold text-white">TVMaze</p>
                <p className="text-[11px] sm:text-xs text-muted mt-0.5">Real-time API</p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-bold text-white">Instant</p>
                <p className="text-[11px] sm:text-xs text-muted mt-0.5">Search & Details</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-accent to-purple-600 opacity-20 blur-xl transition-all" />

              <div className="relative rounded-2xl border border-border bg-surface p-5 sm:p-7 shadow-2xl">
                <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-accent" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Featured Highlight
                    </span>
                  </div>
                  <span className="rounded bg-border px-2 py-0.5 text-xs font-medium text-emerald-400">
                    ★ Top Rated
                  </span>
                </div>

                <div className="space-y-2.5">
                  <h2 className="text-base sm:text-lg font-bold text-white leading-snug">
                    Explore Cinematic Stories & Global Television
                  </h2>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    Filter by title, explore air dates, inspect detailed synopsis, and examine full
                    show metadata in a modern modal experience.
                  </p>
                </div>

                <div className="mt-5 space-y-2.5 pt-4 border-t border-border">
                  <div className="flex items-center gap-2.5 text-xs text-muted">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      ✓
                    </span>
                    <span>Live search across global titles</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-muted">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      ✓
                    </span>
                    <span>High-resolution posters & ratings</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-muted">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      ✓
                    </span>
                    <span>Interactive show details modal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
