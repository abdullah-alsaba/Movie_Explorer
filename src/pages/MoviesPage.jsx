import SearchBar from '../components/SearchBar'
import MovieCard from '../components/MovieCard'

export default function MoviesPage({
  shows = [],
  loading = false,
  error = null,
  searchQuery = '',
  isSearching = false,
  onSearchChange,
  onSearchSubmit,
  onClearSearch,
  onRetry,
  onSelectShow,
}) {
  return (
    <div className="container-app py-10 md:py-16">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span>Explore Directory</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Browse Movies & TV Shows
        </h1>
        <p className="mt-3 text-sm sm:text-base text-muted">
          Search through thousands of television series, view critic ratings, and discover new titles.
        </p>

        <div className="mt-8">
          <SearchBar
            value={searchQuery}
            onChange={onSearchChange}
            onSubmit={onSearchSubmit}
            onClear={onClearSearch}
          />
        </div>
      </div>

      {loading && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="flex flex-col rounded-xl border border-border bg-surface overflow-hidden animate-pulse"
            >
              <div className="aspect-2/3 w-full bg-surface-raised" />
              <div className="p-4 space-y-3">
                <div className="h-3 w-1/3 rounded bg-border" />
                <div className="h-4 w-3/4 rounded bg-border" />
                <div className="pt-2">
                  <div className="h-8 w-full rounded bg-border" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && error && (
        <div className="rounded-2xl border border-border bg-surface p-10 text-center max-w-md mx-auto my-8">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose-500/10 text-rose-500 mb-4">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-lg font-bold text-white mb-2">Something went wrong</h2>
          <p className="text-sm text-muted mb-6">
            {error || 'Unable to load movies right now. Please try again.'}
          </p>
          {onRetry && (
            <button
              type="button"
              onClick={onRetry}
              className="btn btn-primary text-xs px-5 py-2 font-semibold"
            >
              Try Again
            </button>
          )}
        </div>
      )}

      {!loading && !error && shows.length === 0 && (
        <div className="rounded-2xl border border-border bg-surface p-10 text-center max-w-md mx-auto my-8">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-border text-muted mb-4">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h2 className="text-lg font-bold text-white mb-2">No movies found</h2>
          <p className="text-sm text-muted mb-6">
            {searchQuery
              ? `No results matching "${searchQuery}". Try searching with a different title or keyword.`
              : 'There are currently no movies to display.'}
          </p>
          {searchQuery && (
            <button
              type="button"
              onClick={onClearSearch}
              className="btn btn-secondary text-xs px-5 py-2 font-semibold"
            >
              Clear Search
            </button>
          )}
        </div>
      )}

      {!loading && !error && shows.length > 0 && (
        <div>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <p className="text-sm font-medium text-ink">
                {isSearching ? `Search Results for "${searchQuery}"` : 'All Available Shows'}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {isSearching && (
                <button
                  type="button"
                  onClick={onClearSearch}
                  className="text-xs font-medium text-accent hover:underline"
                >
                  Show All Shows
                </button>
              )}
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-surface border border-border text-muted">
                {shows.length} {shows.length === 1 ? 'show' : 'shows'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {shows.map((show) => (
              <MovieCard
                key={show.id}
                show={show}
                onSelect={onSelectShow}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
