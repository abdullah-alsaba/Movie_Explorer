function App() {
  return (
    <main className="container-app section-y">
      <p className="text-caption mb-3">MovieExplorer</p>
      <h1 className="heading-xl mb-3">Discover Movies You'll Love</h1>
      <p className="text-body mb-8 max-w-xl">
        Explore movies and shows from around the world, search for your
        favorites, and discover something worth watching.
      </p>

      <div className="mb-10 flex flex-wrap gap-3">
        <button type="button" className="btn btn-primary">
          Explore Movies
        </button>
        <button type="button" className="btn btn-secondary">
          Learn More
        </button>
      </div>

      <article className="card max-w-sm p-5">
        <h2 className="heading-md mb-2">Sample card</h2>
        <p className="text-caption">
          Cards, buttons, and type styles from the MovieExplorer design system.
        </p>
      </article>
    </main>
  )
}

export default App
