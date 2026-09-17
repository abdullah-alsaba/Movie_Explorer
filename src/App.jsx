import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <div className="min-h-screen flex flex-col bg-canvas text-ink">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />

      <main className="flex-1">
        {currentPage === 'home' && (
          <div>
            <Hero onExplore={() => setCurrentPage('movies')} />
            <section className="container-app section-y">
              <p className="text-caption mb-3">MovieExplorer Showcase</p>
              <article className="card max-w-sm p-5">
                <h2 className="heading-md mb-2">Ready to explore</h2>
                <p className="text-caption">
                  Discover top-rated series and films. Click "Explore Movies" above to browse the collection.
                </p>
              </article>
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

