import { useState, useRef } from 'react'

export default function SearchBar({
  value = '',
  onChange,
  onSubmit,
  onClear,
  loading = false,
  placeholder = 'Search movies or shows by title...',
}) {
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value.trim() || loading) return
    if (onSubmit) {
      onSubmit(value)
    }
  }

  const handleClear = () => {
    if (onClear) {
      onClear()
    }
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleClear()
    }
  }

  const isButtonDisabled = loading || !value.trim()

  return (
    <form
      role="search"
      aria-label="Search shows and movies"
      onSubmit={handleSubmit}
      className="relative w-full max-w-2xl mx-auto"
    >
      <div
        className={`relative flex items-center rounded-xl border bg-surface transition-all duration-200 ${
          isFocused
            ? 'border-accent ring-2 ring-accent/25 bg-surface-raised'
            : 'border-border hover:border-[#3a3a44]'
        }`}
      >
        <div
          className={`pointer-events-none absolute left-4 transition-colors ${
            isFocused ? 'text-accent' : 'text-muted'
          }`}
        >
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
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          aria-label="Search query"
          className="w-full bg-transparent py-3.5 pl-12 pr-28 text-sm text-ink placeholder-muted/60 focus:outline-none"
        />

        <div className="absolute right-2 flex items-center gap-1.5">
          {value && (
            <button
              type="button"
              onClick={handleClear}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-muted transition-colors hover:bg-border hover:text-white focus-visible:outline-2 focus-visible:outline-accent"
              aria-label="Clear search input"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}

          <button
            type="submit"
            disabled={isButtonDisabled}
            className={`btn h-8 px-4 text-xs font-semibold transition-all ${
              isButtonDisabled
                ? 'opacity-50 cursor-not-allowed bg-border text-muted'
                : 'btn-primary shadow-sm hover:scale-[1.02]'
            }`}
          >
            {loading ? (
              <div className="flex items-center gap-1.5">
                <svg className="h-3.5 w-3.5 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Searching</span>
              </div>
            ) : (
              'Search'
            )}
          </button>
        </div>
      </div>
    </form>
  )
}
