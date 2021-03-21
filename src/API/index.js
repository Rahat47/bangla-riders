import axios from 'axios'

const url = 'https://api.jsonbin.io/b/605742727ffeba41c07f46ea'

export const fetchData = async () => {
    try {
        const { data } = await axios.get(url)
        return data
    } catch (error) {
        console.log(error)
    }
}
