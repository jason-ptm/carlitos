import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Divider, Modal, Rating, Typography } from "@mui/material"
import moment from "moment"
import { useState } from "react"
import { Movie } from "../model/movie.model"
import { MoviesService } from "../services/movies.service"

interface Props {
	movie: Movie
}

const MovieItem = (props: Props) => {
	const [open, setOpen] = useState(false)
	const [rate, setRate] = useState(0)
	const moviesService = new MoviesService()

	const getShortOverview = (overview: string) => {
		if (overview.length >= 180) return `${overview.slice(0, 180)}...`
		return overview
	}

	const handleRate = (calification: number) => {
		moviesService.rateMovie(props.movie.id, calification)
	}
	return <>
		<Card sx={{ maxWidth: 345, boxShadow: 4, backgroundColor: '#222125' }}>
			<CardActionArea>
				<CardMedia
					component='img'
					image={`https://image.tmdb.org/t/p/original/${props.movie.posterPath}`}
					title={props.movie.title}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{props.movie.title}
					</Typography>
					<Typography variant="body2" color="text.secondary" color='gray'>
						{getShortOverview(props.movie.overview)}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" onClick={() => setOpen(true)}>Ver mas</Button>
				</CardActions>
			</CardActionArea>
		</Card>
		<Modal
			sx={{
				display: 'flex', alignItems: 'center', justifyContent: 'center'
			}}
			open={open}
			onClose={() => setOpen(false)}>
			<Card sx={{ backgroundColor: '#222125', maxWidth: '800px', maxHeight: '60vh', height: '100%' }}>
				<CardActionArea sx={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
					<CardMedia
						component='img'
						sx={{ height: '60vh' }}
						image={`https://image.tmdb.org/t/p/original/${props.movie.posterPath}`}
						title={props.movie.title}
					/>
					<CardContent sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '10px'
					}}>
						<Typography gutterBottom variant="h5" component="div">
							{props.movie.title}
						</Typography>
						<Typography variant="body2" color="text.secondary" color='gray'>
							{props.movie.overview}
						</Typography>
						<Divider />
						<Typography gutterBottom variant="h6">
							{`Estreno - ${moment(props.movie.releaseDate).format("MMM Do YY")}`}
						</Typography>
						<Typography component="legend">Rating General</Typography>
						<Rating
							readOnly
							value={props.movie.voteAverage}
						/>
						<Typography component="legend">Calificar pelicula</Typography>
						<Rating
							onChange={(_event, newRate) => {
								if (newRate) {
									setRate(newRate)
									handleRate(newRate)
								}

							}}
							value={rate}
						/>
					</CardContent>

				</CardActionArea>
			</Card>
		</Modal >
	</>
}

export default MovieItem