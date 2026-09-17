import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MovieCard from './components/MovieCard'
import Footer from './components/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [featuredShows, setFeaturedShows] = useState([])
  const [loadingFeatured, setLoadingFeatured] = useState(true)

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch shows')
        }
        return res.json()
      })
      .then((data) => {
        setFeaturedShows(data.slice(0, 8))
        setLoadingFeatured(false)
      })
      .catch(() => {
        setLoadingFeatured(false)
        toast.error('Unable to load featured shows. Please check your connection.')
      })
  }, [])

  const handleShowDetails = (show) => {
    toast.info(`Viewing details for: ${show.name} (${show.premiered ? show.premiered.slice(0, 4) : 'N/A'})`)
  }

  return (
    <div className="min-h-screen flex flex-col bg-canvas text-ink">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <ToastContainer
        position="bottom-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <main className="flex-1">
        {currentPage === 'home' && (
          <div>
            <Hero onExplore={() => setCurrentPage('movies')} />

            <section className="container-app py-12 md:py-16">
              <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>Popular Picks</span>
                  </div>
                  <h2 className="heading-lg">Featured Movies & Shows</h2>
                  <p className="text-body text-sm mt-1">
                    Hand-picked series and blockbusters powered by live TVMaze API.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setCurrentPage('movies')}
                  className="btn btn-secondary text-xs self-start sm:self-auto"
                >
                  View All Shows →
                </button>
              </div>

              {loadingFeatured ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="aspect-2/3 w-full rounded-xl bg-surface animate-pulse border border-border"
                    />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {featuredShows.map((show) => (
                    <MovieCard
                      key={show.id}
                      show={show}
                      onSelect={handleShowDetails}
                    />
                  ))}
                </div>
              )}
            </section>
          </div>
        )}

        {currentPage === 'movies' && (
          <div className="container-app section-y">
            <h1 className="heading-xl mb-4">Movie Listing</h1>
            <p className="text-body mb-6">
              Browse and search shows from TVMaze.
            </p>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setCurrentPage('home')}
            >
              Back to Home
            </button>
          </div>
        )}

        {currentPage === 'about' && (
          <div className="container-app section-y">
            <h1 className="heading-xl mb-4">About MovieExplorer</h1>
            <p className="text-body mb-6">
              A responsive, cinematic React application powered by the TVMaze API.
            </p>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setCurrentPage('home')}
            >
              Back to Home
            </button>
          </div>
        )}
      </main>

      <Footer onNavigate={setCurrentPage} />
    </div>
  )
}

export default App

