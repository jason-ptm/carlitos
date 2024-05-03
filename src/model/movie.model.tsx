export interface MovieFromApi {
	adult: boolean
	backdrop_path: string
	genre_ids: number[]
	id: number
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string
	release_date: string
	title: string
	video: false
	vote_average: number
	vote_count: number
}

export interface Movie {
	adult: boolean
	backdropPath: string
	genereIds: number[]
	id: number
	originalLanguage: string
	originalTitle: string
	overview: string
	popularity: number
	posterPath: string
	releaseDate: string
	title: string
	video: false
	voteAverage: number
	voteCount: number
}