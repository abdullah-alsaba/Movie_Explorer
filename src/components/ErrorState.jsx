export default function ErrorState({
  title = 'Something went wrong',
  message = 'Unable to load movies right now.',
  onRetry,
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-8 sm:p-12 text-center max-w-md mx-auto my-10 shadow-xl">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-500 mb-5 border border-rose-500/20">
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>

      <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
      <p className="text-sm text-muted leading-relaxed mb-6">{message}</p>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="btn btn-primary px-6 py-2.5 text-xs font-semibold shadow-md shadow-accent/20 hover:scale-[1.02] transition-all"
        >
          Try Again
        </button>
      )}
    </div>
  )
}
