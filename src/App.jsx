import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import MoviesPage from './pages/MoviesPage'
import Footer from './components/Footer'
import { fetchAllShows } from './services/tvmaze'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [allShows, setAllShows] = useState([])
  const [featuredShows, setFeaturedShows] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const handleRetry = () => {
    setLoading(true)
    setError(null)
    fetchAllShows()
      .then((data) => {
        setAllShows(data)
        setFeaturedShows(data.slice(0, 8))
        setLoading(false)
      })
      .catch((err) => {
        const errorMsg = err?.message || 'Unable to load shows. Please check your connection.'
        setError(errorMsg)
        setLoading(false)
        toast.error(errorMsg)
      })
  }

  useEffect(() => {
    let ignore = false
    fetchAllShows()
      .then((data) => {
        if (!ignore) {
          setAllShows(data)
          setFeaturedShows(data.slice(0, 8))
          setLoading(false)
        }
      })
      .catch((err) => {
        if (!ignore) {
          const errorMsg = err?.message || 'Unable to load shows. Please check your connection.'
          setError(errorMsg)
          setLoading(false)
          toast.error(errorMsg)
        }
      })

    return () => {
      ignore = true
    }
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
          <HomePage
            onExplore={() => setCurrentPage('movies')}
            featuredShows={featuredShows}
            loading={loading}
            onSelectShow={handleShowDetails}
          />
        )}

        {currentPage === 'movies' && (
          <MoviesPage
            shows={allShows}
            loading={loading}
            error={error}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onSearchSubmit={(q) => toast.info(`Search submitted for "${q}"`)}
            onClearSearch={() => setSearchQuery('')}
            onRetry={handleRetry}
            onSelectShow={handleShowDetails}
          />
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

