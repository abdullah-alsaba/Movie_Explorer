import Hero from '../components/Hero'
import MovieCard from '../components/MovieCard'

export default function HomePage({ onExplore, featuredShows = [], loading = false, onSelectShow }) {
  const features = [
    {
      icon: (
        <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
      ),
      title: 'Extensive Show Library',
      description: 'Access tens of thousands of television shows, series, and specials sourced directly from the global TVMaze repository.',
    },
    {
      icon: (
        <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: 'Real-Time Dynamic Search',
      description: 'Instantly find any movie or show by title with intelligent fallback handling, clean query handling, and instant results.',
    },
    {
      icon: (
        <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Rich Detail Overviews',
      description: 'View full synopsis, official networks, premiere air dates, average critic ratings, and direct official streaming links in one place.',
    },
  ]

  return (
    <div className="flex flex-col">
      <Hero onExplore={onExplore} />

      <section className="container-app py-14 md:py-20 border-b border-border">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>Curated Selection</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Featured Movies & Trending Shows
            </h2>
            <p className="mt-1.5 max-w-xl text-sm text-muted">
              Top-rated series and critically acclaimed entertainment ready to be discovered.
            </p>
          </div>

          <button
            type="button"
            onClick={onExplore}
            className="btn btn-secondary text-xs sm:text-sm self-start sm:self-auto group"
          >
            <span>Explore All Movies</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="aspect-2/3 w-full rounded-xl bg-surface animate-pulse border border-border"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {featuredShows.map((show) => (
              <MovieCard
                key={show.id}
                show={show}
                onSelect={onSelectShow}
              />
            ))}
          </div>
        )}
      </section>

      <section className="container-app py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent mb-2">
            <span>Core Advantages</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
            Everything You Need to Browse Smarter
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted">
            Built with modern web standards, lightning-fast rendering, and seamless TVMaze API connectivity.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="card group p-6 sm:p-8 transition-all hover:border-accent/50 hover:bg-surface/90"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 border border-accent/20 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-linear-to-r from-surface via-surface-raised to-surface p-8 sm:p-12 text-center relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="text-xl sm:text-3xl font-extrabold text-white">
              Ready to find your next favorite show?
            </h3>
            <p className="text-sm text-muted sm:text-base">
              Dive into our extensive catalog, search across genres, and inspect complete show metadata instantly.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onExplore}
                className="btn btn-primary px-8 py-3 text-sm font-semibold shadow-lg shadow-accent/30 hover:scale-105 transition-all"
              >
                Browse All Shows Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
