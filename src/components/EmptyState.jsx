export default function EmptyState({
  title = 'No movies found',
  message = 'Try searching with a different title or keyword.',
  onClear,
  actionText = 'Clear Search',
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-8 sm:p-12 text-center max-w-md mx-auto my-10 shadow-xl">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-raised text-muted mb-5 border border-border">
        <svg className="h-7 w-7 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
      <p className="text-sm text-muted leading-relaxed mb-6">{message}</p>

      {onClear && (
        <button
          type="button"
          onClick={onClear}
          className="btn btn-secondary px-6 py-2.5 text-xs font-semibold hover:border-accent hover:text-white transition-colors"
        >
          {actionText}
        </button>
      )}
    </div>
  )
}
