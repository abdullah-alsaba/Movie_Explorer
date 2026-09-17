
export default function AboutPage({ onExplore }) {
  const values = [
    {
      title: 'Discover',
      description:
        'We make it easier to discover interesting movies and shows beyond the titles you already know.',
    },
    {
      title: 'Explore',
      description:
        'Every story has something different to offer. Explore genres, ratings, release dates, and more before you decide what to watch.',
    },
    {
      title: 'Keep It Simple',
      description:
        'Finding something to watch should feel enjoyable, not complicated. MovieExplorer keeps the experience clean, focused, and easy to use.',
    },
  ]

  return (
    <div className="container-app py-12 md:py-20">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Header */}
        <div className="text-center space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent shadow-sm">
            <span>About MovieExplorer</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Stories Worth Discovering
          </h1>

          <p className="text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed">
            MovieExplorer is built for people who love discovering movies and
            shows, finding new stories, and making their next viewing choice
            a little easier.
          </p>
        </div>

        {/* Our Story */}
        <section className="card p-6 sm:p-8 md:p-10 space-y-5">
          <h2 className="text-2xl font-bold text-white">
            Our Story
          </h2>

          <div className="space-y-4 text-sm text-muted leading-relaxed">
            <p>
              There are more movies and shows available today than ever before.
              With so many stories across different genres, years, and
              networks, finding something interesting to watch can sometimes
              feel harder than actually watching it.
            </p>

            <p>
              MovieExplorer was created around a simple idea: discovering
              something worth watching should be enjoyable. Instead of
              endlessly scrolling through titles, you can explore a collection
              of shows, search for something specific, and quickly learn more
              about a title before making your choice.
            </p>

            <p>
              Whether you already know what you want to watch or you are simply
              looking for something new, MovieExplorer gives you a simple place
              to start.
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section className="space-y-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-white">
              What We Do
            </h2>

            <p className="text-sm text-muted mt-2 leading-relaxed">
              MovieExplorer brings entertainment information together in a
              simple and easy-to-explore experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="card p-6 space-y-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <span className="text-sm font-bold">
                    {value.title.charAt(0)}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white">
                  {value.title}
                </h3>

                <p className="text-sm text-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Mission */}
        <section className="card p-6 sm:p-8 md:p-10 space-y-5">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Our Mission
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              Make discovering what to watch feel effortless.
            </h2>
          </div>

          <p className="text-sm text-muted leading-relaxed max-w-3xl">
            Our mission is to make entertainment discovery simple, informative,
            and enjoyable. We want to help viewers spend less time searching
            and more time discovering stories that genuinely interest them.
          </p>
        </section>

        {/* Our Vision */}
        <section className="space-y-5">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Our Vision
          </span>

          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            A simpler way to explore the world of entertainment.
          </h2>

          <p className="text-sm text-muted leading-relaxed max-w-3xl">
            We envision MovieExplorer as a place where discovering movies and
            shows feels natural. A platform where viewers can explore different
            stories, find familiar favorites, uncover something unexpected, and
            make informed choices without unnecessary complexity.
          </p>
        </section>

        {/* What We Believe */}
        <section className="card p-6 sm:p-8 md:p-10 space-y-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              What We Believe
            </span>

            <h2 className="text-2xl font-bold text-white mt-2">
              Entertainment should be easy to explore.
            </h2>
          </div>

          <div className="space-y-5">
            <div>
              <h3 className="text-base font-semibold text-white">
                Less searching, more discovering
              </h3>

              <p className="text-sm text-muted leading-relaxed mt-1">
                Finding something interesting should not require endless
                searching. We aim to make the discovery process straightforward
                and enjoyable.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-white">
                Information matters
              </h3>

              <p className="text-sm text-muted leading-relaxed mt-1">
                Ratings, genres, release information, summaries, and other
                details help viewers decide whether a title is right for them.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-white">
                Everyone watches differently
              </h3>

              <p className="text-sm text-muted leading-relaxed mt-1">
                There is no single kind of story for everyone. That is why we
                encourage exploration across different genres, styles, and
                types of shows.
              </p>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="text-center pt-2 pb-4">
          <div className="max-w-2xl mx-auto space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to discover something new?
            </h2>

            <p className="text-sm text-muted leading-relaxed">
              Explore the catalog, search for a familiar favorite, or discover
              a story you have never heard of before.
            </p>

            <button
              type="button"
              onClick={onExplore}
              className="btn btn-primary px-8 py-3 text-sm font-semibold shadow-lg shadow-accent/25"
            >
              Explore the Catalog
            </button>
          </div>
        </section>

      </div>
    </div>
  )
}
;
