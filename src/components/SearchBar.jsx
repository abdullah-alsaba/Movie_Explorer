export default function SearchBar({ value = '', onChange, onSubmit, onClear, placeholder = 'Search movies or shows by title...' }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit(value)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-2xl mx-auto">
      <div className="relative flex items-center">
        <div className="pointer-events-none absolute left-4 text-muted">
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          type="text"
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-xl border border-border bg-surface py-3.5 pl-12 pr-28 text-sm text-ink placeholder-muted/60 transition-colors focus:border-accent focus:bg-surface-raised focus:outline-none focus:ring-1 focus:ring-accent"
        />

        <div className="absolute right-2 flex items-center gap-1.5">
          {value && (
            <button
              type="button"
              onClick={onClear}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-muted transition-colors hover:bg-border hover:text-white"
              aria-label="Clear search text"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}

          <button
            type="submit"
            className="btn btn-primary h-8 px-3.5 text-xs font-semibold"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  )
}
