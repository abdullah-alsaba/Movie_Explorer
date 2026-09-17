import { stripHtml, formatRating, formatYear, getShowImage } from '../services/tvmaze'

export default function MovieDetailsModal({ show, isOpen, onClose }) {
  if (!isOpen || !show) return null

  const title = show.name || 'Untitled'
  const imageUrl = show.imageUrl || getShowImage(show.image)
  const rating = show.ratingValue || formatRating(show.rating)
  const year = show.year || formatYear(show.premiered)
  const genres = Array.isArray(show.genres) && show.genres.length > 0 ? show.genres : ['General']
  const overview = show.cleanSummary || stripHtml(show.summary)
  const language = show.language && show.language !== 'Unknown' ? show.language : null
  const status = show.status && show.status !== 'Unknown' ? show.status : null
  const runtime = show.runtime && show.runtime !== 'Unknown' ? show.runtime : null
  const network = show.network && show.network !== 'Unknown' ? show.network : null
  const officialSite = show.officialSite || null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative flex flex-col w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-surface shadow-2xl text-ink z-10 animate-in fade-in zoom-in-95 duration-200">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-canvas/70 text-muted hover:text-white hover:bg-canvas border border-border transition-colors"
          aria-label="Close modal"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
          <div className="md:col-span-5 flex flex-col items-center">
            <div className="relative aspect-2/3 w-full max-w-sm rounded-xl overflow-hidden bg-surface-raised border border-border shadow-lg">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={title}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    if (e.currentTarget.nextSibling) {
                      e.currentTarget.nextSibling.style.display = 'flex'
                    }
                  }}
                />
              ) : null}

              <div
                className={`h-full w-full items-center justify-center bg-surface-raised p-6 text-center ${
                  imageUrl ? 'hidden' : 'flex'
                }`}
              >
                <div className="flex flex-col items-center gap-2 text-muted">
                  <svg className="h-12 w-12 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5M5.25 4.5v15M18.75 4.5v15" />
                  </svg>
                  <span className="text-xs font-medium">No Image Available</span>
                </div>
              </div>
            </div>

            {officialSite && (
              <a
                href={officialSite}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary w-full max-w-sm mt-4 text-xs font-semibold gap-2"
              >
                <span>Visit Official Site</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>

          <div className="md:col-span-7 flex flex-col">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1 rounded-md bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 text-xs font-semibold text-amber-400">
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>{rating}</span>
              </span>

              <span className="rounded-md bg-surface-raised border border-border px-2.5 py-1 text-xs font-medium text-muted">
                {year}
              </span>

              {status && (
                <span className="rounded-md bg-surface-raised border border-border px-2.5 py-1 text-xs font-medium text-emerald-400">
                  {status}
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              {title}
            </h2>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {genres.map((genre) => (
                <span
                  key={genre}
                  className="rounded-full bg-surface-raised border border-border px-3 py-0.5 text-xs font-medium text-muted"
                >
                  {genre}
                </span>
              ))}
            </div>

            <div className="space-y-2 mb-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
                Overview
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {overview}
              </p>
            </div>

            <div className="mt-auto grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-border pt-5 text-xs">
              {language && (
                <div>
                  <span className="text-muted block">Language</span>
                  <span className="font-semibold text-white mt-0.5 block">{language}</span>
                </div>
              )}
              {runtime && (
                <div>
                  <span className="text-muted block">Runtime</span>
                  <span className="font-semibold text-white mt-0.5 block">{runtime}</span>
                </div>
              )}
              {network && (
                <div>
                  <span className="text-muted block">Network</span>
                  <span className="font-semibold text-white mt-0.5 block">{network}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-border bg-surface px-6 py-4 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="btn btn-secondary text-xs px-5 py-2 font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
