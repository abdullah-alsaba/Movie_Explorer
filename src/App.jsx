import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import MoviesPage from './pages/MoviesPage'
import MovieDetailsModal from './components/MovieDetailsModal'
import Footer from './components/Footer'
import { fetchAllShows, searchShows } from './services/tvmaze'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [allShows, setAllShows] = useState([])
  const [featuredShows, setFeaturedShows] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [searchLoading, setSearchLoading] = useState(false)
  const [searchError, setSearchError] = useState(null)
  const [lastSearchedQuery, setLastSearchedQuery] = useState('')
  const [selectedShow, setSelectedShow] = useState(null)

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

  const handleSearchSubmit = (submittedQuery) => {
    const queryToSearch = (submittedQuery !== undefined ? submittedQuery : searchQuery).trim()
    if (!queryToSearch) {
      handleClearSearch()
      return
    }

    if (queryToSearch.toLowerCase() === lastSearchedQuery.toLowerCase() && isSearching) {
      return
    }

    setIsSearching(true)
    setSearchLoading(true)
    setSearchError(null)
    setLastSearchedQuery(queryToSearch)

    searchShows(queryToSearch)
      .then((data) => {
        setSearchResults(data)
        setSearchLoading(false)
        if (data.length === 0) {
          toast.info(`No shows found for "${queryToSearch}"`)
        }
      })
      .catch((err) => {
        const errorMsg = err?.message || 'Search request failed. Please try again.'
        setSearchError(errorMsg)
        setSearchLoading(false)
        toast.error(errorMsg)
      })
  }

  const handleClearSearch = () => {
    setSearchQuery('')
    setSearchResults([])
    setIsSearching(false)
    setSearchError(null)
    setLastSearchedQuery('')
  }

  const handleSearchChange = (val) => {
    setSearchQuery(val)
    if (!val.trim() && isSearching) {
      setIsSearching(false)
      setSearchResults([])
      setSearchError(null)
    }
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
    setSelectedShow(show)
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
            shows={isSearching ? searchResults : allShows}
            loading={isSearching ? searchLoading : loading}
            error={isSearching ? searchError : error}
            searchQuery={searchQuery}
            isSearching={isSearching}
            onSearchChange={handleSearchChange}
            onSearchSubmit={handleSearchSubmit}
            onClearSearch={handleClearSearch}
            onRetry={isSearching ? () => handleSearchSubmit(searchQuery) : handleRetry}
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

      <MovieDetailsModal
        show={selectedShow}
        isOpen={Boolean(selectedShow)}
        onClose={() => setSelectedShow(null)}
      />

      <Footer onNavigate={setCurrentPage} />
    </div>
  )
}

export default App

