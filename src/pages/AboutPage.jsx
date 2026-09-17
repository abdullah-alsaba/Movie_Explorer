export default function AboutPage({ onExplore }) {
  const techStack = [
    { name: 'React 19', role: 'UI component architecture, state & effects' },
    { name: 'Vite 8', role: 'Lightning-fast client build environment' },
    { name: 'Tailwind CSS 4', role: 'Modern cinematic design system & layout' },
    { name: 'TVMaze REST API', role: 'Real-time global television & film directory' },
    { name: 'React-Toastify', role: 'Non-blocking notification system' },
  ]

  const highlights = [
    'Comprehensive show listing dynamically fetched from TVMaze public endpoints',
    'Real-time keyword and title search with query normalization and URL-safe encoding',
    'Interactive modal inspecting synopsis, critic scores, network, and official stream sites',
    'Graceful data fallbacks for missing posters, unrated titles, and undated releases',
    'Adaptive viewport scaling from mobile 320px to large desktop displays without overflow',
  ]

  return (
    <div className="container-app py-12 md:py-20">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent shadow-sm">
            <span>Assignment Project</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About MovieExplorer
          </h1>
          <p className="text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed">
            A modern, cinematic entertainment discovery web application built with React and powered by the public TVMaze REST API.
          </p>
        </div>

        <div className="card p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-bold text-white">Project Purpose</h2>
          <p className="text-sm text-muted leading-relaxed">
            MovieExplorer was built to deliver a responsive, clean, and interactive media browsing experience. Users can effortlessly explore trending television series, search for specific titles, view critic ratings, and inspect complete show metadata without leaving the page.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white">Technology Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {techStack.map((tech) => (
              <div key={tech.name} className="card p-4 flex flex-col justify-center">
                <span className="text-sm font-bold text-white">{tech.name}</span>
                <span className="text-xs text-muted mt-0.5">{tech.role}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-bold text-white">Key Features</h2>
          <ul className="space-y-3">
            {highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-muted">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent text-xs font-bold mt-0.5">
                  ✓
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center pt-4">
          <button
            type="button"
            onClick={onExplore}
            className="btn btn-primary px-8 py-3 text-sm font-semibold shadow-lg shadow-accent/25"
          >
            Explore the Movie Catalog
          </button>
        </div>
      </div>
    </div>
  )
}
