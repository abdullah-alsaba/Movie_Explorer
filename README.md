# 🎬 MovieExplorer

> Discover movies and shows, explore detailed information, and find something worth watching.

**MovieExplorer** is a modern, responsive entertainment discovery web application built with React. It allows users to browse a collection of television shows, search for specific titles, and explore detailed information through an interactive modal experience.

The application uses the **TVMaze REST API** to provide real-time show information and is designed with a clean cinematic interface that works seamlessly across mobile, tablet, and desktop devices.

---

## 🌐 Live Demo

🔗 **Live Website:** [Add your live URL here]

---

## ✨ Features

* 🎬 Browse a large collection of TV shows
* 🔍 Search shows by title or keyword
* ⭐ View ratings and show metadata
* 📅 Display premiere/release information
* 🎭 Explore genres and categories
* 📖 Read show summaries and descriptions
* 🖼️ Responsive movie/show posters with fallback handling
* 🪟 Interactive details modal
* 📱 Fully responsive across mobile, tablet, and desktop
* ⚡ Fast and lightweight React application
* 🔄 Loading skeletons for a smoother browsing experience
* ⚠️ User-friendly error handling
* 📭 Empty-state handling for unsuccessful searches
* 🌙 Cinematic dark-themed interface
* ♿ Accessible and touch-friendly interactions

---

## 🖥️ Pages

### 🏠 Home

The landing page introduces MovieExplorer with:

* Responsive navigation
* Cinematic hero section
* Featured shows
* Clear call-to-action
* Platform introduction
* Footer navigation

### 🎞️ Movies

The main discovery page where users can:

* Browse available shows
* Search for specific titles
* View ratings
* View genres
* View premiere dates
* Open detailed information

### ℹ️ About

A dedicated About page explaining:

* The story behind MovieExplorer
* What the platform offers
* Its mission
* Its vision
* The principles behind the experience

---

## 🔎 Search Experience

MovieExplorer provides title-based search using the TVMaze search endpoint.

Users can enter a title or keyword and receive matching results dynamically.

Example:

```text
Search: girls
```

The application sends the query to:

```text
https://api.tvmaze.com/search/shows?q=girls
```

Search queries are URL-encoded before being sent to the API.

---

## 🎬 Show Details

Selecting **See Details** opens an interactive modal containing available information about the selected show.

Depending on the API data, the modal can display:

* Show title
* Poster
* Rating
* Premiere date
* Genres
* Summary
* Language
* Status
* Runtime
* Network
* Official website

The modal is responsive and supports long content without breaking the viewport.

---

## 🌐 API

MovieExplorer uses the public **TVMaze REST API** for show data.

### Get All Shows

```http
GET https://api.tvmaze.com/shows
```

### Search Shows

```http
GET https://api.tvmaze.com/search/shows?q=:query
```

### API Documentation

[TVMaze API Documentation](https://www.tvmaze.com/api)

---

## 🛠️ Tech Stack

| Technology     | Purpose                                   |
| -------------- | ----------------------------------------- |
| React          | UI development and component architecture |
| JavaScript     | Application logic                         |
| Vite           | Development and production build tooling  |
| Tailwind CSS   | Responsive styling and UI design          |
| TVMaze API     | Show and entertainment data               |
| React Toastify | User notifications                        |

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── Navbar/
│   ├── Footer/
│   ├── Hero/
│   ├── MovieCard/
│   ├── MovieGrid/
│   ├── SearchBar/
│   ├── MovieDetailsModal/
│   ├── LoadingSkeleton/
│   ├── EmptyState/
│   └── ErrorState/
│
├── pages/
│   ├── Home/
│   ├── Movies/
│   └── About/
│
├── services/
│   └── api.js
│
├── App.jsx
├── main.jsx
└── index.css
```

> The exact structure may vary depending on the final project implementation.

---

## 📱 Responsive Design

MovieExplorer is designed with a responsive-first approach.

### Mobile

* Compact navigation
* Mobile menu
* Single/two-column show grid
* Full-width search
* Touch-friendly controls
* Scrollable details modal

### Tablet

* Adaptive navigation
* Three-column show grid
* Balanced spacing and typography

### Desktop

* Full navigation
* Cinematic hero
* Four or more show cards per row
* Spacious content layout
* Large details modal

The interface is designed to work from approximately **320px mobile screens to large desktop displays** without horizontal overflow.

---

## ⚡ Loading & Error Handling

The application handles common API states gracefully.

### Loading

Skeleton placeholders are displayed while show data is being fetched.

### API Error

Users receive a clear message when show data cannot be loaded, along with an option to retry where appropriate.

### Empty Search

If a search does not return any results, the application displays a helpful empty state instead of leaving the page blank.

### Missing API Data

TVMaze does not guarantee that every show contains all optional fields.

MovieExplorer therefore handles missing:

* Images
* Ratings
* Premiere dates
* Genres
* Summaries
* Network information

with appropriate fallback UI.

---

## 🎨 Design Philosophy

MovieExplorer uses a cinematic dark interface designed to keep the focus on visual content.

The design focuses on:

* Clear visual hierarchy
* Strong typography
* High-quality artwork
* Comfortable spacing
* Subtle interactions
* Responsive layouts
* Simple navigation
* Minimal visual clutter

The goal is to make discovering something to watch feel simple and enjoyable.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to the project

```bash
cd movie-explorer
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

---

## 📦 Build for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🔮 Future Improvements

Potential future improvements could include:

* 🎯 Advanced genre filtering
* ❤️ Personal watchlist
* 🔖 Bookmarking shows
* 🔐 User accounts
* 🎞️ Trailer integration
* 📊 Personalized recommendations
* 🔥 Trending and popular categories
* 🌍 More detailed discovery filters

These features are outside the current scope of the application but could extend MovieExplorer into a more comprehensive entertainment discovery platform.

---

## 👨‍💻 Developer

**Abdullah Al Saba**

Frontend / MERN Stack Developer

* GitHub: [abdullah-alsaba](https://github.com/abdullah-alsaba)
* LinkedIn: [Abdullah Al Saba](https://www.linkedin.com/in/abdullah-alsaba/)
* Portfolio: [abdulla.pro.bd](https://abdulla.pro.bd/)

---

## 📄 License

This project is created for learning, experimentation, and portfolio purposes.

Show data is provided by the public [TVMaze API](https://www.tvmaze.com/api).

---

<p align="center">
  Built with React, curiosity, and a love for great stories. 🎬
</p>
```

**একটা জিনিস খেয়াল রাখবে:** README-তে `YOUR_REPOSITORY_URL` আর `Add your live URL here` তোমার actual GitHub repo এবং Vercel URL দিয়ে replace করবে। এছাড়া README-তে **“Assignment 2”, “Foundation Program”, “Student Project”** এসব না রাখাই ভালো—portfolio project হিসেবে অনেক cleaner দেখাবে।
