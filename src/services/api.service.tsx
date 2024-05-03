import Axios from "axios";

export class ApiService {
	protected readonly axios = Axios.create({
		headers: {
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWJkMDk2ZDRhMGE0MTI5MTVkMGE0YjdmODg3YjJkYyIsInN1YiI6IjY2MzMwMDhjNjYxMWI0MDEyNzY2M2FmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WEy2uJMyn1kOnnXhpFlzzRdOG1xNp1hTKao5H5TPl5g'
		}
	})
}