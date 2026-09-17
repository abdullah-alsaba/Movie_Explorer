export default function MovieCard({ show, onSelect }) {
  if (!show) return null

  const title = show.name || 'Untitled'
  const imageUrl = show.image?.medium || show.image?.original || (typeof show.image === 'string' ? show.image : null)
  const premierYear = show.premiered ? show.premiered.slice(0, 4) : 'Unknown'
  const ratingValue = show.rating?.average != null ? Number(show.rating.average).toFixed(1) : 'N/A'
  const genreList = Array.isArray(show.genres) && show.genres.length > 0 ? show.genres.slice(0, 2) : ['General']

  const handleSelect = () => {
    if (onSelect) {
      onSelect(show)
    }
  }

  return (
    <article className="card group flex flex-col h-full bg-surface border border-border rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/10">
      <div className="relative aspect-2/3 w-full overflow-hidden bg-surface-raised">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
              if (e.currentTarget.nextSibling) {
                e.currentTarget.nextSibling.style.display = 'flex'
              }
            }}
          />
        ) : null}

        <div
          className={`h-full w-full items-center justify-center bg-surface-raised px-4 text-center ${
            imageUrl ? 'hidden' : 'flex'
          }`}
        >
          <div className="flex flex-col items-center gap-2 text-muted">
            <svg
              className="h-12 w-12 opacity-40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5M5.25 4.5v15M18.75 4.5v15"
              />
            </svg>
            <span className="text-xs font-medium">No Image Available</span>
          </div>
        </div>

        <div className="absolute top-2.5 right-2.5 flex items-center gap-1 rounded-md bg-canvas/85 px-2 py-1 text-xs font-semibold text-amber-400 backdrop-blur-sm border border-white/10">
          <svg
            className="h-3.5 w-3.5 fill-current"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span>{ratingValue}</span>
        </div>

        <div className="absolute bottom-2.5 left-2.5 rounded-md bg-canvas/80 px-2 py-0.5 text-xs font-medium text-ink backdrop-blur-sm border border-white/10">
          {premierYear}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex flex-wrap gap-1.5">
          {genreList.map((genre) => (
            <span
              key={genre}
              className="rounded bg-surface-raised px-2 py-0.5 text-[11px] font-medium text-muted border border-border"
            >
              {genre}
            </span>
          ))}
        </div>

        <h3 className="line-clamp-1 text-base font-bold text-ink group-hover:text-accent transition-colors" title={title}>
          {title}
        </h3>

        <div className="mt-auto pt-4">
          <button
            type="button"
            onClick={handleSelect}
            className="btn btn-secondary w-full text-xs font-semibold py-2 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all"
          >
            See Details
          </button>
        </div>
      </div>
    </article>
  )
}
