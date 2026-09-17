const BASE_URL = 'https://api.tvmaze.com'

export function stripHtml(html) {
  if (!html || typeof html !== 'string') {
    return 'No description available.'
  }
  const cleaned = html.replace(/<[^>]*>/g, '').trim()
  return cleaned || 'No description available.'
}

export function formatRating(rating) {
  if (rating && typeof rating === 'object' && rating.average != null) {
    return Number(rating.average).toFixed(1)
  }
  if (typeof rating === 'number') {
    return rating.toFixed(1)
  }
  return 'N/A'
}

export function formatYear(premieredDate) {
  if (!premieredDate || typeof premieredDate !== 'string') {
    return 'Unknown'
  }
  const year = premieredDate.slice(0, 4)
  return year && year.length === 4 ? year : 'Unknown'
}

export function getShowImage(image) {
  if (!image) return null
  if (typeof image === 'string') return image
  return image.original || image.medium || null
}

export function normalizeShow(show) {
  if (!show || typeof show !== 'object') {
    return null
  }

  return {
    id: show.id,
    name: show.name || 'Untitled',
    image: show.image || null,
    imageUrl: getShowImage(show.image),
    premiered: show.premiered || null,
    year: formatYear(show.premiered),
    rating: show.rating || null,
    ratingValue: formatRating(show.rating),
    genres: Array.isArray(show.genres) && show.genres.length > 0 ? show.genres : ['General'],
    summary: show.summary || '',
    cleanSummary: stripHtml(show.summary),
    language: show.language || 'Unknown',
    status: show.status || 'Unknown',
    runtime: show.runtime != null ? `${show.runtime} min` : (show.averageRuntime != null ? `${show.averageRuntime} min` : 'Unknown'),
    network: show.network?.name || show.webChannel?.name || 'Unknown',
    officialSite: show.officialSite || null,
    url: show.url || null,
  }
}

async function handleResponse(response) {
  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`)
  }
  return response.json()
}

export async function fetchAllShows(page = 0) {
  try {
    const url = page > 0 ? `${BASE_URL}/shows?page=${page}` : `${BASE_URL}/shows`
    const data = await handleResponse(await fetch(url))
    if (!Array.isArray(data)) {
      return []
    }
    return data.map(normalizeShow).filter(Boolean)
  } catch (error) {
    throw new Error(error?.message || 'Failed to fetch shows from TVMaze', { cause: error })
  }
}

export async function searchShows(query) {
  const trimmedQuery = query ? query.trim() : ''
  if (!trimmedQuery) {
    return []
  }

  try {
    const encoded = encodeURIComponent(trimmedQuery)
    const data = await handleResponse(await fetch(`${BASE_URL}/search/shows?q=${encoded}`))

    if (!Array.isArray(data)) {
      return []
    }

    return data
      .filter((item) => item && typeof item === 'object' && item.show)
      .map((item) => normalizeShow(item.show))
      .filter(Boolean)
  } catch (error) {
    throw new Error(error?.message || 'Failed to search shows on TVMaze', { cause: error })
  }
}

export async function fetchShowById(id) {
  if (!id) {
    throw new Error('Show ID is required')
  }

  try {
    const data = await handleResponse(await fetch(`${BASE_URL}/shows/${id}`))
    return normalizeShow(data)
  } catch (error) {
    throw new Error(error?.message || `Failed to fetch show with ID ${id}`, { cause: error })
  }
}

const tvmazeService = {
  stripHtml,
  formatRating,
  formatYear,
  getShowImage,
  normalizeShow,
  fetchAllShows,
  searchShows,
  fetchShowById,
}

export default tvmazeService
