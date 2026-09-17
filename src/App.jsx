import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
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
          <HomePage
            onExplore={() => setCurrentPage('movies')}
            featuredShows={featuredShows}
            loading={loadingFeatured}
            onSelectShow={handleShowDetails}
          />
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

