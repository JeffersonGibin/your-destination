import axios from "axios";

const httpRequest = axios.create({
    baseURL: process.env.NEXT_API_URL
})

export default httpRequest;