import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputBase, Paper } from "@mui/material";
import { useState } from 'react';

interface Props {
	handleSearch: (name: string) => void
}

const SearchInput = (props: Props) => {
	const [name, setName] = useState('')

	return <>
		<Paper component='form' sx={{ padding: 1, backgroundColor: '#222125', border: 1, borderRadius: 3, width: '100%', maxWidth: '600px' }} onSubmit={(event) => {
			event.preventDefault()
			props.handleSearch(name)
		}}>
			<IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={() => props.handleSearch(name)}>
				<SearchIcon />
			</IconButton>
			<InputBase
				value={name}
				onChange={(event) => setName(event.target.value)}
				onSubmit={(event) => {
					event.preventDefault()
					props.handleSearch(name)
				}}
				sx={{ ml: 1, flex: 1 }}
				placeholder="Buscar pelicula..."
				inputProps={{ 'aria-label': 'Buscar pelicula...' }}
			/>
		</Paper>
	</>
}

export default SearchInput