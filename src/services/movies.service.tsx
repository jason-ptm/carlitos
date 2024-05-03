import { Movie, MovieFromApi } from "../model/movie.model"
import { transformMoviesFromApi } from "../utils/movie.adapter"
import { ApiService } from "./api.service"

export class MoviesService extends ApiService {

	async getMoviesByName(name: string): Promise<Movie[]> {
		try {
			const movies = await this.axios.get(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${name || 'test'}`)

			return transformMoviesFromApi(movies.data.results as MovieFromApi[])
		} catch (error) {
			return []
		}
	}

	async rateMovie(movieId: number, rate: number) {
		try {
			const value = (rate * 2).toString().replace(',', '.')
			await this.axios.post(`https://api.themoviedb.org/3/movie/${movieId}/rating`, { value })

			return true
		} catch (error) {
			return false
		}
	}

}