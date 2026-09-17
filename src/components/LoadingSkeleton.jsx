export function MovieCardSkeleton() {
  return (
    <div className="card flex flex-col h-full bg-surface border border-border rounded-xl overflow-hidden shadow-lg animate-pulse">
      <div className="relative aspect-2/3 w-full bg-surface-raised overflow-hidden">
        <div className="absolute top-2.5 right-2.5 h-6 w-12 rounded-md bg-border" />
        <div className="absolute bottom-2.5 left-2.5 h-5 w-14 rounded-md bg-border" />
      </div>

      <div className="flex flex-1 flex-col p-4 space-y-3">
        <div className="flex gap-1.5">
          <div className="h-4 w-14 rounded bg-border" />
          <div className="h-4 w-16 rounded bg-border" />
        </div>

        <div className="h-5 w-4/5 rounded bg-border" />

        <div className="mt-auto pt-4">
          <div className="h-8 w-full rounded-md bg-border" />
        </div>
      </div>
    </div>
  )
}

export function MovieGridSkeleton({ count = 10, columns = 'default' }) {
  const gridClass =
    columns === 'home'
      ? 'grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
      : 'grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'

  return (
    <div className={gridClass} aria-busy="true" aria-label="Loading shows">
      {[...Array(count)].map((_, i) => (
        <MovieCardSkeleton key={i} />
      ))}
    </div>
  )
}

export default MovieGridSkeleton
