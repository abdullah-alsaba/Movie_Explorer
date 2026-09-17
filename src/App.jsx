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
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetchAllShows()
      .then((data) => {
        setAllShows(data.slice(0, 24))
        setFeaturedShows(data.slice(0, 8))
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        toast.error(error.message || 'Unable to load shows. Please check your connection.')
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
            error={null}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onSearchSubmit={(q) => toast.info(`Search submitted for "${q}"`)}
            onClearSearch={() => setSearchQuery('')}
            onRetry={() => toast.info('Retrying...')}
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

