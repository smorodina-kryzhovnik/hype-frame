import React from 'react'

export default function Header() {
  //
  const navLinks = [
    'Feed',
    'Create',
    'About'
  ]

  return (
    <header className="fixed w-screen border-b border-dark-border px-3">
        <div className="flex justify-between items-center h-14 max-w-7xl mx-auto">
            <a href="">
                <img src="/logo.svg" alt="Hype Frame logo" className="h-14"/>
            </a>
            <nav className="flex gap-4">
                {navLinks.map((e, i) => <a href='#' key={i}>{e}</a>)}
            </nav>
            <div className="flex gap-2.5">
              <button>
                <img src="/theme_icon.svg" alt="Theme change button" id="theme-icon" />
              </button>
              <button>Sign up | Sign in</button>
            </div>
        </div>
    </header>
  )
}
