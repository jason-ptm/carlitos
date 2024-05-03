import { Movie, MovieFromApi } from "../model/movie.model";

export const transformMoviesFromApi = (movies: MovieFromApi[]): Movie[] => {
	const newMovies: Movie[] = movies.map(movie => ({
		adult: movie.adult,
		backdropPath: movie.backdrop_path,
		genereIds: movie.genre_ids,
		id: movie.id,
		originalLanguage: movie.original_language,
		originalTitle: movie.original_title,
		overview: movie.overview,
		popularity: movie.popularity,
		posterPath: movie.poster_path,
		releaseDate: movie.release_date,
		title: movie.title,
		video: movie.video,
		voteAverage: Number.parseFloat(movie.vote_average.toString().replace('.', ',')) / 2,
		voteCount: movie.vote_count
	}))

	return newMovies
}