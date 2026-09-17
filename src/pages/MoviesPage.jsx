import SearchBar from '../components/SearchBar'
import MovieCard from '../components/MovieCard'
import MovieGridSkeleton from '../components/LoadingSkeleton'
import ErrorState from '../components/ErrorState'
import EmptyState from '../components/EmptyState'

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
            loading={loading}
          />
        </div>
      </div>

      {loading && (
        <MovieGridSkeleton count={15} columns="listing" />
      )}

      {!loading && error && (
        <ErrorState
          title="Something went wrong"
          message={error || 'Unable to load movies right now.'}
          onRetry={onRetry}
        />
      )}

      {!loading && !error && shows.length === 0 && (
        <EmptyState
          title="No movies found"
          message={
            isSearching
              ? `Try searching with a different title or keyword. No matches for "${searchQuery}".`
              : 'Try searching with a different title or keyword.'
          }
          onClear={onClearSearch}
          actionText={isSearching ? 'Clear Search' : undefined}
        />
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
