import axios from 'axios';
const DONOR_API_BASE_URL = "http://localhost:8080/api/v1/donors";
class DonorService {
    getDonors(){
        return axios.get(DONOR_API_BASE_URL);
    }
}
export default new DonorService()