import { useState } from 'react'

export default function Navbar({ currentPage = 'home', onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavClick = (page) => {
    if (onNavigate) {
      onNavigate(page)
    }
    setIsMobileMenuOpen(false)
  }

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'movies', label: 'Movies' },
    { id: 'about', label: 'About' },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#2a2a32] bg-[#0b0b0d]/90 backdrop-blur-md transition-colors">
      <div className="container-app flex h-18 items-center justify-between">
        {/* Brand / Logo */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left transition-transform hover:opacity-95 focus-visible:outline-2 focus-visible:outline-[#dc143c] focus-visible:outline-offset-2"
          aria-label="MovieExplorer Home"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#dc143c] text-white shadow-md shadow-[#dc143c]/20">
            <svg
              className="h-5 w-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 4v10h16V8H4zm2-2h2v2H6V6zm4 0h2v2h-2V6zm4 0h2v2h-2V6zm4 0h2v2h-2V6z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-[#f5f5f5]">
            Movie<span className="text-[#dc143c]">Explorer</span>
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex md:items-center md:gap-1" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-[#9ca3af] hover:text-white hover:bg-[#16161a]'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
                {isActive && (
                  <span className="absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-[#dc143c]" />
                )}
              </button>
            )
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex md:items-center">
          <button
            type="button"
            onClick={() => handleNavClick('movies')}
            className="btn btn-primary text-sm shadow-md shadow-[#dc143c]/20 transition-all hover:scale-[1.02]"
          >
            Explore Movies
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#2a2a32] bg-[#16161a] text-[#f5f5f5] transition-colors hover:bg-[#1e1e24] focus-visible:outline-2 focus-visible:outline-[#dc143c]"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu Dropdown */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="border-b border-[#2a2a32] bg-[#16161a] px-4 pt-3 pb-5 md:hidden animate-in fade-in duration-150"
        >
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between rounded-md px-3.5 py-2.5 text-left text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#1e1e24] text-white font-semibold border-l-3 border-[#dc143c]'
                      : 'text-[#9ca3af] hover:bg-[#1e1e24]/60 hover:text-white'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#dc143c]" />}
                </button>
              )
            })}
            <div className="mt-3 pt-3 border-t border-[#2a2a32]">
              <button
                type="button"
                onClick={() => handleNavClick('movies')}
                className="btn btn-primary w-full justify-center text-sm shadow-md"
              >
                Explore Movies
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
