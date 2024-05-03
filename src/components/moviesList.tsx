import { Masonry } from "@mui/lab"
import { Box, Typography } from "@mui/material"
import { Movie } from "../model/movie.model"
import MovieItem from "./movieItem"

interface Props {
	movies: Movie[]
}


const MoviesList = (props: Props) => {
	return <>
		{
			props.movies.length > 0 ?
				<Box sx={{ maxWidth: 1200, minHeight: 253 }}>
					<Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
						{

							props.movies.map((movie) => (
								<MovieItem key={movie.id} movie={movie} />
							))


						}
					</Masonry>
				</Box>
				:
				<Typography variant="h2" color={'white'}>No hay peliculas relacionadas...</Typography>
		}
	</>
}

export default MoviesList