import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { useEffect, useState } from 'react'
import './App.css'
import MoviesList from './components/moviesList'
import SearchInput from './components/searchInput'
import { Movie } from './model/movie.model'
import { MoviesService } from './services/movies.service'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [movies, setMovies] = useState<Movie[]>([])
  const moviesService = new MoviesService()

  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = () => {
    moviesService.getMoviesByName('test').then(res => {
      setMovies(res)
      return
    })
  }

  const searchByName = (name: string) => {
    moviesService.getMoviesByName(name).then(res => {
      setMovies(res)
      return
    })
  }

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Box sx={{
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#18171c',
          gap: '30px',
          padding: 10,
          boxSizing: 'border-box'
        }}>
          <SearchInput handleSearch={searchByName} />
          <MoviesList movies={movies} />
        </Box>
      </ThemeProvider>
    </>
  )
}

export default App
