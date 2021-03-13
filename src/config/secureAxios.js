import axios from 'axios'

const secureAxios = axios.create({
    baseURL:"https://disease.sh/v3/covid-19"
})

export default secureAxios